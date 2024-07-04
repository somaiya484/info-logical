import {
    MdOutlineAssessment,
    MdOutlineDataExploration,
    MdOutlineCollectionsBookmark,
    MdRecommend,
} from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import Message from "../../components/Message";
import { IoMdCall } from "react-icons/io";
import Link from "next/link";


const DataVisualization = () => {
    const sections = [
        {
            id: 1,
            img: "/looker.png",
            title: "Looker Studio",
            description:
                "Our Expert Looker Master will transform your data into clear, actionable insights with Looker Studio. We design custom dashboards and reports that help you visualize your data and make informed business decisions.",
            link: "/contact",
        },
        {
            id: 2,
            img: "/powerBi.jpg",
            title: "Power BI",
            description:
                "Unlock the power of your data with Microsoft Power BI. Our experts create interactive dashboards and reports that provide in-depth insights into your business performance, helping you drive strategic decisions.",
            link: "/contact",
        },
    ];

    const processSteps = [
        {
            id: 1,
            icon: MdOutlineAssessment,
            title: "1. Data Assessment",
            description:
                "We start by assessing your current data sources and analytics needs.",
        },
        {
            id: 2,
            icon: MdOutlineDataExploration,
            title: "2. Data Collection & Integration",
            description:
                "We gather and integrate data from multiple sources to create a comprehensive dataset.",
        },
        {
            id: 3,
            icon: MdOutlineCollectionsBookmark,
            title: "3. Analysis & Visualization",
            description:
                "Using advanced analytics tools, we analyze the data and create visualizations that highlight key insights.",
        },
        {
            id: 4,
            icon: MdRecommend,
            title: "4. Reporting & Recommendations",
            description:
                "We provide detailed reports and recommendations based on our analysis, helping you understand and act on the insights.",
        },
        {
            id: 5,
            icon: FaHandsHelping,
            title: "5. Ongoing Support",
            description:
                "We offer continuous support to help you refine your data analytics strategy and ensure long-term success.",
        },
    ];

    const workSamples = [
        {
            id: 1,
            img: "https://cratosai-backend.itechnolabs.tech/images/17105094850.png",
            title: "Google Ads - Light",
            icon: MdOutlineAssessment,
        },
        {
            id: 2,
            img: "https://cratosai-backend.itechnolabs.tech/images/17105094850.png",
            title: "Google Ads - Light",
            icon: MdOutlineAssessment,
        },
        {
            id: 3,
            img: "https://cratosai-backend.itechnolabs.tech/images/17105094850.png",
            title: "Google Ads - Light",
            icon: MdOutlineAssessment,
        },
    ];

    return (
        <div className="bg-white text-black">
            
            <div className="bg-fixed bg-[url('/datavisualization.jpg')] h-[600px] w-full flex justify-center items-center relative overflow-auto">
                <div className="absolute inset-0 bg-black opacity-85"></div>
                <div className="text-center relative z-10 text-white">
                    <h1 className="font-semibold">Data Visualization</h1>
                    <h2 className="text-5xl my-8 leading-[50px] font-semibold">
                        Empower Your Business with{" "} <br />
                        <span className="text-gradient font-bold">Data Visualization</span>
                    </h2>
                    <p>
                        Our data analytics services at Info Logic Solution leverage powerful tools like Looker Studio and Power BI <br /> to transform raw data into actionable insights. We help you make informed decisions that<br /> drive growth and improve business performance.
                    </p>
                </div>
            </div>

            {/* Choose Yours one - 2nd section */}
            <h1 className="text-gradient font-bold text-center text-6xl mt-32 mb-10">
                Choose Yours one
            </h1>
            <div className="grid md:grid-cols-2 mx-6 md:mx-24 gap-16 mt-16">
                {sections.map((section) => (
                    <div key={section.id} className="shadow-xl rounded px-6 py-7">
                        {/* <img
                            src={section.img}
                            alt={section.title}
                            className="h-[370px] w-full bg-orange-300"
                        /> */}
                        <h2 className="text-4xl my-5">{section.title}</h2>
                        <p>{section.description}</p>
                        <Link href={section.link}>
                            <button className="secondary-button mt-5 hover:scale-100">
                                Reach us
                            </button>
                        </Link>
                    </div>
                ))}
            </div>            

            {/* Our Visualization Process - 3rd section */}
            <h1 className="text-gradient font-bold text-center text-6xl mt-32 mb-10">
                Our Visualization Process
            </h1>
            <p className="text-center">
                Do you dream of exploring the furthest reaches of outer space? <br />
                Do you live for bringing brands to life and finding new ways to tell exciting
                brand stories? <br />
                If so, you may have just found your people.
            </p>

            <div className="flex flex-col md:flex-row md:mx-14 mt-16">
                <div className="md:w-1/2">
                    {processSteps
                        .filter((_, index) => index % 2 === 0)
                        .map((step) => (
                            <div key={step.id} className="flex items-center gap-7 mt-16">
                                <step.icon className="bg-orange-600 p-2 rounded-full text-5xl text-white" />
                                <div>
                                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                </div>
                <div className="md:w-1/2">
                    {processSteps
                        .filter((_, index) => index % 2 !== 0)
                        .map((step) => (
                            <div key={step.id} className="flex items-center gap-7 mt-16">
                                <step.icon className="bg-orange-600 p-2 rounded-full text-5xl text-white" />
                                <div>
                                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            <Message />

            <h1 className="text-gradient font-bold text-center text-6xl mt-32 mb-10">
                Work Samples
            </h1>

            {[0, 1, 2].map((row) => (
                <div
                    key={row}
                    className={`md:flex items-center gap-10 md:mx-14 py-7 ${row !== 0 ? "-mt-7" : ""
                        }`}
                >
                    {workSamples.map((sample) => (
                        <div key={sample.id} className="shadow-lg py-7 px-4 rounded-lg">
                            {/* <img className="rounded" src={sample.img} alt={sample.title} /> */}
                            <div className="flex items-center gap-4 mt-5">
                                <sample.icon className="bg-orange-600 p-2 rounded-full text-5xl text-white" />
                                <h3 className="text-2xl">{sample.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            ))}

            {/* 4th section */}
            <div className="w-2/4 mx-auto py-32">
                <h1 className="text-gradient font-bold text-6xl mb-10">
                    Let's Talk <br /> about Visualization
                </h1>
                <p>
                    We thrive on innovation and turning brilliant ideas into reality. Our goal is
                    to create exceptional experiences through meticulous execution. If you share
                    our passion, don't hesitate to reach out via phone or email to begin your
                    journey with us.
                </p>
                <Link href="/contact">
                    <button className="primary-button mt-5">
                        Contact Us <IoMdCall className="text-xl ml-2" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default DataVisualization;