import { MdKeyboardDoubleArrowUp  } from "react-icons/md";

const WhyChooseUs = () => {
    return (
        <div className='mt-32'>
            <h2 className='text-center text-5xl font-bold primary-text'>Why Choose Us?</h2>

            <div className="mt-16">
                <div className="relative">
                    <div className="z-10 lg:h-[450px] w-full md:w-2/5 bg-indigo-500 absolute md:rounded-r-lg"></div>
                    <div className="flex flex-col md:flex-row justify-evenly pt-12 items-center">
                        <img className="z-30 w-full md:w-[500px] rounded-lg" src="https://static.wixstatic.com/media/4999b3_135781e4cedc4c07aacd471cba4f6cbc~mv2.jpg/v1/crop/x_0,y_236,w_6750,h_4495/fill/w_659,h_441,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/pexels-andrea-piacquadio-3760514.jpg" alt="" />
                        <div className="text-center md:text-left md:ml-8">
                            <h3 className="text-5xl ">Marketing</h3>
                            <p className="text-xl my-7 leading-8">Identify your ripest growth <br /> opportunities with actionable insights <br /> on customers, competitors and <br />distribution.</p>
                            <button className='primary-button'>Explore Services <MdKeyboardDoubleArrowUp  className='text-xl' /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-42 lg:mt-32">
                <div className="relative">
                    <div className="z-10 md:h-[300px] lg:h-[400px] w-full md:w-[400px] bg-purple-600/35 absolute md:right-0 md:rounded-l-lg"></div>
                    <div className="flex flex-col-reverse md:flex-row justify-evenly pt-12 items-center">
                        <div className="text-center md:text-left md:mr-8">
                            <h3 className="text-5xl ">Sales</h3>
                            <p className="text-xl my-7 leading-8">Get the data to better allocate and <br /> manage sales resources for maximal <br /> growth.</p>
                            <button className='primary-button'>Explore Services <MdKeyboardDoubleArrowUp  className='text-xl' /></button>
                        </div>
                        <img className="z-30 w-full md:w-[300px]  rounded-lg" src="https://static.wixstatic.com/media/4999b3_e40d135e7f964830aa585021ca5685b3~mv2.jpg/v1/crop/x_953,y_0,w_3854,h_3840/fill/w_447,h_441,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/pexels-andrea-piacquadio-3756678.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div className="mt-32">
                <div className="relative">
                    <div className="z-10 lg:h-[450px] w-full md:w-2/5 bg-lime-500/60 absolute md:rounded-r-lg"></div>
                    <div className="flex flex-col md:flex-row justify-evenly pt-12 items-center">
                        <img className="z-30 w-full md:w-[500px] rounded-lg" src="https://static.wixstatic.com/media/4999b3_7fa9eb3aea124057abd9c771dbbc2161~mv2.jpg/v1/crop/x_0,y_0,w_5965,h_4004/fill/w_515,h_345,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/pexels-fauxels-3183150.jpg" alt="" />
                        <div className="text-center md:text-left md:ml-8">
                            <h3 className="text-5xl ">Brand Management</h3>
                            <p className="text-xl my-7 leading-8">Position your brand for market dominance<br /> with a deep, granular understanding of<br /> on customers, competitors and <br /> your current and potential customers.</p>
                            <button className='primary-button'>Explore Services <MdKeyboardDoubleArrowUp  className='text-xl' /></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WhyChooseUs;