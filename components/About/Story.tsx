'use client'

import Image from "next/image"

const Story = () => {

    return (
        <div className="text-center !mt-[40px] md:!mt-[70px] lg:!mt-[100px] sm:text-left sm:flex items-center justify-around">
            <Image src={'/about/story.webp'} className="relative rounded-[10px] w-[100%] sm:w-[300px]" width={300} height={300} alt="move" />
            <div className="!px-[20px] !mt-[20px] md:!mt-[40px] lg:!mt-[50px]">
                <h2 className="text-[20px] md:text-[24px] lg:text-[36px] font-bold text-[#c9c9c9]">Nike began as a dream to serve runners</h2>
                <p className="text-[14px] md:text-[16px] lg:text-[20px] italic max-w-[600px] !my-[5px] md:!my-[7px] lg:!my-[10px]">From a small partnership in 1964 to a global icon, our journey is built on performance, design, and breaking barriers.</p>
                <p className="text-[16px] md:text-[18px] lg:text-[24px] font-bold text-[#9e9e9e] italic">Every step we take is for the athlete inside everyone.</p>
            </div>
        </div>
    )
}

export default Story;
