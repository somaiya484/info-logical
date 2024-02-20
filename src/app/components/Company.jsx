import Marquee from "react-fast-marquee";

const Company = () => {
    return (
        <div className='mt-28 ml-8'>
            <h1 className='primary-text font-semibold text-lg'>Company we have worked with</h1>

            <div >
                <Marquee pauseOnHover className='order g-4 '>
                    <div className="flex items-center gap-28">
                        <div className="grayscale hover:grayscale-0">
                            <img className="w-32" src="https://i.ibb.co/jZ1SFDN/channels4-profile-removebg-preview.png" alt="" />
                        </div>
                        <div className="grayscale hover:grayscale-0">
                            <img className="w-32" src="https://i.ibb.co/bLbnq4B/Autodesk-Logo-removebg-preview.png" alt="" />
                        </div>
                        <div className="grayscale hover:grayscale-0">
                            <img className="w-32" src="https://i.ibb.co/HxkW6fL/Intel-Logo-Design-in-BLue-1024x640-removebg-preview.png" alt="" />
                        </div>
                        <div className="grayscale hover:grayscale-0">
                            <img className="w-32" src="https://i.ibb.co/s5nx3K5/download-removebg-preview.png" alt="" />
                        </div>
                        <div className="grayscale hover:grayscale-0">
                            <img className="w-32" src="https://i.ibb.co/pJzyNhN/download-1-removebg-preview.png" alt="" />
                        </div>
                    </div>

                </Marquee>
            </div>
        </div>
    );
};

export default Company;