"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { displayPrice } from "../lib/products";
import { useSiteContent } from "./SiteContentContext";

export function HomeExperience() {
  const { content } = useSiteContent();
  const featured = content.products.find((product) => product.slug === "opening-table") ?? content.products[0];
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
          <img src={content.heroImage} alt="갤러리에 어울리는 플라워 오브제" />
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
                    <button>작가에게 꽃선물하기</button>
                  </div>
                )}
                {index === 1 && featured && (
                  <div className="phone-screen product-screen">
                    <img src={featured.image} alt="" />
                    <h3>{featured.name}</h3>
                    <p>{featured.summary}</p>
                    <strong>{displayPrice(featured)}</strong>
                    <button>이 꽃으로 보내기</button>
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
                        <dt>전시</dt>
                        <dd>시간의 결</dd>
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

      <section className="art-info-band">
        <div className="integration-box">
          <h2>{content.moaHeadline}</h2>
          <div className="integration-chain">
            <span>MOA</span>
            <i />
            <strong>SAIE</strong>
            <i />
            <span>GALLERY</span>
          </div>
          <p>{content.integrationBody}</p>
          <small>{content.integrationPrivacyNote}</small>
          <ul className="moa-bullet-list">
            {content.moaBullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
        <div className="lineup-box">
          <h2>갤러리 꽃선물</h2>
          <div className="lineup-grid">
            {content.products.map((product) => (
              <Link href={`/products/${product.slug}`} key={product.slug}>
                <img src={product.image} alt={product.name} />
                <strong>{product.name}</strong>
                <span>{displayPrice(product)}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="art-closing">
        <h2>{content.brandName}</h2>
        <p>For the artist and the gallery, from the invitation.</p>
      </section>
    </main>
  );
}
