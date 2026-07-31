import { PageShell } from "../../components/PageShell";
import { ProductCatalog } from "../../components/ProductCatalog";

export default function GiftPage() {
  return (
    <PageShell>
      <main>
        <section className="page-intro art-page-intro moa-gift-intro">
          <div className="container">
            <p className="eyebrow">MOA × SAIE</p>
            <h1 className="display">전시에 어울리는 꽃을 선택해 주세요.</h1>
            <p>
              모아 초대장에서 전달된 작가, 전시, 갤러리 정보가 주문서까지 이어집니다. 꽃을 고르고 작가에게 전할
              메시지만 남기면 주문 접수가 완료됩니다.
            </p>
          </div>
        </section>
        <section className="container section" style={{ paddingTop: 0 }}>
          <ProductCatalog />
        </section>
      </main>
    </PageShell>
  );
}
