import React from 'react';

const MarketDetails = () => {
    return (
        <div>
            <div className='bg-black relative flex  flex-col-reverse mt-32'>

                <img src="https://www.rwazi.com/_next/static/media/world_map.a9ab13a4.svg" alt="" />


                <div className='md:absolute top-0 text-white pl-10 md:pl-24'>
                    <h1 className='text-4xl mt-10 md:mt-28 font-bold border-b border-gray-600 pb-5 '>Markets We Serve</h1>

                    <div className='mt-10 border-b border-gray-600 pb-8'>
                        <h2 className='text-5xl  text-indigo-400 pb-2'>60+</h2>
                        <p className=' text-gray-100'>Countries</p>
                    </div>
                    <div className='mt-10 border-b border-gray-600 pb-8'>
                        <h2 className='text-5xl  text-indigo-400 pb-2'>400k+</h2>
                        <p className=' text-gray-100'>Mappers Collecting Data</p>
                    </div>
                    <div className='mt-10 border-b border-gray-600 pb-8'>
                        <h2 className='text-5xl  text-indigo-400 pb-2'>2.2m+</h2>
                        <p className=' text-gray-100'>Outlets Covered</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default MarketDetails;