"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { displayPrice } from "../lib/products";
import { useSiteContent } from "./SiteContentContext";

export function HomeExperience() {
  const { content } = useSiteContent();
  const featured = content.products[0];
  const heroStyle = content.heroStyle;
  const heroCssVars = {
    "--hero-title-size": `${heroStyle.titleSize}px`,
    "--hero-title-line-height": heroStyle.titleLineHeight,
    "--hero-subtitle-size": `${heroStyle.subtitleSize}px`,
    "--hero-body-size": `${heroStyle.bodySize}px`,
    "--hero-body-line-height": heroStyle.bodyLineHeight,
    "--hero-text-gap": `${heroStyle.textGap}px`,
    "--hero-image-height": `${heroStyle.imageHeight}px`,
    "--hero-image-saturation": `${heroStyle.imageSaturation}%`,
  } as CSSProperties;

  return (
    <main className="art-gift">
      <section className="art-hero" style={heroCssVars}>
        <div className="art-hero-copy">
          <p className="art-kicker">{content.heroEyebrow}</p>
          <h1>{content.heroTitle}</h1>
          <strong>{content.serviceSubtitle}</strong>
          <p>{content.heroBody}</p>
          <Link className="art-button" href="/gift">
            {content.ctaLabel}
          </Link>
        </div>
        <div className="art-hero-image">
          <img src={content.heroImage} alt="작가에게 보내는 갤러리 플라워 오브제" />
        </div>
      </section>

      <section className="art-benefit-panel">
        <div className="benefit-title">
          <span />
          <strong>{content.benefitsTitle}</strong>
          <span />
        </div>
        <div className="benefit-grid">
          {content.benefits.map((benefit) => (
            <article key={benefit.title}>
              <h2>{benefit.title}</h2>
              <p>{benefit.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="artist-gift-showcase">
        <div className="artist-gift-head">
          <p className="art-kicker">{content.serviceName}</p>
          <h2>작가에게 꽃 선물하기</h2>
          <p>
            꽃이 작품보다 먼저 보이지 않도록, 낮은 채도와 정돈된 형태의 구성만 제안합니다. 작가 선물,
            오프닝 리셉션, 갤러리 조화시공까지 전시 상황에 맞게 선택할 수 있습니다.
          </p>
        </div>
        <div className="artist-gift-grid">
          {content.products.map((product) => (
            <Link className="artist-gift-card" href={`/products/${product.slug}`} key={product.slug}>
              <img src={product.image} alt={product.name} />
              <span>{product.category}</span>
              <strong>{product.name}</strong>
              <p>{product.summary}</p>
              <em>{displayPrice(product)}</em>
            </Link>
          ))}
        </div>
      </section>

      <section className="phone-flow">
        <div className="flow-title">
          <span />
          <h2>{content.stepsTitle}</h2>
          <span />
        </div>
        <div className="phone-grid">
          {content.steps.map((step, index) => (
            <article className="phone-step" key={step.number}>
              <div className="phone-frame">
                {index === 0 && (
                  <div className="phone-screen invite-screen">
                    <p>MOA Invitation</p>
                    <h3>시간의 결</h3>
                    <span>by Artist Kim</span>
                    <small>Gallery MOA</small>
                    <button>작가에게 꽃 선물하기</button>
                  </div>
                )}
                {index === 1 && featured && (
                  <div className="phone-screen product-screen">
                    <img src={featured.image} alt="" />
                    <h3>{featured.name}</h3>
                    <p>{featured.summary}</p>
                    <strong>{displayPrice(featured)}</strong>
                    <button>이 선물로 보내기</button>
                  </div>
                )}
                {index === 2 && (
                  <div className="phone-screen message-screen">
                    <h3>전시 정보</h3>
                    <dl>
                      <div>
                        <dt>전시명</dt>
                        <dd>시간의 결</dd>
                      </div>
                      <div>
                        <dt>작가명</dt>
                        <dd>Artist Kim</dd>
                      </div>
                      <div>
                        <dt>갤러리</dt>
                        <dd>Gallery MOA</dd>
                      </div>
                    </dl>
                    <label>메시지 카드</label>
                    <p className="textarea">전시 오픈을 진심으로 축하드립니다.</p>
                    <button>메시지 작성</button>
                  </div>
                )}
                {index === 3 && featured && (
                  <div className="phone-screen pay-screen">
                    <h3>주문 접수</h3>
                    <dl>
                      <div>
                        <dt>상품</dt>
                        <dd>{featured.name}</dd>
                      </div>
                      <div>
                        <dt>할인</dt>
                        <dd>초대장 링크 10%</dd>
                      </div>
                      <div>
                        <dt>상태</dt>
                        <dd>제작 확인 대기</dd>
                      </div>
                    </dl>
                    <button>주문 접수하기</button>
                  </div>
                )}
              </div>
              <p className="step-number">{step.number}</p>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-review-section">
        <div className="artist-gift-head">
          <p className="art-kicker">REVIEW</p>
          <h2>고객 리뷰</h2>
        </div>
        <div className="home-review-grid">
          {content.reviews.map((review) => (
            <article key={`${review.name}-${review.context}`}>
              <p>{review.body}</p>
              <strong>{review.name}</strong>
              <span>{review.context}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="art-closing">
        <h2>{content.brandName}</h2>
        <p>For the artist and the gallery, from the invitation.</p>
      </section>
    </main>
  );
}
