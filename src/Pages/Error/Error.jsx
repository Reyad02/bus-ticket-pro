import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className=" mt-8 lg:mt-28">
            <div className=" space-y-4 ">
                <div
                    className="hero items-end bg-cover h-full justify-end mt-4 relative z-10"
                    style={{
                        backgroundImage: "url(https://i.postimg.cc/XJf3Kw7g/61f118f07f1151643190512-1.png)",
                    }}>
                    <div className=" ">
                        <div className="pt-6 ">
                            <img src="https://i.ibb.co/bNpQR0R/6209144de6ed01644762189.png" className="animate-move " alt="" />
                        </div>
                    </div>
                </div>
                <p className="font-bold text-6xl text-center ">Page not found </p>
                <p className="text-xl max-w-md mx-auto text-center">page you are looking for doesn't exist or an other error ocurred
                    or temporarily unavailable.</p>
                <div className="text-center">
                    <Link to={"/"} className="btn bg-green-700 text-white ">Go Back Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;