import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import { createContext, useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

export const ThemeContext = createContext('');

const Main = () => {
    const [theme, setTheme] = useState('light');
    const { loading } = useContext(AuthContext)
    const location = useLocation();
    const hideHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');
    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div id={theme} className="min-h-screen flex flex-col justify-between">
                {hideHeaderFooter || <Navbar></Navbar>}
                <div className="w-full md:w-10/12 lg:w-10/12 mx-auto mt-20 md:mt-24 lg:mt-24">
                    {
                        loading ? <div className="min-h-screen flex justify-center items-center"><img src="https://i.ibb.co/GMCwfS6/loading-spinner.gif" /></div> : <Outlet></Outlet>
                    }
                </div>
                {hideHeaderFooter || <Footer></Footer>}
            </div>
        </ThemeContext.Provider>
    );
};

export default Main;