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
  title: "SAIE STUDIO DESIGN | 갤러리 전시의 순간을 꽃으로 전합니다",
  description: "MOA 모바일초대장에 연결되는 SAIE STUDIO DESIGN의 갤러리 전용 플라워 기프트 서비스",
  openGraph: {
    title: "SAIE STUDIO DESIGN",
    description: "작가와 갤러리에 어울리는 꽃을 모아 초대장에서 바로 보내세요.",
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
