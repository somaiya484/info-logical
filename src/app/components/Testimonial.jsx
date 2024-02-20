"use client"


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonial = () => {
    return (
        <div className='mt-28 md:flex items-center gap-14 bg-gray-50 py-6'>

            <div className='pl-10'>
                <p className='italic text-gray-400'>Reviews</p>
                <h1 className='text-5xl font-semibold'>They talk about us</h1>
            </div>

            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={100}
                slidesPerView={2}
                // navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className='w-[100%]'
            >
                <SwiperSlide>
                    <div className=' py-6 px-4'>
                        <p className='mt-7 italic text-gray-800'>A global financial services company used Rwazi to obtain data on usage and demand of banking and fintech products across 60 cities to boost customer acquisition through consumer-driven products</p>

                        <div className='flex items-center gap-4 my-5'>
                            <FaQuoteLeft className='primary-text text-2xl w-10  rounded-full shadow-xl' />
                            <div className='text-sm text-gray-500'>
                                <h2>Paul Trueman</h2>
                                <p>Global</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' py-6 px-4'>
                        <p className='mt-7 italic text-gray-800'>A pharmaceutical company used Rwazi to gather data on the availability and pricing of medicines across pharmacies across Nigeria as well as the accessibility of medical services in the country.</p>

                        <div className='flex items-center gap-4 my-5'>
                            <FaQuoteLeft className='primary-text text-2xl w-10  rounded-full shadow-xl' />
                            <div className='text-sm text-gray-500'>
                                <h2>Sam Mith</h2>
                                <p>CEO Mil Design Studio</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' py-6 px-4'>
                        <p className='mt-7 italic text-gray-800'>A global financial services company used Rwazi to obtain data on usage and demand of banking and fintech products across 60 cities to boost customer acquisition through consumer-driven products</p>

                        <div className='flex items-center gap-4 my-5'>
                            <FaQuoteLeft className='primary-text text-2xl w-10  rounded-full shadow-xl' />
                            <div className='text-sm text-gray-500'>
                                <h2>Paul Trueman</h2>
                                <p>Global</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' py-6 px-4'>
                        <p className='mt-7 italic text-gray-800'>A pharmaceutical company used Rwazi to gather data on the availability and pricing of medicines across pharmacies across Nigeria as well as the accessibility of medical services in the country.</p>

                        <div className='flex items-center gap-4 my-5'>
                            <FaQuoteLeft className='primary-text text-2xl w-10  rounded-full shadow-xl' />
                            <div className='text-sm text-gray-500'>
                                <h2>Paul Trueman</h2>
                                <p>Global</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonial;


// export default () => {
//   return (
//
//   );
// };
