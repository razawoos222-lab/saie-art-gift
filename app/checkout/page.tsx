import { CheckoutForm } from "../../components/CheckoutForm";
import { PageShell } from "../../components/PageShell";
export default function CheckoutPage() { return <PageShell><main><section className="page-intro"><div className="container"><p className="eyebrow">Checkout</p><h1 className="display">꽃을 보낼 정보를<br />남겨 주세요.</h1><p>현재는 주문 흐름 확인용이며, 결제는 PG 연동 후 활성화됩니다.</p></div></section><section className="section container" style={{ paddingTop: 52 }}><CheckoutForm /></section></main></PageShell>; }
