"use client";

import { FormEvent, useState } from "react";
import type { StoredOrder } from "../lib/orders";
import { formatPrice } from "../lib/products";

export function OrderLookup() {
  const [order, setOrder] = useState<StoredOrder | null>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    setOrder(null);

    const form = new FormData(event.currentTarget);
    const orderNo = String(form.get("orderNo") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();

    try {
      const response = await fetch(
        `/api/orders?orderNo=${encodeURIComponent(orderNo)}&phone=${encodeURIComponent(phone)}`,
      );
      const data = (await response.json()) as { order?: StoredOrder; error?: string };
      if (!response.ok || !data.order) throw new Error(data.error ?? "주문을 찾지 못했습니다.");
      setOrder(data.order);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "주문을 찾지 못했습니다.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="lookup-layout">
      <form className="form-section" onSubmit={handleSubmit}>
        <p className="eyebrow">Non-member order</p>
        <h2>비회원 주문조회</h2>
        <div className="field">
          <label htmlFor="orderNo">주문번호</label>
          <input id="orderNo" name="orderNo" required placeholder="SAIE-20260729-ABCD" />
        </div>
        <div className="field">
          <label htmlFor="phone">주문자 연락처</label>
          <input id="phone" name="phone" required placeholder="010-0000-0000" />
        </div>
        <button className="button" disabled={loading} type="submit">
          {loading ? "조회 중" : "조회하기"}
        </button>
        {message && <p className="form-error">{message}</p>}
      </form>

      <aside className="checkout-total">
        <p className="eyebrow">Order status</p>
        {!order ? (
          <>
            <h2>주문번호와 연락처로 확인합니다.</h2>
            <p className="payment-notice">회원가입 없이도 주문 상태, 전시 정보, 결제 준비 상태를 확인할 수 있습니다.</p>
          </>
        ) : (
          <>
            <h2>{order.orderNo}</h2>
            <div className="mini-line">
              <span>주문 상태</span>
              <strong>{order.status}</strong>
            </div>
            <div className="mini-line">
              <span>결제 상태</span>
              <strong>{order.paymentStatus}</strong>
            </div>
            <div className="mini-line">
              <span>전시</span>
              <strong>{order.exhibition}</strong>
            </div>
            <div className="mini-line">
              <span>갤러리</span>
              <strong>{order.gallery}</strong>
            </div>
            {order.items.map((item) => (
              <div className="mini-line" key={item.slug}>
                <span>
                  {item.name} × {item.quantity}
                </span>
                <strong>{formatPrice(item.price * item.quantity)}</strong>
              </div>
            ))}
            <div className="cart-grand-total">
              <span>총 금액</span>
              <strong>{formatPrice(order.total)}</strong>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
