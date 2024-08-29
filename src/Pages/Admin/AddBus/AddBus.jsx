import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";

const AddBus = () => {
    const [route_options, setRoute_Options] = useState([]);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const facy = data.facilities.split(",");
        const facyObject = facy.map(faci => ({
            name: faci,
            available: true
        }))
        const details = {
            bus_num: data.bus_num,
            seat_layout: data.seat_layout,
            arrival_time: data.arrival_time,
            departure_time: data.departure_time,
            price: data.price,
            type: data.type,
            facilities: facyObject,
            isGoing: data.isGoing === "true" ? true : false,
            routeName: data.routeName
        }
        axios.post("/addBus", { details })
            .then(response => {
                console.log(response.data)
                if (response.data.insertedId) {
                    navigate("/admin/busInfo");
                }
            })

    }

    useEffect(() => {
        axios.get("/allRoutes")
            .then(response => {
                // console.log(response.data)
                setRoute_Options(response.data);
            })
    }, [])
    return (
        <div>
            <Helmet>
                <title>Ticket Pro - Add Bus</title>
            </Helmet>
            <div className="">
                <h1 className="text-xl font-semibold">New Bus</h1>
                <div className="mt-8 bg-base-200 px-4 pt-12 pb-8 rounded-md ">
                    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <div className="flex gap-8">
                            <p className="flex gap-2 w-[48%]"><strong>Bus Number:</strong> <input className="border-[#2B3440] flex-1 pl-2 rounded "  {...register("bus_num")} /></p>
                            <p className="flex gap-2 w-[48%]"><strong>Seat Layout:</strong> <input className="border-[#2B3440] flex-1 pl-2 rounded " {...register("seat_layout")} /></p>
                        </div>
                        <div className="flex gap-8">
                            <p className="flex gap-2 w-[48%]"><strong>Arrival Time:</strong> <input type="time" className="border-[#2B3440] flex-1 pl-2 rounded"  {...register("arrival_time")} /></p>
                            <p className="flex gap-2 w-[48%]"><strong>Departure Time:</strong> <input type="time" className="border-[#2B3440] flex-1 pl-2 rounded"  {...register("departure_time")} /></p>
                        </div>
                        <div className="flex gap-8">
                            <p className="flex gap-2 w-[48%]"><strong>Price:</strong> <input className="border-[#2B3440] flex-1 pl-2 rounded" {...register("price")} /></p>
                            <p className="flex gap-2 w-[48%]"><strong>Type:</strong>
                                <select className="border-[#2B3440] flex-1 pl-2 rounded" {...register("type")}>
                                    <option value="AC">AC</option>
                                    <option value="Non-AC">Non-AC</option>
                                </select>
                            </p>
                        </div>
                        <div className="flex gap-8">
                            <p className="flex gap-2 w-[48%]"><strong>Facilities:</strong> <input className="border-[#2B3440] flex-1 pl-2 rounded" {...register("facilities")} /></p>
                            <p className="flex gap-2 w-[48%]"><strong>Direction:</strong>
                                <select className="border-[#2B3440] flex-1 pl-2 rounded" {...register("isGoing")}>
                                    <option value={true}>Going</option>
                                    <option value={false}>Coming</option>
                                </select>
                            </p>
                        </div>
                        <p className="flex gap-2"><strong>Route:</strong>
                            <select className="border-[#2B3440] flex-1 pl-2 rounded" {...register("routeName")}>
                                {
                                    route_options.map(eachRoute => (
                                        <option key={eachRoute._id} value={eachRoute.routeName}>{eachRoute.routeName}</option>

                                    ))
                                }
                            </select>
                        </p>

                        {errors.exampleRequired && <span>This field is required</span>}

                        <div className="mt-2 text-center">
                            <input className="btn bg-blue-200 text-blue-700 mt-4" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBus;