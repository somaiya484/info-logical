import { MdAddLocation } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import { FaTag, FaNoteSticky } from "react-icons/fa6";
import { RiMessage3Fill } from "react-icons/ri";
import { AiOutlineStock } from "react-icons/ai";

const CompanyGrowth = () => {
    return (
        <div className=' mt-28 px-5 md:px-0 sm:text-center md:text-left  '>
            <h1 className='text-5xl font-bold pl-20 md:w-[52%]'>A Closer Look at How Offline Consumer Data Can Grow Your Company</h1>

            <div className="px-8 md:grid  md:grid-cols-3 gap-x-6 gap-y-2 mt-7">
                <div className=" pt-6">
                    <div className=" shadow-lg backdrop-blur-sm bg-white/20 p-10 rounded-2xl h-[300px] ">

                        <div className="text-indigo-500 text-3xl w-[55px] p-3  bg-white rounded-full shadow-xl">
                            <MdAddLocation className=""></MdAddLocation>
                        </div>
                        <h2 className="mt-8 mb-3  text-xl font-semibold">Identify</h2>
                        <p className="text-base text-gray-600">Identify important new retail locations where you should establish a strong product presence.</p>
                    </div>
                </div>
                <div className=" pt-6">
                    <div className=" shadow-lg backdrop-blur-sm bg-white/20 p-10 rounded-2xl h-[300px] ">

                        <div className="text-indigo-500 text-3xl w-[55px] p-3  bg-white rounded-full shadow-xl">
                            <TbTargetArrow></TbTargetArrow>
                        </div>
                        <h2 className="mt-8 mb-3  text-xl font-semibold">Frequency</h2>
                        <p className="text-base text-gray-600">Double down on high value / frequency locations to crush your competition.</p>
                    </div>
                </div>
                <div className=" pt-6">
                    <div className=" shadow-lg backdrop-blur-sm bg-white/20 p-10 rounded-2xl h-[300px] ">


                        <div className="text-indigo-500 text-3xl w-[55px] p-3  bg-white rounded-full shadow-xl">
                            <FaTag />
                        </div>
                        <h2 className="mt-8 mb-3  text-xl font-semibold">Pricing</h2>
                        <p className="text-base text-gray-600">Deliver more effective hyper-local pricing and packaging.</p>
                    </div>
                </div>
                <div className=" pt-6">
                    <div className=" shadow-lg backdrop-blur-sm bg-white/20 p-10 rounded-2xl h-[300px] ">


                        <div className="text-indigo-500 text-3xl w-[55px] p-3  bg-white rounded-full shadow-xl">
                            <RiMessage3Fill></RiMessage3Fill>
                        </div>
                        <h2 className="mt-8 mb-3  text-xl font-semibold">Messaging</h2>
                        <p className="text-base text-gray-600">Deliver more effective hyper-local messaging, promos, and placement.</p>
                    </div>
                </div>
                <div className=" pt-6">
                    <div className=" shadow-lg backdrop-blur-sm bg-white/20 p-10 rounded-2xl h-[300px] ">


                        <div className="text-indigo-500 text-3xl w-[55px] p-3  bg-white rounded-full shadow-xl">
                            <AiOutlineStock />
                        </div>
                        <h2 className="mt-8 mb-3  text-xl font-semibold">Replenishment</h2>
                        <p className="text-base text-gray-600">Replenishment of out of stock / expired products in high frequency locations.</p>
                    </div>
                </div>
                <div className=" pt-6 ">
                    <div className=" shadow-lg backdrop-blur-sm bg-white/20 p-10 rounded-2xl h-[300px] ">


                        <div className="text-indigo-500 text-3xl w-[55px] p-3  bg-white rounded-full shadow-xl">
                            <FaNoteSticky />
                        </div>
                        <h2 className="mt-8 mb-3  text-xl font-semibold">Resources</h2>
                        <p className="text-base text-gray-600">Far better organize, optimize, and track the performance of your local sales resources.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CompanyGrowth;