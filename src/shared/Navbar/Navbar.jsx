import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut().then(() => { }).catch(err => console.error(err))
    }
    return (
        <div className="navbar bg-base-100 shadow-lg fixed top-0">
            <div className="w-full md:w-10/12 lg:w-10/12 mx-auto flex md:flex-row justify-between items-center">
                <div className="flex items-center justify-center">

                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/'><li><a className="p-2 hover:bg-orange hover:text-neutral-100 font-medium">Home</a></li></Link>
                            <Link to='/classes'><li><a className="p-2 hover:bg-orange hover:text-neutral-100 font-medium">Classes</a></li></Link>
                            <Link to='/instructors'><li><a className="p-2 hover:bg-orange hover:text-neutral-100 font-medium">Instructors</a></li></Link>
                            <Link to='/myclasses'><li><a className="p-2 hover:bg-orange hover:text-neutral-100 font-medium">My Classes</a></li></Link>
                            <Link to='/dashboard'><li><a className="p-2 hover:bg-orange hover:text-neutral-100 font-medium">Dashboard</a></li></Link>

                        </ul>
                    </div>
                    <Link to='/'><img className="w-44 md:w-52 lg:w-52" src="https://i.ibb.co/nLzZd39/FASHION-DESIGN-removebg-preview.png" alt="Logo" /></Link>
                </div>
                <div className=" hidden lg:flex justify-between items-center">
                    <ul className="menu menu-horizontal flex gap-4">
                        <NavLink to='/' className={({ isActive }) =>
                            isActive
                                ? "active font-bold uppercase"
                                : "font-bold uppercase"
                        }>

                            <li>home</li>
                        </NavLink>
                        <NavLink to='/classes' className={({ isActive }) =>
                            isActive
                                ? "active font-bold uppercase"
                                : "font-bold uppercase"
                        }>

                            <li>classes</li>
                        </NavLink>
                        <NavLink to='/instructors' className={({ isActive }) =>
                            isActive
                                ? "active font-bold uppercase"
                                : "font-bold uppercase"
                        }>

                            <li>instructors</li>
                        </NavLink>
                        <NavLink to='/myclasses' className={({ isActive }) =>
                            isActive
                                ? "active font-bold uppercase"
                                : "font-bold uppercase"
                        }>

                            <li>my classes</li>
                        </NavLink>
                        <NavLink to='/dashboard' className={({ isActive }) =>
                            isActive
                                ? "active font-bold uppercase"
                                : "font-bold uppercase"
                        }>

                            <li>dashboard</li>
                        </NavLink>

                    </ul>
                </div>
                <div >
                    {user ? <button onClick={handleLogout} className="btn border-0 bg-orange text-neutral-100 hover:bg-transparent hover:text-orange hover:border hover:border-orange">Log Out</button> : <Link to='/login'><button className="btn bg-blue text-neutral-100 border-b-0 hover:bg-transparent hover:text-blue hover:border hover:border-blue">Log In</button></Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;