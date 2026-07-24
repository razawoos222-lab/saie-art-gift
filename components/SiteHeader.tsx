import Link from "next/link";
import { CartButton } from "./CartButton";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand">
        chahaw<small>design studio</small>
      </Link>
      <nav className="nav" aria-label="주요 메뉴">
        <Link href="/products">Lineup</Link>
        <Link href="/checkout" className="nav-action">
          작가에게 꽃선물하기
        </Link>
        <Link href="/contact">CS</Link>
        <Link href="/admin" className="admin-link">
          Admin
        </Link>
        <Link href="/admin/payments" className="admin-link">
          Payments
        </Link>
        <CartButton />
      </nav>
    </header>
  );
}
