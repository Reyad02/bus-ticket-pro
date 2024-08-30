import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const AdminPrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="text-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }

    if (user?.email === import.meta.env.VITE_ADMIN) {
        // if (localStorage.getItem("token")) {
            return children;
        // }
    }

    return <Navigate to={"/"} />
};

export default AdminPrivateRoute;