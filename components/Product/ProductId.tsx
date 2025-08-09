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
import Back from "../ui/Back";

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
    <div className="!px-4 md:!px-8 max-w-[1200px] !mx-auto">
        <Back />
        <div className="flex flex-col md:flex-row items-start gap-8 !mt-[20px]">

        <div className="w-full md:w-1/2">
            <Swiper
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Thumbs, Navigation]}
            className="!mb-4"
            >
            {product.pictures.map((item, index) => (
                <SwiperSlide key={index}>
                <div className="w-full aspect-square max-h-[500px] rounded-2xl overflow-hidden">
                    <Image
                    src={item}
                    alt={`Image ${index}`}
                    width={600}
                    height={500}
                    className="object-cover w-full h-full"
                    />
                </div>
                </SwiperSlide>
            ))}
            </Swiper>

            <div className="hidden md:flex !mt-2">
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                watchSlidesProgress
            >
                {product.pictures.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="w-full max-w-[120px] rounded-xl overflow-hidden aspect-square border border-gray-300">
                    <Image
                        src={item}
                        alt={`Thumb ${index}`}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                    />
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>

        <div className="w-full md:w-1/2 bg-white/35 !p-6 rounded-2xl flex flex-col gap-4 text-base">
            <div className="flex flex-row items-center justify-between gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold">{product.model}</h1>
            <Image
                src="/nike-logo.webp"
                alt="Brand"
                width={120}
                height={50}
                className="w-[100px] sm:w-[120px] h-auto object-contain"
            />
            </div>

            <p className="text-sm md:text-base text-gray-800">{product.description}</p>

            <p className="text-sm md:text-base">
            <span className="font-semibold">For:</span> {product.male}
            </p>

            <p className="text-lg font-semibold">Price: ${product.price}</p>

            <ProButton id={product.id} />
        </div>
        </div>
    </div>
  );
};

export default ProductId;
