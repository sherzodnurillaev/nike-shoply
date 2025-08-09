'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Swiper, SwiperSlide } from "swiper/react"

const SwiperPage = () => {
    const router = useRouter()
    const data = [
        {
            id: 1,
            img: '/forSwiper/af1.webp',
            category: 'af1',
            title: "Air Force"
        },
        {
            id: 2,
            img: '/forSwiper/city.webp',
            category: 'city',
            title: "C1TY"
        },
        {
            id: 3,
            img: '/forSwiper/dunk.webp',
            category: 'dunk',
            title: "Dunk"
        },
        {
            id: 4,
            img: '/forSwiper/mercurial.webp',
            category: 'mercurial',
            title: "Mercurial"
        },
        {
            id: 5,
            img: '/forSwiper/v2k.webp',
            category: 'v2k',
            title: "V2K Run"
        },
        {
            id: 6,
            img: '/forSwiper/vomero.webp',
            category: 'vomero',
            title: "Vomero"
        }
    ]

    const handleClick = (category: String) => {
        router.push(`products/men?category=${category}`)
    }

    return (
        <div className="!py-[50px] !px-[30px]">
            <h2 className="font-bold md:text-[24px] bg-gradient-to-r from-[#c9c9c9] bg-clip-text text-transparent">On Fire</h2>
            <Swiper
                spaceBetween={50}
                breakpoints={{
                    0: {
                    slidesPerView: 1.5, 
                    },
                    480: {
                    slidesPerView: 2.5, 
                    },
                    640: {
                    slidesPerView: 3.2, 
                    },
                    1024: {
                    slidesPerView: 4.5, 
                    },
                }}
                loop
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        data.map((item, i) => (
                            <SwiperSlide className="cursor-pointer" onClick={() => handleClick(item.category)}>
                                <Image src={item.img} width={300} height={400} alt={item.category} />
                                <h2 className="bg-gradient-to-r from-red-800 to-black !px-[20px] text-[14px] md:text-[16px] rounded-[4px] w-fit">{item.title}</h2>
                            </SwiperSlide>
                        ))
                    }
            </Swiper>
        </div>
    )
}

export default SwiperPage
