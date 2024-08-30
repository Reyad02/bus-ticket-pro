import { MdOutlinePayment } from "react-icons/md";
import { FaBus } from "react-icons/fa";
import { IoTicket } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../provider/AuthProvider";

const DashBoard = () => {
    const { user } = useContext(AuthContext);

    const [totalPayment, setTotalPayment] = useState(0);
    const [totalBus, setTotalBus] = useState(0);
    const [totalOrderCount, setTotalOrderCount] = useState(0);
    const [totalAreaCount, setTotalAreaCount] = useState(0);
    useEffect(() => {
        const token = localStorage.getItem("token");
        // console.log("token ", token)

        axios.get("/totalPayments", {
            headers: {
                Authorization: `Bearer ${token}`,
                Email: user.email // Assuming `user.email` contains the user's email
            }
        })
            .then(res => {
                setTotalPayment(res.data.totalPayment);
                setTotalOrderCount(res.data.countTotalOrder);
            });

        axios.get("/totalBusCount", {
            headers: {
                Authorization: `Bearer ${token}`,
                Email: user.email // Assuming `user.email` contains the user's email
            }
        })
            .then(res => setTotalBus(res.data.totalBusCount));

        axios.get("/totalCounter", {
            headers: {
                Authorization: `Bearer ${token}`,
                Email: user.email // Assuming `user.email` contains the user's email
            }
        })
            .then(res => setTotalAreaCount(res.data.totalCounter));
    }, [user?.email])
    return (
        <div>
            <Helmet>
                <title>Ticket Pro - Admin Dashboard</title>
            </Helmet>
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8 transition-all">

                <div className="border-green-700 w-60 h-28 flex items-center px-4 gap-6 border rounded-md">
                    <div className="bg-green-200 p-3 text-3xl text-green-700">
                        <MdOutlinePayment />
                    </div>
                    <div>
                        <p className="">Payments</p>
                        <p className="text-2xl font-semibold">${totalPayment}.00</p>
                    </div>
                </div>

                <div className="border-blue-700 w-60 h-28 flex items-center px-4 gap-6 border rounded-md">
                    <div className="bg-blue-200 p-4 text-2xl text-blue-700">
                        <FaBus />
                    </div>
                    <div>
                        <p className="">Total Bus</p>
                        <p className="text-2xl font-semibold">{totalBus}</p>
                    </div>
                </div>

                <div className="border-red-700 w-60 h-28 flex items-center px-4 gap-6 border rounded-md">
                    <div className="bg-red-200 p-4 text-2xl text-red-700">
                        <IoTicket />
                    </div>
                    <div>
                        <p className="">Total Bookings</p>
                        <p className="text-2xl font-semibold">{totalOrderCount}</p>
                    </div>
                </div>

                <div className="border-[#FF9F43] w-60 h-28 flex items-center px-4 gap-6 border rounded-md">
                    <div className="bg-[#FFECD9] p-3 text-3xl text-[#FF9F43]">
                        <MdPlace />
                    </div>
                    <div>
                        <p className="">Total Counter</p>
                        <p className="text-2xl font-semibold">{totalAreaCount}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DashBoard;