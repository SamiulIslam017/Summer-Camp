import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";


const Main = () => {
    const location = useLocation();
    const hideHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');
    return (
        <div className="min-h-screen flex flex-col justify-between">
            {hideHeaderFooter || <Navbar></Navbar>}
            <div className="w-full md:w-10/12 lg:w-10/12 mx-auto mt-20 md:mt-24 lg:mt-24">
                <Outlet></Outlet>
            </div>
            {hideHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;