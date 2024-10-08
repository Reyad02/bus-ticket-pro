import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="text-center h-screen flex justify-center items-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }

    if(user){
        return children;
    }

    return <Navigate to={"/Signin"} state={location.pathname} />
};

export default PrivateRoute;