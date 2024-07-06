
const Banner = ({ title }) => {
    return (
        <div>
            <div
                className="hero h-56"
                style={{
                    backgroundImage: "url(https://i.postimg.cc/05ppVWJk/desktop-flix-hero-q4-2021.jpg)",
                    "background-position": "top",

                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;