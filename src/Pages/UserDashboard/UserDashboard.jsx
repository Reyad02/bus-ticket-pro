import { Helmet } from "react-helmet-async";
import Banner from "../Shared/Banner/Banner";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../provider/AuthProvider";
import jsPDF from 'jspdf';

const UserDashboard = () => {
    const [ticketDetails, setTicketDetails] = useState([]);
    const { user } = useContext(AuthContext);
    console.log(user?.email);

    const handleTicket = (id) => {
        const token = localStorage.getItem("token");

        axios.get(`/getTicket/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response.data)
                const { bus_name, email, money, name, paidStatus, seats, tran_id, pickPoint, dropPoint, journeyDate } = response.data;
                const doc = new jsPDF('p', 'pt', 'a4');

                // Load the logo image
                const logo = new Image();
                logo.src = "../../../public/logo.png"; // Ensure this path is correct

                logo.onload = () => {
                    // Add the logo to the PDF
                    doc.addImage(logo, 'PNG', 30, 20, 100, 40); // Positioning the logo
                    doc.setFontSize(18);
                    doc.text('E-Ticket', 420, 30);
                    doc.setFontSize(10);
                    doc.text(`Order ID: ${tran_id}`, 420, 50);

                    // Ticket Information
                    doc.setFontSize(12);
                    doc.text('Bus Booking', 30, 100);
                    doc.setFontSize(10);
                    doc.text(`Bus Name: ${bus_name}`, 30, 120);
                    doc.text(`Seat Numbers: ${seats.join(', ')}`, 30, 135);
                    doc.text(`Journey Date: ${journeyDate}`, 30, 150); // Added journey date
                    doc.text(`Transaction ID: ${tran_id}`, 30, 165);
                    doc.text(`Pickup Point: ${pickPoint}`, 30, 180);
                    doc.text(`Drop Point: ${dropPoint}`, 30, 195);

                    // Booking Details
                    doc.setFontSize(14);
                    doc.text('Booking Details', 30, 235);
                    doc.setFontSize(10);
                    doc.text(`Name: ${name}`, 30, 255);
                    doc.text(`Email: ${email}`, 30, 270);
                    doc.text(`Paid Status: ${paidStatus ? "Success" : "Failed"}`, 30, 285);
                    doc.text(`Amount Paid: ${money} BDT`, 30, 300);

                    // Footer Information
                    doc.setFontSize(12);
                    doc.text("Important Information", 30, 325);
                    doc.setFontSize(10);
                    doc.text("• It is recommended to carry a printout of the ticket.", 30, 345);
                    doc.text("• Passengers must carry a valid ID proof at the time of boarding.", 30, 360);

                    // Save the PDF
                    doc.save(`${tran_id}_ticket.pdf`);
                };
            })
    }

    useEffect(() => {
        const token = localStorage.getItem("token");

        axios.get(`/booked/${user.email}`, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response.data)
                setTicketDetails(response.data);
            })
    }, [user?.email])
    return (
        <div>
            <Helmet>
                <title>Ticket Pro - Dashboard</title>
            </Helmet>
            <Banner title={"Dashboard"}></Banner>
            <div className="max-w-7xl mx-auto">
                <div className="mt-4">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="bg-[#26A85E] text-white ">
                                    <th>Trans ID</th>
                                    <th>Bus</th>
                                    <th>Pickup Point</th>
                                    <th>Dropping Point</th>
                                    <th>Journey Date</th>
                                    <th>Fare</th>
                                    <th>Seats</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    ticketDetails.map((ticket) => (
                                        <tr key={ticket._id} className="hover">
                                            <td>{ticket.tran_id}</td>
                                            <td>{ticket.bus_name}</td>
                                            <td>{ticket.pickPoint}</td>
                                            <td>{ticket.dropPoint}</td>
                                            <td>{ticket.journeyDate}</td>
                                            <td>${ticket.money}.00</td>
                                            <td>{ticket.seats.join(', ')}</td>
                                            <td>
                                                <div className="badge text-[#0E9E4D] badge-outline">Booked</div>
                                            </td>
                                            <td><button className="btn btn-sm bg-[#26A85E] text-white" onClick={() => { handleTicket(ticket.tran_id) }}>Ticket</button></td>
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

export default UserDashboard;