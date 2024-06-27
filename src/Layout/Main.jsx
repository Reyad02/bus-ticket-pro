import { Outlet } from 'react-router-dom';
import TopAddress from '../Pages/Shared/TopAddress/TopAddress';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <TopAddress></TopAddress>
            <Navbar></Navbar>
            This is main layout
            <Outlet></Outlet>
        </div>
    );
};

export default Main;