import Link from "next/link";


const Header = () => {
    return (
        <>
            <div className="navbar bg-base-100 pt-7 pl-6">
                <div className="navbar-start">
                    <a className="text-4xl md:text-5xl font-bold z-30">Info Logical</a>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className=""><a>Home</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Services</a></li>
                            <li><a>About</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className=" px-4 rounded-full hidden lg:flex text-gray-600 font-medium -mr-7">
                    <ul className="menu menu-horizontal px-1 text-base">
                        <li><Link href='/' className="hover:bg-none focus:bg-transparent">Home</Link></li>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>About</a></li>
                        <li><a>Blog</a></li>
                        <li><Link href='/contact'>Contact</Link></li>
                        <li><button className="bg-btn  rounded-full">Learn More</button></li>

                    </ul>
                </div>

            </div>
        </>
    );
};

export default Header;