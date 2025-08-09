'use client';

import Image from 'next/image';
import Link from 'next/link';

const BannerWomen = () => {

    return (
        <div className="!py-[50px] md:!py-0 md:!pb-[50px] !px-6">
            <div className="flex flex-col-reverse md:flex-row items-center justify-around gap-10">
                <div className="relative w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] h-[200px] sm:h-[240px] md:h-[300px] lg:h-[400px]">
                    <Image src={'/forBanner/nike-women.webp'} fill alt='banner' />
                </div>
                <div className="text-center md:text-left space-y-4">
                    <h1 className='text-[24px] md:text-[38px] lg:text-[48px] xl:text-[50px] font-bold text-red-700'>Nike Women</h1>
                    <h2 className='text-[18px] md:text-[28px] lg:text-[32px] xl:text-[38px] font-semibold text-[#9e9e9e]'>Empower Your Move.</h2>
                    <p className='text-[#fff] text-[14px] md:text-[18px] xl:text-[20px] max-w-[500px] !my-2'>Step into spring with bold energy and unstoppable style — made for her.</p>
                    <Link 
                        href={"/products/women"}
                        prefetch={false}
                        className="inline-block bg-red-700 text-white text-[14px] md:text-[16px] lg:text-[20px] !px-6 !py-3 rounded-full font-semibold hover:text-black transition"
                    >
                        SHOP WOMEN
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BannerWomen
