import { MdOutlineAssessment, MdOutlineDataExploration, MdOutlineCollectionsBookmark, MdRecommend, } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import Message from "../../components/Message";
import { IoMdCall } from "react-icons/io";

const SEOSEMSMM = () => {
    return (
        <div className="bg-white text-black">
            <div className="bg-fixed bg-[url('https://i.ibb.co/CQPDZv7/marvin-meyer-SYTO3xs06f-U-unsplash.jpg')] h-[600px] w-full flex justify-center items-center relative overflow-auto">
                <div className="absolute inset-0 bg-black opacity-80"></div>
                <div className='text-center relative z-10 text-white'>
                    <h2 className='text-5xl my-6 leading-10 font-semibold'>Empower Your Business with <span className='text-gradient font-bold'>Web Analytics</span></h2>
                    <p> Our data analytics services at Info Logic Solution leverage powerful tools like Looker Studio and Power BI <br /> to transform raw data into actionable insights. We help you make informed decisions that<br /> drive growth and improve business performance.</p>
                </div>
            </div>

            {/* Choose Yours one - 2nd section */}
            <h1 className="text-gradient font-bold text-center text-6xl mt-32 mb-10">Choose Yours one</h1>
            <div className="flex justify-between items-center md:mx-14">

                <div className="shadow-inner rounded px-3 py-7">
                    <img src="https://i.ibb.co/wdz3ZXC/domenico-loia-h-GV2-Tf-Oh0ns-unsplash.jpg" alt="" className="w-[600px] h-[300px]"
                    />
                    <h2 className="text-4xl my-5">Looker Studio</h2>
                    <p >Our Expert Looker Master will transform your data into clear, actionable insights with Looker Studio. We design custom dashboards and reports that help you visualize your data and make informed business decisions.</p>

                    <button className='secondary-button mt-5  hover:scale-100'>Contact us</button>
                </div>

                <div className="shadow-inner rounded px-3 py-7">
                    <img src="https://i.ibb.co/wdz3ZXC/domenico-loia-h-GV2-Tf-Oh0ns-unsplash.jpg" alt="" className="w-[600px] h-[300px]"
                    />
                    <h2 className="text-4xl my-5">Power BI</h2>
                    <p >
                        Unlock the power of your data with Microsoft Power BI. Our experts create interactive dashboards and reports that provide in-depth insights into your business performance, helping you drive strategic decisions
                    </p>

                    <button className='secondary-button mt-5  hover:scale-100'>Contact us</button>
                </div>
            </div>

            {/* Our Visualization Process - 3rd section */}
            <h1 className="text-gradient font-bold text-center text-6xl mt-32 mb-10">Our Visualization Process</h1>
            <p className="text-center">Do you dream of exploring the furthest reaches of outer space? <br />Do you live for bringing brands to life and finding new ways to tell exciting brand stories? <br />If so, you may have just found your people.</p>

            <div className="flex flex-col md:flex-row md:mx-14 mt-16">
                <div className="md:w-1/2">
                    <div className="flex items-center gap-7 ">
                        <MdOutlineAssessment className="bg-orange-600 p-2 rounded-full text-5xl text-white" />
                        <div>
                            <h3 className="text-2xl font-semibold">1. Data Assessment</h3>
                            <p>We start by assessing your current data sources and analytics needs.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-7 mt-16">
                        <MdOutlineCollectionsBookmark className="bg-orange-600 p-2 rounded-full text-5xl text-white" />
                        <div>
                            <h3 className="text-2xl font-semibold">3. Analysis & Visualization</h3>
                            <p>Using advanced analytics tools, we analyze the data and create <br /> visualizations that highlight key insights.</p>
                        </div>
                    </div>

                    <div className="flex items-center items-center gap-7 mt-14">
                        <FaHandsHelping className="bg-orange-600 p-2 rounded-full text-5xl text-white" />
                        <div>
                            <h3 className="text-2xl font-semibold">5. Ongoing Support</h3>
                            <p>We offer continuous support to help you refine your data analytics strategy<br /> and ensure long-term success</p>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <div className="flex items-center gap-7 ">
                        <MdOutlineDataExploration className="bg-orange-600 p-2 rounded-full text-5xl text-white" />
                        <div>
                            <h3 className="text-2xl font-semibold">2. Data Collection & Integration</h3>
                            <p>We gather and integrate data from multiple sources to create a comprehensive dataset.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-7 mt-12">
                        <MdRecommend className="bg-orange-600 p-2 rounded-full text-5xl text-white" />
                        <div>
                            <h3 className="text-2xl font-semibold">4. Reporting & Recommendations</h3>
                            <p>We provide detailed reports and recommendations based on our analysis, <br /> helping you understand and act on the insights.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Message></Message>

            <h1 className="text-gradient font-bold text-center text-6xl mt-32 mb-10">Work Samples</h1>

            {/* row 1 */}
            <div className="md:flex items-center gap-10 md:mx-14 py-7">
                <div className="shadow-lg py-7 px-4 rounded-lg">
                    <img className="rounded" src="https://cratosai-backend.itechnolabs.tech/images/17105094850.png" alt="" />
                    <div className="flex items-center gap-4 mt-5">
                        <MdOutlineAssessment className="bg-orange-600 p-2 rounded-full text-5xl text-white" />
                        <h3 className="text-2xl">Google Ads - Light</h3>
                    </div>
                </div>

                <div className="shadow-lg py-7 px-4 rounded-lg">
                    <img className="rounded" src="https://cratosai-backend.itechnolabs.tech/images/17105094850.png" alt="" />
                    <div className="flex items-center gap-4 mt-5">
                        <MdOutlineAssessment className="bg-orange-600 p-2 rounded-full text-5xl text-white" />
                        <h3 className="text-2xl">Google Ads - Light</h3>
                    </div>
                </div>

                <div className="shadow-lg py-7 px-4 rounded-lg">
                    <img className="rounded" src="https://cratosai-backend.itechnolabs.tech/images/17105094850.png" alt="" />
                    <div className="flex items-center gap-4 mt-5">
                        <MdOutlineAssessment className="bg-orange-600 p-2 rounded-full text-5xl text-white" />
                        <h3 className="text-2xl">Google Ads - Light</h3>
                    </div>
                </div>
            </div>

            {/* row 2 */}
            <div className="md:flex items-center gap-10 md:mx-14 py-7 -mt-7">
                <div className="shadow-lg py-7 px-4 rounded-lg">
                    <img className="rounded" src="https://cratosai-backend.itechnolabs.tech/images/17105094850.png" alt="" />
                    <div className="flex items-center gap-4 mt-5">
                        <MdOutlineAssessment className="bg-orange-600 p-2 rounded-full text-5xl text-white" />
                        <h3 className="text-2xl">Google Ads - Light</h3>
                    </div>
                </div>

                <div className="shadow-lg py-7 px-4 rounded-lg">
                    <img className="rounded" src="https://cratosai-backend.itechnolabs.tech/images/17105094850.png" alt="" />
                    <div className="flex items-center gap-4 mt-5">
                        <MdOutlineAssessment className="bg-orange-600 p-2 rounded-full text-5xl text-white" />
                        <h3 className="text-2xl">Google Ads - Light</h3>
                    </div>
                </div>

                <div className="shadow-lg py-7 px-4 rounded-lg">
                    <img className="rounded" src="https://cratosai-backend.itechnolabs.tech/images/17105094850.png" alt="" />
                    <div className="flex items-center gap-4 mt-5">
                        <MdOutlineAssessment className="bg-orange-600 p-2 rounded-full text-5xl text-white" />
                        <h3 className="text-2xl">Google Ads - Light</h3>
                    </div>
                </div>
            </div>

            {/* row 3 */}
            <div className="md:flex items-center gap-10 md:mx-14 py-7 -mt-7">
                <div className="shadow-lg py-7 px-4 rounded-lg">
                    <img className="rounded" src="https://cratosai-backend.itechnolabs.tech/images/17105094850.png" alt="" />
                    <div className="flex items-center gap-4 mt-5">
                        <MdOutlineAssessment className="bg-orange-600 p-2 rounded-full text-5xl text-white" />
                        <h3 className="text-2xl">Google Ads - Light</h3>
                    </div>
                </div>

                <div className="shadow-lg py-7 px-4 rounded-lg">
                    <img className="rounded" src="https://cratosai-backend.itechnolabs.tech/images/17105094850.png" alt="" />
                    <div className="flex items-center gap-4 mt-5">
                        <MdOutlineAssessment className="bg-orange-600 p-2 rounded-full text-5xl text-white" />
                        <h3 className="text-2xl">Google Ads - Light</h3>
                    </div>
                </div>

                <div className="shadow-lg py-7 px-4 rounded-lg">
                    <img className="rounded" src="https://cratosai-backend.itechnolabs.tech/images/17105094850.png" alt="" />
                    <div className="flex items-center gap-4 mt-5">
                        <MdOutlineAssessment className="bg-orange-600 p-2 rounded-full text-5xl text-white" />
                        <h3 className="text-2xl">Google Ads - Light</h3>
                    </div>
                </div>
            </div>

            {/* row 4 */}
            <div className="md:flex items-center gap-10 md:mx-14 py-7 -mt-7">
                <div className="shadow-lg py-7 px-4 rounded-lg">
                    <img className="rounded" src="https://cratosai-backend.itechnolabs.tech/images/17105094850.png" alt="" />
                    <div className="flex items-center gap-4 mt-5">
                        <MdOutlineAssessment className="bg-orange-600 p-2 rounded-full text-5xl text-white" />
                        <h3 className="text-2xl">Google Ads - Light</h3>
                    </div>
                </div>

                <div className="shadow-lg py-7 px-4 rounded-lg">
                    <img className="rounded" src="https://cratosai-backend.itechnolabs.tech/images/17105094850.png" alt="" />
                    <div className="flex items-center gap-4 mt-5">
                        <MdOutlineAssessment className="bg-orange-600 p-2 rounded-full text-5xl text-white" />
                        <h3 className="text-2xl">Google Ads - Light</h3>
                    </div>
                </div>

                <div className="shadow-lg py-7 px-4 rounded-lg">
                    <img className="rounded" src="https://cratosai-backend.itechnolabs.tech/images/17105094850.png" alt="" />
                    <div className="flex items-center gap-4 mt-5">
                        <MdOutlineAssessment className="bg-orange-600 p-2 rounded-full text-5xl text-white" />
                        <h3 className="text-2xl">Google Ads - Light</h3>
                    </div>
                </div>
            </div>

            {/* 4th section */}
            <div className="w-2/4 mx-auto py-32 ">
                <h1 className="text-gradient font-bold text-6xl mb-10 ">Let's Talk <br /> about Visualization</h1>
                <p>
                    We thrive on innovation and turning brilliant ideas into reality. Our goal is to create exceptional experiences through meticulous execution. If you share our passion, don't hesitate to reach out via phone or email to begin your journey with us.
                </p>
                <button className='primary-button mt-5'>Contact Us <IoMdCall className='text-xl ml-2' /></button>
            </div>
        </div>
    );
};

export default SEOSEMSMM;