import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import AudioPlayer from "@/components/AudioPlayer";
import Centre from "@/components/CenterLogoPage";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/components/context/CartContext";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          <Centre />
          <AudioPlayer />
          <Header />
            {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
