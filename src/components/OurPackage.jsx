import { MdComputer } from "react-icons/md";
import { FaSearch, FaDatabase, FaServicestack  } from "react-icons/fa";

const OurPackage = () => {
    return (
        <div className='mt-28'>

            {/* <h1 className="text-4xl font-bold text-center ">Get Started in less than 5 minutes</h1> */}
            <h2 className='text-center text-5xl font-bold primary-text'>Begin in just under 5 mins!</h2>
            <p className="text-center text-base mt-5 text-gray-500">Access all the services you need in one place: branding, website design, development, and digital marketing.</p>

            <div className="md:flex items-center justify-center gap-7 mt-9 px-9 ">

                <div className="px-7 py-9 mt-4 bg-violet-500 text-white rounded">
                    <div className="text-center">
                        <MdComputer className="text-6xl font-semibold mt-3 mx-auto"></MdComputer>
                        <h1 className="text-2xl font-semibold my-8">Website Services Hub</h1>
                    </div>

                    <p className="leading-7 font-light">Discover all the necessary website design, development, maintenance, and optimization services to convert visitors into customers, and beat your competitors.</p>

                    <ul className="list-outside list-decimal marker:text-lg my-9 ml-5 leading-10" >
                        <li>Website Design+Development Services</li>
                        <li>Website Optimization Services</li>
                        <li>Website Maintenance Services</li>
                        <li>Landing Page Design</li>
                        <li>Bug fixing</li>
                        <li>Website speed optimization</li>
                    </ul>
                    <button className='services-button flex items-center gap-3'>Explore Services <FaSearch /></button>
                </div>

                <div className="px-7 py-9 mt-4 bg-indigo-500 text-white rounded">
                    <div className="text-center">
                        <FaDatabase className="text-6xl font-semibold mt-3 mx-auto"></FaDatabase>
                        <h1 className="text-2xl font-semibold my-8">Data Analytics Hub</h1>
                    </div>

                    <p className="leading-7 font-light">Establish or enhance your brand identity with our complete branding services and stand out in today's crowded marketplace.</p>

                    <ul className="list-outside list-decimal marker:text-lg my-9 ml-5 leading-10" >
                        <li>Converting conversion tracking</li>
                        <li>Analytical tools integration</li>
                        <li>Pixel conversion API installation</li>
                        <li>Looker reporting dashboard</li>
                        <li>Data analysis</li>
                        <li>Marketing decisions</li>
                    </ul>
                    <button className='services-button flex items-center gap-3'>Explore Services <FaSearch /></button>
                </div>

                <div className="px-7 py-9 mt-4 bg-purple-500 text-white rounded">
                    <div className="text-center">
                        <FaServicestack  className="text-6xl font-semibold mt-3 mx-auto"></FaServicestack >
                        <h1 className="text-2xl font-semibold my-8">Marketing Services Hub</h1>
                    </div>

                    <p className="leading-7 font-light">Our digital marketing services help you connect, communicate, and convert your potential audience into customers in today's competitive digital landscape.</p>

                    <ul className="list-outside list-decimal marker:text-lg my-9 ml-5 leading-10" >
                        <li>Website Design+Development Services</li>
                        <li>Website Optimization Services</li>
                        <li>Website Maintenance Services</li>
                        <li>Landing Page Design</li>
                        <li>Bug fixing</li>
                        <li>Website speed optimization</li>
                    </ul>
                    <button className='services-button flex items-center gap-3'>Explore Services <FaSearch /></button>
                </div>
            </div>

        </div>

    );
};

export default OurPackage;