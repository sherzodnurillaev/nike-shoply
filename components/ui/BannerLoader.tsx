'use client';

import dynamic from 'next/dynamic';
import Skeleton from './Skeleton';

const Banner = dynamic(() => import("@/components/HomeScreen/Banner"), {
  ssr: false,
  loading: () => <Skeleton />,
});

export default function BannerLoader() {
  return <Banner />;
}
