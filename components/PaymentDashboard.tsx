"use client";

import { formatPrice } from "../lib/products";
import { useSiteContent } from "./SiteContentContext";

const rows = [
  { id: "CH-20260724-001", buyer: "모아 전시 고객", status: "결제 대기", amount: 79000, method: "카드", action: "승인 전" },
  { id: "CH-20260724-002", buyer: "갤러리 운영팀", status: "상담 결제", amount: 120000, method: "가상계좌", action: "PG 연결 후 발행" },
  { id: "CH-20260724-003", buyer: "컬렉터 고객", status: "환불 가능", amount: 68000, method: "카드", action: "부분 환불 준비" },
];

export function PaymentDashboard({ userEmail }: { userEmail: string }) {
  const { content } = useSiteContent();

  return (
    <main className="admin-page">
      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">Payment dashboard</p>
          <h1 className="display">결제 승인, 취소, 환불 상태를 확인합니다.</h1>
          <p>
            로그인: {userEmail}. 현재 PG 설정은 {content.paymentProvider} 기준이며, 실제 결제 내역은
            가맹점 키와 웹훅 연결 후 표시됩니다.
          </p>
        </div>
      </section>
      <section className="container admin-layout payments-layout">
        <div className="payment-table">
          <div className="payment-row payment-head">
            <span>주문번호</span>
            <span>주문자</span>
            <span>상태</span>
            <span>금액</span>
            <span>처리</span>
          </div>
          {rows.map((row) => (
            <div className="payment-row" key={row.id}>
              <span>{row.id}</span>
              <span>{row.buyer}</span>
              <span>{row.status}</span>
              <span>{formatPrice(row.amount)}</span>
              <span>{row.action}</span>
            </div>
          ))}
        </div>
        <aside className="admin-save">
          <p className="eyebrow">PG status</p>
          <h2>{content.paymentProvider}</h2>
          <p>{content.paymentStatus}</p>
          <p>{content.paymentDashboardNote}</p>
        </aside>
      </section>
    </main>
  );
}
