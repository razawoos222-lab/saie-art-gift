import { PageShell } from "../../components/PageShell";
import { ProductCatalog } from "../../components/ProductCatalog";

export default function GiftPage() {
  return (
    <PageShell>
      <main>
        <section className="page-intro art-page-intro moa-gift-intro">
          <div className="container">
            <p className="eyebrow">MOA × SAIE</p>
            <h1 className="display">갤러리에 보낼 꽃을 선택해 주세요.</h1>
            <p>
              모아 초대장에서 전달된 작가, 전시, 갤러리 정보가 주문서까지 이어집니다. 작품을 방해하지 않는 꽃바구니,
              오프닝 테이블, 난, 플랜테리어, 아트 오브제 중 전시에 맞는 구성을 고르세요.
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
