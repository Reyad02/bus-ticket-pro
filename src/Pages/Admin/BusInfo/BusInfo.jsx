import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const BusInfo = () => {
    const [busDetails, setBusDetails] = useState([]);
    useEffect(() => {
        axios.get("/allBusInfo")
            .then(response => {
                console.log(response.data)
                setBusDetails(response.data);
            })
    }, [])
    return (
        <div>
            <Helmet>
                <title>Ticket Pro - Bus Details</title>
            </Helmet>
            <div className="">
                <h1 className="text-xl font-semibold">Bus Details</h1>
                <div className="mt-4">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="bg-[#2B3440] text-[#D7DDE4]">
                                    <th>Bus Number</th>
                                    <th>Seat Layout</th>
                                    <th>Departure Time</th>
                                    <th>Arrival Time</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    busDetails.map((bus, idx) => (
                                        <tr key={idx} className="hover">
                                            <td>{bus.bus_num}</td>
                                            <td>{bus.seat_layout}</td>
                                            <td>{bus.departure_time}</td>
                                            <td>{bus.arrival_time}</td>
                                            <td>${bus.price}.00</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BusInfo;