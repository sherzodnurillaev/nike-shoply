'use client'

import Image from "next/image"

const JoinUs = () => {

    const data = [
        {
            id: 1,
            icon: "/careers/friendly.png",
            text: "Remote friendly"
        },
        {
            id: 2,
            icon: "/careers/hard.png",
            text: "Challenging projects"
        },
        {
            id: 3,
            icon: "/careers/free.png",
            text: "Creative freedom"
        },
        {
            id: 4,
            icon: "/careers/flexibl.png",
            text: "Flexible hours"
        },
    ]

    return (
        <div className="">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:flex justify-center gap-[25px] !px-[20px] !my-[30px] sm:!my-[50px] md:!my-[70px] lg:!my-[100px]">
                {
                    data.map((item) => (
                        <div key={item.id} className="flex items-center gap-2">
                            <Image className="w-[30px] lh-[30px] md:w-[40px] lg:w-[50px] md:h-[40px]  lg:h-[50px]" src={item.icon} width={50} height={50} alt={item.text} />
                            <p className="text-[16px] md:text-[20px] lg:text-[26px] font-bold italic bg-gradient-to-r from-white to-[#9e9e9e] bg-clip-text text-transparent">{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default JoinUs
