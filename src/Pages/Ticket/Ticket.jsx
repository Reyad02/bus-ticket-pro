import { useContext, useEffect } from "react";
// import useBuses from "../../Hooks/useBuses";
import { getPoints } from "../../utils/storage";
import { BusContext } from "../../provider/BusProvider";
import { Helmet } from "react-helmet-async";
import Banner from "../Shared/Banner/Banner";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import axiosBusInfo from "../../utils/axiosBusInfo";
import { FaBus } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";


const Ticket = () => {
    const { pickPoint, dropPoint } = getPoints();
    const { bus, setBus } = useContext(BusContext);
    console.log(Array.isArray(bus));
    // console.log(pickPoint);
    // console.log(dropPoint);
    useEffect(() => {
        axiosBusInfo({ pickupPoint: pickPoint, droppingPoint: dropPoint })
            .then(response => {
                // console.log(response.data);
                setBus(response.data)
            })
            .catch(error => {
                console.error('Error making GET request:', error);
            });
    }, [pickPoint, dropPoint, setBus])
    return (
        <div className="">
            <Helmet>
                <title>Ticket Pro - FAQs</title>
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
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 rounded">
                            {/* Sidebar content here */}
                            <li><a>Sidebar Item 1</a></li>
                            <li><a>Sidebar Item 2</a></li>
                        </ul>
                    </div>
                </div>
                <div className="lg:w-3/4 mt-12">
                    {/* {
                        bus.map((eachBus) => <div key={eachBus.bus_num}>{eachBus}</div>)
                    } */}
                    <div className="mx-auto max-w-5xl">
                        {
                            bus.length > 0 ? (
                                bus.map((eachBus) => (
                                    <div key={eachBus.bus_num} className="mb-8 bg-base-200 p-4 rounded  px-10 text-[#424248]">
                                        <div className="flex justify-between border-b-2 pb-2">
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
                                                <p className="text-sm">Off Days: <span className="badge badge-primary badge-outline text-xs bg-[#EAE8FD]">{eachBus.off_days[0]}</span></p>
                                                <Link className="text-white bg-[#15803D] rounded-md py-1 px-2">Select Seat</Link>
                                            </div>
                                        </div>
                                        <div className="pt-2 flex gap-2 text-lg">
                                            <p className="text-[#777777] flex font-semibold">Facilities - </p>
                                            <div className="flex gap-2">

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
                                <p>No buses available for the selected route.</p>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;