import { useParams } from "react-router-dom";
import jsPDF from 'jspdf';
import { useEffect, useState } from "react";
import axios from "axios";

const PaymentSuccess = () => {
    const { id } = useParams();
    const [ticket, setTicket] = useState({});

    const { bus_name, email, money, name, paidStatus, seats, tran_id } = ticket;
    const generatePDF = () => {

        const doc = new jsPDF('p', 'pt', 'a4');

        // Load the logo image
        const logo = new Image();
        logo.src = "../../../public/logo.png"; // Assuming the logo is in the public directory

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

            // Booking Details
            doc.setFontSize(14);
            doc.text('Booking Details', 30, 190);
            doc.setFontSize(10);
            doc.text(`Name: ${name}`, 30, 210);
            doc.text(`Email: ${email}`, 30, 225);
            doc.text(`Paid Status: ${paidStatus ? "Success" : "Failed"}`, 30, 240);
            doc.text(`Amount Paid: ${money} BDT`, 30, 255);

            // Footer Information
            doc.setFontSize(12);
            doc.text("Important Information", 30, 280);
            doc.setFontSize(10);
            doc.text("• It is recommended to carry a printout of the ticket.", 30, 300);
            doc.text("• Passengers must carry a valid ID proof at the time of boarding.", 30, 315);

            // Save the PDF
            doc.save(`${tran_id}_ticket.pdf`);
        };
    }

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
                <h1 className="font-semibold text-2xl  text-[#26A85E]">Payment Success</h1>
                <p>Transaction ID: {id}</p>
                <button className="btn" onClick={generatePDF}>Download Ticket</button>
            </div>
        </div>
    );
};

export default PaymentSuccess;
