import { NavLink, Outlet } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaBus } from "react-icons/fa";
import { FaBusAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import TopAddress from "../Pages/Shared/TopAddress/TopAddress";
import { IoMenu } from "react-icons/io5";


const AdminDashboard = () => {
    return (
        <div>
            <TopAddress />
            <div className="flex mt-4 lg:mt-0 flex-col lg:flex-row lg:gap-8 px-4">
                <div className="relative grid ">
                    <div className="drawer lg:drawer-open">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-2" className="btn w-fit drawer-button lg:hidden">
                                <IoMenu className="text-2xl" /> {/* Use the icon and adjust size if needed */}
                            </label>
                        </div>
                        <div className="drawer-side z-50">
                            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                                {/* Sidebar content here */}
                                <li className="flex justify-center items-center">
                                    <NavLink to="/" end className="w-full flex justify-center items-center">
                                        <img src={"https://i.ibb.co/prHkLBJ/bus-ticket-pro-logo-final.png"} className="h-24" alt="Bus Ticket Pro" />
                                    </NavLink>
                                </li>

                                <li><NavLink to={"/admin"} end><span className="text-lg"><IoHome /></span> Dashboard</NavLink></li>
                                <li><NavLink to={"busInfo"}><span className="text-lg"><FaBus /></span> Bus Details</NavLink></li>
                                <li><NavLink to={"ticketInfo"}><span className="text-lg"><FaWallet /></span> Booking History</NavLink></li>
                                <li><NavLink to={"add_Bus"}><span className="text-lg"><FaBusAlt /></span> Add New Bus</NavLink></li>
                                <li><NavLink to={"add_Route"}><span className="text-lg"><FaMapMarkerAlt /></span> Add New Route</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-4 w-full mr-8">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;