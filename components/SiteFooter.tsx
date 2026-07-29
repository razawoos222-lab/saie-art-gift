import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer art-footer">
      <div className="footer-inner">
        <div>
          <p className="footer-title">saie design studio</p>
          <p>The Art of Composition. 작가의 순간에, 꽃으로 남기는 축하.</p>
        </div>
        <div className="footer-links">
          <Link href="/products">Lineup</Link>
          <Link href="/checkout">Gift</Link>
          <Link href="/order-lookup">Order Lookup</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/policy/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
