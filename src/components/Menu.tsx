import {Link} from "react-router-dom";
import {FunctionComponent} from "react";

import faqImg from '../assets/images/FAQ.svg'
import home from '../assets/images/home.svg'
import shop from '../assets/images/shop.svg'
import wallet from '../assets/images/wallet.svg'

const Menu: FunctionComponent = () => {
    function refreshPage() {
        setTimeout(()=>{
            // @ts-ignore
            window.location.reload(false);
        }, 100);
        console.log('page to reload')
    }
    return (
        <div className="menu">
            <div className="row">
                <div className="col-3">
                    <div className="menu-item">
                        <Link to='/faq'>
                            <div><img src={faqImg} alt="FAQ IMAGES"/></div>
                            <h3>FAQ</h3>
                        </Link>
                    </div>
                </div>
                <div className="col-3">
                    <div className="menu-item">
                        <Link to="/">
                            <div><img src={home} alt="home images"/></div>
                            <h3>HOME</h3>
                        </Link>
                    </div>
                </div>
                <div className="col-3">
                    <div className="menu-item">
                        <Link to="/shop">
                            <div><img src={shop} alt="shop images"/></div>
                            <h3>SHOP</h3>
                        </Link>
                    </div>
                </div>
                <div className="col-3">
                    <div className="menu-item">
                        <Link to="/wallet" onClick={refreshPage}>
                            <div><img src={wallet} alt="wallet img"/></div>
                            <h3>WALLET</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
