'use client';

import dynamic from 'next/dynamic';

const Picture = dynamic(() => import("@/components/HomeScreen/CasualesPicture"), {
  ssr: false,
  loading: () => <p>Загрузка...</p>,
});

export default function PictureLoader() {
  return <Picture />;
}
