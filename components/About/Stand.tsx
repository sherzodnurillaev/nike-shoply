'use client'

const Stand = () => {

    const data = [
        "Innovation — We push the limits of what's possible.",
        "Sustainability — We protect the planet we play on.",
        "Equality — We believe sport is for everyone.",
        "Courage — We break the rules to build the future."
    ]

    return (
        <div className="text-center !mt-[20px] md:!mt-[50px] lg:!mt-[80px]">
            <div className="!px-[20px] !mt-[20px] md:!mt-[40px] lg:!mt-[50px]">
                <h2 className="text-[20px] md:text-[24px] lg:text-[36px] font-bold text-[#c9c9c9]">What We Stand For</h2>
                <div className="w-fit !mx-auto">
                {
                    data.map((item, i) => (
                            <p key={i} className="text-left text-[16px] md:text-[18px] lg:text-[24px] font-bold text-[#9e9e9e] italic">{item}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Stand;
