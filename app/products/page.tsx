import { PageShell } from "../../components/PageShell";
import { ProductCatalog } from "../../components/ProductCatalog";

export default function ProductsPage() {
  return (
    <PageShell>
      <main>
        <section className="page-intro art-page-intro">
          <div className="container">
            <p className="eyebrow">SAIE GALLERY GIFT</p>
            <h1 className="display">작가와 갤러리에 어울리는 꽃을 고르세요.</h1>
            <p>일반 꽃배달이 아니라 전시 공간, 작품 동선, 오프닝 분위기를 고려한 갤러리 전용 플라워 선물입니다.</p>
          </div>
        </section>
        <section className="container section" style={{ paddingTop: 0 }}>
          <ProductCatalog />
        </section>
      </main>
    </PageShell>
  );
}
