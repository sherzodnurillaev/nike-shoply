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
            <Image src={"/back.png"} width={30} height={30} alt="back" /> Back
        </button>
    )
}

export default Back
