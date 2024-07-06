import Banner from "../Shared/Banner/Banner";

const About = () => {
    return (
        <div>
            <Banner title={"About"}></Banner>
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col lg:flex-row  justify-between gap-10 my-10">
                    <div className="space-y-2 flex-1">
                        <h2 className="text-3xl font-bold">Know Few Words About Autobus</h2>
                        <p className="text-xl font-medium">Lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sit reprehenderit non voluptas quam quod facilis, doloribus impedit magni. Numquam ipsum placeat ullam alias temporibus non quas aperiam odio pariatur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos eveniet inventore blanditiis maxime doloremque minima. Quisquam, ex! Architecto laudantium culpa cupiditate hic facere est magni, possimus repudiandae, rerum eius omnis.lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque excepturi sed possimus recusandae temporibus tempore, aspernatur, autem sequi natus iste fugit. Eaque vero temporibus illum quis beatae quam officia ad.ri sed possimus recusandae temporibus tempore, aspernatur, autem sequi natus iste fugit. Eaque vero temporibus sed possimus recusandae temporibus tempore, aspernatur, autem sequi natus iste fugit. Eaque vero temporibus illum quis beatae quam officia ad.</p>
                    </div>
                    <div className="flex-1">
                        <img src="https://i.postimg.cc/gjPtfxDn/blue-bus.avif" alt="" />
                    </div>
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl font-bold">About Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vel temporibus voluptatum quidem, blanditiis libero assumenda beatae ducimus placeat odio aperiam tenetur animi, reiciendis reprehenderit expedita nostrum a eum. Quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsum necessitatibus eum non quisquam! Quo esse est minima vero dolores eveniet voluptatibus nam. Veniam ad quae illum tenetur voluptates veritatis?</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vel temporibus voluptatum quidem, blanditiis libero assumenda beatae ducimus placeat odio aperiam tenetur animi, reiciendis reprehenderit expedita nostrum a eum. Quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsum necessitatibus eum non quisquam! Quo esse est minima vero dolores eveniet voluptatibus nam. Veniam ad quae illum tenetur voluptates veritatis?</p>
                </div>

                <div className="space-y-2 mt-10">
                    <h1 className="text-2xl font-bold">Why Make Bus Reservations With AutoBus
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vel temporibus voluptatum quidem, blanditiis libero assumenda beatae ducimus placeat odio aperiam tenetur animi, reiciendis reprehenderit expedita nostrum a eum. Quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsum necessitatibus eum non quisquam! Quo esse est minima vero dolores eveniet voluptatibus nam. Veniam ad quae illum tenetur voluptates veritatis?</p>
                    <ul className="list-disc list-inside">
                        <li>Free Cancellation</li>
                        <li>Instant Refunds</li>
                        <li>Easy & Quick Bus Booking</li>
                        <li>Exciting Cashback & Bus Offers</li>
                        <li>Best Price Assured</li>
                        <li>24/7 Customer Assistance</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;