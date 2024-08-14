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

        ],
    },
]);

export default router;