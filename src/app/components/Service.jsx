

const Service = () => {
    return (
        <div className='mt-32'>
            <h2 className='text-center text-5xl font-bold primary-text'>Things we provide!</h2>
            <p className="text-center text-xl my-6"> Let's take your brand to the next level with our comprehensive suite of <br /> marketing services.</p>

            <div className="flex justify-center items-center gap-16 mx-32 mt-16">
                <div className="shadow-inner rounded px-3 py-7">
                    <img src="https://i.ibb.co/wdz3ZXC/domenico-loia-h-GV2-Tf-Oh0ns-unsplash.jpg" alt="" className="w-[600px] h-[300px]"
                    />
                    <h2 className="text-4xl my-5">Design & Development</h2>
                    <p >Crafting beautiful and functional websites on WordPress, Shopify, and Wix. Delivering custom-coded solutions tailored to your unique needs.</p>
                    <div className="flex items-center justify-between gap-10 mt-8 mb-5 ">
                        <p className="border-b w-full border-gray-300">WordPress Design & Development</p>
                        <p className="border-b w-full border-gray-300">Shopify Design & Development</p>
                    </div>
                    <div className="flex items-center justify-between gap-10 my-5">
                        <p className="border-b w-full border-gray-300">Wix Design & Development</p>
                        <p className="border-b w-full border-gray-300">Frontend Development</p>
                    </div>
                    <button className='secondary-button mt-5 w-1/4 hover:scale-100'>Learn More</button>
                </div>

                <div className="shadow-inner rounded px-3 py-7">
                    <img src="https://i.ibb.co/kyyWgyL/lukas-muller-Q4i-YWs-Wb-R90-unsplash.jpg" alt="" className="w-[1000px] h-[300px]"
                    />
                    <h2 className="text-4xl my-5">SEO & SEM</h2>
                    <p >Boosting your online visibility with expert SEO strategies.Driving targeted traffic with effective Google Ads campaigns.</p>
                    <div className="flex items-center justify-between gap-10 mt-8 mb-5 ">
                        <p className="border-b w-full border-gray-300">SEO strategies</p>
                        <p className="border-b w-full border-gray-300">SEM</p>
                    </div>
                    <div className="flex items-center justify-between gap-10 my-5">
                        <p className="border-b w-full border-gray-300">Wix Design & Development</p>
                        <p className="border-b w-full border-gray-300">Frontend Development</p>
                    </div>
                    <button className='secondary-button mt-5 w-1/4 hover:scale-100'>Learn More</button>
                </div>
            </div>

            {/* Part 2 */}
            <div className="flex justify-center items-center gap-10 mx-32 mt-14">
                <div className="shadow-inner rounded px-3 py-7">
                    <img src="https://i.ibb.co/WGPmvrD/austin-distel-t-LZh-FRLj6n-Y-unsplash.jpg" className="w-[700px] h-[300px]" alt=""
                    />
                    <h2 className="text-4xl my-5">Social Media Marketing</h2>
                    <p >Engaging your audience with impactful and strategic Facebook Ads.</p>
                    <div className="flex items-center justify-between gap-10 mt-8 mb-5 ">
                        <p className="border-b w-full border-gray-300 ">Google ads</p>
                        <p className="border-b w-full border-gray-300">Facebook ads</p>
                    </div>
                    <button className='secondary-button mt-5  hover:scale-100'>Learn More</button>
                </div>

                <div className="shadow-inner rounded px-3 py-7">
                    <img src="https://i.ibb.co/R9zxRxq/agence-olloweb-qfp4-Ud6-Fyg-unsplash.jpg" className="w-[700px] h-[280px]" alt=""
                    />
                    <h2 className="text-4xl my-5">Web Analytics</h2>
                    <p >Unlocking insights with Google Tag Manager, Conversion API, Pixel Installation, and Google Analytics.</p>
                    <div className="flex items-center justify-between gap-5 mt-8 mb-5 ">
                        <p className="border-b w-full border-gray-300">Google Analytics</p>
                        <p className="border-b w-full border-gray-300">Facebook conversion API</p>
                    </div>
                    <div className="flex items-center justify-between gap-10 my-5">
                        <p className="border-b w-full border-gray-300">Google Tag Manager</p>
                        <p className="border-b w-full border-gray-300">Pixel Installation</p>
                    </div>
                    <button className='secondary-button mt-5  hover:scale-100'>Learn More</button>
                </div>

                <div className="shadow-inner rounded px-3 py-7 -mt-10">
                    <img src="https://i.ibb.co/TqPB3g3/myriam-jessier-VHXi-GXxw-OQ4-unsplash.jpg" className="w-[700px] h-[300px]" alt=""
                    />
                    <h2 className="text-4xl my-5">Data Analytics</h2>
                    <p >Empowering your business with advanced analytics through Looker Studio and Power BI.</p>
                    <div className="flex items-center justify-between gap-10 mt-8 mb-5 ">
                        <p className="border-b w-full border-gray-300">Looker Studio</p>
                        <p className="border-b w-full border-gray-300">Power BI</p>
                    </div>
                    <button className='secondary-button mt-5  hover:scale-100'>Learn More</button>
                </div>
            </div>

        </div>
    );
};

export default Service;