import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import { CartProvider } from "../components/CartContext";
import { SiteContentProvider } from "../components/SiteContentContext";
import "./globals.css";

const sans = Noto_Sans_KR({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const serif = Noto_Serif_KR({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://chahwa.kr"),
  title: "차화 | 모아 갤러리 꽃선물",
  description: "전시 오프닝과 갤러리 공간에 맞춘 차화의 꽃선물 주문 사이트.",
  openGraph: {
    title: "차화 | 모아 갤러리 꽃선물",
    description: "전시 오프닝과 갤러리 공간에 맞춘 차화의 꽃선물 주문 사이트.",
    images: ["/og.png"],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className={`${sans.variable} ${serif.variable}`}>
        <SiteContentProvider>
          <CartProvider>{children}</CartProvider>
        </SiteContentProvider>
      </body>
    </html>
  );
}
