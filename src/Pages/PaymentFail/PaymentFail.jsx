import { useParams } from "react-router-dom";

const PaymentFail = () => {
    const { id } = useParams();
    return (
        <div className="max-w-7xl mx-auto">
            payment failed: {id}
        </div>
    );
};

export default PaymentFail;