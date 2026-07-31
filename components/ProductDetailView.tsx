"use client";

import Link from "next/link";
import { displayPrice, formatPrice, inviteSalePrice, pointAmount } from "../lib/products";
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
            작가 선물 선택으로 돌아가기
          </Link>
        </div>
      </main>
    );
  }

  const sale = inviteSalePrice(product);
  const points = pointAmount(sale);

  return (
    <main className="container">
      <div className="product-page art-product-page">
        <div className="product-page-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div>
          <p className="eyebrow">{content.serviceName}</p>
          <h1>{product.name}</h1>
          <div className="detail-price-box">
            <div>
              <span>정가</span>
              <strong>{displayPrice(product)}</strong>
            </div>
            <div>
              <span>MOA 초대장 10% 할인가</span>
              <strong>{formatPrice(sale)} ~</strong>
            </div>
            <div>
              <span>SAIE 가입 10% 적립</span>
              <strong>{formatPrice(points)}</strong>
            </div>
          </div>
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
              <dt>갤러리 무드</dt>
              <dd>{product.galleryMood ?? "작품과 전시장 분위기를 해치지 않는 절제된 구성"}</dd>
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

      {!!product.options?.length && (
        <section className="product-options-section">
          <div className="section-head compact">
            <div>
              <p className="eyebrow">Options</p>
              <h2 className="section-title">세부 꽃 구성</h2>
            </div>
            <p>전시 규모와 설치 위치에 따라 같은 주제 안에서도 여러 가지 구성을 선택할 수 있습니다.</p>
          </div>
          <div className="product-option-grid">
            {product.options.map((option) => {
              const optionPrice = product.price + (option.priceDelta ?? 0);
              const optionSale = Math.round(optionPrice * 0.9);
              return (
                <article className="product-option-card" key={option.name}>
                  {option.image && <img src={option.image} alt={option.name} />}
                  <div>
                    <span>{option.tag ?? "옵션"}</span>
                    <h3>{option.name}</h3>
                    <p>{option.description}</p>
                    <dl className="option-price-list">
                      <div>
                        <dt>정가</dt>
                        <dd>{formatPrice(optionPrice)}</dd>
                      </div>
                      <div>
                        <dt>10% 할인가</dt>
                        <dd>{formatPrice(optionSale)}</dd>
                      </div>
                      <div>
                        <dt>가입 적립</dt>
                        <dd>{formatPrice(pointAmount(optionSale))}</dd>
                      </div>
                    </dl>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {!!product.reviews?.length && (
        <section className="product-review-section">
          <div className="section-head compact">
            <div>
              <p className="eyebrow">Review</p>
              <h2 className="section-title">상품 리뷰</h2>
            </div>
          </div>
          <div className="review-grid">
            {product.reviews.map((review) => (
              <article className="review-card" key={`${review.name}-${review.context}`}>
                <p>{review.body}</p>
                <strong>{review.name}</strong>
                <span>{review.context}</span>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
