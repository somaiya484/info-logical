import React from "react";

import Image from "next/image";
import { twMerge } from "tailwind-merge";


const HeydawBlur = ({ position, animate }) => {
    return (
        <div className={twMerge(` absolute  ${position} `)}>
            <div
                className={`mix-blend-screen ${animate ? " animate-blob " : ''}  flex flex-col justify-center items-center bg-[#120f45] w-72 h-72 md:w-[650px] md:h-[650px] rounded-full filter blur-3xl`}>
                <div
                    className={`mix-blend-plus-lighter  mt-20 ml-56 bg-purple-400  ${animate ? " animate-blob " : ''} w-72 h-72 md:w-[300px] md:h-[300px] rounded-full filter blur-[90px]`}>
                    <div className={`mix-blend-plus-lighter -mt-64 bg-[#161562] md:w-[900px] md:h-[900px] ${animate ? " animate-blob " : ''} rounded-full filter blur-3xl`}>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeydawBlur