import { OrderLookup } from "../../components/OrderLookup";
import { PageShell } from "../../components/PageShell";

export default function OrderLookupPage() {
  return (
    <PageShell>
      <main>
        <section className="page-intro art-page-intro">
          <div className="container">
            <p className="eyebrow">Order lookup</p>
            <h1 className="display">주문 상태를 확인하세요.</h1>
            <p>비회원 주문도 주문번호와 연락처만 있으면 배송/설치 진행 상태를 확인할 수 있습니다.</p>
          </div>
        </section>
        <section className="section container" style={{ paddingTop: 52 }}>
          <OrderLookup />
        </section>
      </main>
    </PageShell>
  );
}
