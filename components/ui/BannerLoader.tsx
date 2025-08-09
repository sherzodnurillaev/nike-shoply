'use client';

import dynamic from 'next/dynamic';

const Banner = dynamic(() => import("@/components/HomeScreen/Banner"), {
  ssr: false,
  loading: () => <p>Загрузка баннера...</p>,
});

export default function BannerLoader() {
  return <Banner />;
}
