"use client";

import Link from "next/link";
import { CartButton } from "./CartButton";
import { useSiteContent } from "./SiteContentContext";

export function SiteHeader() {
  const { content } = useSiteContent();

  return (
    <header className="site-header">
      <Link href="/gift" className="brand" title={content.brandKoreanName}>
        {content.brandName}
      </Link>
      <nav className="nav" aria-label="주요 메뉴">
        <Link href="/gift" className="nav-action">
          선물 선택
        </Link>
        <Link href="/order-lookup">주문조회</Link>
        <Link href="/login">로그인</Link>
        <Link href="/faq">FAQ</Link>
        <CartButton />
      </nav>
    </header>
  );
}
