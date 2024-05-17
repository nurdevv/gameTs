import {FunctionComponent} from "react";

import dog from '../assets/images/hachii.svg'

const Home: FunctionComponent = () => {
    return (
                <div className="main">
                    <div className="main-dog">
                        <img className='dog' src={dog} alt=""/>
                    </div>
                </div>
    );
};

export default Home;