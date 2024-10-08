import { Link, NavLink } from "react-router-dom";
import logo from "../../../../public/logo.png"
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const Navbar = ({isSticky}) => {
    const { user } = useContext(AuthContext);


    const navlink = <>
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/FAQ"}>FAQs</NavLink></li>
        <li><NavLink to={"/blog"}>Blog</NavLink></li>
        <li><NavLink to={"/contact"}>Contact</NavLink></li>
        {
           user ? user.email === import.meta.env.VITE_ADMIN ? <li><NavLink to={"/admin"}>Dashboard</NavLink></li> : <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li> : <></>
        }
    </>


    return (
        <div className={`bg-base-100 drop-shadow-lg ${isSticky ? 'fixed top-0 w-full transition' : ''}`}>
            <div className="navbar  mx-auto max-w-7xl">
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
                            {navlink}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost flex flex-col" to={"/"}>
                        <img src={logo} alt="" className="h-full " />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <p className="uppercase  text-green-700 hover:opacity-90">Hi, {user?.displayName}</p> : <></>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;