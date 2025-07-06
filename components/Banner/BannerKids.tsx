'use client';

import Image from 'next/image';
import Link from 'next/link';

const BannerKids = () => {

    return (
        <div className="!py-[50px] !px-6">
            <div className="flex flex-col md:flex-row items-center justify-around gap-10">
                <div className="text-center md:text-left space-y-4">
                    <h1 className='text-[24px] md:text-[38px] lg:text-[48px] xl:text-[50px] font-bold text-red-700 md:text-black'>Nike Kids</h1>
                    <h2 className='text-[18px] md:text-[28px] lg:text-[32px] xl:text-[38px] font-semibold text-[#9e9e9e]'>Play Without Limits.</h2>
                    <p className='text-[#fff] text-[14px] md:text-[18px] xl:text-[20px] max-w-[500px] !my-2'>Gear up the next generation with comfy, cool, and colorful styles made for every adventure.</p>
                    <Link 
                        href={"/"}
                        className='inline-block bg-black text-white text-[14px] md:text-[16px] lg:text-[20px] !px-6 !py-3 rounded-full font-semibold hover:text-red-600 transition'
                    >
                        SHOP KIDS
                    </Link>
                </div>
                <div className="relative w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] h-[200px] sm:h-[240px] md:h-[300px] lg:h-[400px]">
                    <Image src={'/forBanner/nike-kids.png'} fill alt='banner' />
                </div>
            </div>
        </div>
    )
}

export default BannerKids
