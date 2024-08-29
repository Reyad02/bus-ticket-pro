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

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
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
                element: <PaymentSuccess></PaymentSuccess>
            },
            {
                path: "/paymentFail/:id",
                element: <PaymentFail></PaymentFail>
            },
        ],
    },
    {
        path: "/admin",
        element: <PrivateRoute><AdminDashboard></AdminDashboard></PrivateRoute>,
        children: [
            {
                path: "",
                element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>
            },
            {
                path: "busInfo",
                element: <PrivateRoute><BusInfo></BusInfo></PrivateRoute>
            },
            {
                path: "ticketInfo",
                element: <PrivateRoute><BookedTicket></BookedTicket></PrivateRoute>
            },
            {
                path: "add_Bus",
                element: <PrivateRoute><AddBus></AddBus></PrivateRoute>
            },
        ]
    },
]);

export default router;