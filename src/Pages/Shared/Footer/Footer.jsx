import logo from "../../../../public/logo.png"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { RiMapPin2Line } from "react-icons/ri";
import { FaPhoneVolume } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useLocation } from "react-router-dom";




const Footer = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    // console.log(currentPath)

    return (
        <div className={`${currentPath.includes("admin") ? "mt-0" : "mt-8"}  bg-[#1E2A3F]`}>
            <footer className="footer max-w-7xl mx-auto p-10 text-white">
                <aside className="space-y-0 ">
                    <img src={logo} className="w-28 " alt="" />
                    <div className="max-w-xs mx-auto">
                        <p className="mt-0">
                            Delectus culpa laboriosam debitis saepe. Commodi earum minus ut obcaecati veniam deserunt est!
                        </p>
                        <div className="flex gap-3 mt-2">
                            <button className="btn btn-sm btn-circle btn-outline text-white hover:bg-green-700">
                                <FaFacebookF></FaFacebookF>
                            </button>

                            <button className="btn btn-sm btn-circle btn-outline text-white hover:bg-green-700">
                                <FaTwitter></FaTwitter>
                            </button>

                            <button className="btn btn-sm btn-circle btn-outline text-white hover:bg-green-700">
                                <FaVimeoV></FaVimeoV>
                            </button>

                            <button className="btn btn-sm btn-circle btn-outline text-white hover:bg-green-700">
                                <FaInstagram></FaInstagram>
                            </button>
                        </div>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title text-xl border-b-2 text-green-500 border-b-green-500">Useful Links</h6>
                    <a className="link link-hover flex items-center"><MdOutlineKeyboardDoubleArrowRight className="text-xl"></MdOutlineKeyboardDoubleArrowRight> About</a>
                    <a className="link link-hover flex items-center"><MdOutlineKeyboardDoubleArrowRight className="text-xl"></MdOutlineKeyboardDoubleArrowRight> FAQs</a>
                    <a className="link link-hover flex items-center"><MdOutlineKeyboardDoubleArrowRight className="text-xl"></MdOutlineKeyboardDoubleArrowRight> Blog</a>
                    <a className="link link-hover flex items-center"><MdOutlineKeyboardDoubleArrowRight className="text-xl"></MdOutlineKeyboardDoubleArrowRight> Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-xl border-b-2 text-green-500  border-b-green-500">Policies</h6>
                    <a className="link link-hover flex items-center"><MdOutlineKeyboardDoubleArrowRight className="text-xl"></MdOutlineKeyboardDoubleArrowRight> Privacy Policy</a>
                    <a className="link link-hover flex items-center"><MdOutlineKeyboardDoubleArrowRight className="text-xl"></MdOutlineKeyboardDoubleArrowRight> Terms and Conditions</a>
                    <a className="link link-hover flex items-center"><MdOutlineKeyboardDoubleArrowRight className="text-xl"></MdOutlineKeyboardDoubleArrowRight> Ticket Policies</a>
                    <a className="link link-hover flex items-center"><MdOutlineKeyboardDoubleArrowRight className="text-xl"></MdOutlineKeyboardDoubleArrowRight> Refund Policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-xl border-b-2 text-green-500 border-b-green-500">Contact Info</h6>
                    <p className="flex items-center gap-2"><RiMapPin2Line className="text-xl"></RiMapPin2Line> Bengla Road Suite Dhaka 1209</p>
                    <a className="link link-hover flex items-center gap-2"><FaPhoneVolume className=""></FaPhoneVolume> +880 01521766535</a>
                    <a className="link link-hover flex items-center gap-2"><CiMail className="text-xl"></CiMail> example@gmail.com</a>

                </nav>
            </footer>
        </div>
    );
};

export default Footer;