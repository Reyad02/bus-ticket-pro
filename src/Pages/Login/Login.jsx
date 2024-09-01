import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";

const Login = () => {
    const [error, setError] = useState(null);
    const { login, googleLogin, facebookLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password).then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            setError(null);
            if (email === import.meta.env.VITE_ADMIN) {
                // navigate("/admin")
                window.location.replace("http://localhost:5173/admin");
            }
            else {
                if (location?.state == "/admin") {
                    navigate("/")
                } else {
                    navigate(location?.state ? location?.state : "/")
                }
            }
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    const handleGoogleLogin = () => {
        googleLogin().then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            setError(null);
            if (location?.state == "/admin") {
                navigate("/")
            } else {
                navigate(location?.state ? location?.state : "/")
            }

        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    const handleFacebookLogin = () => {
        facebookLogin().then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            setError(null);
            if (location?.state == "/admin") {
                navigate("/")
            } else {
                navigate(location?.state ? location?.state : "/")
            }

        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }
    return (
        <>
            <Helmet>
                <title>Ticket Pro - Sign In</title>
            </Helmet>
            <div className="max-w-7xl mx-auto mt-8">
                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row-reverse  w-full bg-base-200 rounded-xl ">
                        <div className="flex justify-center  ">
                            <img src="https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2020/07/JR-Highway-Bus-iStock-1179839295-TokioMarineLife-1024x683.jpg" className="rounded-lg" alt="Bus Image" />
                        </div>
                        <div className="card bg-base-100 pb-4 w-full max-w-sm shrink-0 shadow-2xl">
                            <h1 className="text-3xl font-bold text-center my-4 text-[#15803D]">Login</h1>
                            <form className="card-body pb-2 pt-0 " onSubmit={handleFormSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="******" className="input input-bordered" required />
                                </div>
                                <p className="text-red-600 text-sm">{error}</p>
                                <div className="form-control mt-2">
                                    <button className="btn bg-[#15803D] text-white">Login</button>
                                </div>
                            </form>
                            <div className="px-8">
                                <div className="divider my-0  "></div>
                            </div>
                            <div className="flex justify-center gap-2">
                                <button className="btn btn-circle" onClick={handleGoogleLogin}>
                                    <FaGoogle />
                                </button>
                                <button className="btn btn-circle text-lg" onClick={handleFacebookLogin}>
                                    <FaMeta />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;