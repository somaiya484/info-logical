import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import aboutUsImage from '../../public/aboutus.jpg'
import Image from 'next/image'

const AboutUs = () => {
    return (
        <div className='mt-40'>

            <div className='w-[85%] mx-auto md:flex items-center gap-14 mt-10'>

                <Image
                    src={aboutUsImage}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className='md:w-[600px] md:ml-5'
                />

                <div className='md:pr-16 text-balance text-center md:text-left'>
                    <h2 className=' font-bold primary-text'>Who We Are</h2>
                    <p className='text-3xl md:text-5xl mt-6 leading-10 font-semibold'>SOLUTIONS  THAT</p>
                    <p className='text-3xl md:text-5xl mt-4 leading-10 font-semibold'>ELEVATE EXPERIENCES </p>
                    <p className='mt-8 mb-4 leading-7 md:text-xl'><span className='font-bold text-gradient'>Info Logic Solution</span> is your dedicated partner for navigating the digital landscape. We specialize in delivering comprehensive marketing services designed to elevate your brand and drive growth. We believe in starting with the essence of your brand. Every solution we create is rooted in thorough brand research and designed to enhance and align with your unique identity. <br /><br /> Our team wakes up every day with a singular purpose: to craft impactful marketing experiences that captivate audiences and elevate brands. With our expertise and enthusiasm, we create strategies that drive businesses to new heights. Lastly <span className='font-bold text-gradient'>We are committed</span> to constant innovation and creative storytelling, ensuring that your brand stands out in a dynamic market. Join us and see your business thrive.</p>
                    <button className='primary-button'>Explore Services <MdKeyboardDoubleArrowDown className='text-xl' /></button>

                </div>

            </div>

        </div>
    );
};

export default AboutUs;