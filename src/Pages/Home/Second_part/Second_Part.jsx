import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { IoSearch } from "react-icons/io5";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import Amenities from '../../Shared/Amenities/Amenities';
import { FaWifi } from "react-icons/fa6";
import { RiSofaLine } from "react-icons/ri";
import { BiSolidCoffeeTogo } from "react-icons/bi";
import { BiSolidDrink } from "react-icons/bi";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { MdDateRange } from "react-icons/md";

const Second_Part = () => {
    return (
        <div className='px-4'>

            {/* 1st part --> Ticket steps */}

            <div className='max-w-7xl mx-auto '>
                <SectionTitle title={"Get Your Tickets With Just 3 Steps"} subTitle={"Have a look at our popular reason. why you should choose you bus. Just a Bus and get a ticket for your great journey. !"}></SectionTitle>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                    <div className='shadow-md space-y-2 p-6'>
                        <div className='flex justify-center '>
                            <div className=" border bg-green-700 px-2 py-1 rounded-full absolute -mr-12 text-white">01</div>
                            <div className='rounded-full p-2 bg-[#E6F5ED]'>
                                <div className='rounded-full text-2xl p-6  text-green-700 bg-[#C3E7D2]'>
                                    <IoSearch></IoSearch>
                                </div>
                            </div>
                        </div>
                        <h1 className='text-2xl text-center font-semibold'>Search Your Bus</h1>
                        <p className='text-center'>Choose your origin, destination,Just choose a Bus journey dates and search for buses</p>
                    </div>

                    <div className='shadow-md space-y-2 p-6'>
                        <div className='flex justify-center '>
                            <div className=" border bg-green-700 px-2 py-1 rounded-full absolute -mr-12 text-white">02</div>
                            <div className='rounded-full p-2 bg-[#E6F5ED]'>
                                <div className='rounded-full text-2xl p-6  text-green-700 bg-[#C3E7D2]'>
                                    <IoSearch></IoSearch>
                                </div>
                            </div>
                        </div>
                        <h1 className='text-2xl text-center font-semibold'>Choose The Ticket</h1>
                        <p className='text-center'>Choose your origin, destination,Just choose a Bus journey dates and search for buses</p>
                    </div>

                    <div className='shadow-md space-y-2 p-6'>
                        <div className='flex justify-center '>
                            <div className=" border bg-green-700 px-2 py-1 rounded-full absolute -mr-12 text-white">03</div>
                            <div className='rounded-full p-2 bg-[#E6F5ED]'>
                                <div className='rounded-full text-2xl p-6  text-green-700 bg-[#C3E7D2]'>
                                    <FaMoneyBill1Wave></FaMoneyBill1Wave>
                                </div>
                            </div>
                        </div>
                        <h1 className='text-2xl text-center font-semibold'>Pay Bill</h1>
                        <p className='text-center'>Choose your origin, destination,Just choose a Bus journey dates and search for buses</p>
                    </div>
                </div>
            </div>

            {/* 2nd part --> Amenities */}
            <SectionTitle title={"Our Amenities"} subTitle={"Have a look at our popular reason. why you should choose you bus.Just choose a Bus and get a ticket for your great journey!"}></SectionTitle>
            <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-10 max-w-5xl mx-auto'>
                <Amenities icon={<FaWifi></FaWifi>} title={"Wifi"}></Amenities>
                <Amenities icon={<RiSofaLine></RiSofaLine>} title={"Pillow"}></Amenities>
                <Amenities icon={<BiSolidCoffeeTogo></BiSolidCoffeeTogo>} title={"Water Bottle"}></Amenities>
                <Amenities icon={<BiSolidDrink></BiSolidDrink>} title={"Soft Drinks"}></Amenities>
            </div>

            {/* 3rd part --> Testimonials */}
            <div className='my-10 bg-[#F7F7F7] py-10'>
                <SectionTitle className="" title={"Our Testimonials"} subTitle={"Have a look at our popular reason. why you should choose you bus. Just choose a Bus and get a ticket for your great journey!"}></SectionTitle>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-10"
                >
                    <SwiperSlide>
                        <div className='bg-white shadow-xl rounded-lg text-center   max-w-5xl mx-auto space-y-4 py-8'>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsum earum corporis, ea illum maxime harum sequi ad. Voluptatibus, consequuntur vero modi minus iste facere cumque quos in porro laborum.</p>
                            <div className='flex justify-center'>
                                <img src="https://i.postimg.cc/gk9WXRQL/images-2.jpg" className='rounded-full w-24' alt="" />
                            </div>
                            <p className='text-xl'>Jack Boss</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white shadow-xl rounded-lg text-center   max-w-5xl mx-auto space-y-4 py-8'>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsum earum corporis, ea illum maxime harum sequi ad. Voluptatibus, consequuntur vero modi minus iste facere cumque quos in porro laborum.</p>
                            <div className='flex justify-center'>
                                <img src="https://i.postimg.cc/gk9WXRQL/images-2.jpg" className='rounded-full w-24' alt="" />
                            </div>
                            <p className='text-xl'>Jack Boss</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* 4th part --> Blogs */}
            <div className='max-w-7xl mx-auto'>
                <SectionTitle title={"Recent Blog Post"} subTitle={"Have a look at our popular reason. why you should choose you bus. Just choose a Bus and get a ticket for your great journey.!"}></SectionTitle>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                    <div className="card bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src="https://media.istockphoto.com/id/1154151207/photo/white-bus-traveling-on-the-asphalt-road-around-line-of-trees-in-rural-landscape-at-sunset.webp?b=1&s=170667a&w=0&k=20&c=Xkxq_jMAmKrvcUwmRQJdYB2VXDorGbTYyw7fzHuY-hs="
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <p className='flex items-center gap-1 border-b-2 pb-2'><MdDateRange className='text-green-700'></MdDateRange>19 Feb 2024</p>
                            <h2 className="card-title">
                                Lorem ipsum dolor sit amet.
                            </h2>
                            <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, fugit consectetur reprehenderit voluptate aut ratione...</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src="https://www.shutterstock.com/image-photo/bus-traveling-on-asphalt-road-600nw-1345741577.jpg"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <p className='flex items-center gap-1 border-b-2 pb-2'><MdDateRange className='text-green-700'></MdDateRange>19 Feb 2024</p>
                            <h2 className="card-title">
                                Lorem ipsum dolor sit amet.
                            </h2>
                            <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, fugit consectetur reprehenderit voluptate aut ratione...</p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src="https://t3.ftcdn.net/jpg/06/30/73/36/360_F_630733696_tw55bMDN8dgYYhuh2nfa4d36ozyilIzU.jpg"
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <p className='flex items-center gap-1 border-b-2 pb-2'><MdDateRange className='text-green-700'></MdDateRange>19 Feb 2024</p>
                            <h2 className="card-title">
                                Lorem ipsum dolor sit amet.
                            </h2>
                            <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, fugit consectetur reprehenderit voluptate aut ratione...</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Second_Part;