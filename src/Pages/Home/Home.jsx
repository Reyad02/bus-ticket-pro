import Hero from "./Hero/Hero";
import Second_Part from "./Second_part/Second_Part";
import { Helmet } from 'react-helmet-async';

const Home = ({bus, setBus}) => {
    return (
        <div>
            <Helmet>
                <title>Ticket Pro - Home</title>
            </Helmet>
            <Hero></Hero>
            <Second_Part></Second_Part>
        </div>
    );
};

export default Home;