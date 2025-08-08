'use client'

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Card3D = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30; 
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -30; 
    setRotate({ x, y });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className="w-full h-[200px] md:h-[500px] rounded-xl overflow-hidden"
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center"
        style={{
          rotateX: rotate.y,
          rotateY: rotate.x,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
      >
        <Image
          src="/nike-logos-jordan-white.png"
          alt="3D Logo"
          fill
          className="object-contain relative z-0"
        />
      </motion.div>
    </motion.div>
  );
};

export default Card3D;
