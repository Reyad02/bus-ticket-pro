import { useParams } from "react-router-dom";

const PaymentFail = () => {
    const { id } = useParams();
    localStorage.removeItem("seats");
    localStorage.removeItem("bus_name");
    return (
        <div className="max-w-7xl mx-auto">
            payment failed: {id}

        </div>
    );
};

export default PaymentFail;