import Image from 'next/image'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";


const Banner = () => {
    return (
        <div className="bg-[url('')] ">

            <div className='pt-14'>
                <div className='text-center bg-gray-800 py-1 md:py-2 w-1/2 md:w-[35%] mx-auto rounded-2xl'>

                    <p className='md:text-xl font-bold bg-gradient-to-r from-indigo-100 via-purple-400 to-blue-400 text-transparent bg-clip-text animate-gradient '>Welcome To InfoLogic Solution</p>
                </div>
            </div>

            <div className='text-center mt-10 '>
                <h2 className='text-4xl md:text-[44px] md:w-3/4 mx-auto font-bold leading-[60px]'>The Global, Web Design, PPC, SEO & Logical Data-Driven <span className='text-gradient'>Digital Marketing Agency</span></h2>
            </div>

            <div className='text-center mt-10 text-lg  font-semibold w-3/4 mx-auto'>
                <p>Go To <span className='text-gradient'>|</span> Easy Contract <span className='text-gradient'>|</span> Specialize Team</p>
            </div>

            <div className='mt-10 flex justify-center md:justify-start gap-5 w-[34%] mx-auto '>
                <button className='primary-button'>Explore Services <MdKeyboardDoubleArrowDown className='text-xl' /></button>

                <button className='secondary-button'>Get Free Consultation</button>

            </div>
            
            {/* <HeydawBlur animate={false} position={`hidden md:flex brightness-95  md:top-5`}/> */}
        </div>
    );
};

export default Banner;