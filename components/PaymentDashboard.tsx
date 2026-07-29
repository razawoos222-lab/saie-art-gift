"use client";

import { useEffect, useState } from "react";
import type { StoredOrder } from "../lib/orders";
import { formatPrice } from "../lib/products";
import { useSiteContent } from "./SiteContentContext";

export function PaymentDashboard({ userEmail }: { userEmail: string }) {
  const { content } = useSiteContent();
  const [orders, setOrders] = useState<StoredOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let alive = true;
    fetch("/api/admin/orders")
      .then(async (response) => {
        const data = (await response.json()) as { orders?: StoredOrder[]; error?: string };
        if (!response.ok) throw new Error(data.error ?? "주문 목록을 불러오지 못했습니다.");
        if (alive) setOrders(data.orders ?? []);
      })
      .catch((error) => {
        if (alive) setMessage(error instanceof Error ? error.message : "주문 목록을 불러오지 못했습니다.");
      })
      .finally(() => {
        if (alive) setLoading(false);
      });

    return () => {
      alive = false;
    };
  }, []);

  return (
    <main className="admin-page">
      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">Payment dashboard</p>
          <h1 className="display">주문, 결제 준비, 취소/환불 상태를 확인합니다.</h1>
          <p>
            로그인 {userEmail}. 현재 PG 설정은 {content.paymentProvider} 기준이며, 실제 결제 내역은 가맹점 키 연결 후
            표시됩니다.
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
            <span>결제</span>
          </div>
          {loading && <p className="payment-empty">주문 목록을 불러오는 중입니다.</p>}
          {!loading && message && <p className="form-error">{message}</p>}
          {!loading && !message && !orders.length && <p className="payment-empty">아직 접수된 주문이 없습니다.</p>}
          {orders.map((order) => (
            <div className="payment-row" key={order.id}>
              <span>{order.orderNo}</span>
              <span>{order.buyerName}</span>
              <span>{order.status}</span>
              <span>{formatPrice(order.total)}</span>
              <span>{order.paymentStatus}</span>
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
