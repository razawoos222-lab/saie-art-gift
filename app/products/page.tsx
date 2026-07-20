import { PageShell } from "../../components/PageShell";
import { ProductCatalog } from "../../components/ProductCatalog";
export default function ProductsPage() { return <PageShell><main><section className="page-intro"><div className="container"><p className="eyebrow">Flower gifts</p><h1 className="display">좋은 날에, 좋은 꽃을.</h1><p>정해진 모양보다 지금 가장 아름다운 계절의 표정을 먼저 담습니다.</p></div></section><section className="container section" style={{ paddingTop: 0 }}><ProductCatalog /></section></main></PageShell>; }
