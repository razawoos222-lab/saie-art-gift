"use client";

import { useState } from "react";
import type { Product } from "../lib/products";
import type { Review, SiteContent } from "../lib/siteContent";
import { useSiteContent } from "./SiteContentContext";

function updateProduct(products: Product[], index: number, patch: Partial<Product>) {
  return products.map((product, currentIndex) =>
    currentIndex === index ? { ...product, ...patch } : product,
  );
}

function updateReview(reviews: Review[], index: number, patch: Partial<Review>) {
  return reviews.map((review, currentIndex) =>
    currentIndex === index ? { ...review, ...patch } : review,
  );
}

export function AdminConsole() {
  const { content, saveContent, saveState } = useSiteContent();

  return (
    <AdminDraftForm
      key={JSON.stringify(content)}
      initialContent={content}
      saveContent={saveContent}
      saveState={saveState}
    />
  );
}

function AdminDraftForm({
  initialContent,
  saveContent,
  saveState,
}: {
  initialContent: SiteContent;
  saveContent: (nextContent: SiteContent) => Promise<void>;
  saveState: "idle" | "saving" | "saved" | "error";
}) {
  const [draft, setDraft] = useState<SiteContent>(initialContent);

  return (
    <main className="admin-page">
      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">ChaHwa admin</p>
          <h1 className="display">상품, 가격, 문구를 직접 수정합니다.</h1>
          <p>
            현재 화면은 차화 운영자가 상품 이미지 URL, 가격 정책, 홈 문구, 공지, CS, 리뷰를
            관리하기 위한 1차 관리자 콘솔입니다.
          </p>
        </div>
      </section>

      <section className="container admin-layout">
        <div className="admin-main">
          <section className="admin-section">
            <h2>홈페이지 문구</h2>
            <div className="field">
              <label htmlFor="notice">상단 노티스</label>
              <input
                id="notice"
                value={draft.notice}
                onChange={(event) => setDraft({ ...draft, notice: event.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="hero-title">메인 헤드라인</label>
              <textarea
                id="hero-title"
                value={draft.heroTitle}
                onChange={(event) => setDraft({ ...draft, heroTitle: event.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="hero-body">메인 설명</label>
              <textarea
                id="hero-body"
                value={draft.heroBody}
                onChange={(event) => setDraft({ ...draft, heroBody: event.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="hero-image">메인 이미지 URL</label>
              <input
                id="hero-image"
                value={draft.heroImage}
                onChange={(event) => setDraft({ ...draft, heroImage: event.target.value })}
              />
            </div>
          </section>

          <section className="admin-section">
            <h2>모아 전용 소개</h2>
            <div className="field">
              <label htmlFor="moa-headline">섹션 제목</label>
              <input
                id="moa-headline"
                value={draft.moaHeadline}
                onChange={(event) => setDraft({ ...draft, moaHeadline: event.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="moa-body">설명</label>
              <textarea
                id="moa-body"
                value={draft.moaBody}
                onChange={(event) => setDraft({ ...draft, moaBody: event.target.value })}
              />
            </div>
            {draft.moaBullets.map((bullet, index) => (
              <div className="field" key={index}>
                <label htmlFor={`bullet-${index}`}>핵심 문구 {index + 1}</label>
                <input
                  id={`bullet-${index}`}
                  value={bullet}
                  onChange={(event) =>
                    setDraft({
                      ...draft,
                      moaBullets: draft.moaBullets.map((item, currentIndex) =>
                        currentIndex === index ? event.target.value : item,
                      ),
                    })
                  }
                />
              </div>
            ))}
          </section>

          <section className="admin-section">
            <h2>상품/가격/할인</h2>
            <div className="admin-products">
              {draft.products.map((product, index) => (
                <article className="admin-product" key={product.slug}>
                  <img src={product.image} alt="" />
                  <div className="field">
                    <label htmlFor={`product-name-${index}`}>상품명</label>
                    <input
                      id={`product-name-${index}`}
                      value={product.name}
                      onChange={(event) =>
                        setDraft({
                          ...draft,
                          products: updateProduct(draft.products, index, { name: event.target.value }),
                        })
                      }
                    />
                  </div>
                  <div className="admin-two">
                    <div className="field">
                      <label htmlFor={`product-price-${index}`}>정가</label>
                      <input
                        id={`product-price-${index}`}
                        type="number"
                        value={product.price}
                        onChange={(event) =>
                          setDraft({
                            ...draft,
                            products: updateProduct(draft.products, index, {
                              price: Number(event.target.value),
                            }),
                          })
                        }
                      />
                    </div>
                    <div className="field">
                      <label htmlFor={`product-discount-${index}`}>할인율</label>
                      <input
                        id={`product-discount-${index}`}
                        type="number"
                        value={product.discountPercent ?? 0}
                        onChange={(event) =>
                          setDraft({
                            ...draft,
                            products: updateProduct(draft.products, index, {
                              discountPercent: Number(event.target.value) || undefined,
                            }),
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor={`product-image-${index}`}>상품 이미지 URL</label>
                    <input
                      id={`product-image-${index}`}
                      value={product.image}
                      onChange={(event) =>
                        setDraft({
                          ...draft,
                          products: updateProduct(draft.products, index, { image: event.target.value }),
                        })
                      }
                    />
                  </div>
                  <div className="field">
                    <label htmlFor={`product-summary-${index}`}>짧은 설명</label>
                    <input
                      id={`product-summary-${index}`}
                      value={product.summary}
                      onChange={(event) =>
                        setDraft({
                          ...draft,
                          products: updateProduct(draft.products, index, { summary: event.target.value }),
                        })
                      }
                    />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="admin-section">
            <h2>결제/CS/리뷰</h2>
            <div className="field">
              <label htmlFor="discount-policy">할인/적립 정책</label>
              <textarea
                id="discount-policy"
                value={draft.discountPolicy}
                onChange={(event) => setDraft({ ...draft, discountPolicy: event.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="payment-status">결제 안내 문구</label>
              <textarea
                id="payment-status"
                value={draft.paymentStatus}
                onChange={(event) => setDraft({ ...draft, paymentStatus: event.target.value })}
              />
            </div>
            <div className="admin-two">
              <div className="field">
                <label htmlFor="cs-phone">CS 전화</label>
                <input
                  id="cs-phone"
                  value={draft.csPhone}
                  onChange={(event) => setDraft({ ...draft, csPhone: event.target.value })}
                />
              </div>
              <div className="field">
                <label htmlFor="cs-kakao">카카오 채널</label>
                <input
                  id="cs-kakao"
                  value={draft.csKakao}
                  onChange={(event) => setDraft({ ...draft, csKakao: event.target.value })}
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="cs-hours">상담 시간</label>
              <input
                id="cs-hours"
                value={draft.csHours}
                onChange={(event) => setDraft({ ...draft, csHours: event.target.value })}
              />
            </div>
            {draft.reviews.map((review, index) => (
              <div className="admin-review" key={index}>
                <input
                  aria-label={`리뷰 작성자 ${index + 1}`}
                  value={review.name}
                  onChange={(event) =>
                    setDraft({
                      ...draft,
                      reviews: updateReview(draft.reviews, index, { name: event.target.value }),
                    })
                  }
                />
                <input
                  aria-label={`리뷰 맥락 ${index + 1}`}
                  value={review.context}
                  onChange={(event) =>
                    setDraft({
                      ...draft,
                      reviews: updateReview(draft.reviews, index, { context: event.target.value }),
                    })
                  }
                />
                <textarea
                  aria-label={`리뷰 내용 ${index + 1}`}
                  value={review.body}
                  onChange={(event) =>
                    setDraft({
                      ...draft,
                      reviews: updateReview(draft.reviews, index, { body: event.target.value }),
                    })
                  }
                />
              </div>
            ))}
          </section>
        </div>

        <aside className="admin-save">
          <p className="eyebrow">Save</p>
          <h2>운영 데이터 저장</h2>
          <p>
            저장하면 배포 환경의 데이터베이스에 반영됩니다. 실제 관리자 로그인 권한은 다음
            단계에서 붙여야 합니다.
          </p>
          <button className="button" type="button" onClick={() => saveContent(draft)}>
            변경사항 저장
          </button>
          {saveState === "saved" && <p className="success-text">저장되었습니다.</p>}
          {saveState === "error" && (
            <p className="error-text">저장소 연결이 없거나 저장에 실패했습니다.</p>
          )}
          <p className="admin-note">
            이미지 파일 직접 업로드는 R2 저장소와 관리자 인증을 붙이는 다음 단계에서 구현합니다.
          </p>
        </aside>
      </section>
    </main>
  );
}
