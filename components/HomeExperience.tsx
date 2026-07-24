"use client";

import Link from "next/link";
import { displayPrice } from "../lib/products";
import { useSiteContent } from "./SiteContentContext";

export function HomeExperience() {
  const { content } = useSiteContent();
  const featured = content.products[1] ?? content.products[0];

  return (
    <main className="art-gift">
      <section className="art-hero">
        <div className="art-hero-copy">
          <p className="art-kicker">{content.heroEyebrow}</p>
          <h1>{content.heroTitle}</h1>
          <strong>{content.serviceSubtitle}</strong>
          <p>{content.heroBody}</p>
          <Link className="art-button" href={`/products?gift=artist`}>
            {content.ctaLabel}
          </Link>
        </div>
        <div className="art-hero-image">
          <img src={content.heroImage} alt="갤러리 전용 플라워 오브제" />
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
                    <p>Invitation</p>
                    <h3>시간의 결</h3>
                    <span>by Artist Kim</span>
                    <small>Gallery MOA</small>
                    <button>{content.ctaLabel}</button>
                  </div>
                )}
                {index === 1 && featured && (
                  <div className="phone-screen product-screen">
                    <img src={featured.image} alt="" />
                    <h3>{featured.name}</h3>
                    <p>{featured.summary}</p>
                    <strong>{displayPrice(featured)}</strong>
                    <button>선택하기</button>
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
                        <dt>전시장소</dt>
                        <dd>Gallery MOA</dd>
                      </div>
                    </dl>
                    <label>메시지 카드</label>
                    <p className="textarea">전시 오픈을 진심으로 축하드립니다.</p>
                    <button>다음</button>
                  </div>
                )}
                {index === 3 && featured && (
                  <div className="phone-screen pay-screen">
                    <h3>결제하기</h3>
                    <dl>
                      <div>
                        <dt>상품</dt>
                        <dd>{featured.name}</dd>
                      </div>
                      <div>
                        <dt>금액</dt>
                        <dd>{displayPrice(featured)}</dd>
                      </div>
                      <div>
                        <dt>혜택</dt>
                        <dd>모아 회원 10%</dd>
                      </div>
                    </dl>
                    <button>결제하기</button>
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
          <h2>{content.integrationTitle}</h2>
          <div className="integration-chain">
            <span>MOA</span>
            <i />
            <strong>chahaw</strong>
            <i />
            <span>GALLERY</span>
          </div>
          <p>{content.integrationBody}</p>
          <small>{content.integrationPrivacyNote}</small>
        </div>
        <div className="lineup-box">
          <h2>플라워 라인업</h2>
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
        <h2>chahaw design studio</h2>
        <p>The Art of Composition</p>
      </section>
    </main>
  );
}
