import { FaCheck } from "react-icons/fa6";

const OurPackage = () => {
    return (
        <div className='mt-28'>

            <h1 className="text-4xl font-bold text-center ">Get Started in less than 5 minutes</h1>
            <p className="text-center text-base mt-5 text-gray-500">Scale smoothly and build to last on Rwazi</p>

            <div className="md:flex items-center justify-center gap-7 mt-9 px-9 md:px-0">

                <div className="border-2 border-indigo-700  px-16 py-9 mt-4">
                    <h1 className="text-2xl font-semibold">Free</h1>
                    <p className="text-5xl primary-text font-semibold mt-3">$0</p>

                    <ul className="list-outside list-disc marker:text-indigo-700 marker:text-lg my-5" >
                        <li>5 Templates</li>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 2</li>
                        <li>User 5</li>
                    </ul>

                    <button className="px-5 py-2 bg-btn rounded-sm">Get Plan</button>
                </div>
                <div className="border-2 border-indigo-700  px-16 py-9 mt-4">
                    <h1 className="text-2xl font-semibold">Individual</h1>
                    <p className="text-5xl primary-text font-semibold mt-3">$29</p>

                    <ul className="list-outside list-disc marker:text-indigo-700 marker:text-lg my-5" >
                        <li>10 Templates</li>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 2</li>
                        <li>User 15</li>
                    </ul>

                    <button className="px-5 py-2 bg-btn rounded-sm">Get Plan</button>
                </div>
                <div className="border-2 border-[#86cf5f] bg-[#86cf5f] px-16 py-9 text-white mt-4">
                    <h1 className="text-2xl font-semibold">Business</h1>
                    <p className="text-5xl primary-text font-semibold mt-3">$59</p>

                    <ul className="list-outside list-disc marker:text-indigo-700 marker:text-lg my-5" >
                        <li>15 Templates</li>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 2</li>
                        <li>User 20</li>
                    </ul>

                    <button className="px-5 py-2 bg-btn rounded-sm">Get Plan</button>
                </div>
                <div className="border-2 border-indigo-700  px-16 py-9 mt-4">
                    <h1 className="text-2xl font-semibold">Premium</h1>
                    <p className="text-5xl primary-text font-semibold mt-3">$89</p>

                    <ul className="list-outside list-disc marker:text-indigo-700 marker:text-lg my-5" >
                        <li>20 Templates</li>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 2</li>
                        <li>User 25</li>
                    </ul>

                    <button className="px-5 py-2 bg-btn rounded-sm">Get Plan</button>
                </div>
            </div>

        </div>

    );
};

export default OurPackage;