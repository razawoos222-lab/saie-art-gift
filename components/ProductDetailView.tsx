"use client";

import Link from "next/link";
import { displayPrice } from "../lib/products";
import { useCart } from "./CartContext";
import { useSiteContent } from "./SiteContentContext";
import { useMoaInvite } from "./useMoaInvite";

export function ProductDetailView({ slug }: { slug: string }) {
  const { content } = useSiteContent();
  const { addItem } = useCart();
  const { withInvite } = useMoaInvite();
  const product = content.products.find((item) => item.slug === slug) ?? content.products[0];

  if (!product) {
    return (
      <main className="container">
        <div className="empty-state">
          <h1 className="section-title">상품을 찾을 수 없습니다.</h1>
          <Link href="/gift" className="button">
            갤러리 꽃 선택으로 돌아가기
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container">
      <div className="product-page art-product-page">
        <div className="product-page-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div>
          <p className="eyebrow">SAIE GALLERY GIFT</p>
          <h1>{product.name}</h1>
          <p className="product-price">{displayPrice(product)}</p>
          <p className="description">{product.description}</p>
          <dl className="detail-list">
            <div>
              <dt>구성</dt>
              <dd>{product.flowers}</dd>
            </div>
            <div>
              <dt>추천 상황</dt>
              <dd>{product.occasion}</dd>
            </div>
            <div>
              <dt>갤러리 배송</dt>
              <dd>MOA 초대장의 전시 정보가 전달되면 작가명, 전시명, 갤러리명이 주문서에 자동 반영됩니다.</dd>
            </div>
          </dl>
          <div className="button-row">
            <button type="button" className="button" onClick={() => addItem(product)}>
              장바구니 담기
            </button>
            <Link href={withInvite("/checkout")} className="button button-light">
              메시지 작성하기
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
