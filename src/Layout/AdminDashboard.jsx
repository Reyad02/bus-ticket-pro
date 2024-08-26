import { NavLink, Outlet } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FaBus } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";



const AdminDashboard = () => {
    return (
        <div className="flex gap-8">
            <div>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center ">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                            Open drawer
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                            {/* Sidebar content here */}
                            <li><NavLink to={"/admin"} end><IoHomeOutline/> Dashboard</NavLink></li>
                            <li><NavLink to={"busInfo"}><FaBus/> Bus Details</NavLink></li>
                            <li><NavLink to={"ticketInfo"}><span className="text-lg"><MdOutlinePayment/></span> Booking History</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-4 w-full mr-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AdminDashboard;