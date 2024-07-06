import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = ({ date, title, content }) => {
    return (
        <Link>
            <div className="card bg-base-100 shadow-xl h-full rounded-none">
                <figure>
                    <img
                        src="https://media.istockphoto.com/id/1154151207/photo/white-bus-traveling-on-the-asphalt-road-around-line-of-trees-in-rural-landscape-at-sunset.webp?b=1&s=170667a&w=0&k=20&c=Xkxq_jMAmKrvcUwmRQJdYB2VXDorGbTYyw7fzHuY-hs="
                        alt="Shoes" className="hover:scale-105 transition-transform transform" />
                </figure>
                <div className="card-body">
                    <p className='flex items-center gap-1 border-b-2 pb-2'><MdDateRange className='text-green-700'></MdDateRange>{date}</p>
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <p className='text-justify'>{content}</p>
                </div>
            </div>
        </Link>
    );
};

export default Card;