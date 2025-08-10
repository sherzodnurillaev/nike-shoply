'use client';

import dynamic from 'next/dynamic';
import Skeleton from './Skeleton';

const Picture = dynamic(() => import("@/components/HomeScreen/CasualesPicture"), {
  ssr: false,
  loading: () => <Skeleton />,
});

export default function PictureLoader() {
  return <Picture />;
}
