import { CartSummary } from "../../components/CartSummary";
import { PageShell } from "../../components/PageShell";
export default function CartPage() { return <PageShell><main><section className="page-intro"><div className="container"><p className="eyebrow">Your cart</p><h1 className="display">고른 꽃을 확인해 주세요.</h1><p>마음을 전할 준비가 되었다면 주문서를 작성해 주세요.</p></div></section><section className="section container" style={{ paddingTop: 52 }}><CartSummary /></section></main></PageShell>; }
