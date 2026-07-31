import { PageShell } from "../../components/PageShell";
import { ProductCatalog } from "../../components/ProductCatalog";

export default function ProductsPage() {
  return (
    <PageShell>
      <main>
        <section className="page-intro art-page-intro">
          <div className="container">
            <p className="eyebrow">SAIE ARTIST GIFT</p>
            <h1 className="display">전시 공간에 맞는 꽃을 고르세요.</h1>
            <p>작가에게 전할 마음과 갤러리 분위기에 맞춰 큐레이션한 플라워 기프트입니다.</p>
          </div>
        </section>
        <section className="container section" style={{ paddingTop: 0 }}>
          <ProductCatalog />
        </section>
      </main>
    </PageShell>
  );
}
