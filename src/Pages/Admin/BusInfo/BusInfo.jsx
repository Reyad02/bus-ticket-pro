import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../../provider/AuthProvider";


const BusInfo = () => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem("token");
    const { isPending, isError, data: busDetails, error, refetch } = useQuery({
        queryKey: ["busDetails"],
        queryFn: () => axios.get("/allBusInfo", {
            headers: {
                Authorization: `Bearer ${token}`,
                Email: user.email // Assuming `user.email` contains the user's email
            }
        }).then(res => res.data)
    })
    // const [busDetails, setBusDetails] = useState([]);
    const [selectedBus, setSelectedBus] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [route_options, setRoute_Options] = useState([]);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        // console.log(data)
        setIsModalOpen(false);
        // data.token = localStorage.getItem("token"),

            axios.put(`/busInfo/update/${data.bus_num}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Email: user.email // Assuming `user.email` contains the user's email
                }
            })
                .then(res => {
                    if (res.data.modifiedCount > 0) {
                        refetch();
                    }
                })
    }

    const timeStringToTime = (time) => {
        let [timePart, modifier] = time.split(" ");
        let [hour, minute] = timePart.split(":");

        if (modifier === "PM" && hour !== "12") {
            hour = parseInt(hour, 10) + 12
        } else if (modifier === "AM" && hour === "12") {
            hour = "00";
        }
        return `${hour}:${minute}`;
    }

    const handleUpdate = (bus) => {
        setSelectedBus(bus);
        setValue("bus_num", bus.bus_num);
        setValue("seat_layout", bus.seat_layout);
        setValue("departure_time", timeStringToTime(bus.departure_time));
        setValue("arrival_time", timeStringToTime(bus.arrival_time));
        setValue("price", bus.price);
        setValue("routeName", bus?.route?.routeName)
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedBus(null);
    };

    const handleDelete = (num) => {
        // console.log(num)
        axios.delete(`/busInfo/delete/${num}`,{
            headers: {
                Authorization: `Bearer ${token}`,
                Email: user.email // Assuming `user.email` contains the user's email
            }
        })
            .then(res => {
                // console.log(res.data)
                if (res.data.deletedCount > 0) {
                    refetch();
                }
            })
    };

    useEffect(() => {
        axios.get("/allRoutes")
            .then(response => {
                // console.log(response.data)
                setRoute_Options(response.data);
            })
    }, [])

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    if (isPending) {
        return (
            <div className="flex items-center justify-center h-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }


    return (
        <div>
            <Helmet>
                <title>Ticket Pro - Bus Details</title>
            </Helmet>
            <div className="">
                <h1 className="text-xl font-semibold text-center lg:text-left">Bus Details</h1>
                <div className="mt-4">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="bg-[#2B3440] text-[#D7DDE4]">
                                    <th>Bus Number</th>
                                    <th>Seat Layout</th>
                                    {/* <th>Route</th> */}
                                    <th>Departure Time</th>
                                    <th>Arrival Time</th>
                                    <th>Amount</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    busDetails.map((bus, idx) => (
                                        <tr key={idx} className="hover">
                                            <td>{bus.bus_num}</td>
                                            <td>{bus.seat_layout}</td>
                                            {/* <td>{bus.route_options[0]} - {bus.route_options[bus.route_options.length - 1]}</td> */}
                                            <td>{bus.departure_time}</td>
                                            <td>{bus.arrival_time}</td>
                                            <td>${bus.price}.00</td>
                                            <td className="flex justify-around">
                                                <button className="btn bg-blue-200 text-blue-700 btn-sm " onClick={() => handleUpdate(bus)}>Update</button>
                                                <button className="btn bg-red-200 text-red-700 btn-sm " onClick={() => handleDelete(bus.bus_num)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="modal-box bg-white p-6 rounded-lg">
                            <h3 className="font-semibold text-xl ">Update Bus Details</h3>
                            {selectedBus && (
                                <form className="space-y-1" onSubmit={handleSubmit(onSubmit)}>
                                    {/* register your input into the hook by invoking the "register" function */}
                                    <p className="flex gap-2"><strong>Bus Number:</strong> <input className="border-[#2B3440] flex-1 pl-2 rounded" defaultValue={selectedBus.bus_num} {...register("bus_num")} readOnly /></p>
                                    <p className="flex gap-2"><strong>Seat Layout:</strong> <input className="border-[#2B3440] flex-1 pl-2 rounded" defaultValue={selectedBus.seat_layout} {...register("seat_layout")} /></p>
                                    <p className="flex gap-2"><strong>Departure Time:</strong> <input type="time" className="border-[#2B3440] flex-1 pl-2 rounded" defaultValue={selectedBus.departure_time} {...register("departure_time")} /></p>
                                    <p className="flex gap-2"><strong>Arrival Time:</strong> <input type="time" className="border-[#2B3440] flex-1 pl-2 rounded" defaultValue={selectedBus.arrival_time} {...register("arrival_time")} /></p>
                                    <p className="flex gap-2"><strong>Price:</strong> <input className="border-[#2B3440] flex-1 pl-2 rounded" defaultValue={selectedBus.price} {...register("price")} /></p>
                                    <p className="flex gap-2"><strong>Route:</strong>
                                        <select className="border-[#2B3440] flex-1 pl-2 rounded" defaultValue={selectedBus?.route?.routeName} {...register("routeName")}>
                                            {
                                                route_options.map(eachRoute => (
                                                    <option key={eachRoute._id} value={eachRoute.routeName}>{eachRoute.routeName}</option>

                                                ))
                                            }
                                        </select>
                                    </p>

                                    {errors.exampleRequired && <span>This field is required</span>}

                                    <div className="mt-2 text-center">
                                        <input className="btn bg-blue-200 text-blue-700" type="submit" />
                                    </div>
                                </form>
                            )}

                            <div className="modal-action">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleCloseModal}>✕</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div >
    );
};

export default BusInfo;