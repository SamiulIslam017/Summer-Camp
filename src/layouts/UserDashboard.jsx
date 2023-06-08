import { Link, NavLink, Outlet } from "react-router-dom";


const UserDashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn bg-blue border-0 text-neutral-100 drawer-button lg:hidden">Open Menu</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    <div className="flex flex-col justify-center items-center mb-10">
                        <img className="w-14 md:w-20 lg:w-20" src="https://i.ibb.co/xDKLb0V/logo1-removebg-preview.png" alt="Footer-logo" />
                        <p className="font-bold text-blue text-xl capitalize text-center">
                            Becomes a fashion designer <br />Welcome To User Dashboard
                        </p>
                    </div>
                    {/* Sidebar content here */}
                    <li><NavLink to='/selectedClasses' className={({ isActive }) =>
                        isActive
                            ? "active font-bold uppercase"
                            : "font-bold uppercase"
                    }>My Selected Classes</NavLink></li>
                    <li><NavLink to='/enrolledClasses' className={({ isActive }) =>
                        isActive
                            ? "active font-bold uppercase"
                            : "font-bold uppercase"
                    }>My Enrolled Classes</NavLink></li>
                    <li><NavLink to='/paymentHistory' className={({ isActive }) =>
                        isActive
                            ? "active font-bold uppercase"
                            : "font-bold uppercase"
                    }>Payment History</NavLink></li>

                    <div className="divider"></div>
                    <li><Link className="font-bold uppercase" to='/'>HomePage</Link></li>
                </ul>

            </div>

        </div>
    );
};

export default UserDashboard;