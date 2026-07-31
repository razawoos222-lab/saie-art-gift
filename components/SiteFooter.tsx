"use client";

import Link from "next/link";
import { useSiteContent } from "./SiteContentContext";

export function SiteFooter() {
  const { content } = useSiteContent();

  return (
    <footer className="site-footer art-footer">
      <div className="footer-inner">
        <div>
          <p className="footer-title">{content.brandName}</p>
          <p>{content.serviceSubtitle}</p>
        </div>
        <div className="footer-links">
          <Link href="/gift">꽃 선택</Link>
          <Link href="/order-lookup">주문조회</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/policy/privacy">개인정보</Link>
        </div>
      </div>
    </footer>
  );
}
