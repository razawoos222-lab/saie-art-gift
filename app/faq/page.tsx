import Link from "next/link";
import { PageShell } from "../../components/PageShell";

const faqs = [
  {
    q: "MOA 초대장에서 들어오면 주소를 다시 입력하지 않아도 되나요?",
    a: "MOA가 전달하는 artist, exhibition, gallery, date, inviteId 값이 있으면 주문서에 자동 반영됩니다. 실제 상세 주소 자동 배송은 MOA 연동 스펙 확정 후 활성화합니다.",
  },
  {
    q: "모아 회원 할인과 사이 회원 적립은 어떻게 적용되나요?",
    a: "현재 화면과 데이터 구조는 준비되어 있습니다. 모아 회원 여부는 암호화된 신호로 받고, 사이 회원 적립은 회원 전환 후 주문 적립금으로 적용하는 정책입니다.",
  },
  {
    q: "주문 후 바로 결제되나요?",
    a: "PG 키 연결 전에는 주문 접수만 진행됩니다. 관리자가 제작 가능 여부와 배송 일정을 확인한 뒤 결제 안내를 드립니다.",
  },
  {
    q: "전시 오프닝 당일 배송이 가능한가요?",
    a: "갤러리 위치, 설치 시간, 상품 규모에 따라 다릅니다. Opening Piece는 최소 사전 상담이 필요합니다.",
  },
  {
    q: "상품 이미지와 실제 꽃이 동일한가요?",
    a: "계절 꽃 수급에 따라 일부 소재가 달라질 수 있습니다. 대신 색감, 크기, 분위기는 선택한 상품 기준에 맞춰 제작합니다.",
  },
  {
    q: "취소나 환불은 어떻게 하나요?",
    a: "제작 시작 전에는 취소가 가능하며, 생화 특성상 제작 시작 후에는 부분 환불 또는 일정 변경 상담으로 처리됩니다.",
  },
];

export default function FaqPage() {
  return (
    <PageShell>
      <main>
        <section className="page-intro art-page-intro">
          <div className="container">
            <p className="eyebrow">Customer center</p>
            <h1 className="display">자주 묻는 질문</h1>
            <p>갤러리 전용 꽃선물 주문, MOA 연동, 결제와 배송 관련 기본 안내입니다.</p>
          </div>
        </section>
        <section className="section container faq-list">
          {faqs.map((faq) => (
            <article className="form-section" key={faq.q}>
              <h2>{faq.q}</h2>
              <p>{faq.a}</p>
            </article>
          ))}
          <div className="button-row">
            <Link className="button" href="/checkout">
              주문하러 가기
            </Link>
            <Link className="button button-light" href="/order-lookup">
              주문조회
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
