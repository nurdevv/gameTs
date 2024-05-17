import {FunctionComponent, useEffect, useMemo, useState} from "react";

import x from '../assets/images/X.svg'
import deposit from '../assets/images/deposit.svg'
import withdraw from '../assets/images/withdraw.svg'
import {ConnectWalletModal} from "../components/ConnectWalletModal.tsx";
import {
    Box,
    Button,
    Center,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Spinner,
    useClipboard,
    useDisclosure
} from "@chakra-ui/react";
import {useWallet} from "../hooks/useWallet.ts";
import {useSendTransaction} from "../hooks/useSendTransaction.ts";
import {CHAIN, isWalletInfoCurrentlyEmbedded, toUserFriendlyAddress, WalletInfo} from "@tonconnect/sdk";
import {connector} from "../connector.ts";
import {tonProofApi} from "../ton-proof-api.ts";
import {useIsConnectionRestored} from "../hooks/uselsConenctionRestored.ts";

const Wallet: FunctionComponent = () => {

    const {isOpen, onOpen, onClose} = useDisclosure();
    const wallet = useWallet();
    const [sendTransaction, confirmationProgress] = useSendTransaction();
    const isConnectionRestored = useIsConnectionRestored();
    const userFriendlyAddress = wallet ? toUserFriendlyAddress(wallet.account.address, wallet.account.chain === CHAIN.TESTNET) : '';
    const slicedUserFriendlyAddress = userFriendlyAddress.slice(0, 4) + '…' + userFriendlyAddress.slice(-4);

    const {onCopy, hasCopied} = useClipboard(userFriendlyAddress);


    const [walletsList, setWalletsList] = useState<WalletInfo[] | null>(null);

    useEffect(() => {
        connector.getWallets().then(setWalletsList);
    }, []);

    const embeddedWallet = useMemo(() => walletsList && walletsList.find(isWalletInfoCurrentlyEmbedded), [walletsList]);

    const onConnectClick = () => {
        if (embeddedWallet) {
            connector.connect({jsBridgeKey: embeddedWallet.jsBridgeKey});
        }
        onOpen();
    }

    useEffect(() => {
        connector.onStatusChange(async wallet => {
            if (wallet?.connectItems?.tonProof && !('error' in wallet.connectItems.tonProof)) {
                await tonProofApi.checkProof(wallet.connectItems.tonProof.proof, wallet.account);

                console.log(await tonProofApi.getAccountInfo(wallet.account));
            }
        })
    }, [])


    return (
        <div className="pages-content">
            <h2 className="pages-title">Wallet</h2>
            <div className="pouch">
                    <span>
                    <Box as='header' display='flex' justifyContent='flex-end'>
                        {
                            wallet ? <Menu>
                                    <MenuButton as={Button}>{slicedUserFriendlyAddress}</MenuButton>
                                    <MenuList>
                                        <MenuItem closeOnSelect={false}
                                                  onClick={onCopy}>{hasCopied ? 'Copied!' : 'Copy Address'}</MenuItem>
                                        <MenuItem onClick={() => connector.disconnect()}>Disconnect</MenuItem>
                                    </MenuList>
                                </Menu> :
                                <Button w="150px" onClick={onConnectClick}>
                                    {
                                        isConnectionRestored ? 'Connect Wallet' : <Spinner/>
                                    }
                                </Button>
                        }
                    </Box>
                    </span>
                {
                    wallet ? <div className="delete-address" onClick={() => connector.disconnect()}>
                        <img src={x} alt="Delete wallet"/>
                    </div> : ''
                }

            </div>
            <div><img src={deposit} alt="deposit"/><ConnectWalletModal isOpen={isOpen} onClose={onClose}/>
                {
                    !!wallet && <Center h="300px" w="100%">
                        <Button onClick={sendTransaction} isLoading={confirmationProgress}>Send transaction</Button>
                    </Center>
                }</div>
            <div className="wallet-btn2"><img src={withdraw} alt="withdraw"/></div>
        </div>
    );
};

export default Wallet;