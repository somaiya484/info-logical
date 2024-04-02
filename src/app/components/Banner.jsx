import Image from 'next/image'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";import HeydawBlur from './HeydawBlur';
;


const Banner = () => {
    return (
        <div className="bg-[url('')] ">

            <div className='pt-14'>
                <div className='text-center bg-gray-800 py-1 md:py-2 w-1/2 md:w-[35%] mx-auto rounded-2xl'>

                    <p className='md:text-xl font-bold bg-gradient-to-r from-indigo-100 via-purple-400 to-blue-400 text-transparent bg-clip-text animate-gradient '>Welcome To InfoLogic Solution</p>
                </div>
            </div>

            <div className='text-center mt-10 '>
                <h2 className='text-4xl md:text-[44px] md:w-3/4 mx-auto font-bold leading-[60px]'>The Global, Web Design, PPC, SEO & Logical Data-Driven <span className='bg-gradient-to-r from-indigo-700 via-purple-600 to-blue-600 text-transparent bg-clip-text'>Digital Marketing Agency</span></h2>
            </div>

            <div className='text-center mt-10 text-lg  font-semibold w-3/4 mx-auto'>
                <p>Go To <span className='bg-gradient-to-r from-indigo-700 to-purple-600 text-transparent bg-clip-text'>|</span> Easy Contract <span className='bg-gradient-to-r from-indigo-700 to-purple-600 text-transparent bg-clip-text'>|</span> Specialize Team</p>
            </div>

            <div className='mt-10 flex justify-center md:justify-start gap-5 w-[34%] mx-auto '>
                <button className='btn bg-btn rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-fuchsia-500 hover:to-violet-500 transition duration-300 ease-in-out text-lg'>Explore Services <MdKeyboardDoubleArrowDown className='text-xl' /></button>

                <button className='btn bg-transparent border-purple-700 hover:border-purple-700 hover:bg-transparent border-2 primary-text text-lg'>Get Free Consultation</button>

            </div>
            
            {/* <HeydawBlur animate={false} position={`hidden md:flex brightness-95  md:top-5`}/> */}
        </div>
    );
};

export default Banner;