import { PageShell } from "../../components/PageShell";
import { ProductCatalog } from "../../components/ProductCatalog";

export default function GiftPage() {
  return (
    <PageShell>
      <main>
        <section className="page-intro art-page-intro moa-gift-intro">
          <div className="container">
            <p className="eyebrow">MOA × SAIE</p>
            <h1 className="display">작가에게 꽃선물하기</h1>
            <p>
              모아 모바일초대장에서 연결된 전시 정보가 상품 선택과 주문서까지 이어집니다. 전시 공간에 맞는 플라워를
              선택하고 메시지를 남겨주세요.
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
