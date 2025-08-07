"use client";

import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

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
  count?: number;
};

interface TotalProps {
  basquet: Product[];
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Total = ({ basquet = [], setOpen }: TotalProps) => {
const [basketItems, setBasketItems] = useState<(Product & { count: number })[]>([]);

  // Инициализируем basket с количеством
  useEffect(() => {
    const withCount = basquet.map(item => ({
      ...item,
      count: 1, // по умолчанию 1
    }));
    setBasketItems(withCount);
  }, [basquet]);

    const handleClear = () => {
    localStorage.removeItem("buyList");
    setBasketItems([]);
  };

  const updateCount = (id: number, newCount: number) => {
    if (newCount < 1) return;
    setBasketItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, count: newCount } : item
      )
    );
  };

  const totalPrice = basketItems.reduce(
    (sum, item) => sum + item.price * (item.count || 1),
    0
  );

  return (
    <div
      className="fixed inset-0 z-40 bg-opacity-60 backdrop-blur-sm flex items-center justify-center"
      onClick={() => setOpen(false)}
    >
      <div
        className="bg-gradient-to-r from-red-800 to-black rounded-[20px] z-50 w-[90%] max-w-[700px] max-h-[90vh] text-white !p-6 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-2xl font-bold !mb-6 text-center">Your Order</h1>

        { basketItems.length === 0 ? (
          <p className="text-center text-gray-400">Cart is empty</p>
        ) : (
          <div className="flex flex-col gap-4">
          {basketItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 border-b border-gray-600 !pb-3">
              <Image
                src={item.pictures[0]}
                alt={item.model}
                width={60}
                height={60}
                className="rounded-md object-cover"
              />
              <div className="flex-1">
                <p className="text-sm text-gray-300">{item.model}</p>
                <p className="text-sm text-gray-400">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateCount(item.id, item.count - 1)}
                  className="bg-gray-700 !px-2 !py-1 rounded text-lg"
                >
                  −
                </button>
                <input
                  type="number"
                  min={1}
                  value={item.count}
                  onChange={(e) => updateCount(item.id, parseInt(e.target.value))}
                  className="w-10 text-center bg-gray-800 rounded"
                />
                <button
                  onClick={() => updateCount(item.id, item.count + 1)}
                  className="bg-gray-700 !px-2 !py-1 rounded text-lg"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

        <hr className="!my-6 border-gray-600" />

        <p className="text-xl !mb-4 text-center">
          Total: <span className="font-bold">${totalPrice.toFixed(2)}</span>
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => {
              localStorage.removeItem("buyList");
              setOpen(false);
              location.reload();
            }}
            className="bg-red-600 hover:bg-red-700 text-white !px-5 !py-2 rounded-xl"
          >
            Clear Basket
          </button>
          <button
            disabled
            className="bg-green-600 text-white !px-5 !py-2 rounded-xl opacity-50 cursor-not-allowed"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Total;
