import Link from "next/link";
import { PageShell } from "../../components/PageShell";
export default function OrderCompletePage() { return <PageShell><main className="container"><section className="complete-state"><p className="eyebrow">Order received</p><h1 className="display">주문 내용을<br />확인하고 있어요.</h1><p>차화가 주문 가능 여부와 배송 일정을 확인한 뒤 입력해주신 연락처로 안내드릴게요.</p><div className="button-row"><Link className="button" href="/products">꽃 선물 더 보기</Link><Link className="button button-light" href="/">홈으로 돌아가기</Link></div></section></main></PageShell>; }
