'use client'

import Image from "next/image"

const MoveSections = () => {

    return (
        <div className="text-center sm:text-left sm:flex items-center justify-around">
            <div className="!px-[20px] !mt-[20px] md:!mt-[40px] lg:!mt-[50px]">
                <h2 className="text-[20px] md:text-[24px] lg:text-[36px] font-bold text-[#c9c9c9]">We Move the World Forward</h2>
                <p className="text-[14px] md:text-[16px] lg:text-[20px] italic !my-[5px] md:!my-[7px] lg:!my-[10px]">Through sport, we inspire every human to reach their potential.</p>
                <p className="text-[16px] md:text-[18px] lg:text-[24px] font-bold text-[#9e9e9e] italic">Just Do It.</p>
            </div>
            <Image src={'/about/moveSection.avif'} className="relative rounded-[10px] w-[100%] sm:w-[300px]" width={300} height={300} alt="move" />
        </div>
    )
}

export default MoveSections
