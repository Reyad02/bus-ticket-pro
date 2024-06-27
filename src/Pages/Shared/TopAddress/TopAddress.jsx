import { FiPhone } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdLogin } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";



const TopAddress = () => {
    return (
        <div className="bg-slate-100 py-1 border-b-2">
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-0 items-center lg:justify-between max-w-7xl mx-auto">
                <div className="flex  gap-2">
                    <div className="flex items-center gap-2">
                        <FiPhone className="text-green-700"></FiPhone>
                        <p className="hover:text-green-700 hover:cursor-pointer">+880 1521766535</p>
                    </div>
                    <p>|</p>
                    <div className="flex items-center gap-2 text-base">
                        <HiOutlineMailOpen className="text-green-700 "></HiOutlineMailOpen>
                        <p className="hover:text-green-700 hover:cursor-pointer">example@gmail.com</p>
                    </div>
                </div>

                <div className="flex border border-slate-300 items-center  gap-4 p-2 bg-white">
                    <Link className="flex items-center gap-1 text-green-700 font-semibold hover:bg-green-50 rounded-md " to={"/Signin"}>
                        <MdLogin className="font-extrabold  "></MdLogin>
                        <p>Sing In</p>
                    </Link>
                    <p>/</p>
                    <Link className="flex items-center gap-1 text-green-700 font-semibold hover:bg-green-50 rounded-md " to={"/Signup"}>
                        <FaUserPlus></FaUserPlus>
                        <p>Sing Up</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopAddress;