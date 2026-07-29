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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://saie.kr"),
  title: "SAIE ART GIFT | 작가에게 꽃선물하기",
  description: "MOA 모바일초대장에 연결되는 SAIE design studio의 갤러리 전용 플라워 기프트 서비스.",
  openGraph: {
    title: "SAIE ART GIFT",
    description: "작가의 순간에, 꽃으로 남기는 축하.",
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
