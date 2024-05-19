import TonConnect from "@tonconnect/sdk";

export const connector = new TonConnect({manifestUrl: ''})

export const isConnectionRestored = connector.restoreConnection();