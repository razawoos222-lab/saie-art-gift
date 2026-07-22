import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../components/CartContext";

const sans = Noto_Sans_KR({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const serif = Noto_Serif_KR({ variable: "--font-serif", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://chahwa.kr"),
  title: "차화 | 마음을 전하는 꽃 선물",
  description: "계절의 표정을 담아, 가장 다정한 순간에 닿는 꽃 선물.",
  openGraph: {
    title: "차화 | 마음을 전하는 꽃 선물",
    description: "계절의 표정을 담아, 가장 다정한 순간에 닿는 꽃 선물.",
    images: ["/og.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body className={`${sans.variable} ${serif.variable}`}><CartProvider>{children}</CartProvider></body></html>;
}
