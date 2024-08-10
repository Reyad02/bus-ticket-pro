import { useContext, useEffect } from "react";
// import useBuses from "../../Hooks/useBuses";
import { getPoints } from "../../utils/storage";
import { BusContext } from "../../provider/BusProvider";
import { Helmet } from "react-helmet-async";
import Banner from "../Shared/Banner/Banner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import axiosBusInfo from "../../utils/axiosBusInfo";

const Ticket = () => {
    const { pickPoint, dropPoint } = getPoints();
    // console.log(pickPoint, dropPoint);
    // const {bus} = useBuses();
    // console.log("busses", bus)
    const navigate = useNavigate();
    const { bus, setBus } = useContext(BusContext);
    console.log("Bus", bus);
    console.log(pickPoint);
    console.log(dropPoint);
    useEffect(() => {
        // axios.get(`/validatePoints/${pickPoint}/${dropPoint}`, {
        //     params: {
        //         pickPoint: pickPoint,
        //         dropPoint: dropPoint
        //     }
        // })
        axiosBusInfo({ pickupPoint: pickPoint, droppingPoint: dropPoint })
        .then(response => {
                console.log(response.data);
                // if (response.data === "nothing") {
                //     navigate("/");
                // }
                // else {
                setBus(response.data)
                // removePoint();
                // setPoints(pickupPoint, droppingPoint);
                // navigate("/ticket")
                // }
            })
            .catch(error => {
                console.error('Error making GET request:', error);
            });
    }, [pickPoint, dropPoint, setBus])
    return (
        <div>
            <Helmet>
                <title>Ticket Pro - FAQs</title>
            </Helmet>
            <Banner title={"Ticket"}></Banner>
            {/* {bus} */}
            this is ticket page
        </div>
    );
};

export default Ticket;