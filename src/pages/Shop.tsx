import {FunctionComponent} from "react";

import dog1 from '../assets/images/hachii.svg'
import buy from '../assets/images/buy.svg'
import kosto4ka from '../assets/images/kosto4ka.svg'
import korm from '../assets/images/korm.svg'
import chiken from '../assets/images/chiken.svg'

const Shop: FunctionComponent = () => {
    return (
        <div className="pages-content">
            <h2 className="pages-title">SHOP</h2>

            <div className="dog-shop">
                <h5 className="shop-subtitle">HACHIKOS</h5>
                <div className="dog-content">
                    <div className="row dog-shop">
                        <img src={dog1} alt=""/>
                        <p className="price">0.5 ton</p>
                    </div>
                    <a className="dog-btn" href="#"><img src={buy} alt=""/></a>

                </div>
            </div>
            <div className="food-shop">
                <h5 className="shop-subtitle">Foods</h5>
                <div className="food-item">
                    <img src={kosto4ka} alt=""/>
                    <div className="price">0.1 ton &gt; 0.2 ton</div>
                    <a className="dog-btn2" href="#"><img src={buy} alt=""/></a>
                </div>
                <div className="food-item">
                    <img src={korm} alt=""/>
                    <div className="price">0.1 ton &gt; 0.2 ton</div>
                    <a className="dog-btn2" href="#"><img src={buy} alt=""/></a>
                </div>
                <div className="food-item">
                    <img src={chiken} alt=""/>
                    <div className="price">0.1 ton &gt; 0.2 ton</div>
                    <a className="dog-btn2" href="#"><img src={buy} alt=""/></a>
                </div>
                <div className='box'></div>
            </div>
        </div>
    );
};

export default Shop;