import { PageShell } from "../../components/PageShell";
import { ProductCatalog } from "../../components/ProductCatalog";

export default function ProductsPage() {
  return (
    <PageShell>
      <main>
        <section className="page-intro art-page-intro">
          <div className="container">
            <p className="eyebrow">CHAHWA ART GIFT</p>
            <h1 className="display">전시에 어울리는 세 가지 플라워 기프트</h1>
            <p>
              많은 상품 중 고르는 쇼핑몰이 아니라, 작가와 전시 공간에 어울리는 몇 가지 선택지만
              제안하는 큐레이션형 구조입니다.
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
