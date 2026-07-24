"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { displayPrice, formatPrice, salePrice } from "../lib/products";
import { useCart } from "./CartContext";
import { useSiteContent } from "./SiteContentContext";

export function CheckoutForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { content } = useSiteContent();
  const { items, total, clear } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const artist = searchParams.get("artist") ?? "Artist Kim";
  const exhibition = searchParams.get("exhibition") ?? "시간의 결";
  const gallery = searchParams.get("gallery") ?? "Gallery MOA";
  const date = searchParams.get("date") ?? "";
  const inviteId = searchParams.get("inviteId") ?? "";

  if (!items.length) {
    return (
      <div className="empty-state">
        <h1 className="section-title">선택한 플라워가 없습니다.</h1>
        <p>작가에게 전할 플라워 기프트를 먼저 선택해 주세요.</p>
      </div>
    );
  }

  return (
    <form
      className="checkout-layout"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
        window.setTimeout(() => {
          clear();
          router.push("/order-complete");
        }, 350);
      }}
    >
      <div className="checkout-form">
        <section className="form-section">
          <p className="eyebrow">01 Exhibition</p>
          <h2>전시 정보 확인</h2>
          <div className="readonly-grid">
            <div>
              <span>작가명</span>
              <strong>{artist}</strong>
            </div>
            <div>
              <span>전시명</span>
              <strong>{exhibition}</strong>
            </div>
            <div>
              <span>전시장소</span>
              <strong>{gallery}</strong>
            </div>
            <div>
              <span>초대장 ID</span>
              <strong>{inviteId || "모아 연동 전"}</strong>
            </div>
          </div>
          <div className="field">
            <label htmlFor="delivery-date">배송/설치 희망일</label>
            <input id="delivery-date" required type="date" defaultValue={date} />
          </div>
        </section>

        <section className="form-section">
          <p className="eyebrow">02 Message</p>
          <h2>작가에게 전할 메시지</h2>
          <div className="field">
            <label htmlFor="card-message">메시지 카드</label>
            <textarea
              id="card-message"
              placeholder="전시 오픈을 진심으로 축하드립니다. 오래 준비한 시간이 아름답게 피어나길 바랍니다."
            />
          </div>
          <div className="message-samples">
            <button type="button">전시 오픈을 진심으로 축하드립니다.</button>
            <button type="button">당신의 새로운 장면을 응원합니다.</button>
          </div>
        </section>

        <section className="form-section">
          <p className="eyebrow">03 Sender</p>
          <h2>보내는 분 정보</h2>
          <div className="field">
            <label htmlFor="buyer">보내는 분 성함</label>
            <input id="buyer" required placeholder="성함을 입력해 주세요" />
          </div>
          <div className="field">
            <label htmlFor="buyer-phone">연락처</label>
            <input id="buyer-phone" required type="tel" placeholder="010-0000-0000" />
          </div>
          <div className="field">
            <label htmlFor="buyer-email">이메일</label>
            <input id="buyer-email" required type="email" placeholder="주문 안내를 받을 이메일" />
          </div>
        </section>
      </div>

      <aside className="checkout-total">
        <p className="eyebrow">Payment</p>
        <h2>결제 전 확인</h2>
        {items.map(({ product, quantity }) => (
          <div className="mini-line" key={product.slug}>
            <span>
              {product.name} × {quantity}
            </span>
            <strong>{formatPrice(salePrice(product) * quantity)}</strong>
          </div>
        ))}
        <hr />
        <div className="mini-line">
          <span>전시</span>
          <strong>{exhibition}</strong>
        </div>
        <div className="mini-line">
          <span>받는 작가</span>
          <strong>{artist}</strong>
        </div>
        <div className="cart-grand-total">
          <span>총 주문 금액</span>
          <strong>{formatPrice(total)}</strong>
        </div>
        <p className="payment-notice">
          {content.paymentProvider}: {content.paymentStatus}
        </p>
        <p className="payment-notice">선택 상품 기준가: {items.map((item) => displayPrice(item.product)).join(", ")}</p>
        <label className="consent">
          <input required type="checkbox" /> 주문 내용과 배송/환불 정책을 확인했습니다.
        </label>
        <button className="button" disabled={submitted} type="submit">
          {submitted ? "주문 처리 중" : "결제하기"}
        </button>
      </aside>
    </form>
  );
}
