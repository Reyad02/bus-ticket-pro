import axios from "axios";
import { CgCalendarDates } from "react-icons/cg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import Select from 'react-dropdown-select';
import { IoLocation } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { removePoint, setPoints } from "../../../utils/storage";
import { useNavigate } from "react-router-dom";
// import useBuses from "../../../Hooks/useBuses";
import { BusContext } from "../../../provider/BusProvider";
import axiosBusInfo from "../../../utils/axiosBusInfo";

const Hero = () => {
    const [startDate, setStartDate] = useState(null);
    const [pickupPoint, setPickupPoint] = useState("");
    const [droppingPoint, setDroppingPoint] = useState("");
    const [allAreas, setAllareas] = useState([]);
    const navigate = useNavigate();
    // const { setBus } = useBuses();
    const { setBus } = useContext(BusContext);



    const handleChange = (date) => {
        setStartDate(date);
    };

    const handleTicketForm = (e) => {
        e.preventDefault();
        const form = e.target;
        if (pickupPoint === "") {
            toast.error('Select Pickup Point!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }
        else if (droppingPoint === "") {
            toast.error("Select Dropping Point!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }
        else if (pickupPoint === droppingPoint) {
            toast.error("Must Have To Choose Different Pickup Point and Different Dropping Point!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }
        else if (!startDate) {
            toast.error("Select Your Journey Date!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }
        else {
            axiosBusInfo({ pickupPoint: pickupPoint, droppingPoint: droppingPoint })
                .then(response => {
                    if (response.data === "nothing") {
                        // navigate("/");
                        toast.error("No Bus Available!", {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    }
                    else {
                        setBus(response.data)
                        removePoint();
                        setPoints(pickupPoint, droppingPoint);
                        navigate("/ticket")
                    }
                })
                .catch(error => {
                    console.error('Error making GET request:', error);
                });
        }

    }

    useEffect(() => {
        axios.get('/area')
            .then(function (response) {
                setAllareas(response.data)
                // console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    return (
        <div className="bg-transparent">
            <div className="hero  relative z-50">
                <div className="hero-content w-full flex-col lg:flex-row ">
                    <div className="text-center lg:text-left lg:w-1/2 space-y-6">
                        <h1 className="text-5xl font-bold">Get Your Ticket Online, <br />Easy and Safely</h1>
                        <button className="text-white font-bold uppercase btn bg-[#26A85E] ">
                            Get Ticket Now
                        </button>
                    </div>
                    <div className="lg:w-5/12  ">
                        <p className="text-black text-2xl font-semibold mb-8">Choose Your Ticket</p>
                        <div className="card bg-base-100 shadow-2xl flex-1">
                            <form className="card-body" onSubmit={handleTicketForm}>
                                <div className="flex gap-2 flex-col md:flex-row ">

                                    {/* pickupPoint */}
                                    <div className="form-control w-1/2 ">
                                        <Select
                                            className="input pl-12 shadow-lg "
                                            placeholder="Pickup Point"
                                            options={allAreas}
                                            color="#26A85E"
                                            style={{
                                                paddingLeft: '2.75rem',
                                                fontSize: '1.2rem',
                                                borderRadius: "0.5rem",
                                            }}
                                            onChange={values => setPickupPoint(values[0].value)}

                                        />

                                        <div className=" absolute pt-4 pl-5 flex items-center ">
                                            <FaLocationArrow className="text-[#26A85E]" />
                                        </div>
                                    </div>

                                    {/* dropping point */}
                                    <div className="form-control w-1/2 ">
                                        <Select
                                            className="input pl-12 shadow-lg"
                                            placeholder="Dropping Point"
                                            options={allAreas}
                                            color="#26A85E"
                                            style={{
                                                paddingLeft: '2.75rem',
                                                fontSize: '1.2rem',
                                                borderRadius: "0.5rem"
                                            }}
                                            onChange={values => setDroppingPoint(values[0].value)}

                                        />

                                        <div className=" absolute pt-4 pl-5 flex items-center ">
                                            <IoLocation className="text-[#26A85E] text-xl" />
                                        </div>
                                    </div>
                                </div>

                                {/* date selection */}
                                <div className="relative form-control mt-2">
                                    <DatePicker selected={startDate} minDate={new Date()} onChange={handleChange} className="input input-bordered w-full pl-12 shadow-lg hover:border-[#26A85E] cursor-pointer " placeholderText="Departure Date" />
                                    <div className=" absolute pl-5 inset-y-0 flex items-center text-xl">
                                        <CgCalendarDates className="text-[#26A85E]" />
                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <div className="form-control mt-4 w-fit ">
                                        <button className="btn  px-10 font-bold text-white bg-[#26A85E]">Find Tickets</button>
                                    </div>
                                </div>
                            </form>
                            <ToastContainer
                                position="bottom-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="dark"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="hero items-end bg-cover h-full justify-end mt-4 relative z-10"
                style={{
                    backgroundImage: "url(https://i.postimg.cc/XJf3Kw7g/61f118f07f1151643190512-1.png)",
                }}>
                <div className=" ">
                    <div className="pt-6 ">
                        <img src="https://i.ibb.co/bNpQR0R/6209144de6ed01644762189.png" className="animate-move " alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;