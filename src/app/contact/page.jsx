import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import Company from "../components/Company";

const Contact = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/x72WQSy/Articles-Bg.webp')] ">

            <div className="bg-[url('https://i.ibb.co/FgNS1gz/City-Bg-2x.webp')] mt-7 pt-16 pb-32">

                <p className='primary-text text-center text-7xl primary-text font-bold'>Contact Us Today</p>

                {/* section 1 */}
                <div className="md:flex justify-between px-8 mt-20 gap-40 ">
                    {/* left side */}
                    <div>
                        <h1 className="text-5xl font-semibold">Get In Touch With Us</h1>
                        <p className="text-xl mt-10 text-gray-500">Whether you choose to drop us a line, please reach out on social media or fill out the lead form. We will make sure to get right back to you!</p>

                        <div className="mt-28">
                            <p className="text-xl text-gray-600 font-bold">Follow Us On Social Media</p>

                            <div className="flex gap-8 items-center mt-5 text-3xl text-indigo-700">
                                <FaFacebookF></FaFacebookF>
                                <FaYoutube></FaYoutube>
                                <FaInstagram></FaInstagram>
                                <FaLinkedin></FaLinkedin>
                            </div>

                        </div>
                    </div>

                    {/* right side */}
                    <div>
                        <form>
                            <div className="form-control mt-5">
                                <input type="text" placeholder="Name" name='name' className="input input-bordered border-2  focus:outline-none rounded-xl" required />
                            </div>
                            <div className="form-control mt-5">
                                <input type="text" placeholder="Email" name='email' className="input input-bordered border-2  focus:outline-none rounded-xl" required />
                            </div>
                            <div className="form-control mt-5">
                                <input type="text" placeholder="Phone" name='phone' className="input input-bordered border-2  focus:outline-none rounded-xl" required />
                            </div>
                            <div>
                                <textarea className="input input-bordered mt-5 h-48 border-2  focus:outline-none rounded-xl pt-3" name="text" placeholder="Message" id="" cols="52"></textarea>
                            </div>
                            {/* <p className='text-red-700 font-semibold mt-4'>error</p> */}

                            <input type="submit" value="Submit" className="btn w-[120px] border-indigo-700 border-2 bg-transparent text-indigo-700 form-control mt-3 text-[15px] font-semibold" />
                        </form>
                    </div>
                </div>
            </div>


            {/* section 2 */}
            <div className="md:flex px-8 gap-16 items-center bg-blue-500 py-28 w-full text-white">
                <img className="grayscale absolute right-0 mix-blend-soft-light scale-x-[-1] w-[400px]" src="https://i.ibb.co/tZ8W1T2/comdlpng6951357-removebg-preview.png" alt="" />
                <div className="md:w-[50%] -ml-8">
                    <img className="rounded-e-3xl" src="https://i.ibb.co/DR8F12f/5701942eaadd4f6305f371d8f5dde7ed.jpg" alt="" />
                </div>

                <div className="md:w-[50%] mt-10 md:mt-0">
                    <h1 className="text-4xl font-semibold">Contact</h1>

                    <div className="flex items-center gap-4 text-lg mt-8">
                        <IoLocationOutline className="text-3xl"></IoLocationOutline>
                        <p>99 Street, Pitsubarge, PA-1532</p>
                    </div>
                    <div className="flex items-center gap-4 text-lg mt-8 ml-1">
                        <FaPhoneAlt className="text-2xl"></FaPhoneAlt>
                        <p>923-231-4213</p>
                    </div>
                    <div className="flex items-center gap-4 text-lg mt-8">
                        <IoMailOutline className="text-3xl"></IoMailOutline>
                        <p>digital@infological.com</p>
                    </div>
                </div>
            </div>

            <div className="pb-20">

                <Company></Company>
            </div>
        </div>
    );
};

export default Contact;