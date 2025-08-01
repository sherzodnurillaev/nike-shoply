'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white !py-10 !px-5 relative !mt-[20px] md:!mt-[50px]">
      <div className="max-w-[1300px] !mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        
        {/* Бренд / Описание */}
        <div>
            <div className="flex items-end">
                <Image src={'/nike-logo.png'} width={100} height={50} alt='logo' />
                <h2 className="text-xl italic font-bold !mb-4">NIKE</h2>
            </div>
          <p className="text-sm text-gray-400">
            We bring inspiration and innovation to every athlete in the world.
          </p>
        </div>

        {/* Навигация */}
        <div>
          <h3 className="font-semibold !mb-3">Shop</h3>
          <ul className="!space-y-2 text-sm">
            <li><Link href="/products/men" className="hover:underline">Men</Link></li>
            <li><Link href="/products/women" className="hover:underline">Women</Link></li>
            <li><Link href="/products/kids" className="hover:underline">Kids</Link></li>
          </ul>
        </div>

        {/* О нас */}
        <div>
          <h3 className="font-semibold !mb-3">Company</h3>
          <ul className="!space-y-2 text-sm">
            <li><Link href="about" className="hover:underline">About Us</Link></li>
            <li><Link href="#" className="hover:underline">Contact</Link></li>
            <li><Link href="#" className="hover:underline">Careers</Link></li>
          </ul>
        </div>

        {/* Соцсети */}
        <div>
          <h3 className="font-semibold !mb-3">Follow Us</h3>
          <ul className="!space-y-2 text-sm">
            <li><a href="https://instagram.com" target="_blank" className="hover:underline">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" className="hover:underline">Twitter</a></li>
            <li><a href="https://facebook.com" target="_blank" className="hover:underline">Facebook</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 !mt-10 !pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} NIKE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
