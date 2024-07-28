import { Helmet } from "react-helmet-async";
import Banner from "../Shared/Banner/Banner";
import Card from "../Shared/Card/Card";

const Blog = () => {
    return (
        <div>
            <Helmet>
                <title>Ticket Pro - Blog</title>
            </Helmet>
            <Banner title={"Blog Page"}></Banner>
            <div className="max-w-7xl mx-auto my-10 ">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
                    <Card title={"This is test car..."} content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry..."} date={"16 Feb 2024"} ></Card>
                    <Card title={"This is test card"} content={"Lorem Ipsum is simply dummy text printing and typesetting industry..."} date={"15 Feb 2024"} ></Card>
                    <Card title={"This is card fot test"} content={"Lorem Ipsum is t of the printing and typesetting industry..."} date={"12 Jan 2024"}></Card>
                    <Card title={"This is test car..."} content={"Lorem Ipsum is simply dummy text of the printing and typesetting ..."} date={"12 Jan 2024"} ></Card>
                    <Card title={"This is card fot test"} content={"Lorem Ipsum is t of the printing and typesetting industry..."} date={"12 Jan 2024"}></Card>
                    <Card title={"This is test car..."} content={"Lorem Ipsum is simply dummy text of the printing and typesetting ..."} date={"12 Jan 2024"} ></Card>
                </div>
            </div>
        </div>
    );
};

export default Blog;