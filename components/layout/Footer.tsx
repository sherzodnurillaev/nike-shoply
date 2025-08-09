'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white !py-10 !px-5 relative !mt-[20px] md:!mt-[50px]">
      <div className="max-w-[1300px] !mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        
        <div>
            <div className="flex items-end">
                <Image src={'/nike-logo.webp'} width={100} height={50} alt='logo' />
                <h2 className="text-xl italic font-bold !mb-4">NIKE</h2>
            </div>
          <p className="text-sm text-gray-400">
            We bring inspiration and innovation to every athlete in the world.
          </p>
        </div>

        <div>
          <h3 className="font-semibold !mb-3">Shop</h3>
          <ul className="!space-y-2 text-sm">
            <li><Link href="/products/men" prefetch={false} className="hover:underline">Men</Link></li>
            <li><Link href="/products/women" prefetch={false} className="hover:underline">Women</Link></li>
            <li><Link href="/products/kids" prefetch={false} className="hover:underline">Kids</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold !mb-3">Company</h3>
          <ul className="!space-y-2 text-sm">
            <li><Link href="/about" prefetch={false} className="hover:underline">About Us</Link></li>
            <li><Link href="/contact" prefetch={false} className="hover:underline">Contact</Link></li>
            <li><Link href="/careers" prefetch={false} className="hover:underline">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold !mb-3">Follow Us</h3>
          <ul className="!space-y-2 text-sm">
            <li><a href="https://www.instagram.com/nike?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="hover:underline">Instagram</a></li>
            <li><a href="https://x.com/nike/with_replies" target="_blank" className="hover:underline">Twitter</a></li>
            <li><a href="https://www.facebook.com/nike/?locale=ru_RU" target="_blank" className="hover:underline">Facebook</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 !mt-10 !pt-6 text-center text-sm text-gray-500">
        <p>© 2025 NIKE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
