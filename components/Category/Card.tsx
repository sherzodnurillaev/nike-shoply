'use client';

import { fetchProducts } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

interface ProductListProps {
  male: string;
  category?: string;
}

type Product = {
  id: number;
  model: string;
  descriptions: string;
  category: string;
  pictures: string[];
  color: string;
  size: string[];
  male: "men" | "women" | "kids";
  price: number;
};

const ProductList = ({ male, category }: ProductListProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const { buyList, toggleBuy, favorites, toggleFavorite } = useCart();

  useEffect(() => {
    const width = window.innerWidth;
    const initialCount = width < 768 ? 4 : 8;
    setVisibleCount(initialCount);
  }, []);

  useEffect(() => {
    fetchProducts().then((data) => {
      let filtered = data.filter((item: Product) => item.male === male);
      if (category) {
        filtered = filtered.filter((item: Product) => item.category === category);
      }
      setProducts(filtered);
    });
  }, [male, category]);

  const displayedProducts = showAll ? products : products.slice(0, visibleCount);

  return (
    <>
      <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedProducts.map((item, i) => (
          <div key={i} className="relative w-full bg-white rounded-b-[6px] shadow group">
            {item.pictures && item.pictures.length > 0 ? (
              <Image
                src={item.pictures[0]}
                width={500}
                height={500}
                alt="prod"
                className="w-full h-auto object-cover"
              />
            ) : (
              <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">No image</div>
            )}
            <div className="!p-[10px]">
              <h2 className="text-black text-[16px] md:text-[18px] lg:text-[20px]">Nike {item.model}</h2>
              <h2 className="text-[#9e9e9e] text-[14px] md:text-[16px] lg:text-[18px]">{item.price} $</h2>
              <div className="flex justify-between !pt-[10px] gap-2">
                <Link
                  href={`/products/${item.male}/${item.id}`}
                  className="bg-black !px-[15px] md:!px-[25px] !py-[3px] md:!py-[7px] text-[14px] md:text-[16px] lg:text-[18px] rounded-[20px] text-white"
                >
                  Show
                </Link>
                <button
                  onClick={() => toggleBuy(item.id)}
                  className={`${
                    buyList.includes(item.id) ? "bg-red-600" : "bg-black"
                  } !px-[15px] md:!px-[25px] !py-[3px] md:!py-[7px] rounded-[20px] text-[14px] md:text-[16px] lg:text-[18px] text-white`}
                >
                  {buyList.includes(item.id) ? "Remove" : "Buy"}
                </button>
              </div>
            </div>
            <button
              onClick={() => toggleFavorite(item.id)}
              className={`
                absolute top-0.5 md:top-2 right-0.5 md:right-2 z-10 text-white 
                px-2 py-1 rounded 
                transition duration-300
                block
                md:opacity-0  
                md:group-hover:opacity-100
                md:block
              `}
            >
              <div className="w-[40px] md:w-[50px] h-[50px]">
                {favorites.includes(item.id) ? (
                  <Image src={"/icon/iconAcctive.svg"} fill alt="acctive" />
                ) : (
                  <Image src={"/icon/iconDisacctive.svg"} fill alt="disAcctive" />
                )}
              </div>
            </button>
          </div>
        ))}
      </div>

      {products.length > visibleCount && (
        <div className="text-center !mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="relative bg-gradient-to-r from-red-800 to-black text-white !px-6 !py-2 rounded-[10px]"
          >
            {showAll ? "Hide" : "Show more"}
          </button>
        </div>
      )}
    </>
  );
};

export default ProductList;
