import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TopAddress from '../Pages/Shared/TopAddress/TopAddress';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import axios from 'axios';

axios.defaults.baseURL="http://localhost:3000";

const Main = () => {
    const [scrollY, setScrollY] = useState(0);
    const [bus, setBus] = useState([]);
    

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            // console.log(scrollY)
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

    return (
        <div>
            <TopAddress />
            <div className='relative z-50  '>
                <Navbar isSticky={scrollY >= 50} />
            </div>
            <div className='relative z-10 '>
                <Outlet />
            </div>
            <Footer />
            {/* <div>Scroll Y: {scrollY}</div> Display the scroll value */}
        </div>
    );
};

export default Main;
