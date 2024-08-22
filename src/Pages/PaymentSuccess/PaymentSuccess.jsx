import { useParams } from "react-router-dom";
import jsPDF from 'jspdf';
import { useEffect, useState } from "react";
import axios from "axios";
import { removePoint } from "../../utils/storage";

const PaymentSuccess = () => {
    const { id } = useParams();
    const [ticket, setTicket] = useState({});

    const generatePDF = () => {
        const { bus_name, email, money, name, paidStatus, seats, tran_id, pickPoint, dropPoint } = ticket;

        const doc = new jsPDF('p', 'pt', 'a4');

        // Load the logo image
        const logo = new Image();
        logo.src = "/logo.png"; // Ensure this path is correct

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
            doc.text(`Transaction ID: ${tran_id}`, 30, 150);
            doc.text(`Pickup Point: ${pickPoint}`, 30, 165); // Adjust y position
            doc.text(`Drop Point: ${dropPoint}`, 30, 180);   // Adjust y position

            // Booking Details
            doc.setFontSize(14);
            doc.text('Booking Details', 30, 220);
            doc.setFontSize(10);
            doc.text(`Name: ${name}`, 30, 240);
            doc.text(`Email: ${email}`, 30, 255);
            doc.text(`Paid Status: ${paidStatus ? "Success" : "Failed"}`, 30, 270);
            doc.text(`Amount Paid: ${money} BDT`, 30, 285);

            // Footer Information
            doc.setFontSize(12);
            doc.text("Important Information", 30, 310);
            doc.setFontSize(10);
            doc.text("• It is recommended to carry a printout of the ticket.", 30, 330);
            doc.text("• Passengers must carry a valid ID proof at the time of boarding.", 30, 345);

            // Save the PDF
            doc.save(`${tran_id}_ticket.pdf`);
        };

        removePoint(); // Clear the points after generating the PDF
        localStorage.removeItem("seats")
    };

    useEffect(() => {
        axios.get(`/getTicket/${id}`, {
            params: {
                tran_id: id
            }
        })
            .then(res => {
                setTicket(res.data);
            })
            .catch(err => {
                console.error("Error fetching ticket data: ", err);
            });
    }, [id]);

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
