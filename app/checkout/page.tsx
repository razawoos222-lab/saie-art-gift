import { Suspense } from "react";
import { CheckoutForm } from "../../components/CheckoutForm";
import { PageShell } from "../../components/PageShell";

export default function CheckoutPage() {
  return (
    <PageShell>
      <main>
        <section className="page-intro art-page-intro">
          <div className="container">
            <p className="eyebrow">SAIE ART GIFT</p>
            <h1 className="display">메시지와 전시 정보를 확인해 주세요.</h1>
            <p>MOA 초대장에서 전달된 작가명, 전시명, 갤러리 정보를 기준으로 꽃선물 주문을 접수합니다.</p>
          </div>
        </section>
        <section className="section container" style={{ paddingTop: 52 }}>
          <Suspense fallback={<p>주문 정보를 불러오는 중입니다.</p>}>
            <CheckoutForm />
          </Suspense>
        </section>
      </main>
    </PageShell>
  );
}
