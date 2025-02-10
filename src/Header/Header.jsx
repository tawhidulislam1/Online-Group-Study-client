import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images.png";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { toast } from "react-toastify";


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("YOur are logout now");
            })
            .catch((error) => {
                console.error("Logout failed:", error);
            });
    }
    const links = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/assignment"}>Assignment</NavLink></li>
        <li><NavLink to={"/peding-assignments"}>Pending Assignment</NavLink></li>
    </>
    return (

        <div className="navbar bg-base-100 fixed w-full top-0 left-0 h-[90px] z-50">
            <div className="navbar-start pl-6">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className=" text-xl w-28">
                    <img src={logo} className="rounded-full" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end pr-6">
                <div>
                    <label className="grid cursor-pointer place-items-center">
                        <input
                            type="checkbox"
                            value="dark"
                            className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
                        <svg
                            className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <svg
                            className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>
                </div>
                {user && user?.email ? (
                    <>
                        <button onClick={handleLogOut} className="btn">Logout</button>

                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" >
                                <div className="tooltip " data-tip={user?.displayName}>
                                    <img
                                        src={user?.photoURL}
                                        title={user?.displayName}
                                        alt="User Avatar"
                                        className="rounded-full w-14 ml-2"
                                    />

                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                                <li><Link to={'/create-assignment'}>Create Assignment</Link></li>
                                <li><Link to={'/attempted-assignments'}>My Attempted Assignments</Link></li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <>
                        <Link to={'/login'} className="btn btn-accent">Login</Link>
                        <Link to={'/register'} className="btn bg-red-500 text-white mr-2">Register</Link>
                    </>
                )}


            </div>
        </div >
    );
};

export default Header;