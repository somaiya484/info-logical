import { MdOutlineAlternateEmail, MdCall } from "react-icons/md";

const Contact = () => {
    return (
        <div className='px-6 my-20'>
            {/* <img className='-mt-32 object-cover h-48 w-96' src="https://i.ibb.co/stW0W1G/content-5.jpg" alt="" /> */}

            <p className='primary-text font-semibold '>Contact</p>

            <div className="flex justify-between px-8 mt-10">
                <h1 className="text-4xl">Get In Touch</h1>
                <div className="flex items-center gap-9">
                    <div className="flex items-center gap-3">
                        <MdOutlineAlternateEmail className="text-5xl font-semibold primary-text"></MdOutlineAlternateEmail>
                        <div>
                            <h1 className="font-semibold text-lg">mil.design.inbox@mail.com</h1>
                            <p className="text-gray-400 text-base">Support email</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <MdCall className="text-5xl font-semibold primary-text"></MdCall>
                        <div>
                            <h1 className="font-semibold text-lg">+49 (055) 742 78 84</h1>
                            <p className="text-gray-400 text-base">Call 24/7</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                
            </div>
        </div>
    );
};

export default Contact;