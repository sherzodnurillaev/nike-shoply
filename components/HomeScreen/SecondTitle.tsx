'use client'
import Image from "next/image"

const SecondTitle = () => {

    return (
        <div className="!px-[20px] md:!px-[50px] !py-[0px] md:!py-[50px]">
            <div className="flex items-center justify-center gap-x-12 px-4 py-8 max-w-screen-xl mx-auto flex-wrap md:flex-nowrap">
                <div className="md:w-1/2 flex justify-center">
                    <Image
                    src="/forHome/nike-men-model.png"
                    width={500}
                    height={500}
                    alt="Nike model"
                    className="object-contain rounded-xl"
                    />
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-[18px] md:text-[32px] font-bold bg-gradient-to-r from-white to-red-700 md:from-red-600 md:to-[#9e9e9e] bg-clip-text text-transparent">
                        Be Bold. Be Different.
                    </h1>
                    <p className="text-[14px] md:text-[18px] text-[#c9c9c9] mt-4 italic">
                        Nike isn’t just clothing — it’s a way to tell the world who you are.
                        Forget the rules. Create a style that speaks for you.
                        Don’t follow fashion — inspire it.
                    </p>
                    <h2 className="text-[18px] md:text-[28px] text-[#9e9e9e] md:text-red-700 mt-4 font-bold">
                        Wear Your Attitude
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default SecondTitle
