'use client'

import { useState } from "react"

const data = ["buy", "like"]

interface Type {
    req: number
}

const ProButton = ({ req }: Type) => {
    
    console.log(req);

    const handleClick = (item: string) => {
        if (item == "buy") {
            console.log('buy click');
        } else if (item == 'like') {
            console.log('like click');
        }
    }
    

    return (
        <>
            {
                data.map((item, i) => (
                    <button key={i} className="relative !px-[20px] !py-[5px] bg-[#000] rounded-[20px] cursor-pointer hover:text-red-700"
                    onClick={() => handleClick(item)} >{item}</button>
                ))
            }
        </>
    )
}

export default ProButton
