import React from 'react';

const ContactEmail = () => {
    return (
        <div className='flex justify-around items-center my-24 px-5'>
            <h1 className='text-2xl md:text-4xl font-semibold'>Info Logical</h1>
            <form action="">
                <input className='md:w-[350px] text-sm px-3 pb-5 border-b border-gray-500 focus:outline-none' type="email" placeholder='Your Email' name='email' />
            </form>
            <button className='px-3 py-2 md:px-5 md:py-3 text-white rounded-sm bg-indigo-800 transition ease-in-out delay-150  hover:scale-105 hover:bg-indigo-700 duration-300'>Subscribe</button>
        </div>
    );
};

export default ContactEmail;