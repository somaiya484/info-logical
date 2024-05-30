"use client"
import Image from 'next/image'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { TypeAnimation } from 'react-type-animation';


const Banner = () => {
    return (
        <div>

            <div className='pt-14'>
                <div className='text-center bg-gray-800 py-1 md:py-2 w-1/2 md:w-[35%] mx-auto rounded-2xl'>

                    <p className='md:text-xl font-bold bg-gradient-to-r from-orange-100 via-red-400 to-amber-400 text-transparent bg-clip-text animate-gradient '>Welcome To InfoLogic Solution</p>
                </div>
            </div>

            <div className='text-center mt-10 '>
                <h2 className='text-3xl md:text-6xl md:w-3/4 mx-auto leading-[60px]'>The Global, Web Design, SEO & Logical Data-Driven <span className='text-gradient font-bold'>Digital Marketing Agency</span></h2>
            </div>

            <div className="h-full flex justify-center items-center mt-10 sm:text-lg md:text-xl text-semibold">
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'We are passionate about Website Design & Development',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'We are passionate about Graphic Design',
                        1000,
                        'We are passionate about Social Media Marketing',
                        1000,
                        'We are passionate about SEO & SEM ',
                        1000,
                        'We are passionate about Web & Data Analytics',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
            </div>


            <div className='mt-10 flex justify-center md:justify-start gap-5 w-[34%] mx-auto'>
                <button className='primary-button'>Explore Services <MdKeyboardDoubleArrowDown className='text-xl' /></button>

                <button className='secondary-button'>Get Free Consultation</button>

            </div>

            <div className='text-center mt-10 md:text-lg  font-semibold w-3/4 mx-auto'>
                <p>Go To <span className='text-gradient'>|</span> Easy Contract <span className='text-gradient'>|</span> Specialize Team</p>
            </div>
            {/* <HeydawBlur animate={false} position={`hidden md:flex brightness-95  md:top-5`}/> */}
        </div>
    );
};

export default Banner;