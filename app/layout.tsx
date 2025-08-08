import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import AudioPlayer from "@/components/AudioPlayer";
import Centre from "@/components/CenterLogoPage";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/components/context/CartContext";

export const metadata: Metadata = {
  title: "Nike store for portfolio",
  description: "Modern Nike store built for portfolio, showcasing products and features.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Centre />
            <AudioPlayer />
            <Header />
            
              <main className="flex-grow">{children}</main>

            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
