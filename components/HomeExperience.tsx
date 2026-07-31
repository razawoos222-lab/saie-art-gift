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
          <p className="art-kicker">MOA × SAIE</p>
          <h1>saie artist gift</h1>
          <strong>모아 초대장에서 이어지는 갤러리 전용 꽃선물</strong>
          <p>
            전시 초대장을 받은 분이 작가에게 꽃과 메시지를 보낼 수 있는 모바일 전용 주문 화면입니다. 작가, 전시,
            갤러리 정보는 주문서까지 이어집니다.
          </p>
          <Link className="art-button" href="/gift">
            꽃 선택하기
          </Link>
        </div>
        <div className="art-hero-image">
          <img src={content.heroImage} alt="갤러리 전용 플라워 오브제" />
        </div>
      </section>

      <section className="art-benefit-panel">
        <div className="benefit-title">
          <span />
          <strong>초대장에서 바로 이어지는 주문</strong>
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
          <h2>작가에게 꽃을 보내는 4단계</h2>
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
                    <button>이 꽃 선택하기</button>
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
          <h2>모아 초대장 링크 연동</h2>
          <div className="integration-chain">
            <span>MOA</span>
            <i />
            <strong>SAIE</strong>
            <i />
            <span>ORDER</span>
          </div>
          <p>모아 초대장의 버튼 링크에 작가명, 전시명, 갤러리명, 전시일, 초대장 ID를 담아 SAIE `/gift`로 연결합니다.</p>
          <small>실제 API 연동 전에는 URL 정보로 주문 흐름을 완성하고, 이후 inviteId 기반 조회로 고도화합니다.</small>
        </div>
        <div className="lineup-box">
          <h2>꽃 선택</h2>
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
        <h2>saie artist gift</h2>
        <p>For the artist, from the invitation.</p>
      </section>
    </main>
  );
}
