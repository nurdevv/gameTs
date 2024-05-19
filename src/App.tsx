import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Shop from "./pages/Shop.tsx";
import Menu from "./components/Menu.tsx"
import Faq from "./pages/FAQ.tsx"
import Wallet from "./pages/Wallet.tsx";

function App() {

    return (
        <div className="container">
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/faq" element={<Faq/>}/>
                <Route path="/wallet" element={<Wallet/>}/>
            </Routes>
            <Menu/>
        </div>
    )
}

export default App