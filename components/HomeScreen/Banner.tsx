'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import BannerMen from '../Banner/BannerMen';
import BannerWomen from '../Banner/BannerWomen';
import BannerKids from '../Banner/BannerKids';

const Banner = () => {
  return (
    <section className="py-10">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        speed={1000}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide><BannerMen /></SwiperSlide>
        <SwiperSlide><BannerWomen /></SwiperSlide>
        <SwiperSlide><BannerKids /></SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;