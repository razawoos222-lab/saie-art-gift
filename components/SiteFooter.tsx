import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer art-footer">
      <div className="footer-inner">
        <div>
          <p className="footer-title">saie artist gift</p>
          <p>MOA 초대장에서 이어지는 갤러리 전용 플라워 기프트.</p>
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
