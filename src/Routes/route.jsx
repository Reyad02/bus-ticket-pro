import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import FAQ from "../Pages/FAQ/FAQ";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Ticket from "../Pages/Ticket/Ticket";
import BusTicket from "../Pages/BusTicket/BusTicket";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import PaymentSuccess from "../Pages/PaymentSuccess/PaymentSuccess";
import PaymentFail from "../Pages/PaymentFail/PaymentFail";
import AdminDashboard from "../Layout/AdminDashboard";
import PrivateRoute from "./PrivateRoute"
import DashBoard from "../Pages/Admin/DashBoard/DashBoard";
import BusInfo from "../Pages/Admin/BusInfo/BusInfo";
import BookedTicket from "../Pages/Admin/BookedTicket/BookedTicket";
import AddBus from "../Pages/Admin/AddBus/AddBus";
import AddRoute from "../Pages/Admin/AddRoute/AddRoute";
import UserDashboard from "../Pages/UserDashboard/UserDashboard";
import AdminPrivateRoute from "./AdminPrivateRoute";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/FAQ",
                element: <FAQ></FAQ>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/ticket",
                element: <Ticket></Ticket>
            },
            {
                path: "/ticket/:bus_name",
                element: <BusTicket></BusTicket>,
            },
            {
                path: "/registration",
                element: <Registration></Registration>,
            },
            {
                path: "/Signin",
                element: <Login></Login>,
            },
            {
                path: "/paymentSuccess/:id",
                element: <PrivateRoute><PaymentSuccess></PaymentSuccess></PrivateRoute>
            },
            {
                path: "/paymentFail/:id",
                element: <PrivateRoute><PaymentFail></PaymentFail></PrivateRoute>
            },
            {
                path: "/dashboard",
                element: <PrivateRoute><UserDashboard></UserDashboard></PrivateRoute>
            },
        ],
    },
    {
        path: "/admin",
        element: <AdminPrivateRoute><AdminDashboard></AdminDashboard></AdminPrivateRoute>,
        children: [
            {
                path: "",
                element: <AdminPrivateRoute><DashBoard></DashBoard></AdminPrivateRoute>
            },
            {
                path: "busInfo",
                element: <AdminPrivateRoute><BusInfo></BusInfo></AdminPrivateRoute>
            },
            {
                path: "ticketInfo",
                element: <AdminPrivateRoute><BookedTicket></BookedTicket></AdminPrivateRoute>
            },
            {
                path: "add_Bus",
                element: <AdminPrivateRoute><AddBus></AddBus></AdminPrivateRoute>
            },
            {
                path: "add_Route",
                element: <AdminPrivateRoute><AddRoute></AddRoute></AdminPrivateRoute>
            },
        ]
    },
]);

export default router;