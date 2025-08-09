'use client'
import Image from "next/image"

const FirstTitle = () => {

    return (
        <div className="!px-[20px] md:!px-[50px] !py-[0px] md:!py-[50px]">
            <div className="flex items-center justify-center gap-x-12 px-4 py-8 max-w-screen-xl mx-auto flex-wrap md:flex-nowrap">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-[18px] md:text-[32px] font-bold bg-gradient-to-r from-black to-[#fff] bg-clip-text text-transparent">
                        NIKE is not just a brand. It's a movement
                    </h1>
                    <p className="text-[14px] md:text-[18px] text-[#c9c9c9] mt-4 italic">
                        We believe in the power of sport, style, and freedom.
                        From sneakers tested on the streets to innovations that inspire champions.
                        Dress how you want. Move how you feel. Live your own way.
                    </p>
                    <h2 className="text-[18px] md:text-[28px] text-red-700 md:text-black mt-4 font-bold">Just Do It</h2>
                </div>

                <div className="md:w-1/2 flex justify-center">
                    <Image
                    src="/forHome/nike-girl-model.webp"
                    width={300}
                    height={300}
                    alt="Nike model"
                    className="object-contain rounded-xl"
                    />
                </div>
            </div>
        </div>
    )
}

export default FirstTitle
