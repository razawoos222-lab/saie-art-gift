import Link from "next/link";
import { PageShell } from "../../components/PageShell";

export default function SignupPage() {
  return (
    <PageShell>
      <main>
        <section className="page-intro art-page-intro">
          <div className="container">
            <p className="eyebrow">Join</p>
            <h1 className="display">SAIE 회원가입</h1>
            <p>작가에게 보내는 꽃선물 주문 내역과 적립 혜택을 관리하기 위한 회원가입 화면입니다.</p>
          </div>
        </section>
        <section className="container member-layout">
          <form className="form-section member-card">
            <h2>기본 정보</h2>
            <div className="field">
              <label htmlFor="name">이름</label>
              <input id="name" name="name" />
            </div>
            <div className="field">
              <label htmlFor="email">이메일</label>
              <input id="email" name="email" type="email" />
            </div>
            <div className="field">
              <label htmlFor="phone">휴대폰 번호</label>
              <input id="phone" name="phone" type="tel" placeholder="010-0000-0000" />
            </div>
            <div className="field">
              <label htmlFor="password">비밀번호</label>
              <input id="password" name="password" type="password" />
            </div>
            <label className="consent">
              <input type="checkbox" /> 이용약관과 개인정보 처리방침에 동의합니다.
            </label>
            <label className="consent">
              <input type="checkbox" /> 주문/적립 안내 수신에 동의합니다.
            </label>
            <button className="button" type="button">
              회원가입
            </button>
            <p className="form-note">정식 인증 연결 전에는 실제 계정이 생성되지 않습니다.</p>
          </form>
          <aside className="member-side">
            <h2>개인정보 처리 기준</h2>
            <ul className="member-policy-list">
              <li>회원가입 정보와 주문 정보는 목적별로 분리해 관리합니다.</li>
              <li>탈퇴 요청 시 법정 보관 대상 외 정보는 삭제 또는 분리보관합니다.</li>
              <li>MOA 회원 여부 정보는 받지 않고 초대장 링크 유입 여부로만 10% 할인을 적용합니다.</li>
            </ul>
            <Link className="text-link" href="/policy/privacy">
              개인정보 처리방침 보기
            </Link>
          </aside>
        </section>
      </main>
    </PageShell>
  );
}
