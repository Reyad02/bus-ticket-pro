import { MdOutlinePayment } from "react-icons/md";
import { FaBus } from "react-icons/fa";
import { IoTicket } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../provider/AuthProvider";
import { PieChart } from 'react-minimal-pie-chart';
import { NavLink } from "react-router-dom";


const DashBoard = () => {
    const { user } = useContext(AuthContext);

    const [totalPayment, setTotalPayment] = useState(0);
    const [totalBus, setTotalBus] = useState(0);
    const [totalOrderCount, setTotalOrderCount] = useState(0);
    const [totalAreaCount, setTotalAreaCount] = useState(0);
    const [busCount, setBusCount] = useState([]);
    const [recentBooked, setRecentBooked] = useState([]);
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

        axios.get("/allStops", {
            headers: {
                Authorization: `Bearer ${token}`,
                Email: user.email // Assuming `user.email` contains the user's email
            }
        })
            .then(res => {
                // console.log(res.data.length)
                setTotalAreaCount(res.data?.length)
            }
            );

        axios.get("/order/bus-count", {
            headers: {
                Authorization: `Bearer ${token}`,
                Email: user.email // Assuming `user.email` contains the user's email
            }
        })
            .then(res => {
                // console.log(res.data.length)
                // console.log(res.data)
                setBusCount(res.data)
            }
            );

        axios.get("/latestOrder", {
            headers: {
                Authorization: `Bearer ${token}`,
                Email: user.email // Assuming `user.email` contains the user's email
            }
        })
            .then(res => {
                // console.log(res.data);
                setRecentBooked(res.data);
            }
            );
    }, [user?.email])
    return (
        <div className="">
            <Helmet>
                <title>Ticket Pro - Admin Dashboard</title>
            </Helmet>
            <h1 className="text-xl font-semibold text-center lg:text-left">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-8 transition-all">

                <div className="border-green-700 w-60 h-28 flex items-center px-4 gap-6 border rounded-md mx-auto">
                    <div className="bg-green-200 p-3 text-3xl text-green-700">
                        <MdOutlinePayment />
                    </div>
                    <div>
                        <p className="">Payments</p>
                        <p className="text-2xl font-semibold">${totalPayment}.00</p>
                    </div>
                </div>

                <div className="border-blue-700 w-60 h-28 flex items-center px-4 gap-6 border rounded-md mx-auto">
                    <div className="bg-blue-200 p-4 text-2xl text-blue-700">
                        <FaBus />
                    </div>
                    <div>
                        <p className="">Total Bus</p>
                        <p className="text-2xl font-semibold">{totalBus}</p>
                    </div>
                </div>

                <div className="border-red-700 w-60 h-28 flex items-center px-4 gap-6 border rounded-md mx-auto">
                    <div className="bg-red-200 p-4 text-2xl text-red-700">
                        <IoTicket />
                    </div>
                    <div>
                        <p className="">Total Bookings</p>
                        <p className="text-2xl font-semibold">{totalOrderCount}</p>
                    </div>
                </div>

                <div className="border-[#FF9F43] w-60 h-28 flex items-center px-4 gap-6 border rounded-md mx-auto">
                    <div className="bg-[#FFECD9] p-3 text-3xl text-[#FF9F43]">
                        <MdPlace />
                    </div>
                    <div>
                        <p className="">Total Counter</p>
                        <p className="text-2xl font-semibold">{totalAreaCount}</p>
                    </div>
                </div>
            </div>

            <div className="mt-4 md:mt-8 flex flex-col  items-center lg:gap-8">
                <div className="w-full md:w-1/2 lg:w-1/3  ">
                    <h1 className="text-center text-xl font-semibold">Total AC and Non-AC booked bus status</h1>
                    <PieChart className=""
                        data={[
                            { title: busCount[0] !== undefined ? busCount[0]?._id : "", value: busCount[0] !== undefined ? busCount[0]?.count : 0, color: '#E38627' },
                            { title: busCount[1] !== undefined ? busCount[1]?._id : "", value: busCount[1] !== undefined ? busCount[1]?.count : 0, color: '#C13C37' },
                        ]}
                        radius={42}
                        label={({ dataEntry }) => dataEntry.title}
                        labelStyle={{
                            fontSize: '5px',
                            fontFamily: 'sans-serif',
                        }}
                    />
                </div>
            </div>

            <div className="">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#2B3440] text-[#D7DDE4]">
                                <th>Bus Number</th>
                                <th>User</th>
                                <th>Journey Date</th>
                                <th>Amount</th>
                                <th>Seats</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                recentBooked.map((ticket) => (
                                    <tr key={ticket._id} className="hover">
                                        <td>{ticket.bus_name}</td>
                                        <td>{ticket.name}</td>
                                        <td>{ticket.journeyDate}</td>
                                        <td>${ticket.money}.00</td>
                                        <td>{ticket.seats.join(', ')}</td>
                                    </tr>
                                ))
                            }
                            <td colSpan="5" className="text-right">
                                <NavLink to={"ticketInfo"} className="btn btn-sm">See More</NavLink>
                            </td>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>

    );
};

export default DashBoard;