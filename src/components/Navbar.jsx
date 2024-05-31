"use client"
import React, { useState } from 'react';
import { IoMdMenu, IoMdCall } from "react-icons/io";
import Link from "next/link";

const Navbar = () => {
    const Links = [
        { name: " Data Visualization", link: "/DataVisualization" },
        { name: "Web Analytics", link: "/WebAnalytics" },
        { name: "SEO SEM SMM", link: "/SEO&SEM&SMM" },
        { name: "Graphic Design", link: "/GraphicsDesign" },
        { name: "Web Design & Development", link: "/GraphicsDesign" },
    ];
    const [open, setOpen] = useState(false);

    return (
        <div className='w-full relative z-50'>
            <div className='flex items-center justify-between bg-white py-4 md:py-6 md:px-2 px-6 shadow-md'>
                <div className='flex items-center'>
                    <Link href='/'><img src="https://i.ibb.co/mSwYzRH/Logo-removebg-preview.png" alt="Logo" className="h-14" /></Link>
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl md:hidden cursor-pointer'>
                    <IoMdMenu />
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-4 absolute md:static bg-white md:z-auto z-40 left-0 w-full md:w-auto md:pl-0 pl-6 transition-all duration-500 ease-in ${open ? 'top-20' : '-top-32'} ${open ? 'flex-col md:flex-row' : 'hidden'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-4 lg:ml-6 md:mt-0 mt-2'>
                                <Link href={link.link} className='text-gray-800 hover:text-orange-600 duration-200 block md:inline-block font-semibold'>{link.name}</Link>
                            </li>
                        ))
                    }
                    <li className='mt-2 md:mt-0 md:ml-6'>
                        <Link href='/contact'>
                            <button className='primary-button flex items-center'>
                                Contact Us <IoMdCall className='text-xl ml-2' />
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;