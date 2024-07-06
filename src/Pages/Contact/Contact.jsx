import Banner from "../Shared/Banner/Banner";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";


const Contact = () => {
    return (
        <div>
            <Banner title={"Contact Us"}></Banner>
            <SectionTitle title={"Let's get in touch"} subTitle={"We are open for any suggestion or just to have a chat"}></SectionTitle>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="border rounded-md flex justify-between p-8">
                        <div className="text-4xl text-green-700 flex justify-center items-center">
                            <FaMapLocationDot></FaMapLocationDot>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-xl font-bold">Our Address</h1>
                            <p>Address : Bengla Road Suite Dhaka 1209</p>
                        </div>
                    </div>
                    <div className="border rounded-md flex justify-around p-8">
                        <div className="text-4xl text-green-700 flex justify-center items-center">
                            <MdOutlineWifiCalling3></MdOutlineWifiCalling3>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-xl font-bold">Call Us</h1>
                            <p>Address : +880 12354 81209</p>
                        </div>
                    </div>
                    <div className="border rounded-md flex justify-around p-8">
                        <div className="text-3xl text-green-700 flex justify-center items-center">
                            <MdOutlineMail></MdOutlineMail>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Email Us</h1>
                            <p>example@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;