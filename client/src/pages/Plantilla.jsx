import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
function Plantilla() {
    return (
        <div>
            <Navbar/>
                <Outlet/>
            <Footer/>
        </div>
    );
}

export default Plantilla