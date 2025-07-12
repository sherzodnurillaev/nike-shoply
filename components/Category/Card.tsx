'use client'

import { fetchProducts } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  const [buyList, setBuyList] = useState<number[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);


    useEffect(() => {
    fetchProducts().then((data) => {
        let filtered = data.filter((item: Product) => item.male === male);

        if (category) {
        filtered = filtered.filter((item: Product) => item.category === category);
        }

        setProducts(filtered);

        const stored = JSON.parse(localStorage.getItem("buyList") || "[]");
        setBuyList(stored.map((item: { id: number }) => item.id));
        const favStored = JSON.parse(localStorage.getItem("favorites") || "[]");
        setFavorites(favStored);
    });
    }, [male, category]);

  const toggleBuyStatus = (id: number) => {
    let updated: { id: number; status: string }[] = [];

    const stored = JSON.parse(localStorage.getItem("buyList") || "[]");

    const exists = stored.find((item: { id: number }) => item.id === id);

    if (exists) {
      updated = stored.filter((item: { id: number }) => item.id !== id);
    } else {
      updated = [...stored, { id, status: "buy" }];
    }

    localStorage.setItem("buyList", JSON.stringify(updated));
    setBuyList(updated.map((item) => item.id));
  };
    const toggleFavorite = (id: number) => {
        let updated = [...favorites];

        if (favorites.includes(id)) {
            updated = updated.filter((favId) => favId !== id);
        } else {
            updated.push(id);
        }

        localStorage.setItem("favorites", JSON.stringify(updated));
        setFavorites(updated);
        };

  return (
    <>
        <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((item, i) => (
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
                <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
                No image
                </div>
            )}
            <div className="!p-[10px]">
                <h2 className="text-black text-[16px] md:text-[18px] lg:text-[20px]">Nike {item.model}</h2>
                <h2 className="text-[#9e9e9e] text-[14px] md:text-[16px] lg:text-[18px]">{item.price} $</h2>
                <div className="flex justify-between !pt-[10px] gap-2">
                <Link
                    href={"#"}
                    className="bg-black !px-[15px] md:!px-[25px] !py-[3px] md:!py-[7px] text-[14px] md:text-[16px] lg:text-[18px] rounded-[20px] text-white"
                >
                    Show
                </Link>
                <button
                    onClick={() => toggleBuyStatus(item.id)}
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
                    {favorites.includes(item.id) ? 
                    <Image src={'/icon/iconAcctive.svg'} fill alt="acctive" />
                    :
                    <Image src={'/icon/iconDisacctive.svg'} fill alt="disAcctive" />
                    }
                </div>
                </button>
            </div>
            
        ))}
        </div>

    </>
  );
};

export default ProductList;
