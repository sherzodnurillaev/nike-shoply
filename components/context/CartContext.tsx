// context/CartContext.tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";

type CartContextType = {
  buyList: number[];
  setBuyList: (list: number[]) => void;
  favorites: number[];
  setFavorites: (list: number[]) => void;
  toggleBuy: (id: number) => void;
  toggleFavorite: (id: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [buyList, setBuyList] = useState<number[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const storedBuy = JSON.parse(localStorage.getItem("buyList") || "[]");
    const storedFav = JSON.parse(localStorage.getItem("favorites") || "[]");
    setBuyList(storedBuy);
    setFavorites(storedFav);
  }, []);

  useEffect(() => {
    localStorage.setItem("buyList", JSON.stringify(buyList));
  }, [buyList]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleBuy = (id: number) => {
    setBuyList((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <CartContext.Provider
      value={{ buyList, setBuyList, favorites, setFavorites, toggleBuy, toggleFavorite }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};
