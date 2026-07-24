"use client";

import Link from "next/link";
import { formatPrice, salePrice } from "../lib/products";
import { useCart } from "./CartContext";
import { useSiteContent } from "./SiteContentContext";

export function ProductDetailView({ slug }: { slug: string }) {
  const { content } = useSiteContent();
  const { addItem } = useCart();
  const product = content.products.find((item) => item.slug === slug) ?? content.products[0];

  if (!product) {
    return (
      <main className="container">
        <div className="empty-state">
          <h1 className="section-title">상품을 찾을 수 없습니다.</h1>
          <Link href="/products" className="button">
            상품 목록으로
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container">
      <div className="product-page">
        <div className="product-page-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div>
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="product-price">
            {product.discountPercent ? <del>{formatPrice(product.price)}</del> : null}
            {formatPrice(salePrice(product))}
          </p>
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
              <dt>전시 배송</dt>
              <dd>모아 전시 자동 배송은 API 연동 후 활성화됩니다. 현재는 주문서에서 주소를 입력합니다.</dd>
            </div>
          </dl>
          <div className="button-row">
            <button type="button" className="button" onClick={() => addItem(product)}>
              장바구니에 담기
            </button>
            <Link href="/contact" className="button button-light">
              맞춤 상담
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
