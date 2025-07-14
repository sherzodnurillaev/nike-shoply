"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";

const menu = [
  { title: "Men", category: "men" },
  { title: "Women", category: "women" },
  { title: "Kids", category: "kids" },
];

const icons = [
  { name: "heart", icon: "/icon/heart.svg", path: "/favorites" },
  { name: "basket", icon: "/icon/basket.svg", path: "/cart" },
  { name: "user", icon: "/icon/user.svg", path: "#" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { buyList, favorites } = useCart();

  return (
    <>
      <header className="flex justify-between items-center !px-5 relative">
        <Link href="/" className="cursor-pointer select-none">
          <div className="relative w-[100px] h-[50px] sm:w-[130px] sm:h-[70px] md:w-[150px] md:h-[80px] lg:w-[180px] lg:h-[100px]">
            <Image
                src="/nike-logo.png"
                alt="logo"
                fill
                className="object-contain"
            />
          </div>
        </Link>

        <nav className="hidden md:flex gap-8">
          {menu.map((item, i) => (
            <Link
              key={i}
              href={`/products/${item.category}`}
              className="hover:text-red-600 transition cursor-pointer"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex gap-3 relative">
          {icons.map((icon, index) => {
            const isHeart = icon.name === "heart";
            const isBasket = icon.name === "basket";

            const count = isHeart
              ? favorites.length
              : isBasket
              ? buyList.length
              : 0;

            return (
              <Link href={icon.path} key={index} className="relative w-[50px] h-[50px] flex items-center justify-center">
                {count > 0 && (
                  <span className="absolute top-0 right-0 text-[12px] bg-red-700 text-white w-5 h-5 rounded-full flex items-center justify-center z-20">
                    {count}
                  </span>
                )}
                <Image
                  className="cursor-pointer transition duration-200 hover:drop-shadow-[0_0_4px_#f87171]"
                  src={icon.icon}
                  width={30}
                  height={30}
                  alt={icon.name}
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile menu */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-black dark:bg-white transition" />
          <span className="w-6 h-0.5 bg-black dark:bg-white transition" />
          <span className="w-6 h-0.5 bg-black dark:bg-white transition" />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-gradient-to-bl border-t-1 border-white from-black to-red-700 flex flex-col items-center gap-6 !py-10 md:hidden z-40 shadow-md">
            {menu.map((item, i) => (
              <Link
                key={i}
                href={`/products/${item.category}`}
                onClick={() => setIsOpen(false)}
                className="text-lg hover:text-red-600 transition"
              >
                {item.title}
              </Link>
            ))}

            <div className="flex gap-4">
                {icons.map((icon, index) => {
                    const isHeart = icon.name === "heart";
                    const isBasket = icon.name === "basket";

                    const count = isHeart
                    ? favorites.length
                    : isBasket
                    ? buyList.length
                    : 0;

                    return (
                    <Link href={icon.path} key={index} className="relative w-[50px] h-[50px] flex items-center justify-center">
                        {count > 0 && (
                        <span className="absolute top-0 right-0 text-[12px] bg-red-700 text-white w-5 h-5 rounded-full flex items-center justify-center z-20">
                            {count}
                        </span>
                        )}
                        <Image
                        className="cursor-pointer transition duration-200 hover:drop-shadow-[0_0_4px_#f87171]"
                        src={icon.icon}
                        width={30}
                        height={30}
                        alt={icon.name}
                        />
                    </Link>
                    );
                })}
            </div>
          </div>
        )}
      </header>
      <div className="w-full h-1 bg-amber-50" />
    </>
  );
};

export default Header;
