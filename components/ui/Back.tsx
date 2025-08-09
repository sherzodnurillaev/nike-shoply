"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

const Back = () => {
    const navigate = useRouter()

    const toggleBack = () => {
        navigate.back()
    }

    return (
        <button className="flex items-center gap-3 !px-[20px] !py-[7px] rounded-2xl bg-black/30" onClick={toggleBack}>
            <Image src={"/back.webp"} width={30} height={30} alt="back" /> 
            <p className="hidden md:block">Back</p>
        </button>
    )
}

export default Back
