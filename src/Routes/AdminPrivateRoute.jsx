import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const AdminPrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [tokenLoading, setTokenLoading] = useState(true);

    useEffect(() => {
        const checkToken = () => {
            const token = localStorage.getItem('token');
            if (token) {
                setTokenLoading(false); 
            } else {
                setTokenLoading(true); 
            }
        };
        checkToken();
    }, [user, loading]);

    if (loading || tokenLoading) {
        return (
            <div className="text-center h-screen flex justify-center items-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }

    if (user?.email === import.meta.env.VITE_ADMIN) {
        return children;
    }

    return <Navigate to={"/"} />
};

export default AdminPrivateRoute;