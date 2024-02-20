import { MdAddLocation } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import { RiMicrosoftLoopFill } from "react-icons/ri";

const Strategic = () => {
    return (
        <>
            <div className='mt-8 '>
                <img className='w-[95%] mx-auto border-4 border-black rounded-2xl z-0' src="https://i.ibb.co/WzWWVqM/Rwazi-dash-viz-Consumer-p-800.webp" alt="" />
            </div>


            <div className="md:flex pt-28 bg-white">
                <div className="text-center  w-full md:w-[48%] px-20 py-48 md:py-24 rounded-full backdrop-blur-sm bg-[blue]/5">
                    <div className="text-indigo-400 text-4xl w-[77px] mx-auto bg-white p-5 rounded-full">
                        <MdAddLocation ></MdAddLocation>
                    </div>
                    <h2 className="my-4 primary-text text-2xl font-semibold">Grow</h2>
                    <p className="text-lg text-gray-600">Identify important new retail locations where you should establish a strong product presence.</p>
                </div>
                <div className="text-center backdrop-blur-sm bg-[blue]/5 w-full md:w-[48%] px-20 py-48 md:py-24 rounded-full md:-ml-16 -mt-16 md:mt-0">
                    <div className="text-indigo-400 text-4xl w-[77px] mx-auto bg-white p-5 rounded-full">
                        <TbTargetArrow></TbTargetArrow>
                    </div>
                    <h2 className="my-4 primary-text text-2xl font-semibold">Expand</h2>
                    <p className="text-lg text-gray-600">No longer launch new countries / new products blindly without the data you need to guide your execution.</p>
                </div>
                <div className="text-center backdrop-blur-sm bg-[blue]/5 w-full md:w-[48%] px-20 py-48 md:py-24 rounded-full md:-ml-16 -mt-16 md:mt-0">
                    <div className="text-indigo-400 text-4xl w-[77px] mx-auto bg-white p-5 rounded-full">
                        <RiMicrosoftLoopFill></RiMicrosoftLoopFill>
                    </div>
                    <h2 className="my-4 primary-text text-2xl font-semibold">Execute</h2>
                    <p className="text-lg text-gray-600">Deliver more effective hyper-local pricing and packaging.</p>
                </div>

            </div>

        </>



    );
};

export default Strategic;