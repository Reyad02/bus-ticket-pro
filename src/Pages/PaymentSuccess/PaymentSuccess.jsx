import { useParams } from "react-router-dom";
import jsPDF from 'jspdf';
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { removePoint } from "../../utils/storage";
import { AuthContext } from "../../provider/AuthProvider";

const PaymentSuccess = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [ticket, setTicket] = useState({});


    const generatePDF = () => {
        const token = localStorage.getItem("token");
        const doc = new jsPDF('p', 'pt', 'a4');

        // Load the logo image
        const logo = new Image();
        logo.src = "/logo.png"; // Ensure this path is correct

        logo.onload = () => {
            axios.get(`/getTicket/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Email: user.email // Assuming `user.email` contains the user's email
                }
            })
                .then(res => {
                    setTicket(res.data);
                    // Add the logo to the PDF
                    doc.addImage(logo, 'PNG', 30, 20, 100, 40); // Positioning the logo
                    doc.setFontSize(18);
                    doc.text('E-Ticket', 420, 30);
                    doc.setFontSize(10);
                    doc.text(`Order ID: ${res.data.tran_id}`, 420, 50);

                    // Ticket Information
                    doc.setFontSize(12);
                    doc.text('Bus Booking', 30, 100);
                    doc.setFontSize(10);
                    doc.text(`Bus Name: ${res.data.bus_name}`, 30, 120);
                    doc.text(`Seat Numbers: ${res.data.seats?.join(', ')}`, 30, 135);
                    doc.text(`Journey Date: ${res.data.journeyDate}`, 30, 150); // Added journey date
                    doc.text(`Transaction ID: ${res.data.tran_id}`, 30, 165);
                    doc.text(`Pickup Point: ${res.data.pickPoint}`, 30, 180);
                    doc.text(`Drop Point: ${res.data.dropPoint}`, 30, 195);

                    // Booking Details
                    doc.setFontSize(14);
                    doc.text('Booking Details', 30, 235);
                    doc.setFontSize(10);
                    doc.text(`Name: ${res.data.name}`, 30, 255);
                    doc.text(`Email: ${res.data.email}`, 30, 270);
                    doc.text(`Paid Status: ${res.data.paidStatus ? "Success" : "Failed"}`, 30, 285);
                    doc.text(`Amount Paid: ${res.data.money} BDT`, 30, 300);

                    // Footer Information
                    doc.setFontSize(12);
                    doc.text("Important Information", 30, 325);
                    doc.setFontSize(10);
                    doc.text("• It is recommended to carry a printout of the ticket.", 30, 345);
                    doc.text("• Passengers must carry a valid ID proof at the time of boarding.", 30, 360);

                    // Save the PDF
                    doc.save(`${res.data.tran_id}_ticket.pdf`);
                })
                .catch(err => {
                    console.error("Error fetching ticket data: ", err);
                });

            localStorage.removeItem("seats");
            localStorage.removeItem("bus_name");

        };

        removePoint(); // Clear the points after generating the PDF
        localStorage.removeItem("seats")
    };

    return (
        <div className="max-w-7xl mx-auto mt-8 text-center">
            <div className="space-y-1">
                <h1 className="font-semibold text-2xl text-[#26A85E]">Payment Success</h1>
                <p>Transaction ID: {id}</p>
                <button className="btn" onClick={generatePDF}>Download Ticket</button>
            </div>
        </div>
    );
};

export default PaymentSuccess;
