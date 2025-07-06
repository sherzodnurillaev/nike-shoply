"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menu = [
  { title: "Men", category: "men" },
  { title: "Women", category: "women" },
  { title: "Kids", category: "kids" },
];

const icons = [
  { name: "heart", icon: "/icon/heart.svg" },
  { name: "basket", icon: "/icon/basket.svg" },
  { name: "user", icon: "/icon/user.svg" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <header className="flex justify-between items-center !px-5 relative">

        <Link href="/" className="cursor-pointer select-none">
            <Image src="/nike-logo.png" width={150} height={100} alt="logo" />
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

        <div className="hidden md:flex gap-3">
            {icons.map((icon, index) => (
            <Image
                key={index}
                className="cursor-pointer transition duration-200 hover:drop-shadow-[0_0_4px_#f87171]"
                src={icon.icon}
                width={30}
                height={30}
                alt={icon.name}
            />
            ))}
        </div>

        <button
            className="md:hidden flex flex-col justify-center items-center gap-1 z-50"
            onClick={() => setIsOpen(!isOpen)}
        >
            <span className="w-6 h-0.5 bg-black dark:bg-white transition" />
            <span className="w-6 h-0.5 bg-black dark:bg-white transition" />
            <span className="w-6 h-0.5 bg-black dark:bg-white transition" />
        </button>

        {isOpen && (
            <div className="absolute top-full left-0 w-full bg-red-900/75 flex flex-col items-center gap-6 !py-10 md:hidden z-40 shadow-md">
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
                {icons.map((icon, index) => (
                <Image
                    key={index}
                    className="cursor-pointer transition duration-200 hover:drop-shadow-[0_0_4px_#f87171]"
                    src={icon.icon}
                    width={30}
                    height={30}
                    alt={icon.name}
                />
                ))}
            </div>
            </div>
        )}
        </header>
        <div className="w-full h-1 bg-amber-50" />
    </>
  );
};

export default Header;
