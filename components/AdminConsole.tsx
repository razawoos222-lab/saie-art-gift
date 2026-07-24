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

function ImageUpload({
  label,
  slot,
  onUploaded,
}: {
  label: string;
  slot: string;
  onUploaded: (url: string) => void;
}) {
  const [status, setStatus] = useState("");

  async function upload(file: File | null) {
    if (!file) return;
    setStatus("업로드 중");

    const form = new FormData();
    form.append("file", file);
    form.append("slot", slot);

    try {
      const response = await fetch("/api/admin/upload", { method: "POST", body: form });
      const payload = (await response.json()) as { url?: string; error?: string };
      if (!response.ok || !payload.url) throw new Error(payload.error ?? "upload failed");
      onUploaded(payload.url);
      setStatus("업로드 완료");
    } catch {
      setStatus("업로드 실패");
    }
  }

  return (
    <label className="upload-control">
      <span>{label}</span>
      <input type="file" accept="image/*" onChange={(event) => upload(event.target.files?.[0] ?? null)} />
      {status && <small>{status}</small>}
    </label>
  );
}

export function AdminConsole({ userEmail }: { userEmail: string }) {
  const { content, saveContent, saveState } = useSiteContent();

  return (
    <AdminDraftForm
      key={JSON.stringify(content)}
      initialContent={content}
      saveContent={saveContent}
      saveState={saveState}
      userEmail={userEmail}
    />
  );
}

