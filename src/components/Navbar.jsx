"use client"
import React, { useState } from 'react';
import { IoMdMenu, IoMdCall, IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import logo from "../../public/Logo.jpg";
import Link from "next/link";

const Navbar = () => {
    const mainLinks = [
        { name: "Looker", link: "/Looker" },
        { 
            name: "Analytics", 
            subLinks: [
                { name: "Data Visualization", link: "/DataVisualization" },
                { name: "Web and App", link: "/WebAnalytics" },
            ]
        },
        { 
            name: "Marketing", 
            subLinks: [
                { name: "SEM", link: "/SEM" },
                { name: "SMM", link: "/SMM" },
            ]
        },
        { 
            name: "Design and Development", 
            subLinks: [
                { name: "Graphic Design", link: "/GraphicsDesign"},
                { name: "Development", link: "/WebDesign&Development" },
            ]
        },
    ];

    const [open, setOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const handleSubMenuToggle = (index) => {
        setOpenSubMenu(openSubMenu === index ? null : index);
    };

    return (
        <div className='w-full fixed top-0 left-0 z-50 bg-white shadow-md'>

            <div className='container mx-auto flex items-center justify-between py-4 md:py-6 px-6'>
                
                <div className='flex items-center'>
                    <Link href='/'>
                        <Image src={logo}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className="h-14 w-[230px]"
                        />
                    </Link>
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl md:hidden cursor-pointer'>
                    <IoMdMenu />
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-4 absolute md:static bg-white md:z-auto z-70 left-0 w-full md:w-auto md:pl-0 pl-6 transition-all duration-500 ease-in ${open ? 'top-20' : '-top-32'} ${open ? 'flex-col md:flex-row' : 'hidden'}`}>
                    {
                        mainLinks.map((mainLink, index) => (
                            <li key={mainLink.name} className='md:ml-4 lg:ml-6 md:mt-0 mt-2 relative group'>
                                <div className='flex items-center'>
                                    <Link href={mainLink.link || '#'} className='text-gray-800 hover:text-orange-600 focus:text-orange-600 duration-200 block md:inline-block font-semibold' onClick={() => handleSubMenuToggle(index)}>
                                        {mainLink.name}
                                    </Link>
                                    {mainLink.subLinks && (
                                        <IoIosArrowDown className='ml-1 text-lg text-gray-600' />
                                    )}
                                </div>
                                {mainLink.subLinks && openSubMenu === index && (
                                    <ul className='absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md z-50'>
                                        {
                                            mainLink.subLinks.map((subLink) => (
                                                <li key={subLink.name}>
                                                    <Link href={subLink.link} className='block px-4 py-2 text-gray-800 hover:bg-orange-100'>
                                                        {subLink.name}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                )}
                                {mainLink.subLinks && (
                                    <div className='absolute -top-4 right-0 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity'>click</div>
                                )}
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
