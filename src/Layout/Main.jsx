import { Outlet } from 'react-router-dom';
import TopAddress from '../Pages/Shared/TopAddress/TopAddress';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <TopAddress></TopAddress>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;