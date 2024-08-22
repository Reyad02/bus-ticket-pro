import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { TbSteeringWheel } from "react-icons/tb";
import { TbDoorExit } from "react-icons/tb";
import { getPoints } from "../../utils/storage";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";



const BusTicket = () => {
    const { user } = useContext(AuthContext);
    const { pickPoint, dropPoint, journeyDate } = getPoints();
    const { bus_name } = useParams();
    const [busInfo, setBusInfo] = useState(null);
    // const [selectedSeats, setSelectedSeats] = useState(localStorage.getItem("seats").split(',') || []);
    const [selectedSeats, setSelectedSeats] = useState(() => {
        const seats = localStorage.getItem("seats");
        return seats ? seats.split(',') : [];
    });
    const location = useLocation();
    const navigate = useNavigate();
    console.log(localStorage.getItem("seats"));

    // console.log(busInfo)
    const handleSeat = (seat) => {
        if (selectedSeats.includes(seat)) {
            const filterSeat = selectedSeats.filter(s => s !== seat);
            setSelectedSeats(filterSeat);
        }
        else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    }

    const handleContinue = () => {
        Swal.fire({
            title: "Confirm Booking",
            text: "Are you sure to book these seats?",
            showCancelButton: true,
            confirmButtonColor: "#26A85E",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm"
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.setItem("seats", selectedSeats);
                if (user) {
                    // Swal.fire({
                    //     title: "Confirmed!",
                    //     text: "Your seat has been confirmed.",
                    //     icon: "success"
                    // });
                    const info = {
                        email: user?.email,
                        bus_name: bus_name,
                        seats: selectedSeats,
                        money: selectedSeats.length * busInfo.price,
                        token: localStorage.getItem("token"),
                        name: user?.displayName
                    }
                    axios.post("/order", info).then(res => {
                        console.log(res.data.url)
                        window.location.replace(res.data.url);
                    }).catch(error => {
                        if (error.response && error.response.status === 401) {
                            // Swal.fire({
                            //     title: "Unauthorized",
                            //     text: "You need to sign in to book seats.",
                            //     icon: "error"
                            // });
                            console.log(error)
                            navigate("/Signin", { state: location });
                        } else {
                            // Swal.fire({
                            //     title: "Error",
                            //     text: "Something went wrong. Please try again later.",
                            //     icon: "error"
                            // });
                            console.log("2nd", error);
                        }
                    }
                    )
                }
                else {
                    navigate("/Signin", { state: location })
                }
            }
        });

    }
    // You can create an array of rows with seat labels
    const rows = [
        ["A1", "A2", "A3", "A4"],
        ["B1", "B2", "B3", "B4"],
        ["C1", "C2", "C3", "C4"],
        ["D1", "D2", "D3", "D4"],
        ["E1", "E2", "E3", "E4"],
        ["F1", "F2", "F3", "F4"],
        ["G1", "G2", "G3", "G4"],
        ["H1", "H2", "H3", "H4"],
        ["I1", "I2", "I3", "I4"],
        ["J1", "J2", "J3", "J4"]
    ];

    useEffect(() => {
        axios.get(`/tickets/${bus_name}`, {
            params: {
                bus_name: bus_name
            }
        }).then(response => {
            setBusInfo(response.data)
            // console.log(busInfo)
        })
            .catch(error => {
                console.error('Error making GET request:', error);
            });
    }, [bus_name])

    if (busInfo === null) {
        return <div>Loading...</div>;
    }
    else {
        return (
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between mt-8 gap-8 px-8 md:px-0">
                    <div className="flex-1 border">
                        <div className="space-y-6  py-2">
                            <div className=" flex flex-row-reverse pr-9 pl-14 justify-between text-2xl items-center">
                                <button className="btn    rounded-xl text-xl " ><TbSteeringWheel /></button>
                                <div className="   rounded-xl text-xl " ><TbDoorExit /></div>
                            </div>
                            {rows.map((row, index) => (
                                <div className="flex items-center" key={index}>
                                    <div className="flex-1 flex justify-evenly">
                                        <button className={`btn   rounded-xl hover:bg-transparent  ${selectedSeats.includes(row[0]) ? 'bg-[#26A85E] text-white hover:text-black' : ''}`} disabled={!busInfo.seats[row[0]]} id={row[0]} onClick={() => { handleSeat(row[0]) }}>{row[0]}</button>
                                        <button className={`btn    rounded-xl hover:bg-transparent ${selectedSeats.includes(row[1]) ? 'bg-[#26A85E] text-white hover:text-black' : ''}`} disabled={!busInfo.seats[row[1]]} id={row[1]} onClick={() => { handleSeat(row[1]) }}>{row[1]}</button>
                                    </div>
                                    <div className="flex-1 flex justify-evenly">
                                        <button className={`btn    rounded-xl hover:bg-transparent ${selectedSeats.includes(row[2]) ? 'bg-[#26A85E] text-white hover:text-black' : ''}`} disabled={!busInfo.seats[row[2]]} id={row[2]} onClick={() => { handleSeat(row[2]) }}>{row[2]}</button>
                                        <button className={`btn    rounded-xl hover:bg-transparent ${selectedSeats.includes(row[3]) ? 'bg-[#26A85E] text-white hover:text-black' : ''}`} disabled={!busInfo.seats[row[3]]} id={row[3]} onClick={() => { handleSeat(row[3]) }}>{row[3]}</button>
                                    </div>
                                </div>
                            ))}
                            {/* {busInfo} */}
                        </div>
                        <div className="flex justify-around ml-6 mt-3">


                        </div>
                        <div className="flex items-center gap-4 ml-10 mt-3">
                            <button className={`btn bg-base-200 hover:bg-base-200 rounded-xl hover:outline-none hover:border-none  w-12`}></button>
                            <p className="py-2">Available Seats</p>
                        </div>
                        <div className="flex items-center gap-4 ml-10 mt-3">
                            <button className={`btn bg-[#26A85E] hover:bg-[#26A85E] rounded-xl hover:outline-none hover:border-none w-12`}></button>
                            <p>Booked By You</p>
                        </div>
                        <div className="flex items-center gap-4 ml-10 my-3">
                            <button className={`btn bg-[#D5D6D9] hover:bg-[#D5D6D9] rounded-xl hover:outline-none hover:border-none  w-12`}></button>
                            <p className="py-2">Blocked Seats</p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="border space-y-2 p-4">
                            <p className="text-sm">Pickup Points</p>
                            <input className="w-full p-1 border rounded-md" type="text" name="" defaultValue={pickPoint} disabled={true} id="" />
                            <p className="text-sm">Dropping Points</p>
                            <input className="w-full p-1 border rounded-md" type="text" name="" defaultValue={dropPoint} disabled={true} id="" />
                            <p className="text-sm">Journey Date</p>
                            <input className="w-full p-1 border rounded-md" type="text" name="" defaultValue={journeyDate} disabled={true} id="" />
                            {
                                selectedSeats.length > 0 && (
                                    <>
                                        <div className="mt-12">
                                            <p className=" mt-4 p-2 bg-[#26A85E] font-semibold text-white rounded-t-lg text-lg">Selected Seats</p>
                                            {selectedSeats.map((seat, index) => (
                                                <div key={index} className="flex justify-between border pr-8">
                                                    <p className=" p-2">{seat}</p>
                                                    <p className="p-2">${busInfo.price}</p>
                                                </div>
                                            ))}
                                            <div className="flex justify-between pr-8">
                                                <p className=" mt-2 px-1">Total Price</p>
                                                <p className="p-2">${selectedSeats.length * busInfo.price}</p>
                                            </div>
                                        </div>
                                        <button className="btn bg-[#26A85E] text-white font-semibold" onClick={handleContinue}>Continue</button>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default BusTicket;
