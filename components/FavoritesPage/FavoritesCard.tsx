"use client";

import { fetchProducts } from "@/lib/api";
import { useEffect, useState } from "react";
import Card from "../ui/Card";
import Back from "../ui/Back";
import Empty from "../ui/EmptyButtons";

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
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
    const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const idLocale = localStorage.getItem("favorites");
      if (!idLocale) {
        setIsLoading(false);
        return;
      }
      const ids: number[] = JSON.parse(idLocale);
      const data = await fetchProducts();
      const filtered = data.filter((item: Product) => ids.includes(item.id));
      setFavorites(filtered);
      setIsLoading(false);
    };

    fetchData();
  }, [refetch]);

  return (
    <div className="max-w-[1300px] !mx-auto !mt-[10px] !mb-[30px] !px-[20px]">
      <Back />
      {isLoading ? (
        <div className="text-center py-10 text-gray-500">Loading...</div>
      ) : favorites.length > 0 ? (
        <Card favorite={favorites} setRefetch={setRefetch} refetch={refetch} />
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default FavoritesCard;
