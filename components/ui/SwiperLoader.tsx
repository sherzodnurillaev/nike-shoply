'use client'

import dynamic from 'next/dynamic';
import Skeleton from './Skeleton';

const SwiperPage = dynamic(() => import('@/components/HomeScreen/Swiper'), {
  ssr: false,
  loading: () => <Skeleton />,
});

export default function SwiperLoader() {
  return <SwiperPage />;
}
