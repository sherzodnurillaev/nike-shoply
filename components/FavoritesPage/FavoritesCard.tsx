"use client"

import { fetchProducts } from "@/lib/api";
import { useEffect, useState } from "react"
import Card from "../ui/Card";
import Back from "../ui/Back";

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

const FavoritesCard = () => {
    const [favorites, setFavorites] = useState<Product[]>([])
    const [basquet, setBasquet] = useState<Product[]>([])

    useEffect(() => {
        const data = localStorage.getItem("favorites")
        if (data) {
            setFavorites(JSON.parse(data))
        }
    }, [])

    useEffect(() => {
    fetchProducts().then((data) => {
        const idLocale = localStorage.getItem("favorites");
        if (!idLocale) return;
        const ids: number[] = JSON.parse(idLocale); // ← превращаем строку в массив
        // Проход по каждому id (если нужно просто пройтись)
        ids.forEach((id) => {
        console.log("ID из localStorage:", id);
        });
        // Фильтруем продукты, которые есть в favorites
        const filtered = data.filter((item: Product) => ids.includes(item.id));
        // Можно дальше фильтровать по категории, если нужно:
        // const finalFiltered = filtered.filter((item) => item.category === category);
        setFavorites(filtered);
    });
    }, []);

    return (
        <div className="max-w-[1300px] !mx-auto !mt-[10px] !px-[20px]">
            <Back />
            <Card favorite={favorites} />
        </div>
    )
}

export default FavoritesCard
