import { useContext, useEffect, useState } from "react";
import { getPoints } from "../../utils/storage";
import { BusContext } from "../../provider/BusProvider";
import { Helmet } from "react-helmet-async";
import Banner from "../Shared/Banner/Banner";
import { Link } from "react-router-dom";
import axiosBusInfo from "../../utils/axiosBusInfo";
import { FaBus } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import moment from 'moment';

const Ticket = () => {
    const { pickPoint, dropPoint, journeyDate } = getPoints();
    const currentDate = new Date().toLocaleDateString('en-GB');
    const { bus, setBus } = useContext(BusContext);
    const [filterBus, setFilterBus] = useState([]);
    const [acBus, setAcBus] = useState(false);
    const [nonAcBus, setNonAcBus] = useState(false);

    const handleAcBus = (value, checked) => {
        if (checked && value && !nonAcBus) {
            setAcBus(true)
            const filteredBus = bus.filter((eachBus) => eachBus.type === value);
            setFilterBus(filteredBus);
        }
        else if (checked && value && nonAcBus) {
            setAcBus(true)
            setFilterBus(bus);
        }
        else if (!checked && nonAcBus) {
            setAcBus(false);
            const filteredBus = bus.filter((eachBus) => eachBus.type === "Non-AC");
            setFilterBus(filteredBus);
        }
        else if (!checked && !nonAcBus) {
            setAcBus(false);
            setNonAcBus(false)
            setFilterBus(bus);
        }
        else {
            setFilterBus(bus);
        }
    }

    const handleNonAcBus = (value, checked) => {
        if (checked && value && !acBus) {
            setNonAcBus(true)
            const filteredBus = bus.filter((eachBus) => eachBus.type === value);
            setFilterBus(filteredBus);
        }
        else if (checked && value && acBus) {
            setNonAcBus(true)
            setFilterBus(bus);
        }
        else if (!checked && acBus) {
            setNonAcBus(false);
            const filteredBus = bus.filter((eachBus) => eachBus.type === "AC");
            setFilterBus(filteredBus);
        }
        else if (!checked && !acBus) {
            setAcBus(false);
            setNonAcBus(false)
            setFilterBus(bus);
        }
        else {
            setFilterBus(bus);
        }

    }


    useEffect(() => {
        axiosBusInfo({ pickupPoint: pickPoint, droppingPoint: dropPoint })
            .then(response => {
                const currentTime = new Date();
                const filteredDateBuses = 
                // journeyDate === currentDate ?
                //     response.data.filter(b => {
                //         const departureTime = moment(b.departure_time, 'HH:mm A').toDate();
                //         return departureTime >= currentTime;
                //     }) 
                //     : 
                    response.data;

                setBus(filteredDateBuses)
                setFilterBus(filteredDateBuses);
            })
            .catch(error => {
                console.error('Error making GET request:', error);
            });
    }, [currentDate, setBus, journeyDate, pickPoint, dropPoint])
    
    return (
        <div className="">
            <Helmet>
                <title>Ticket Pro - Ticket</title>
            </Helmet>
            <Banner title={"Ticket"}></Banner>
            {/* {bus} */}
            <div className=" flex flex-col lg:flex-row  ">
                <div className="drawer lg:drawer-open lg:w-1/4 ">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        {/* Page content here */}
                        <label htmlFor="my-drawer-2" className="btn bg-[#15803D] text-white mt-4 drawer-button lg:hidden">
                            Filter
                        </label>
                    </div>
                    <div className="drawer-side lg:ml-12 mt-12">
                        {/* <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> */}
                        <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4 rounded">
                            <p className="text-[#424248] font-semibold text-2xl mt-2 pb-6 border-b-2 ">Filter</p>
                            <p className="text-[#424248] font-semibold text-xl mt-6">Vehicle Type</p>
                            {/* Sidebar content here */}
                            <div className="mt-4">
                                <div className="flex items-center mb-4">
                                    <input id="default-checkbox" name="list" type="checkbox" value="AC" className="w-4 h-4   border-[#424248] rounded   " onClick={(e) => handleAcBus(e.target.value, e.target.checked)} />
                                    <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-[424248]">AC</label>
                                </div>
                                <div className="flex items-center">
                                    <input id="default-checkbox" name="list" type="checkbox" value="Non-AC" className="w-4 h-4   border-[#424248] rounded   " onClick={(e) => handleNonAcBus(e.target.value, e.target.checked)} />
                                    <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-[424248]">Non-AC</label>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="lg:w-3/4 mt-12">
                    <div className="mx-auto max-w-5xl">
                        {
                            filterBus.length > 0 ? (
                                filterBus.map((eachBus) => (
                                    <div key={eachBus.bus_num} className="mb-8 bg-base-200 p-4 rounded  px-10 text-[#424248]">
                                        <div className="flex justify-between border-b-2 pb-4">
                                            <div className="space-y-1">
                                                <p className="font-semibold text-xl">Bus Num - <span className="uppercase">{eachBus.bus_num}</span></p>
                                                <p className="text-xs">Seat Layout - {eachBus.seat_layout}</p>
                                                <p className="flex gap-2 items-center text-sm text-[#EABA11]"><FaBus></FaBus> {eachBus.type}</p>
                                            </div>
                                            <div className=" space-y-1">
                                                <p className="flex gap-4 items-center font-semibold text-xl">{eachBus.departure_time} <span className="text-[#15803D]"><FaLongArrowAltRight></FaLongArrowAltRight></span> {eachBus.arrival_time}</p>
                                                <div className=" flex justify-between px-4">
                                                    <p className=" ">{eachBus.route_options[0]} </p>
                                                    <p className="   ">{eachBus.route_options[eachBus.route_options.length - 1]}</p>
                                                </div>
                                            </div>
                                            <div className=" flex flex-col justify-center items-center gap-2">
                                                <p className="text-xl text-[#15803D]">${eachBus.price}.00</p>
                                                {/* <p className="text-sm">Off Days: <span className="badge badge-primary badge-outline text-xs bg-[#EAE8FD]">{eachBus.off_days[0]}</span></p> */}
                                                <Link to={`/ticket/${eachBus.bus_num}`} className="text-white bg-[#15803D] rounded-md py-1 px-2">Select Seat</Link>
                                            </div>
                                        </div>
                                        <div className="pt-4 flex gap-2 text-lg">
                                            <p className="text-[#777777] flex font-semibold">Facilities - </p>
                                            <div className="flex gap-4">

                                                {
                                                    eachBus.facilities.map((facility) => <div key={facility.name} className="">
                                                        <span className="text-base bg-white px-2 py-1 rounded-full text-[#777777]">{facility.name}</span>
                                                    </div>)
                                                }
                                            </div>
                                        </div>

                                    </div>
                                ))
                            ) : (
                                <p>No buses available.</p>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;