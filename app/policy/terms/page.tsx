import Link from "next/link";
import { PageShell } from "../../../components/PageShell";

const terms = [
  {
    title: "주문 확정",
    body: "주문 접수 후 SAIE가 전시 일정, 배송 가능 지역, 꽃 수급을 확인한 뒤 제작 가능 여부와 결제 안내를 전달합니다.",
  },
  {
    title: "결제",
    body: "PG 키 연결 전에는 실결제가 호출되지 않습니다. 연결 후 카드, 간편결제, 무통장입금 등 결제수단을 제공합니다.",
  },
  {
    title: "취소",
    body: "제작 시작 전 취소가 가능합니다. 제작 시작 후에는 생화 특성상 취소가 제한될 수 있습니다.",
  },
  {
    title: "환불",
    body: "상품 하자, 배송 사고, 주문 내용과 현저히 다른 제작은 확인 후 재제작 또는 환불로 처리합니다.",
  },
  {
    title: "배송/설치",
    body: "갤러리 운영 시간, 반입 규정, 작가 또는 갤러리 담당자 확인 여부에 따라 배송 시간이 조정될 수 있습니다.",
  },
  {
    title: "상담",
    body: "Opening Piece, 기업 협찬, 대형 설치형 상품은 별도 견적과 일정 협의 후 진행합니다.",
  },
];

export default function TermsPage() {
  return (
    <PageShell>
      <main>
        <section className="page-intro art-page-intro">
          <div className="container">
            <p className="eyebrow">Terms</p>
            <h1 className="display">이용 및 취소/환불 정책</h1>
            <p>꽃 주문 서비스 운영에 필요한 기본 정책입니다. 실제 PG 오픈 전 최종 고지가 필요합니다.</p>
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
            개인정보 처리 안내 보기
          </Link>
        </section>
      </main>
    </PageShell>
  );
}
