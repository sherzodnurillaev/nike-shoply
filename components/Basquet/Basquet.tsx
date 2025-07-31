"use client"

import { fetchProducts } from "@/lib/api";
import { useEffect, useState } from "react"
import Card from "../ui/Card";
import Back from "../ui/Back";
import Total from "./Total";
import Image from "next/image";

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

const BasquetCard = () => {
  const [basquet, setBasquet] = useState<Product[]>([]);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // ← добавили флаг загрузки

  useEffect(() => {
    fetchProducts().then((data) => {
      const idLocale = localStorage.getItem("buyList");
      if (!idLocale) {
        setIsLoading(false);
        return;
      }
      const ids: number[] = JSON.parse(idLocale);
      const filtered = data.filter((item: Product) => ids.includes(item.id));
      setBasquet(filtered);
      setIsLoading(false); // ← загрузка завершена
    });
  }, []);

  return (
    <div className="max-w-[1300px] !mx-auto !mt-[10px] !px-[20px]">
      <div className="flex items-center justify-between">
        <Back />
        <div onClick={() => setOpen(!open)} className="cursor-pointer">
        <Image
            src={"/icon/order.png"}
            width={50}
            height={50}
            alt="order"
            className="w-[30px] h-[30px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px]"
        />
        </div>
      </div>
      {
        basquet.length > 0 ? <Card basquet={basquet} /> :
        <div className="relative flex items-center justify-center">
            <Image src={"/icon/empty-box.png"} width={500} height={500} alt="empty" />
        </div>
      }
      {
        open && !isLoading && <Total setOpen={setOpen} basquet={basquet} />
      }
    </div>
  );
};


export default BasquetCard
