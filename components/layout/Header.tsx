"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const menu = [
  { title: "Men", category: "men" },
  { title: "Women", category: "women" },
  { title: "Kids", category: "kids" },
];

const icons = [
  { name: "heart", icon: "/icon/heart.svg", link: "/favorites" },
  { name: "basket", icon: "/icon/basket.svg", link: "/cart" },
  { name: "user", icon: "/icon/user.svg", link: "/profile" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buyList, setBuyList] = useState<number[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const storedBuy = JSON.parse(localStorage.getItem("buyList") || "[]");
    const storedFav = JSON.parse(localStorage.getItem("favorites") || "[]");

    const buyIds = storedBuy.map((item: { id: number }) => item.id ?? item);
    setBuyList(buyIds);

    setFavorites(storedFav);
  }, []);

  return (
    <>
      <header className="flex justify-between items-center !px-5 relative py-4">

        <Link href="/" className="cursor-pointer select-none">
          <Image src="/nike-logo.png" width={150} height={100} alt="logo" />
        </Link>

        <nav className="hidden md:flex gap-8">
          {menu.map((item) => (
            <Link
              key={item.category}
              href={`/products/${item.category}`}
              className="hover:text-red-600 transition cursor-pointer"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex gap-4 relative">
          {icons.map((icon) => {
            const hasNotification =
              icon.name === "heart"
                ? favorites.length > 0
                : icon.name === "basket"
                ? buyList.length > 0
                : false;

            return (
              <Link
                key={icon.name}
                href={icon.link}
                className="relative w-[40px] h-[40px] flex items-center justify-center"
                aria-label={icon.name}
              >
                {hasNotification && (
                  <div className="w-[8px] h-[8px] rounded-full absolute top-1 right-1 bg-red-700 z-20" />
                )}
                <Image
                  className="cursor-pointer transition duration-200 hover:drop-shadow-[0_0_4px_#f87171]"
                  src={icon.icon}
                  width={24}
                  height={24}
                  alt={icon.name}
                />
              </Link>
            );
          })}
        </div>

        <button
          className="md:hidden flex flex-col justify-center items-center gap-1 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-black transition" />
          <span className="w-6 h-0.5 bg-black transition" />
          <span className="w-6 h-0.5 bg-black transition" />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-gradient-to-bl border-t from-black to-red-700 flex flex-col items-center gap-6 py-10 md:hidden z-40 shadow-md">
            {menu.map((item) => (
              <Link
                key={item.category}
                href={`/products/${item.category}`}
                onClick={() => setIsOpen(false)}
                className="text-lg hover:text-red-400 transition"
              >
                {item.title}
              </Link>
            ))}
            <div className="flex gap-6">
              {icons.map((icon) => (
                <Link
                  key={icon.name}
                  href={icon.link}
                  onClick={() => setIsOpen(false)}
                  aria-label={icon.name}
                >
                  <Image
                    className="cursor-pointer hover:drop-shadow-[0_0_4px_#f87171] transition"
                    src={icon.icon}
                    width={24}
                    height={24}
                    alt={icon.name}
                  />
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Bottom Border */}
      <div className="w-full h-1 bg-amber-50" />
    </>
  );
};

export default Header;
