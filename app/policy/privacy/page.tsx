import Link from "next/link";
import { PageShell } from "../../../components/PageShell";

const sections = [
  {
    title: "수집 항목",
    body: "주문자명, 연락처, 이메일, 작가명, 전시명, 갤러리명, 전시장 주소, 배송/설치 희망일, 메시지, 주문 상품 정보를 수집합니다. 회원가입 시 이름, 이메일, 휴대폰 번호, 비밀번호를 추가로 수집할 수 있습니다.",
  },
  {
    title: "이용 목적",
    body: "주문 접수, 제작 가능 여부 확인, 배송/설치 상담, 결제 안내, 취소/환불 처리, 고객 문의 응대, 회원 적립 혜택 제공에 사용합니다.",
  },
  {
    title: "MOA 초대장 정보",
    body: "MOA 회원 여부나 회원 개인정보를 직접 받지 않습니다. 초대장 링크로 유입되었는지 여부를 기준으로 10% 할인 혜택을 적용하고, 링크에 포함된 작가/전시/갤러리 정보만 주문 편의를 위해 사용합니다.",
  },
  {
    title: "보관 기간",
    body: "회원 정보는 탈퇴 시까지, 주문 및 결제 기록은 전자상거래법 등 관련 법령에서 정한 기간 동안 보관합니다. 보관 기간이 지나면 지체 없이 파기합니다.",
  },
  {
    title: "분리보관",
    body: "탈퇴 또는 삭제 요청 후에도 법정 보관이 필요한 주문/결제 기록은 일반 회원 정보와 분리해 보관하고 접근 권한을 제한합니다.",
  },
  {
    title: "처리 위탁",
    body: "결제, 배송, 알림, 이미지 저장 등 서비스 운영에 필요한 범위에서 PG사, 배송/설치 협력사, 클라우드 저장소에 처리를 위탁할 수 있습니다.",
  },
  {
    title: "회원 탈퇴와 삭제 요청",
    body: "회원 탈퇴 또는 개인정보 삭제 요청 시 법정 보관 대상 정보를 제외한 개인정보는 삭제하거나 분리보관합니다. 주문 처리가 진행 중인 경우 완료 후 처리될 수 있습니다.",
  },
];

export default function PrivacyPage() {
  return (
    <PageShell>
      <main>
        <section className="page-intro art-page-intro">
          <div className="container">
            <p className="eyebrow">Privacy</p>
            <h1 className="display">개인정보 처리방침</h1>
            <p>SAIE 작가 꽃선물 서비스의 개인정보 수집, 이용, 보관, 탈퇴, 분리보관 기준입니다.</p>
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
            이용약관 보기
          </Link>
        </section>
      </main>
    </PageShell>
  );
}
