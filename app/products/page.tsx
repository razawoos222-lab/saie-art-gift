import { PageShell } from "../../components/PageShell";
import { ProductCatalog } from "../../components/ProductCatalog";

export default function ProductsPage() {
  return (
    <PageShell>
      <main>
        <section className="page-intro art-page-intro">
          <div className="container">
            <p className="eyebrow">SAIE ART GIFT</p>
            <h1 className="display">전시에 어울리는 네 가지 플라워 기프트</h1>
            <p>
              많은 상품 중 고르는 쇼핑몰보다, 작가와 전시 공간에 어울리는 선택지를 큐레이션하는 구조입니다. 일반
              선물용 계절 부케도 함께 운영할 수 있습니다.
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
