import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["700", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Wellshop.id - Marketplace Simple & Unik",
  description: "Marketplace simpel, santai, dan unik untuk kebutuhan belanja kamu. Cari produk, bandingkan harga, dan rasakan pengalaman belanja terbaik!",
  keywords: ["wellshop", "marketplace", "belanja online", "dropship", "reseller", "produk unik"],
  openGraph: {
    title: "Wellshop.id - Marketplace Simple & Unik",
    description: "Marketplace simpel, santai, dan unik untuk kebutuhan belanja kamu.",
    url: "https://wellshop.id",
    siteName: "Wellshop.id",
    images: [
      { url: "/wellshop-og.jpg", width: 800, height: 400, alt: "Wellshop.id" },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
