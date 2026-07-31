"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { displayPrice, formatPrice, salePrice } from "../lib/products";
import { useCart } from "./CartContext";
import { useSiteContent } from "./SiteContentContext";
import { useMoaInvite } from "./useMoaInvite";

export function CheckoutForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { content } = useSiteContent();
  const { items, total, clear } = useCart();
  const { invite } = useMoaInvite();
  const [submitting, setSubmitting] = useState(false);
  const [orderError, setOrderError] = useState("");

  const artist = searchParams.get("artist") ?? invite.artist ?? "Artist Kim";
  const exhibition = searchParams.get("exhibition") ?? invite.exhibition ?? "시간의 결";
  const gallery = searchParams.get("gallery") ?? invite.gallery ?? "Gallery MOA";
  const galleryAddress = searchParams.get("galleryAddress") ?? searchParams.get("address") ?? invite.galleryAddress ?? invite.address ?? "";
  const date = searchParams.get("date") ?? invite.date ?? "";
  const inviteId = searchParams.get("inviteId") ?? invite.inviteId ?? "";
  const hasInviteBenefit = Boolean(
    searchParams.get("inviteId") ||
      invite.inviteId ||
      searchParams.get("artist") ||
      invite.artist ||
      searchParams.get("exhibition") ||
      invite.exhibition ||
      searchParams.get("gallery") ||
      invite.gallery,
  );
  const inviteDiscount = hasInviteBenefit ? Math.round(total * 0.1) : 0;
  const finalTotal = Math.max(0, total - inviteDiscount);
  const saiePointEstimate = Math.round(finalTotal * 0.1);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setOrderError("");

    const form = new FormData(event.currentTarget);
    const buyerPhone = String(form.get("buyerPhone") ?? "").trim();
    const payload = {
      buyerName: String(form.get("buyer") ?? "").trim(),
      buyerPhone,
      buyerEmail: String(form.get("buyerEmail") ?? "").trim(),
      recipientArtist: artist,
      exhibition,
      gallery,
      inviteId,
      galleryAddress,
      deliveryDate: String(form.get("deliveryDate") ?? "").trim(),
      message: String(form.get("message") ?? "").trim(),
      items: items.map(({ product, quantity }) => ({
        slug: product.slug,
        name: product.name,
        price: salePrice(product),
        quantity,
        image: product.image,
      })),
      total: finalTotal,
      subtotal: total,
      inviteDiscount,
      saiePointEstimate,
    };

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { order?: { orderNo: string }; error?: string };

      if (!response.ok || !data.order) {
        const messages: Record<string, string> = {
          ORDER_STORAGE_NOT_CONNECTED: "주문 저장소가 아직 연결되지 않았습니다.",
          ORDER_REQUIRED_FIELDS_MISSING: "주문자명, 연락처, 상품 정보가 필요합니다.",
          ORDER_TOTAL_INVALID: "주문 금액이 올바르지 않습니다.",
        };
        throw new Error(messages[data.error ?? ""] ?? "주문 접수에 실패했습니다.");
      }

      clear();
      router.push(
        `/order-complete?order=${encodeURIComponent(data.order.orderNo)}&phone=${encodeURIComponent(
          buyerPhone,
        )}`,
      );
    } catch (error) {
      setOrderError(error instanceof Error ? error.message : "주문 접수에 실패했습니다.");
      setSubmitting(false);
    }
  }

  if (!items.length) {
    return (
      <div className="empty-state">
        <h1 className="section-title">선택한 갤러리 꽃선물이 없습니다.</h1>
        <p>작가와 전시 공간에 어울리는 꽃선물을 먼저 선택해 주세요.</p>
      </div>
    );
  }

  return (
    <form className="checkout-layout" onSubmit={handleSubmit}>
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
              <span>갤러리</span>
              <strong>{gallery}</strong>
            </div>
            <div>
              <span>전시장 주소</span>
              <strong>{galleryAddress || "MOA 전시장 주소 연동 대기"}</strong>
            </div>
            <div>
              <span>초대장 ID</span>
              <strong>{inviteId || "MOA 연동 대기"}</strong>
            </div>
          </div>
          {hasInviteBenefit && (
            <p className="benefit-note">MOA 초대장 링크 유입으로 10% 할인이 적용됩니다.</p>
          )}
          <div className="field">
            <label htmlFor="delivery-date">배송/설치 희망일</label>
            <input id="delivery-date" name="deliveryDate" required type="date" defaultValue={date} />
          </div>
        </section>

        <section className="form-section">
          <p className="eyebrow">02 Message</p>
          <h2>작가에게 전할 메시지</h2>
          <div className="field">
            <label htmlFor="card-message">메시지 카드</label>
            <textarea
              id="card-message"
              name="message"
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
            <input id="buyer" name="buyer" required placeholder="성함을 입력해 주세요" />
          </div>
          <div className="field">
            <label htmlFor="buyer-phone">연락처</label>
            <input id="buyer-phone" name="buyerPhone" required type="tel" placeholder="010-0000-0000" />
          </div>
          <div className="field">
            <label htmlFor="buyer-email">이메일</label>
            <input id="buyer-email" name="buyerEmail" required type="email" placeholder="주문 안내를 받을 이메일" />
          </div>
        </section>
      </div>

      <aside className="checkout-total">
        <p className="eyebrow">Payment</p>
        <h2>주문 전 확인</h2>
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
          <span>상품 금액</span>
          <strong>{formatPrice(total)}</strong>
        </div>
        {hasInviteBenefit && (
          <div className="mini-line benefit-line">
            <span>MOA 초대장 할인</span>
            <strong>-{formatPrice(inviteDiscount)}</strong>
          </div>
        )}
        <div className="mini-line">
          <span>SAIE 가입 예상 적립</span>
          <strong>{formatPrice(saiePointEstimate)}</strong>
        </div>
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
          <strong>{formatPrice(finalTotal)}</strong>
        </div>
        <p className="payment-notice">
          {content.paymentProvider}: {content.paymentStatus}
        </p>
        <p className="payment-notice">선택 상품 기준가: {items.map((item) => displayPrice(item.product)).join(", ")}</p>
        <label className="consent">
          <input required type="checkbox" /> 주문, 배송, 취소/환불, 개인정보 처리 안내를 확인했습니다.
        </label>
        {orderError && <p className="form-error">{orderError}</p>}
        <button className="button checkout-submit" disabled={submitting} type="submit">
          {submitting ? "주문 접수 중" : "주문 접수하기"}
        </button>
      </aside>
    </form>
  );
}
