import Link from "next/link";
import { PageShell } from "../../components/PageShell";

export default function AccountPage() {
  return (
    <PageShell>
      <main>
        <section className="page-intro art-page-intro">
          <div className="container">
            <p className="eyebrow">My SAIE</p>
            <h1 className="display">회원 정보 관리</h1>
            <p>주문 내역, 적립 예정 금액, 회원 탈퇴와 개인정보 분리보관 요청을 확인하는 화면입니다.</p>
          </div>
        </section>
        <section className="container member-dashboard">
          <article className="form-section">
            <h2>주문과 적립</h2>
            <p>MOA 초대장 링크 주문은 10% 할인이 적용되고, SAIE 회원 주문은 최종 주문 금액 기준 10% 적립 예정 금액을 보여줍니다.</p>
            <Link className="button button-light" href="/order-lookup">
              주문조회
            </Link>
          </article>
          <article className="form-section">
            <h2>회원 탈퇴</h2>
            <p>탈퇴 시 로그인 정보와 마케팅 수신 정보는 삭제됩니다. 전자상거래법상 보관이 필요한 주문/결제 기록은 별도 분리보관 후 기간 경과 시 파기합니다.</p>
            <button className="button button-light" type="button">
              탈퇴 요청
            </button>
          </article>
          <article className="form-section">
            <h2>개인정보 분리보관</h2>
            <p>법정 보관 대상 정보는 접근 권한을 제한한 별도 영역에 보관하고, 고객 응대와 법령 준수 목적 외에는 사용하지 않습니다.</p>
            <Link className="text-link" href="/policy/privacy">
              처리방침 확인
            </Link>
          </article>
        </section>
      </main>
    </PageShell>
  );
}
