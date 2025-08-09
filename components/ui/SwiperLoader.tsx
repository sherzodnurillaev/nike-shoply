'use client'

import dynamic from 'next/dynamic';

const SwiperPage = dynamic(() => import('@/components/HomeScreen/Swiper'), {
  ssr: false,
  loading: () => <p>Загрузка...</p>,
});

export default function SwiperLoader() {
  return <SwiperPage />;
}
