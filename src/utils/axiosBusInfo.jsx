import axios from "axios";

const axiosBusInfo = ({ pickupPoint, droppingPoint }) => {
    return axios.get(`/validatePoints/${pickupPoint}/${droppingPoint}`, {
        params: {
            pickPoint: pickupPoint,
            dropPoint: droppingPoint
        }
    })
    // return busInfo;
};
export default axiosBusInfo;