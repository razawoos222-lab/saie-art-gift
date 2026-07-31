import Link from "next/link";
import { PageShell } from "../../components/PageShell";

export default function LoginPage() {
  return (
    <PageShell>
      <main>
        <section className="page-intro art-page-intro">
          <div className="container">
            <p className="eyebrow">Member</p>
            <h1 className="display">SAIE 로그인</h1>
            <p>회원 주문, 적립 예정 금액, 주문 조회를 한 곳에서 확인할 수 있도록 준비한 고객 로그인 화면입니다.</p>
          </div>
        </section>
        <section className="container member-layout">
          <form className="form-section member-card">
            <h2>로그인</h2>
            <div className="field">
              <label htmlFor="email">이메일</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="field">
              <label htmlFor="password">비밀번호</label>
              <input id="password" name="password" type="password" />
            </div>
            <button className="button" type="button">
              로그인
            </button>
            <p className="form-note">회원 기능은 정식 인증 연결 전 단계입니다. 현재 주문은 비회원 주문조회로도 확인할 수 있습니다.</p>
          </form>
          <aside className="member-side">
            <h2>SAIE 회원 혜택</h2>
            <p>MOA 초대장 링크 주문은 10% 할인, SAIE 회원가입 완료 시 최종 주문 금액의 10% 적립 예정 금액을 확인할 수 있습니다.</p>
            <div className="button-row">
              <Link className="button" href="/signup">
                회원가입
              </Link>
              <Link className="button button-light" href="/order-lookup">
                비회원 주문조회
              </Link>
            </div>
          </aside>
        </section>
      </main>
    </PageShell>
  );
}
