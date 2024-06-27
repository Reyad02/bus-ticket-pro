
const Amenities = ({icon, title}) => {
    return (
        <div className="flex flex-col border shadow-xl hover:shadow-green-300 p-4 items-center hover:text-green-700 gap-3" >
            <div className=" text-5xl">
                {icon}
            </div>
            {/* <p>---------</p> */}
            <hr className="border-2 w-16"/>
            <p className="text-black">{title}</p>
        </div>
    );
};

export default Amenities;