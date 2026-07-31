"use client";

import { useState } from "react";
import type { Product, ProductOption, ProductReview } from "../lib/products";
import type { Benefit, GiftStep, Review, SiteContent } from "../lib/siteContent";
import { useSiteContent } from "./SiteContentContext";

function updateAt<T>(items: T[], index: number, patch: Partial<T>) {
  return items.map((item, currentIndex) => (currentIndex === index ? { ...item, ...patch } : item));
}

function removeAt<T>(items: T[], index: number) {
  return items.filter((_, currentIndex) => currentIndex !== index);
}

function NumberField({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="field">
      <label>{label}</label>
      <input
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </div>
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
      setStatus("업로드 실패. 이미지 URL을 직접 입력해 주세요.");
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

  function updateHeroStyle(patch: Partial<SiteContent["heroStyle"]>) {
    setDraft({ ...draft, heroStyle: { ...draft.heroStyle, ...patch } });
  }

  function updateProduct(index: number, patch: Partial<Product>) {
    setDraft({ ...draft, products: updateAt(draft.products, index, patch) });
  }

  function updateProductOption(productIndex: number, optionIndex: number, patch: Partial<ProductOption>) {
    const product = draft.products[productIndex];
    const options = updateAt(product.options ?? [], optionIndex, patch);
    updateProduct(productIndex, { options });
  }

  function updateProductReview(productIndex: number, reviewIndex: number, patch: Partial<ProductReview>) {
    const product = draft.products[productIndex];
    const reviews = updateAt(product.reviews ?? [], reviewIndex, patch);
    updateProduct(productIndex, { reviews });
  }

  return (
    <main className="admin-page">
      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">SAIE admin</p>
          <h1 className="display">사이 사이트를 관리합니다.</h1>
          <p>로그인 계정: {userEmail}</p>
        </div>
      </section>

      <section className="container admin-layout">
        <div className="admin-main">
          <section className="admin-section">
            <h2>메인 화면</h2>
            <div className="admin-two">
              <div className="field">
                <label htmlFor="brand-name">브랜드명</label>
                <input id="brand-name" value={draft.brandName} onChange={(event) => setDraft({ ...draft, brandName: event.target.value })} />
              </div>
              <div className="field">
                <label htmlFor="brand-korean-name">한글 브랜드명</label>
                <input
                  id="brand-korean-name"
                  value={draft.brandKoreanName}
                  onChange={(event) => setDraft({ ...draft, brandKoreanName: event.target.value })}
                />
              </div>
            </div>
            <div className="admin-two">
              <div className="field">
                <label htmlFor="service-name">서비스명</label>
                <input
                  id="service-name"
                  value={draft.serviceName}
                  onChange={(event) => setDraft({ ...draft, serviceName: event.target.value })}
                />
              </div>
              <div className="field">
                <label htmlFor="cta-label">메인 버튼명</label>
                <input id="cta-label" value={draft.ctaLabel} onChange={(event) => setDraft({ ...draft, ctaLabel: event.target.value })} />
              </div>
            </div>
            <div className="field">
              <label htmlFor="notice">상단 안내 문구</label>
              <input id="notice" value={draft.notice} onChange={(event) => setDraft({ ...draft, notice: event.target.value })} />
            </div>
            <div className="field">
              <label htmlFor="hero-eyebrow">메인 작은 문구</label>
              <input id="hero-eyebrow" value={draft.heroEyebrow} onChange={(event) => setDraft({ ...draft, heroEyebrow: event.target.value })} />
            </div>
            <div className="field">
              <label htmlFor="service-subtitle">메인 부제</label>
              <input
                id="service-subtitle"
                value={draft.serviceSubtitle}
                onChange={(event) => setDraft({ ...draft, serviceSubtitle: event.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="hero-title">메인 타이틀</label>
              <textarea id="hero-title" value={draft.heroTitle} onChange={(event) => setDraft({ ...draft, heroTitle: event.target.value })} />
            </div>
            <div className="field">
              <label htmlFor="hero-body">메인 설명</label>
              <textarea id="hero-body" value={draft.heroBody} onChange={(event) => setDraft({ ...draft, heroBody: event.target.value })} />
            </div>
            <div className="field">
              <label htmlFor="hero-image">메인 이미지 URL</label>
              <input id="hero-image" value={draft.heroImage} onChange={(event) => setDraft({ ...draft, heroImage: event.target.value })} />
              <ImageUpload label="메인 이미지 업로드" slot="hero" onUploaded={(url) => setDraft({ ...draft, heroImage: url })} />
            </div>
          </section>

          <section className="admin-section">
            <h2>폰트, 간격, 이미지 톤</h2>
            <div className="admin-two">
              <NumberField label="타이틀 크기(px)" value={draft.heroStyle.titleSize} min={32} max={110} onChange={(value) => updateHeroStyle({ titleSize: value })} />
              <NumberField label="타이틀 줄간격" value={draft.heroStyle.titleLineHeight} min={0.9} max={1.8} step={0.05} onChange={(value) => updateHeroStyle({ titleLineHeight: value })} />
              <NumberField label="부제 크기(px)" value={draft.heroStyle.subtitleSize} min={12} max={32} onChange={(value) => updateHeroStyle({ subtitleSize: value })} />
              <NumberField label="본문 크기(px)" value={draft.heroStyle.bodySize} min={12} max={24} onChange={(value) => updateHeroStyle({ bodySize: value })} />
              <NumberField label="본문 줄간격" value={draft.heroStyle.bodyLineHeight} min={1.2} max={2.4} step={0.05} onChange={(value) => updateHeroStyle({ bodyLineHeight: value })} />
              <NumberField label="문구 간격(px)" value={draft.heroStyle.textGap} min={8} max={72} onChange={(value) => updateHeroStyle({ textGap: value })} />
              <NumberField label="메인 이미지 높이(px)" value={draft.heroStyle.imageHeight} min={240} max={760} onChange={(value) => updateHeroStyle({ imageHeight: value })} />
              <NumberField label="이미지 채도(%)" value={draft.heroStyle.imageSaturation} min={0} max={140} onChange={(value) => updateHeroStyle({ imageSaturation: value })} />
            </div>
          </section>

          <section className="admin-section">
            <h2>혜택 문구</h2>
            {draft.benefits.map((benefit: Benefit, index: number) => (
              <div className="admin-review" key={index}>
                <input
                  aria-label={`혜택 제목 ${index + 1}`}
                  value={benefit.title}
                  onChange={(event) => setDraft({ ...draft, benefits: updateAt(draft.benefits, index, { title: event.target.value }) })}
                />
                <textarea
                  aria-label={`혜택 설명 ${index + 1}`}
                  value={benefit.body}
                  onChange={(event) => setDraft({ ...draft, benefits: updateAt(draft.benefits, index, { body: event.target.value }) })}
                />
              </div>
            ))}
          </section>

          <section className="admin-section">
            <h2>꽃 선물 4단계</h2>
            {draft.steps.map((step: GiftStep, index: number) => (
              <div className="admin-review" key={step.number}>
                <div className="admin-two">
                  <input
                    aria-label={`단계 번호 ${index + 1}`}
                    value={step.number}
                    onChange={(event) => setDraft({ ...draft, steps: updateAt(draft.steps, index, { number: event.target.value }) })}
                  />
                  <input
                    aria-label={`단계 제목 ${index + 1}`}
                    value={step.title}
                    onChange={(event) => setDraft({ ...draft, steps: updateAt(draft.steps, index, { title: event.target.value }) })}
                  />
                </div>
                <textarea
                  aria-label={`단계 설명 ${index + 1}`}
                  value={step.body}
                  onChange={(event) => setDraft({ ...draft, steps: updateAt(draft.steps, index, { body: event.target.value }) })}
                />
              </div>
            ))}
          </section>

          <section className="admin-section">
            <h2>상품, 사진, 옵션</h2>
            <div className="admin-products">
              {draft.products.map((product: Product, index: number) => (
                <article className="admin-product" key={product.slug}>
                  <img src={product.image} alt="" />
                  <div className="admin-product-fields">
                    <div className="admin-two">
                      <div className="field">
                        <label htmlFor={`product-name-${index}`}>상품명</label>
                        <input id={`product-name-${index}`} value={product.name} onChange={(event) => updateProduct(index, { name: event.target.value })} />
                      </div>
                      <div className="field">
                        <label htmlFor={`product-category-${index}`}>카테고리</label>
                        <input
                          id={`product-category-${index}`}
                          value={product.category}
                          onChange={(event) => updateProduct(index, { category: event.target.value })}
                        />
                      </div>
                    </div>
                    <div className="admin-two">
                      <div className="field">
                        <label htmlFor={`product-price-${index}`}>기준가</label>
                        <input
                          id={`product-price-${index}`}
                          type="number"
                          value={product.price}
                          onChange={(event) => updateProduct(index, { price: Number(event.target.value) })}
                        />
                      </div>
                      <div className="field">
                        <label htmlFor={`product-price-note-${index}`}>표시 가격</label>
                        <input
                          id={`product-price-note-${index}`}
                          value={product.priceNote ?? ""}
                          onChange={(event) => updateProduct(index, { priceNote: event.target.value })}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label htmlFor={`product-image-${index}`}>상품 이미지 URL</label>
                      <input id={`product-image-${index}`} value={product.image} onChange={(event) => updateProduct(index, { image: event.target.value })} />
                      <ImageUpload label="상품 이미지 업로드" slot={product.slug} onUploaded={(url) => updateProduct(index, { image: url })} />
                    </div>
                    <div className="field">
                      <label htmlFor={`product-summary-${index}`}>짧은 설명</label>
                      <input id={`product-summary-${index}`} value={product.summary} onChange={(event) => updateProduct(index, { summary: event.target.value })} />
                    </div>
                    <div className="field">
                      <label htmlFor={`product-description-${index}`}>상세 설명</label>
                      <textarea
                        id={`product-description-${index}`}
                        value={product.description}
                        onChange={(event) => updateProduct(index, { description: event.target.value })}
                      />
                    </div>
                    <div className="admin-two">
                      <div className="field">
                        <label htmlFor={`product-occasion-${index}`}>추천 상황</label>
                        <textarea
                          id={`product-occasion-${index}`}
                          value={product.occasion}
                          onChange={(event) => updateProduct(index, { occasion: event.target.value })}
                        />
                      </div>
                      <div className="field">
                        <label htmlFor={`product-flowers-${index}`}>구성</label>
                        <textarea
                          id={`product-flowers-${index}`}
                          value={product.flowers}
                          onChange={(event) => updateProduct(index, { flowers: event.target.value })}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label htmlFor={`product-mood-${index}`}>갤러리 무드</label>
                      <textarea
                        id={`product-mood-${index}`}
                        value={product.galleryMood ?? ""}
                        onChange={(event) => updateProduct(index, { galleryMood: event.target.value })}
                      />
                    </div>

                    <div className="admin-nested">
                      <div className="admin-nested-head">
                        <h3>세부 옵션</h3>
                        <button
                          className="small-button"
                          type="button"
                          onClick={() =>
                            updateProduct(index, {
                              options: [
                                ...(product.options ?? []),
                                { name: "새 옵션", description: "옵션 설명을 입력하세요.", priceDelta: 0, image: product.image, tag: "기본" },
                              ],
                            })
                          }
                        >
                          옵션 추가
                        </button>
                      </div>
                      {(product.options ?? []).map((option, optionIndex) => (
                        <div className="admin-review" key={`${option.name}-${optionIndex}`}>
                          <div className="admin-two">
                            <input
                              aria-label={`옵션명 ${optionIndex + 1}`}
                              value={option.name}
                              onChange={(event) => updateProductOption(index, optionIndex, { name: event.target.value })}
                            />
                            <input
                              aria-label={`옵션 태그 ${optionIndex + 1}`}
                              value={option.tag ?? ""}
                              onChange={(event) => updateProductOption(index, optionIndex, { tag: event.target.value })}
                            />
                          </div>
                          <textarea
                            aria-label={`옵션 설명 ${optionIndex + 1}`}
                            value={option.description}
                            onChange={(event) => updateProductOption(index, optionIndex, { description: event.target.value })}
                          />
                          <div className="admin-two">
                            <input
                              aria-label={`옵션 추가금 ${optionIndex + 1}`}
                              type="number"
                              value={option.priceDelta ?? 0}
                              onChange={(event) => updateProductOption(index, optionIndex, { priceDelta: Number(event.target.value) })}
                            />
                            <input
                              aria-label={`옵션 이미지 ${optionIndex + 1}`}
                              value={option.image ?? ""}
                              onChange={(event) => updateProductOption(index, optionIndex, { image: event.target.value })}
                            />
                          </div>
                          <ImageUpload
                            label="옵션 이미지 업로드"
                            slot={`${product.slug}-option-${optionIndex}`}
                            onUploaded={(url) => updateProductOption(index, optionIndex, { image: url })}
                          />
                          <button
                            className="small-button danger"
                            type="button"
                            onClick={() => updateProduct(index, { options: removeAt(product.options ?? [], optionIndex) })}
                          >
                            옵션 삭제
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="admin-nested">
                      <div className="admin-nested-head">
                        <h3>상품 리뷰</h3>
                        <button
                          className="small-button"
                          type="button"
                          onClick={() =>
                            updateProduct(index, {
                              reviews: [...(product.reviews ?? []), { name: "고객명", context: "전시 상황", body: "리뷰 내용을 입력하세요.", rating: 5 }],
                            })
                          }
                        >
                          리뷰 추가
                        </button>
                      </div>
                      {(product.reviews ?? []).map((review, reviewIndex) => (
                        <div className="admin-review" key={`${review.name}-${reviewIndex}`}>
                          <div className="admin-two">
                            <input
                              aria-label={`상품 리뷰 작성자 ${reviewIndex + 1}`}
                              value={review.name}
                              onChange={(event) => updateProductReview(index, reviewIndex, { name: event.target.value })}
                            />
                            <input
                              aria-label={`상품 리뷰 상황 ${reviewIndex + 1}`}
                              value={review.context}
                              onChange={(event) => updateProductReview(index, reviewIndex, { context: event.target.value })}
                            />
                          </div>
                          <textarea
                            aria-label={`상품 리뷰 내용 ${reviewIndex + 1}`}
                            value={review.body}
                            onChange={(event) => updateProductReview(index, reviewIndex, { body: event.target.value })}
                          />
                          <button
                            className="small-button danger"
                            type="button"
                            onClick={() => updateProduct(index, { reviews: removeAt(product.reviews ?? [], reviewIndex) })}
                          >
                            리뷰 삭제
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="admin-section">
            <h2>결제, CS, 메인 리뷰</h2>
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
              <label htmlFor="payment-status">결제 안내</label>
              <textarea
                id="payment-status"
                value={draft.paymentStatus}
                onChange={(event) => setDraft({ ...draft, paymentStatus: event.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="discount-policy">혜택 정책</label>
              <textarea
                id="discount-policy"
                value={draft.discountPolicy}
                onChange={(event) => setDraft({ ...draft, discountPolicy: event.target.value })}
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
            <div className="admin-nested-head">
              <h3>메인 고객 리뷰</h3>
              <button
                className="small-button"
                type="button"
                onClick={() =>
                  setDraft({
                    ...draft,
                    reviews: [...draft.reviews, { name: "고객명", context: "전시 상황", body: "리뷰 내용을 입력하세요.", rating: 5 }],
                  })
                }
              >
                리뷰 추가
              </button>
            </div>
            {draft.reviews.map((review: Review, index: number) => (
              <div className="admin-review" key={index}>
                <div className="admin-two">
                  <input
                    aria-label={`리뷰 작성자 ${index + 1}`}
                    value={review.name}
                    onChange={(event) => setDraft({ ...draft, reviews: updateAt(draft.reviews, index, { name: event.target.value }) })}
                  />
                  <input
                    aria-label={`리뷰 맥락 ${index + 1}`}
                    value={review.context}
                    onChange={(event) => setDraft({ ...draft, reviews: updateAt(draft.reviews, index, { context: event.target.value }) })}
                  />
                </div>
                <textarea
                  aria-label={`리뷰 내용 ${index + 1}`}
                  value={review.body}
                  onChange={(event) => setDraft({ ...draft, reviews: updateAt(draft.reviews, index, { body: event.target.value }) })}
                />
                <button className="small-button danger" type="button" onClick={() => setDraft({ ...draft, reviews: removeAt(draft.reviews, index) })}>
                  리뷰 삭제
                </button>
              </div>
            ))}
          </section>
        </div>

        <aside className="admin-save">
          <p className="eyebrow">Save</p>
          <h2>변경사항 저장</h2>
          <p>저장하면 배포 환경의 데이터베이스에 반영됩니다. 이미지 업로드가 실패하면 이미지 URL을 직접 입력해도 됩니다.</p>
          <button className="button" type="button" disabled={saveState === "saving"} onClick={() => saveContent(draft)}>
            {saveState === "saving" ? "저장 중" : "변경사항 저장"}
          </button>
          {saveState === "saved" && <p className="success-text">저장되었습니다.</p>}
          {saveState === "error" && <p className="error-text">저장에 실패했습니다. 로그인 상태나 저장소 연결을 확인해 주세요.</p>}
        </aside>
      </section>
    </main>
  );
}
