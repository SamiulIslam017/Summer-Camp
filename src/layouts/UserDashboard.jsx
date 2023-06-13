import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { FaCcStripe, FaClipboardCheck, FaFlagCheckered, FaHands, FaHome, FaHubspot, FaRegAddressCard, FaRegFolderOpen, FaUsersCog } from "react-icons/fa";


const UserDashboard = () => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const [isInstructor, isInstructorLoading] = useInstructor();
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
                            Becomes a fashion designer <br />Welcome To Dashboard
                        </p>
                    </div>
                    {/* Sidebar content here */}

                    {
                        isAdmin || isAdminLoading ? <>
                            <li><NavLink to='/dashboard/allUsers' className={({ isActive }) =>
                                isActive
                                    ? "active bg-neutral-300 font-bold uppercase"
                                    : "font-bold uppercase"
                            }><FaUsersCog></FaUsersCog> Manage Users</NavLink></li>
                            <li><NavLink to='/dashboard/allCourses' className={({ isActive }) =>
                                isActive
                                    ? "active bg-neutral-300 font-bold uppercase"
                                    : "font-bold uppercase"
                            }><FaHubspot></FaHubspot> Manage Courses</NavLink></li>
                        </> : isInstructor || isInstructorLoading ? <>
                            <li><NavLink to='/dashboard/addCourse' className={({ isActive }) =>
                                isActive
                                    ? "active bg-neutral-300 font-bold uppercase"
                                    : "font-bold uppercase"
                            }><FaRegAddressCard></FaRegAddressCard> Add Course</NavLink></li>
                            <li><NavLink to='/dashboard/myCourse' className={({ isActive }) =>
                                isActive
                                    ? "active bg-neutral-300 font-bold uppercase"
                                    : "font-bold uppercase"
                            }><FaRegFolderOpen></FaRegFolderOpen> My Course</NavLink></li>
                        </> :
                            <>
                                <li><NavLink to='/dashboard/selectedClasses' className={({ isActive }) =>
                                    isActive
                                        ? "active bg-neutral-300 font-bold uppercase"
                                        : "font-bold uppercase"
                                }><FaClipboardCheck></FaClipboardCheck> My Selected Classes</NavLink></li>
                                <li><NavLink to='/dashboard/enrolledClasses' className={({ isActive }) =>
                                    isActive
                                        ? "active bg-neutral-300 font-bold uppercase"
                                        : "font-bold uppercase"
                                }><FaFlagCheckered></FaFlagCheckered> My Enrolled Classes</NavLink></li>
                                <li><NavLink to='/dashboard/paymentHistory' className={({ isActive }) =>
                                    isActive
                                        ? "active bg-neutral-300 font-bold uppercase"
                                        : "font-bold uppercase"
                                }><FaCcStripe></FaCcStripe> Payment History</NavLink></li>


                            </>

                    }
                    <div className="divider"></div>
                    <li><Link className="font-bold uppercase" to='/'><FaHome></FaHome> HomePage</Link></li>
                    <li><Link className="font-bold uppercase" to='/courses'><FaHands></FaHands> Courses</Link></li>
                </ul>

            </div>

        </div>
    );
};

export default UserDashboard;
