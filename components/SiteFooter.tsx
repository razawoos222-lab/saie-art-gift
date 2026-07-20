import Link from "next/link";
export function SiteFooter() { return <footer className="site-footer"><div className="footer-inner"><div><p className="footer-title">차화 ChaHwa</p><p>계절의 표정을 담아, 마음을 전하는 꽃.</p></div><div className="footer-links"><Link href="/about">브랜드</Link><Link href="/products">꽃 선물</Link><Link href="/contact">주문 상담</Link></div></div></footer>; }
