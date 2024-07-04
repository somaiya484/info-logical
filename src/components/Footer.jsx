import Link from 'next/link';
import Image from "next/image";
import logoFooter from '../../public/logoFooter.png';

const Footer = () => {
    return (
        <Footer>

            <div className="footer bg-slate-900 text-white py-16 px-5">
                <div className="container mx-auto flex gap-10">
                    <div>
                        <Link href='/'>
                            <Image
                                src={logoFooter}
                                width={250}
                                height={250}
                                alt="Company Logo"
                                className="w-[150px] mx-auto md:mx-0"
                            />
                        </Link>
                        <p className='mt-5 text-center md:text-left'>
                            Thank you for visiting our website. <br />
                            We appreciate your support and look forward <br />
                            to helping you achieve your goals. <br />
                            Here's to success and collaboration!
                        </p>
                    </div>
                    <nav>
                        <h6 className="footer-title text-lg font-semibold mb-4">Services</h6>
                        <ul>
                            <li><Link className="link link-hover text-gray-400" href='/DataVisualization'>Data Visualization</Link></li>
                            <li><Link className="link link-hover text-gray-400" href='/WebAnalytics'>Google Analytics</Link></li>
                            <li><Link className="link link-hover text-gray-400" href='/SEO&SEM&SMM'>SEO, SEM, SMM</Link></li>
                            <li><Link className="link link-hover text-gray-400" href='/GraphicsDesign'>Graphics Design</Link></li>
                            <li><Link className="link link-hover text-gray-400" href='/WebDesign&Development'>Web Design & Development</Link></li>
                        </ul>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-lg font-semibold mb-4">Company</h6>
                        <ul>
                            <li><Link className="link link-hover text-gray-400" href='/about'>About Us</Link></li>
                            <li><Link className="link link-hover text-gray-400" href='/clients'>Clients</Link></li>
                            <li><Link className="link link-hover text-gray-400" href='/services'>Services</Link></li>
                            <li><Link className="link link-hover text-gray-400" href='/why-choose-us'>Why Choose Us</Link></li>
                        </ul>
                    </nav>
                    <nav>
                        <h6 className="footer-title text-lg font-semibold mb-4">Say Hello to Us</h6>
                        <ul>
                            <li><a className="link link-hover text-gray-400" href="tel:+1234567890">Phone: +123 456 7890</a></li>
                            <li><a className="link link-hover text-gray-400" href="mailto:info@example.com">Mail: info@example.com</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* <div className="border-t border-gray-700 mt-10 pt-5 text-center text-white">
                &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
            </div> */}
        </Footer>

    );
};

export default Footer;
