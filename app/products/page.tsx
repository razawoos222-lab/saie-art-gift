import { PageShell } from "../../components/PageShell";
import { ProductCatalog } from "../../components/ProductCatalog";

export default function ProductsPage() {
  return (
    <PageShell>
      <main>
        <section className="page-intro">
          <div className="container">
            <p className="eyebrow">Flower gifts</p>
            <h1 className="display">전시와 갤러리 공간에 맞춘 꽃선물</h1>
            <p>
              모아 갤러리 전시 일정과 오프닝 현장을 고려한 상품군입니다. 실제 모아 연동 전까지는
              주소를 직접 입력해 주문을 접수합니다.
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
