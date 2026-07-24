import Link from "next/link";
import { CartButton } from "./CartButton";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand">
        차화<small>CHA HWA</small>
      </Link>
      <nav className="nav" aria-label="주요 메뉴">
        <Link href="/products">꽃선물</Link>
        <Link href="/occasions/celebration">전시 선물</Link>
        <Link href="/contact">CS</Link>
        <Link href="/admin" className="admin-link">
          Admin
        </Link>
        <Link href="/admin/payments" className="admin-link">
          Payments
        </Link>
        <Link href="/checkout" className="nav-action">
          주문
        </Link>
        <CartButton />
      </nav>
    </header>
  );
}
