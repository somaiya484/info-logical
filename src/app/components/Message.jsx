import React from 'react';

const Message = () => {
    return (
        <div className='flex items-center gap-10 px-5  py-20 mt-24 bg-[#63ad3b]'>
            <p className='text-2xl md:text-4xl font-semibold md:ml-24'>We make the creative solutions for modern brands</p>
            <button className=' px-5 py-3 text-white rounded-sm bg-indigo-800 transition ease-in-out delay-150  hover:scale-105 hover:bg-indigo-700 duration-300'>Subscribe</button>
        </div>
    );
};

export default Message;