'use client'

import Image from "next/image"
import Link from "next/link"

const Empty = () => {

    const data = [
        {
            id: 1,
            link: '/products/men',
            txt: 'for men',
        },
        {
            id: 2,
            link: '/products/women',
            txt: 'for women',
        },
        {
            id: 3,
            link: '/products/kids',
            txt: 'for kids',
        }
    ]

    return (
        <div className="relative flex items-center justify-center">
            <div className="">
                <Image src={"/icon/empty-box.webp"} className="!mx-auto" width={500} height={500} alt="empty" />
                <p className="text-center text-[13px] md:text-[16px] lg:text-[18px] !py-[20px] max-w-[700px]">it's empty here please go and select the product using the button below</p>
                <div className="flex justify-center gap-3">
                    {
                        data.map((item) => (
                            <Link key={item.id} href={item.link} prefetch={false} 
                                className="border-1 !px-[5px] rounded-[4px]"
                            >{item.txt}</Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Empty
