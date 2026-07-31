import Link from "next/link";
import { PageShell } from "../../../components/PageShell";

const terms = [
  {
    title: "주문 확정",
    body: "주문 접수 후 SAIE가 전시 일정, 배송 가능 지역, 갤러리 반입 조건, 꽃 수급을 확인한 뒤 제작 가능 여부와 결제 안내를 전달합니다.",
  },
  {
    title: "결제",
    body: "PG 연결 전에는 실결제창을 호출하지 않습니다. 정식 연결 후에는 카드, 간편결제, 무통장입금 등 가능한 결제수단을 제공합니다.",
  },
  {
    title: "혜택",
    body: "MOA 초대장 링크 유입 주문은 10% 할인이 적용됩니다. SAIE 회원가입 완료 시 최종 주문 금액 기준 10% 적립 예정 금액을 제공합니다.",
  },
  {
    title: "취소",
    body: "제작 시작 전에는 취소가 가능합니다. 제작 시작 후에는 생화 특성과 맞춤 제작 특성상 취소가 제한될 수 있습니다.",
  },
  {
    title: "환불",
    body: "상품 하자, 배송 사고, 주문 내용과 다른 제작이 확인된 경우 교환 또는 환불로 처리합니다.",
  },
  {
    title: "배송/설치",
    body: "갤러리 운영 시간, 반입 규정, 작가 또는 갤러리 담당자 확인 여부에 따라 배송 시간이 조정될 수 있습니다.",
  },
];

export default function TermsPage() {
  return (
    <PageShell>
      <main>
        <section className="page-intro art-page-intro">
          <div className="container">
            <p className="eyebrow">Terms</p>
            <h1 className="display">이용약관</h1>
            <p>작가 꽃선물 주문, 결제, 배송, 취소, 환불 기준입니다.</p>
          </div>
        </section>
        <section className="section container policy-list">
          {terms.map((section) => (
            <article className="form-section" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
          <Link className="button button-light" href="/policy/privacy">
            개인정보 처리방침 보기
          </Link>
        </section>
      </main>
    </PageShell>
  );
}
