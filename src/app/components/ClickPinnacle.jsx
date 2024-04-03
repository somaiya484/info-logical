import React from 'react';

const ClickPinnacle = () => {
    return (
        <div className='mt-32'>
            <h2 className='text-center text-5xl font-bold primary-text'>ClickPinnacle!</h2>

            <div className='md:flex justify-between items-center gap-24 mx-24 mt-10'>
                <img className='w-[36%]' src="https://i.ibb.co/0jxg25j/a39a2531-21fa-434e-b538-93170ef683b6.jpg" alt="" />

                <div className='text-lg text-zinc-900'>
                    <p className='font-bold '>Reach the pinnacle or peak of marketing success with just a click!</p>
                    <p className='my-6 leading-7'><span className='text-gradient'>Top-notch web design & development services, digital marketing services, looker Studio reporting templates and full-seo services</span> at one <span className='font-semibold'>global digital marketing agency</span> in simple steps.</p>

                    <div className='leading-9'>
                        <p>1. Compare & Purchase <span className='font-semibold'>our wholesale priced</span>  marketing services</p>
                        <p>2. Give us <span className='font-semibold'>your preferences</span></p>
                        <p>3. We will take care of the rest</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClickPinnacle;