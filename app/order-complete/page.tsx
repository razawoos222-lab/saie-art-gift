import Link from "next/link";
import { PageShell } from "../../components/PageShell";

type Props = {
  searchParams: Promise<{ order?: string; phone?: string }>;
};

export default async function OrderCompletePage({ searchParams }: Props) {
  const params = await searchParams;
  const orderNo = params.order ?? "";
  const phone = params.phone ?? "";
  const lookupHref =
    orderNo && phone
      ? `/order-lookup?orderNo=${encodeURIComponent(orderNo)}&phone=${encodeURIComponent(phone)}`
      : "/order-lookup";

  return (
    <PageShell>
      <main className="container">
        <section className="complete-state">
          <p className="eyebrow">Order received</p>
          <h1 className="display">주문이 접수되었습니다.</h1>
          {orderNo && (
            <p>
              주문번호는 <strong>{orderNo}</strong> 입니다. 관리자 확인 후 제작 가능 여부와 결제 안내를 연락처로
              보내드립니다.
            </p>
          )}
          {!orderNo && <p>SAIE가 주문 가능 여부와 배송 일정을 확인한 뒤 연락드리겠습니다.</p>}
          <div className="button-row">
            <Link className="button" href={lookupHref}>
              주문조회
            </Link>
            <Link className="button button-light" href="/products">
              플라워 라인업 보기
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
