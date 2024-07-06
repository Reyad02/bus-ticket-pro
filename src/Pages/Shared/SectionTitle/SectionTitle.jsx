
const SectionTitle = ({title, subTitle}) => {
    return (
        <div className='max-w-2xl mx-auto my-12 space-y-2'>
            <h1 className="text-4xl text-center font-semibold">{title}</h1>
            <h1 className=" text-center">{subTitle}</h1>
        </div>
    );
};

export default SectionTitle;