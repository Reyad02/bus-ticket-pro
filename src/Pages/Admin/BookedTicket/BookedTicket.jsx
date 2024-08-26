import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const BookedTicket = () => {
    const [ticketDetails, setTicketDetails] = useState([]);
    useEffect(() => {
        axios.get("/allTicketInfo")
            .then(response => {
                console.log(response.data)
                setTicketDetails(response.data);
            })
    }, [])
    return (
        <div>
            <Helmet>
                <title>Ticket Pro - Booking History</title>
            </Helmet>
            <div className="">
                <h1 className="text-xl font-semibold">Booking History</h1>
                <div className="mt-4">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="bg-[#2B3440] text-[#D7DDE4]">
                                    <th>Bus Number</th>
                                    <th>User</th>
                                    <th>User Email</th>
                                    <th>Pickup Point</th>
                                    <th>Dropping Point</th>
                                    <th>Journey Date</th>
                                    <th>Amount</th>
                                    <th>Seats</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    ticketDetails.map((ticket) => (
                                        <tr key={ticket._id} className="hover">
                                            <td>{ticket.bus_name}</td>
                                            <td>{ticket.name}</td>
                                            <td>{ticket.email}</td>
                                            <td>{ticket.pickPoint}</td>
                                            <td>{ticket.dropPoint}</td>
                                            <td>{ticket.journeyDate}</td>
                                            <td>${ticket.money}.00</td>
                                            <td>{ticket.seats.join(', ')}</td>
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

export default BookedTicket;