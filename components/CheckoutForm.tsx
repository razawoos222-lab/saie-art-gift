"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { formatPrice, salePrice } from "../lib/products";
import { useCart } from "./CartContext";
import { useSiteContent } from "./SiteContentContext";

export function CheckoutForm() {
  const router = useRouter();
  const { content } = useSiteContent();
  const { items, total, clear } = useCart();
  const [deliveryType, setDeliveryType] = useState("address");
  const [submitted, setSubmitted] = useState(false);

  if (!items.length) {
    return (
      <div className="empty-state">
        <h1 className="section-title">주문할 상품이 없습니다.</h1>
        <p>상품을 장바구니에 먼저 담아주세요.</p>
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
          <p className="eyebrow">01 Recipient</p>
          <h2>받는 분 정보</h2>
          <div className="field">
            <label htmlFor="recipient">받는 분 성함</label>
            <input id="recipient" required placeholder="성함을 입력해 주세요" />
          </div>
          <div className="field">
            <label htmlFor="recipient-phone">받는 분 연락처</label>
            <input id="recipient-phone" required type="tel" placeholder="010-0000-0000" />
          </div>
        </section>

        <section className="form-section">
          <p className="eyebrow">02 Delivery</p>
          <h2>배송 정보</h2>
          <div className="choice-row">
            <label className={deliveryType === "address" ? "choice selected" : "choice"}>
              <input
                type="radio"
                name="delivery"
                value="address"
                checked={deliveryType === "address"}
                onChange={() => setDeliveryType("address")}
              />
              일반 주소 배송
            </label>
            <label className="choice disabled">
              <input type="radio" name="delivery" value="gallery" disabled />
              모아 전시 자동 배송 <small>연동 예정</small>
            </label>
          </div>
          <div className="field">
            <label htmlFor="address">배송 주소</label>
            <input id="address" required placeholder="갤러리 또는 수령지 주소를 입력해 주세요" />
          </div>
          <div className="field">
            <label htmlFor="delivery-date">희망 배송일</label>
            <input id="delivery-date" required type="date" />
          </div>
          <div className="field">
            <label htmlFor="card-message">카드 문구</label>
            <textarea id="card-message" placeholder="작가님께 전할 카드 문구를 입력해 주세요" />
          </div>
        </section>

        <section className="form-section">
          <p className="eyebrow">03 Buyer</p>
          <h2>주문자 정보</h2>
          <div className="field">
            <label htmlFor="buyer">주문자 성함</label>
            <input id="buyer" required placeholder="성함을 입력해 주세요" />
          </div>
          <div className="field">
            <label htmlFor="buyer-phone">주문자 연락처</label>
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
        <h2>주문 금액</h2>
        {items.map(({ product, quantity }) => (
          <div className="mini-line" key={product.slug}>
            <span>
              {product.name} × {quantity}
            </span>
            <strong>{formatPrice(salePrice(product) * quantity)}</strong>
          </div>
        ))}
        <hr />
        <div className="cart-grand-total">
          <span>총 주문 금액</span>
          <strong>{formatPrice(total)}</strong>
        </div>
        <p className="payment-notice">{content.paymentStatus}</p>
        <label className="consent">
          <input required type="checkbox" /> 주문 내용과 배송/환불 정책을 확인했습니다.
        </label>
        <button className="button" disabled={submitted} type="submit">
          {submitted ? "주문 처리 중" : "주문 접수하기"}
        </button>
      </aside>
    </form>
  );
}
