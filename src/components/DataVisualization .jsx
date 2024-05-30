// src/components/DataVisualization.jsx
import { MdOutlineAssessment, MdOutlineDataExploration, MdOutlineCollectionsBookmark, MdRecommend } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import Message from "./Message";
import { IoMdCall } from "react-icons/io";

const iconComponents = {
    MdOutlineAssessment: MdOutlineAssessment,
    MdOutlineDataExploration: MdOutlineDataExploration,
    MdOutlineCollectionsBookmark: MdOutlineCollectionsBookmark,
    MdRecommend: MdRecommend,
    FaHandsHelping: FaHandsHelping,
};

const DataVisualization = ({ content }) => {
    return (
        <div className="bg-white text-black">
            <div className="bg-fixed bg-[url('https://i.ibb.co/CQPDZv7/marvin-meyer-SYTO3xs06f-U-unsplash.jpg')] h-[600px] w-full flex justify-center items-center relative overflow-auto">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className='text-center relative z-10 text-white'>
                    <h2 className='text-5xl my-6 leading-10 font-semibold'>{content.title}</h2>
                    <p dangerouslySetInnerHTML={{ __html: content.description }}></p>
                </div>
            </div>

            <h1 className="text-gradient font-bold text-center text-6xl mt-32 mb-10">Choose Yours one</h1>
            <div className="flex justify-between items-center md:mx-14">
                {content.sections.map((section, index) => (
                    <div key={index} className="shadow-inner rounded px-3 py-7">
                        <img src={section.img} alt="" className="w-[600px] h-[300px]" />
                        <h2 className="text-4xl my-5">{section.title}</h2>
                        <p>{section.description}</p>
                        <button className='secondary-button mt-5 hover:scale-100'>Contact us</button>
                    </div>
                ))}
            </div>

            <h1 className="text-gradient font-bold text-center text-6xl mt-32 mb-10">Our Visualization Process</h1>
            <p className="text-center">Do you dream of exploring the furthest reaches of outer space? <br />Do you live for bringing brands to life and finding new ways to tell exciting brand stories? <br />If so, you may have just found your people.</p>

            <div className="flex flex-col md:flex-row md:mx-14 mt-16">
                {content.process.map((step, index) => {
                    const IconComponent = iconComponents[step.icon];
                    return (
                        <div key={index} className={`md:w-1/2 flex items-center gap-7 ${index > 0 ? 'mt-16' : ''}`}>
                            <div className="bg-orange-600 p-2 rounded-full text-5xl text-white">
                                <IconComponent />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold">{step.title}</h3>
                                <p dangerouslySetInnerHTML={{ __html: step.description }}></p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <Message />

            <h1 className="text-gradient font-bold text-center text-6xl mt-32 mb-10">Work Samples</h1>

            {Array.from({ length: 4 }).map((_, rowIndex) => (
                <div key={rowIndex} className={`md:flex items-center gap-10 md:mx-14 py-7 ${rowIndex > 0 ? '-mt-7' : ''}`}>
                    {Array.from({ length: 3 }).map((_, colIndex) => (
                        <div key={colIndex} className="shadow-lg py-7 px-4 rounded-lg">
                            <img className="rounded" src="https://cratosai-backend.itechnolabs.tech/images/17105094850.png" alt="" />
                            <div className="flex items-center gap-4 mt-5">
                                <MdOutlineAssessment className="bg-orange-600 p-2 rounded-full text-5xl text-white" />
                                <h3 className="text-2xl">Google Ads - Light</h3>
                            </div>
                        </div>
                    ))}
                </div>
            ))}

            <div className="w-2/4 mx-auto py-32 ">
                <h1 className="text-gradient font-bold text-6xl mb-10">{content.footer.title}</h1>
                <p>{content.footer.description}</p>
                <button className='primary-button mt-5'>Contact Us <IoMdCall className='text-xl ml-2' /></button>
            </div>
        </div>
    );
};

export default DataVisualization;
