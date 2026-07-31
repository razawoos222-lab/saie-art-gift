import Link from "next/link";
import { PageShell } from "../../components/PageShell";

const faqs = [
  {
    q: "MOA 초대장에서 들어오면 주소를 다시 입력하지 않아도 되나요?",
    a: "MOA가 전달하는 작가명, 전시명, 갤러리명, 전시일, 초대장 ID는 주문서에 자동 반영됩니다. 전시장 상세 주소 자동 배송은 MOA 연동 스펙이 확정되면 inviteId 기반 조회로 고도화합니다.",
  },
  {
    q: "MOA 회원정보를 받아서 10% 할인을 적용해야 하나요?",
    a: "회원정보를 직접 받으면 개인정보 제공 동의, 처리 위탁 또는 제3자 제공, 보관 기간, 파기 기준을 별도로 설계해야 합니다. 그래서 현재 정책은 모아 초대장 링크로 들어온 주문이면 회원정보 확인 없이 10% 할인을 적용하는 방식이 더 안전합니다.",
  },
  {
    q: "SAIE 회원가입 혜택은 어떻게 적용되나요?",
    a: "주문자가 SAIE 회원가입을 완료하면 주문 기준 10% 적립을 운영할 수 있습니다. 이 경우 SAIE가 직접 수집한 회원정보와 적립 내역만 관리하면 됩니다.",
  },
  {
    q: "주문 후 바로 결제하나요?",
    a: "PG 키 연결 전에는 주문 접수만 진행합니다. 관리자가 제작 가능 여부와 배송 일정을 확인한 뒤 결제 안내를 드립니다.",
  },
  {
    q: "전시 오프닝 당일 배송도 가능한가요?",
    a: "갤러리 위치, 설치 시간, 상품 규모에 따라 달라집니다. 아트 오브제나 설치형 상품은 사전 상담이 필요합니다.",
  },
  {
    q: "상품 이미지는 실제 꽃과 동일한가요?",
    a: "계절 꽃 수급에 따라 일부 소재는 달라질 수 있습니다. 전체 색감, 크기, 분위기는 선택한 상품 기준에 맞춰 제작합니다.",
  },
  {
    q: "취소와 환불은 어떻게 되나요?",
    a: "제작 시작 전에는 취소가 가능하며, 생화 특성상 제작 시작 후에는 부분 환불 또는 일정 변경 상담으로 처리합니다.",
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
            <p>갤러리 전용 꽃선물 주문, MOA 초대장 연동, 할인과 개인정보, 결제와 배송에 관한 기본 안내입니다.</p>
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
            <Link className="button" href="/gift">
              꽃 선택하러 가기
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
