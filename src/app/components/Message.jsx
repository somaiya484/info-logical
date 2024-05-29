import { IoMdCall } from "react-icons/io";

const Message = () => {
    return (
        <div className='py-20 mt-24 bg-gray-800'>
            <div className="w-[98%] mx-auto flex flex-col md:flex-row justify-center items-center gap-10 text-center">
                <p className='text-2xl md:text-4xl font-bold bg-gradient-to-r from-orange-100 via-red-400 to-amber-400 text-transparent bg-clip-text animate-gradient'>
                    We make the creative solutions for modern brands
                </p>
                <button className='secondary2-button flex items-center'>
                    Contact Us <IoMdCall className='text-xl ml-2' />
                </button>
            </div>
        </div>

    );
};

export default Message;