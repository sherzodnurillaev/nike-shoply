'use client'

import Image from "next/image"

const Mission = () => {

    return (
        <div className="text-center !mt-[20px] md:!mt-[50px] lg:!mt-[100px]">
            <div className="!px-[20px]">
                <h2 className="text-[20px] md:text-[24px] lg:text-[36px] font-bold text-[#c9c9c9]">At Nike, our mission is simple</h2>
                <p className="text-[14px] md:text-[16px] lg:text-[20px] italic !my-[5px] md:!my-[7px] lg:!my-[10px]">To bring inspiration and innovation to every athlete in the world.</p>
                <p className="text-[16px] md:text-[18px] lg:text-[24px] font-bold">If you have a body, you are an athlete.</p>
            </div>
            <Image src={'/about/mission.png'} className="relative w-[100%] !mt-[20px] md:mt-[30px] lg:!mt-[50px] xl:rounded-2xl" width={1000} height={100} alt="move" />
        </div>
    )
}

export default Mission
