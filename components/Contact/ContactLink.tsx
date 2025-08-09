'use client'

import Image from "next/image"
import Link from "next/link"

const LinkContact = () => {

    const data = [
        {
            id: 1,
            img: "/contacts/instagram.webp",
            link: "https://www.instagram.com/nike?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
            title: "instagramm"
        },
        {
            id: 2,
            img: "/contacts/facebook.webp",
            link: "https://www.facebook.com/nike/?locale=ru_RU",
            title: "faceBook"
        },
        {
            id: 3,
            img: "/contacts/twitter.webp",
            link: "https://x.com/nike/with_replies",
            title: "twitter"
        }
    ]

    return (
        <div className="">
            <div className="flex gap-5 justify-center items-center ">
                {
                    data.map((item) => (
                        <Link key={item.id} href={item.link} className="text-center cursor-pointer">
                            <Image src={item.img} width={300} height={300} alt="link" />
                            <p className="text-[14px] md:text-[16px] lg:text-[20px] font-bold bg-gradient-to-r from-[#fff] bg-clip-text text-transparent">{item.title}</p>
                        </Link>
                    ))
                }
            </div>
            <Image src={'/nike-logo.webp'} width={400} height={200} alt="logo" className="!mx-auto" />
        </div>
    )
}

export default LinkContact
