import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../../provider/AuthProvider";

const AddRoute = () => {
    const token = localStorage.getItem("token");
    const { user } = useContext(AuthContext);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const { isPending, isError, data: routes, error, refetch } = useQuery({
        queryKey: ["busDetails"],
        queryFn: () => axios.get("/routes", {
            headers: {
                Authorization: `Bearer ${token}`,
                Email: user.email // Assuming `user.email` contains the user's email
            }
        }).then(res => res.data)
    })
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const stops = data.bus_stops.split(",");
        const details = {
            routeName: data.routeName,
            stops: stops
        }
        // console.log(details);
        axios.post("/new_route", { details }, {
            headers: {
                Authorization: `Bearer ${token}`,
                Email: user.email // Assuming `user.email` contains the user's email
            }
        })
            .then(response => {
                console.log(response.data)
                setIsModalOpen(false);
                if (response.data.insertedId) {
                    refetch();
                }
            })

    }

    const handleAddRoute = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

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
                <title>Ticket Pro - Add Bus</title>
            </Helmet>
            <div>
                <h1 className="text-xl font-semibold">New Route</h1>
                <div className="mt-4">
                    <div className="mb-4 text-center">
                        <button onClick={handleAddRoute} className="btn">Add New Route</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="bg-[#2B3440] text-[#D7DDE4]">
                                    <th>Route</th>
                                    <th>Bus Stops</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    routes.map((route, idx) => (
                                        <tr key={idx} className="hover">
                                            <td>{route.routeName}</td>
                                            <td>{route.stops?.join(" → ")}</td>
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
                            <h3 className="font-semibold text-xl mb-2">Add New Route</h3>
                            <form className="space-y-1" onSubmit={handleSubmit(onSubmit)}>
                                {/* register your input into the hook by invoking the "register" function */}
                                <p className="flex gap-2 "><strong>Route:</strong> <input className="border-[#2B3440] flex-1 pl-2 rounded border"  {...register("routeName")} /></p>
                                <p className="flex gap-2 "><strong>Bus Stops:</strong> <input className="border-[#2B3440] flex-1 pl-2 rounded border" placeholder={"Please write stops using comma separated..."} {...register("bus_stops")} /></p>

                                {errors.exampleRequired && <span>This field is required</span>}

                                <div className="mt-2 text-center">
                                    <input className="btn bg-blue-200 text-blue-700" type="submit" />
                                </div>
                            </form>

                            <div className="modal-action">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleCloseModal}>✕</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddRoute;