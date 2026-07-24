"use client";

import Link from "next/link";
import { displayPrice, formatPrice, salePrice } from "../lib/products";
import { useCart } from "./CartContext";

export function CartSummary() {
  const { items, total, updateQuantity, removeItem } = useCart();

  if (!items.length) {
    return (
      <div className="empty-state">
        <p className="eyebrow">Selected gift</p>
        <h1 className="section-title">아직 선택한 플라워가 없습니다.</h1>
        <p>작가와 전시 공간에 어울리는 플라워 기프트를 선택해 주세요.</p>
        <Link href="/products" className="button">
          플라워 라인업 보기
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-layout">
      <div className="cart-list">
        {items.map(({ product, quantity }) => (
          <article className="cart-item" key={product.slug}>
            <img src={product.image} alt="" />
            <div className="cart-item-copy">
              <h2>{product.name}</h2>
              <p>{displayPrice(product)}</p>
              <div className="quantity">
                <button type="button" onClick={() => updateQuantity(product.slug, quantity - 1)} aria-label={`${product.name} 수량 줄이기`}>
                  -
                </button>
                <span>{quantity}</span>
                <button type="button" onClick={() => updateQuantity(product.slug, quantity + 1)} aria-label={`${product.name} 수량 늘리기`}>
                  +
                </button>
              </div>
            </div>
            <div className="cart-item-total">
              <strong>{formatPrice(salePrice(product) * quantity)}</strong>
              <button type="button" onClick={() => removeItem(product.slug)}>
                삭제
              </button>
            </div>
          </article>
        ))}
      </div>
      <aside className="cart-total">
        <p className="eyebrow">Order summary</p>
        <div>
          <span>선택 금액</span>
          <strong>{formatPrice(total)}</strong>
        </div>
        <div>
          <span>배송/설치</span>
          <strong>전시 정보 기준</strong>
        </div>
        <hr />
        <div className="cart-grand-total">
          <span>예상 결제 금액</span>
          <strong>{formatPrice(total)}</strong>
        </div>
        <Link href="/checkout" className="button">
          메시지 작성하기
        </Link>
      </aside>
    </div>
  );
}
