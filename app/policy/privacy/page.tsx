import Link from "next/link";
import { PageShell } from "../../../components/PageShell";

const sections = [
  {
    title: "수집 항목",
    body: "주문자명, 연락처, 이메일, 작가명, 전시명, 갤러리명, 배송/설치 희망일, 메시지, 주문 상품 정보를 수집합니다.",
  },
  {
    title: "이용 목적",
    body: "주문 접수, 제작 가능 여부 확인, 배송/설치 상담, 결제 안내, 취소/환불 처리, 고객 문의 대응에 사용합니다.",
  },
  {
    title: "MOA 연동 정보",
    body: "회원 여부 정보는 원문 개인정보가 아니라 암호화된 확인 신호로 받는 것을 기준으로 설계합니다. 상세 주소 자동 반영은 MOA 스펙 확정 후 별도 고지합니다.",
  },
  {
    title: "보관 기간",
    body: "전자상거래법 등 관련 법령에 따라 주문 및 결제 기록은 필요한 기간 동안 보관하고, 기간 경과 후 분리보관 또는 파기합니다.",
  },
  {
    title: "처리 위탁",
    body: "PG사, 배송/퀵 서비스, 클라우드 저장소 등 주문 이행에 필요한 범위에서 개인정보 처리가 위탁될 수 있습니다.",
  },
  {
    title: "회원 탈퇴와 삭제 요청",
    body: "회원 탈퇴 또는 삭제 요청 시 법정 보관 대상 정보를 제외한 개인정보는 지체 없이 삭제하거나 분리보관합니다.",
  },
];

export default function PrivacyPage() {
  return (
    <PageShell>
      <main>
        <section className="page-intro art-page-intro">
          <div className="container">
            <p className="eyebrow">Privacy</p>
            <h1 className="display">개인정보 처리 안내</h1>
            <p>실제 서비스 오픈 전 법무 검토가 필요한 초안이며, 현재 구현은 최소 주문 정보 처리 기준입니다.</p>
          </div>
        </section>
        <section className="section container policy-list">
          {sections.map((section) => (
            <article className="form-section" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
          <Link className="button button-light" href="/policy/terms">
            이용/취소 환불 정책 보기
          </Link>
        </section>
      </main>
    </PageShell>
  );
}