function AdminDraftForm({
  initialContent,
  saveContent,
  saveState,
  userEmail,
}: {
  initialContent: SiteContent;
  saveContent: (nextContent: SiteContent) => Promise<void>;
  saveState: "idle" | "saving" | "saved" | "error";
  userEmail: string;
}) {
  const [draft, setDraft] = useState<SiteContent>(initialContent);

  return (
    <main className="admin-page">
      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">ChaHwa admin</p>
          <h1 className="display">상품, 가격, 이미지, 결제 정책을 운영합니다.</h1>
          <p>로그인: {userEmail}</p>
        </div>
      </section>

      <section className="container admin-layout">
        <div className="admin-main">
          <section className="admin-section">
            <h2>홈페이지 문구와 이미지</h2>
            <div className="field">
              <label htmlFor="notice">상단 노티스</label>
              <input id="notice" value={draft.notice} onChange={(event) => setDraft({ ...draft, notice: event.target.value })} />
            </div>
            <div className="field">
              <label htmlFor="hero-title">메인 헤드라인</label>
              <textarea id="hero-title" value={draft.heroTitle} onChange={(event) => setDraft({ ...draft, heroTitle: event.target.value })} />
            </div>
            <div className="field">
              <label htmlFor="hero-body">메인 설명</label>
              <textarea id="hero-body" value={draft.heroBody} onChange={(event) => setDraft({ ...draft, heroBody: event.target.value })} />
            </div>
            <div className="field">
              <label htmlFor="hero-image">메인 이미지 URL</label>
              <input id="hero-image" value={draft.heroImage} onChange={(event) => setDraft({ ...draft, heroImage: event.target.value })} />
              <ImageUpload label="메인 이미지 파일 업로드" slot="hero" onUploaded={(url) => setDraft({ ...draft, heroImage: url })} />
            </div>
          </section>

          <section className="admin-section">
            <h2>모아 전용 소개</h2>
            <div className="field">
              <label htmlFor="moa-headline">섹션 제목</label>
              <input id="moa-headline" value={draft.moaHeadline} onChange={(event) => setDraft({ ...draft, moaHeadline: event.target.value })} />
            </div>
            <div className="field">
              <label htmlFor="moa-body">설명</label>
              <textarea id="moa-body" value={draft.moaBody} onChange={(event) => setDraft({ ...draft, moaBody: event.target.value })} />
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
            <h2>상품 이미지, 가격, 할인</h2>
            <div className="admin-products">
              {draft.products.map((product, index) => (
                <article className="admin-product" key={product.slug}>
                  <img src={product.image} alt="" />
                  <div className="admin-product-fields">
                    <div className="field">
                      <label htmlFor={`product-name-${index}`}>상품명</label>
                      <input
                        id={`product-name-${index}`}
                        value={product.name}
                        onChange={(event) =>
                          setDraft({ ...draft, products: updateProduct(draft.products, index, { name: event.target.value }) })
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
                            setDraft({ ...draft, products: updateProduct(draft.products, index, { price: Number(event.target.value) }) })
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
                          setDraft({ ...draft, products: updateProduct(draft.products, index, { image: event.target.value }) })
                        }
                      />
                      <ImageUpload
                        label="상품 이미지 파일 업로드"
                        slot={product.slug}
                        onUploaded={(url) =>
                          setDraft({ ...draft, products: updateProduct(draft.products, index, { image: url }) })
                        }
                      />
                    </div>
                    <div className="field">
                      <label htmlFor={`product-summary-${index}`}>짧은 설명</label>
                      <input
                        id={`product-summary-${index}`}
                        value={product.summary}
                        onChange={(event) =>
                          setDraft({ ...draft, products: updateProduct(draft.products, index, { summary: event.target.value }) })
                        }
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="admin-section">
            <h2>결제, CS, 리뷰</h2>
            <div className="admin-two">
              <div className="field">
                <label htmlFor="payment-provider">PG사</label>
                <select
                  id="payment-provider"
                  value={draft.paymentProvider}
                  onChange={(event) => setDraft({ ...draft, paymentProvider: event.target.value })}
                >
                  <option>토스페이먼츠</option>
                  <option>KG이니시스</option>
                  <option>나이스페이</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="cs-phone">CS 전화</label>
                <input id="cs-phone" value={draft.csPhone} onChange={(event) => setDraft({ ...draft, csPhone: event.target.value })} />
              </div>
            </div>
            <div className="field">
              <label htmlFor="discount-policy">할인/적립 정책</label>
              <textarea id="discount-policy" value={draft.discountPolicy} onChange={(event) => setDraft({ ...draft, discountPolicy: event.target.value })} />
            </div>
            <div className="field">
              <label htmlFor="payment-status">결제 안내 문구</label>
              <textarea id="payment-status" value={draft.paymentStatus} onChange={(event) => setDraft({ ...draft, paymentStatus: event.target.value })} />
            </div>
            <div className="field">
              <label htmlFor="payment-dashboard-note">결제 대시보드 안내</label>
              <textarea
                id="payment-dashboard-note"
                value={draft.paymentDashboardNote}
                onChange={(event) => setDraft({ ...draft, paymentDashboardNote: event.target.value })}
              />
            </div>
            <div className="admin-two">
              <div className="field">
                <label htmlFor="cs-kakao">카카오 채널</label>
                <input id="cs-kakao" value={draft.csKakao} onChange={(event) => setDraft({ ...draft, csKakao: event.target.value })} />
              </div>
              <div className="field">
                <label htmlFor="cs-hours">상담 시간</label>
                <input id="cs-hours" value={draft.csHours} onChange={(event) => setDraft({ ...draft, csHours: event.target.value })} />
              </div>
            </div>
            {draft.reviews.map((review, index) => (
              <div className="admin-review" key={index}>
                <input
                  aria-label={`리뷰 작성자 ${index + 1}`}
                  value={review.name}
                  onChange={(event) => setDraft({ ...draft, reviews: updateReview(draft.reviews, index, { name: event.target.value }) })}
                />
                <input
                  aria-label={`리뷰 맥락 ${index + 1}`}
                  value={review.context}
                  onChange={(event) => setDraft({ ...draft, reviews: updateReview(draft.reviews, index, { context: event.target.value }) })}
                />
                <textarea
                  aria-label={`리뷰 내용 ${index + 1}`}
                  value={review.body}
                  onChange={(event) => setDraft({ ...draft, reviews: updateReview(draft.reviews, index, { body: event.target.value }) })}
                />
              </div>
            ))}
          </section>
        </div>

        <aside className="admin-save">
          <p className="eyebrow">Save</p>
          <h2>운영 데이터 저장</h2>
          <p>저장하면 배포 환경의 데이터베이스에 반영됩니다. 업로드 이미지는 사이트 저장소에 보관됩니다.</p>
          <button className="button" type="button" disabled={saveState === "saving"} onClick={() => saveContent(draft)}>
            {saveState === "saving" ? "저장 중" : "변경사항 저장"}
          </button>
          {saveState === "saved" && <p className="success-text">저장되었습니다.</p>}
          {saveState === "error" && <p className="error-text">저장에 실패했습니다. 로그인 또는 저장소 연결을 확인하세요.</p>}
          <p className="admin-note">실결제는 PG 가맹점 키와 웹훅 시크릿을 Sites 환경 변수에 넣은 뒤 활성화합니다.</p>
        </aside>
      </section>
    </main>
  );
}
