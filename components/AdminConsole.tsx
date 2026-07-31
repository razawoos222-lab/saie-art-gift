"use client";

import { useState } from "react";
import { displayPrice, formatPrice, inviteSalePrice, pointAmount, type Product, type ProductOption } from "../lib/products";
import type { Benefit, GiftStep, Review, SiteContent } from "../lib/siteContent";
import { useSiteContent } from "./SiteContentContext";

function updateAt<T>(items: T[], index: number, patch: Partial<T>) {
  return items.map((item, currentIndex) => (currentIndex === index ? { ...item, ...patch } : item));
}

function removeAt<T>(items: T[], index: number) {
  return items.filter((_, currentIndex) => currentIndex !== index);
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
    setStatus("파일 업로드 중");

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
      setStatus("파일 저장소가 연결되지 않았습니다. URL 입력은 그대로 저장할 수 있습니다.");
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
  const [draft, setDraft] = useState<SiteContent>(content);

  function patchDraft(patch: Partial<SiteContent>) {
    setDraft((current) => ({ ...current, ...patch }));
  }

  function updateProduct(index: number, patch: Partial<Product>) {
    patchDraft({ products: updateAt(draft.products, index, patch) });
  }

  function updateOption(productIndex: number, optionIndex: number, patch: Partial<ProductOption>) {
    const product = draft.products[productIndex];
    updateProduct(productIndex, { options: updateAt(product.options ?? [], optionIndex, patch) });
  }

  return (
    <main className="admin-page">
      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">SAIE admin</p>
          <h1 className="display">사이트 콘텐츠 관리</h1>
          <p>로그인 계정: {userEmail}</p>
        </div>
      </section>

      <section className="container admin-studio-layout">
        <div className="admin-main">
          <section className="admin-section">
            <h2>메인 화면</h2>
            <div className="admin-two">
              <div className="field">
                <label>브랜드명</label>
                <input value={draft.brandName} onChange={(event) => patchDraft({ brandName: event.target.value })} />
              </div>
              <div className="field">
                <label>서비스명</label>
                <input value={draft.serviceName} onChange={(event) => patchDraft({ serviceName: event.target.value })} />
              </div>
            </div>
            <div className="field">
              <label>메인 타이틀</label>
              <textarea value={draft.heroTitle} onChange={(event) => patchDraft({ heroTitle: event.target.value })} />
            </div>
            <div className="field">
              <label>메인 설명</label>
              <textarea value={draft.heroBody} onChange={(event) => patchDraft({ heroBody: event.target.value })} />
            </div>
            <div className="admin-two">
              <div className="field">
                <label>부제</label>
                <input value={draft.serviceSubtitle} onChange={(event) => patchDraft({ serviceSubtitle: event.target.value })} />
              </div>
              <div className="field">
                <label>버튼명</label>
                <input value={draft.ctaLabel} onChange={(event) => patchDraft({ ctaLabel: event.target.value })} />
              </div>
            </div>
            <div className="field">
              <label>메인 이미지 URL</label>
              <input value={draft.heroImage} onChange={(event) => patchDraft({ heroImage: event.target.value })} />
              <ImageUpload label="메인 이미지 파일 업로드" slot="hero" onUploaded={(url) => patchDraft({ heroImage: url })} />
            </div>
            <div className="admin-two">
              <div className="field">
                <label>타이틀 크기</label>
                <input
                  type="number"
                  value={draft.heroStyle.titleSize}
                  onChange={(event) => patchDraft({ heroStyle: { ...draft.heroStyle, titleSize: Number(event.target.value) } })}
                />
              </div>
              <div className="field">
                <label>이미지 채도</label>
                <input
                  type="number"
                  value={draft.heroStyle.imageSaturation}
                  onChange={(event) => patchDraft({ heroStyle: { ...draft.heroStyle, imageSaturation: Number(event.target.value) } })}
                />
              </div>
            </div>
          </section>

          <section className="admin-section">
            <h2>혜택 문구</h2>
            {draft.benefits.map((benefit: Benefit, index: number) => (
              <div className="admin-review" key={index}>
                <input
                  aria-label={`혜택 제목 ${index + 1}`}
                  value={benefit.title}
                  onChange={(event) => patchDraft({ benefits: updateAt(draft.benefits, index, { title: event.target.value }) })}
                />
                <textarea
                  aria-label={`혜택 설명 ${index + 1}`}
                  value={benefit.body}
                  onChange={(event) => patchDraft({ benefits: updateAt(draft.benefits, index, { body: event.target.value }) })}
                />
              </div>
            ))}
          </section>

          <section className="admin-section">
            <h2>4단계 문구</h2>
            {draft.steps.map((step: GiftStep, index: number) => (
              <div className="admin-review" key={step.number}>
                <div className="admin-two">
                  <input
                    value={step.title}
                    aria-label={`단계 제목 ${index + 1}`}
                    onChange={(event) => patchDraft({ steps: updateAt(draft.steps, index, { title: event.target.value }) })}
                  />
                  <input
                    value={step.number}
                    aria-label={`단계 번호 ${index + 1}`}
                    onChange={(event) => patchDraft({ steps: updateAt(draft.steps, index, { number: event.target.value }) })}
                  />
                </div>
                <textarea
                  value={step.body}
                  aria-label={`단계 설명 ${index + 1}`}
                  onChange={(event) => patchDraft({ steps: updateAt(draft.steps, index, { body: event.target.value }) })}
                />
              </div>
            ))}
          </section>

          <section className="admin-section">
            <h2>상품 관리</h2>
            <div className="admin-products">
              {draft.products.map((product, index) => (
                <article className="admin-product" key={product.slug}>
                  <img src={product.image} alt="" />
                  <div className="admin-product-fields">
                    <div className="admin-two">
                      <div className="field">
                        <label>상품명</label>
                        <input value={product.name} onChange={(event) => updateProduct(index, { name: event.target.value })} />
                      </div>
                      <div className="field">
                        <label>카테고리</label>
                        <input value={product.category} onChange={(event) => updateProduct(index, { category: event.target.value })} />
                      </div>
                    </div>
                    <div className="admin-two">
                      <div className="field">
                        <label>기준가</label>
                        <input type="number" value={product.price} onChange={(event) => updateProduct(index, { price: Number(event.target.value) })} />
                      </div>
                      <div className="field">
                        <label>표시 가격</label>
                        <input value={product.priceNote ?? ""} onChange={(event) => updateProduct(index, { priceNote: event.target.value })} />
                      </div>
                    </div>
                    <div className="field">
                      <label>상품 이미지 URL</label>
                      <input value={product.image} onChange={(event) => updateProduct(index, { image: event.target.value })} />
                      <ImageUpload label="상품 이미지 파일 업로드" slot={product.slug} onUploaded={(url) => updateProduct(index, { image: url })} />
                    </div>
                    <div className="field">
                      <label>짧은 설명</label>
                      <input value={product.summary} onChange={(event) => updateProduct(index, { summary: event.target.value })} />
                    </div>
                    <div className="field">
                      <label>상세 설명</label>
                      <textarea value={product.description} onChange={(event) => updateProduct(index, { description: event.target.value })} />
                    </div>
                    <div className="admin-nested">
                      <div className="admin-nested-head">
                        <h3>상세 옵션</h3>
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
                            <input value={option.name} onChange={(event) => updateOption(index, optionIndex, { name: event.target.value })} />
                            <input value={option.tag ?? ""} onChange={(event) => updateOption(index, optionIndex, { tag: event.target.value })} />
                          </div>
                          <textarea value={option.description} onChange={(event) => updateOption(index, optionIndex, { description: event.target.value })} />
                          <div className="admin-two">
                            <input
                              type="number"
                              value={option.priceDelta ?? 0}
                              onChange={(event) => updateOption(index, optionIndex, { priceDelta: Number(event.target.value) })}
                            />
                            <input value={option.image ?? ""} onChange={(event) => updateOption(index, optionIndex, { image: event.target.value })} />
                          </div>
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
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="admin-section">
            <h2>결제, CS, 리뷰</h2>
            <div className="admin-two">
              <div className="field">
                <label>PG사</label>
                <input value={draft.paymentProvider} onChange={(event) => patchDraft({ paymentProvider: event.target.value })} />
              </div>
              <div className="field">
                <label>CS 전화</label>
                <input value={draft.csPhone} onChange={(event) => patchDraft({ csPhone: event.target.value })} />
              </div>
            </div>
            <div className="field">
              <label>결제 안내</label>
              <textarea value={draft.paymentStatus} onChange={(event) => patchDraft({ paymentStatus: event.target.value })} />
            </div>
            {draft.reviews.map((review: Review, index: number) => (
              <div className="admin-review" key={index}>
                <div className="admin-two">
                  <input value={review.name} onChange={(event) => patchDraft({ reviews: updateAt(draft.reviews, index, { name: event.target.value }) })} />
                  <input
                    value={review.context}
                    onChange={(event) => patchDraft({ reviews: updateAt(draft.reviews, index, { context: event.target.value }) })}
                  />
                </div>
                <textarea value={review.body} onChange={(event) => patchDraft({ reviews: updateAt(draft.reviews, index, { body: event.target.value }) })} />
              </div>
            ))}
          </section>
        </div>

        <aside className="admin-save admin-preview-column">
          <p className="eyebrow">Live preview</p>
          <h2>실시간 미리보기</h2>
          <AdminPreview content={draft} />
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

function AdminPreview({ content }: { content: SiteContent }) {
  const firstProducts = content.products.slice(0, 3);

  return (
    <div className="admin-preview">
      <div className="admin-preview-hero">
        <img src={content.heroImage} alt="" />
        <p>{content.heroEyebrow}</p>
        <h3>{content.heroTitle}</h3>
        <span>{content.serviceSubtitle}</span>
      </div>
      <div className="admin-preview-products">
        {firstProducts.map((product) => {
          const sale = inviteSalePrice(product);
          return (
            <article key={product.slug}>
              <img src={product.image} alt="" />
              <strong>{product.name}</strong>
              <small>{displayPrice(product)}</small>
              <em>초대장 할인가 {formatPrice(sale)}</em>
              <span>가입 적립 {formatPrice(pointAmount(sale))}</span>
            </article>
          );
        })}
      </div>
    </div>
  );
}
