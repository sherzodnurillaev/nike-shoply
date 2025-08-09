'use client'

import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"

const Picture = () => {
    const data = [
        {
            id: 1,
            img: '/forBottom/carrusel-men.webp',
            title: 'Men`s clothing',
            link: 'men'
        },
        
        {
            id: 2,
            img: '/forBottom/carrusel-women.webp',
            title: 'Women`s clothing',
            link: 'women'
        },
        {
            id: 3,
            img: '/forBottom/carrusel-kids.webp',
            title: 'Kids clothing',
            link: 'kids'
        }
    ]

    return (
        <div className="!px-[20px] xl:!px-0">
            <Swiper
                spaceBetween={20}
                breakpoints={{
                    0: {
                    slidesPerView: 1.2, 
                    },
                    480: {
                    slidesPerView: 2.4, 
                    },
                    640: {
                    slidesPerView: 3, 
                    },
                    1024: {
                    slidesPerView: 3, 
                    },
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        data.map((item, i) => (
                            <SwiperSlide className="">
                                <Image src={item.img} className="!mb-[10px] rounded-[4px]" width={420} height={500} alt={item.link} />
                                <Link
                                    href={`products/${item.link}`}
                                    prefetch={false}
                                    className="inline-block cursor-pointer text-[14px] sm:text-[16px] md:text-[18px] bg-gradient-to-b from-red-800 to-black text-white rounded-[12px] !px-[15px] !py-[5px] text-center"
                                >
                                    {item.title}
                                </Link>
                            </SwiperSlide>
                        ))
                    }
            </Swiper>
        </div>
    )
}

export default Picture
