'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const BannerMen = () => {
  return (
    <div className="!py-[50px] !px-6">
      <div className="flex flex-col md:flex-row items-center justify-around gap-10">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left space-y-4"
        >
          <h1 className="text-[24px] md:text-[38px] lg:text-[48px] xl:text-[50px] font-bold text-red-700 md:text-black">Nike Shoes</h1>
          <h2 className="text-[18px] md:text-[28px] lg:text-[32px] xl:text-[38px] font-semibold text-[#9e9e9e]">Just Do It.</h2>
          <p className="text-[14px] md:text-[18px] xl:text-[20px] text-[#fff] max-w-[500px] !my-2">
            Take on anything spring throws your way in these functional styles
          </p>
          <Link
            href="/"
            className="inline-block bg-black text-white text-[14px] md:text-[16px] lg:text-[20px] !px-6 !py-3 rounded-full font-semibold hover:text-red-600 transition"
          >
            SHOP MEN
          </Link>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center space-y-4"
        >
            <div className="relative w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] h-[150px] lg:h-[300px]">
                <Image
                src={'/forBanner/banner-top.png'}
                alt="banner"
                fill
                className="object-contain"
                priority
                />
            </div>

            <div className="relative w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] h-[100px] lg:h-[200px]">
                <Image
                src={'/forBanner/banner-foot.png'}
                alt="banner"
                fill
                className="object-contain"
                />
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BannerMen;
