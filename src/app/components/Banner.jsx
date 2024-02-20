import Image from 'next/image'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Banner = () => {
    return (
        <div className='md:flex gap-20 justify-between items-center mt-20 px-5 md:px-0'>
            <div className='sm:text-center md:text-left md:w-[60%] md:pl-20'>
                <h1 className='text-6xl font-bold'>Turbo Charge Global Growth with Hyper-Local Market Insights</h1>

                <p className='text-base mt-10 text-gray-500 leading-6'>Every market is getting more competitive. Global players are still expanding and homegrown challengers are stronger than ever. Winning requires a granular understanding of the local consumer and retailer landscape. Rwazi leverages hundreds of thousands of consumers to tell you in real time what they buy, why they buy, and where they buy. Execute with confidence to improve performance in existing markets and launch successfully in new ones.</p>
                <div className='mt-10 flex justify-center md:justify-start gap-5'>
                    <button className='btn bg-btn rounded-full'>Learn More</button>

                    <button className='btn bg-transparent border-none '>How it Works!  <MdOutlineKeyboardArrowRight className='text-2xl' /></button>

                </div>
            </div>


            <div>

                <img
                className='w-[700px]'
                    src="https://i.ibb.co/Cnf20NS/internet-earth-64735.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;