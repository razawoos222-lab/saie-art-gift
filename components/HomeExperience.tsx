"use client";

import Link from "next/link";
import { ProductCard } from "./ProductCard";
import { useSiteContent } from "./SiteContentContext";

export function HomeExperience() {
  const { content } = useSiteContent();

  return (
    <main>
      <section className="notice-bar">{content.notice}</section>
      <section className="hero">
        <img className="hero-image" src={content.heroImage} alt="차화 갤러리 전용 꽃선물" />
        <div className="hero-copy">
          <p className="eyebrow">{content.heroEyebrow}</p>
          <h1 className="display">{content.heroTitle}</h1>
          <p>{content.heroBody}</p>
          <div className="button-row">
            <Link href="/products" className="button">
              전시 꽃선물 고르기
            </Link>
            <Link href="/admin" className="button button-light">
              관리자에서 수정
            </Link>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <div>
            <p className="eyebrow">MOA only</p>
            <h2 className="section-title">{content.moaHeadline}</h2>
          </div>
        </div>
        <div className="moa-feature">
          <p>{content.moaBody}</p>
          <ul>
            {content.moaBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Gallery selection</p>
            <h2 className="section-title">전시와 공간에 맞춘 꽃선물</h2>
          </div>
          <Link className="text-link" href="/products">
            모든 상품 보기 <span>→</span>
          </Link>
        </div>
        <div className="product-grid">
          {content.products.slice(0, 4).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="section policy-band">
        <div className="container policy-grid">
          <div>
            <p className="eyebrow">Price policy</p>
            <h2 className="section-title">가격과 할인 정책을 분리 관리합니다.</h2>
          </div>
          <p>{content.discountPolicy}</p>
          <p>{content.paymentStatus}</p>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Reviews</p>
            <h2 className="section-title">갤러리 현장에서 받은 후기</h2>
          </div>
        </div>
        <div className="review-grid">
          {content.reviews.map((review) => (
            <article className="review-card" key={`${review.name}-${review.context}`}>
              <p>{review.body}</p>
              <strong>{review.name}</strong>
              <span>{review.context}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="container cs-grid">
          <div>
            <p className="eyebrow" style={{ color: "#ffe3d8" }}>
              Customer center
            </p>
            <h2 className="display">전시 일정과 배송 조건이 애매할 때는 상담으로 조율합니다.</h2>
          </div>
          <div className="cs-panel">
            <p>전화 {content.csPhone}</p>
            <p>카카오 {content.csKakao}</p>
            <p>{content.csHours}</p>
            <Link href="/contact" className="button">
              문의 남기기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
