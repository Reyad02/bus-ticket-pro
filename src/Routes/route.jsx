import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import FAQ from "../Pages/FAQ/FAQ";
import Blog from "../Pages/Blog/Blog";

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

        ],
    },
]);

export default router;