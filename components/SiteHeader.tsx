import Link from "next/link";
import { CartButton } from "./CartButton";
export function SiteHeader() { return <header className="site-header"><Link href="/" className="brand">차화<small>CHA HWA</small></Link><nav className="nav" aria-label="주요 메뉴"><Link href="/products">꽃 선물</Link><Link href="/occasions/celebration">마음을 전하는 날</Link><Link href="/about">차화 이야기</Link><Link href="/contact" className="nav-action">주문 상담</Link><CartButton /></nav></header>; }
