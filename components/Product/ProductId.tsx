"use client";

import { fetchProducts } from "@/lib/api";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import ProButton from "../ui/ProfButton";

interface ProductIdProps {
  id: string;
}

interface Product {
  id: number;
  model: string;
  description: string;
  category: string;
  pictures: string[];
  color: string[];
  size: string[];
  male: "men" | "women" | "kids";
  price: number;
}

const ProductId = ({ id }: ProductIdProps) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  useEffect(() => {
    fetchProducts().then((products: Product[]) => {
      const prod = products.find((p) => p.id === Number(id));
      setProduct(prod || null);
    });
  }, [id]);

  if (!product) return <p>Загрузка...</p>;

  return (
    <div className="flex gap-5">

        <div className="max-w-[600px]">

        <Swiper
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Thumbs, Navigation]}
            className="!mb-4"
        >
            {product.pictures.map((item, index) => (
            <SwiperSlide key={index}>
                <div className="max-w-[600px] max-h-[600px] rounded-2xl overflow-hidden">
                    <Image
                        src={item}
                        alt={`Image ${index}`}
                        width={600}
                        height={500}
                        className="bg-center bg-cover object-cover"
                    />
                </div>
            </SwiperSlide>
            ))}
        </Swiper>

        <div className="hidden md:flex">
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                watchSlidesProgress
            >
                {product.pictures.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="max-w-[140px] rounded-2xl overflow-hidden max-h-[140px]">
                        <Image
                        src={item}
                        alt={`Thumb ${index}`}
                        width={50}
                        height={50}
                        className="w-full h-auto object-contain border border-gray-300 rounded"
                        />
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
        </div>
            <div className="">
                <div className="flex items-center">
                    <h1 className="text-[36px]">{product.model}</h1>
                    <Image
                        src={'/nike-logo.png'}
                        alt={`Thumb`}
                        width={120}
                        height={50}
                        className="w-[120] h-auto object-contain"
                    />
                </div>
                <div className="">
                </div>
                <h2>{product.description}</h2>
                <div className="">
                    <p>for: {product.male}</p>
                </div>
                <span>price: ${product.price}</span>
                <ProButton req={product.id} />
            </div>
    </div>
  );
};

export default ProductId;
