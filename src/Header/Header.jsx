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
    </>
    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
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
                <a className=" text-xl w-28">
                    <img src={logo} className="rounded-full" alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user && user?.email ? (
                    <>
                        <button onClick={handleLogOut} className="btn">Logout</button>
                        <div className="relative">
                            <div className="tooltip" data-tip={user?.displayName}>
                                <img
                                    src={user?.photoURL}
                                    title={user?.displayName}
                                    alt="User Avatar"
                                    className="rounded-full w-14 ml-2"
                                />
                            </div>

                        </div>
                    </>
                ) : (
                    <>
                        <Link to={'/login'} className="btn btn-accent">Login</Link>
                        <Link to={'/register'} className="btn bg-red-500 text-white mr-2">Register</Link>
                    </>
                )}


            </div>
        </div>
    );
};

export default Header;