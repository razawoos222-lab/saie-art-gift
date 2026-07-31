"use client";

import { useState } from "react";
import type { Product } from "../lib/products";
import type { Benefit, GiftStep, Review, SiteContent } from "../lib/siteContent";
import { useSiteContent } from "./SiteContentContext";

function updateAt<T>(items: T[], index: number, patch: Partial<T>) {
  return items.map((item, currentIndex) => (currentIndex === index ? { ...item, ...patch } : item));
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

  function updateHeroStyle(patch: Partial<SiteContent["heroStyle"]>) {
    setDraft({ ...draft, heroStyle: { ...draft.heroStyle, ...patch } });
  }

  return (
    <main className="admin-page">
      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">SAIE admin</p>
          <h1 className="display">사이트 문구와 상품을 관리합니다.</h1>
          <p>로그인 계정: {userEmail}</p>
        </div>
      </section>

      <section className="container admin-layout">
        <div className="admin-main">
          <section className="admin-section">
            <h2>브랜드와 메인 화면</h2>
            <div className="admin-two">
              <div className="field">
                <label htmlFor="brand-name">상단 브랜드명</label>
                <input
                  id="brand-name"
                  value={draft.brandName}
                  onChange={(event) => setDraft({ ...draft, brandName: event.target.value })}
                />
              </div>
              <div className="field">
                <label htmlFor="brand-korean-name">브랜드 한글명</label>
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
                <label htmlFor="cta-label">버튼명</label>
                <input
                  id="cta-label"
                  value={draft.ctaLabel}
                  onChange={(event) => setDraft({ ...draft, ctaLabel: event.target.value })}
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="notice">상단 안내문</label>
              <input id="notice" value={draft.notice} onChange={(event) => setDraft({ ...draft, notice: event.target.value })} />
            </div>
            <div className="field">
              <label htmlFor="hero-eyebrow">메인 작은 문구</label>
              <input
                id="hero-eyebrow"
                value={draft.heroEyebrow}
                onChange={(event) => setDraft({ ...draft, heroEyebrow: event.target.value })}
              />
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
              <ImageUpload label="메인 이미지 업로드" slot="hero" onUploaded={(url) => setDraft({ ...draft, heroImage: url })} />
            </div>
          </section>

          <section className="admin-section">
            <h2>메인 타이포와 간격</h2>
            <div className="admin-two">
              <NumberField label="타이틀 크기(px)" value={draft.heroStyle.titleSize} min={32} max={110} onChange={(value) => updateHeroStyle({ titleSize: value })} />
              <NumberField label="타이틀 줄간격" value={draft.heroStyle.titleLineHeight} min={0.9} max={1.8} step={0.05} onChange={(value) => updateHeroStyle({ titleLineHeight: value })} />
              <NumberField label="부제 크기(px)" value={draft.heroStyle.subtitleSize} min={12} max={32} onChange={(value) => updateHeroStyle({ subtitleSize: value })} />
              <NumberField label="본문 크기(px)" value={draft.heroStyle.bodySize} min={12} max={24} onChange={(value) => updateHeroStyle({ bodySize: value })} />
              <NumberField label="본문 줄간격" value={draft.heroStyle.bodyLineHeight} min={1.2} max={2.4} step={0.05} onChange={(value) => updateHeroStyle({ bodyLineHeight: value })} />
              <NumberField label="문구 사이 간격(px)" value={draft.heroStyle.textGap} min={8} max={72} onChange={(value) => updateHeroStyle({ textGap: value })} />
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
                  onChange={(event) =>
                    setDraft({ ...draft, benefits: updateAt(draft.benefits, index, { title: event.target.value }) })
                  }
                />
                <textarea
                  aria-label={`혜택 설명 ${index + 1}`}
                  value={benefit.body}
                  onChange={(event) =>
                    setDraft({ ...draft, benefits: updateAt(draft.benefits, index, { body: event.target.value }) })
                  }
                />
              </div>
            ))}
          </section>

          <section className="admin-section">
            <h2>꽃선물 4단계</h2>
            {draft.steps.map((step: GiftStep, index: number) => (
              <div className="admin-review" key={step.number}>
                <div className="admin-two">
                  <input
                    aria-label={`단계 번호 ${index + 1}`}
                    value={step.number}
                    onChange={(event) =>
                      setDraft({ ...draft, steps: updateAt(draft.steps, index, { number: event.target.value }) })
                    }
                  />
                  <input
                    aria-label={`단계 제목 ${index + 1}`}
                    value={step.title}
                    onChange={(event) =>
                      setDraft({ ...draft, steps: updateAt(draft.steps, index, { title: event.target.value }) })
                    }
                  />
                </div>
                <textarea
                  aria-label={`단계 설명 ${index + 1}`}
                  value={step.body}
                  onChange={(event) =>
                    setDraft({ ...draft, steps: updateAt(draft.steps, index, { body: event.target.value }) })
                  }
                />
              </div>
            ))}
          </section>

          <section className="admin-section">
            <h2>연동 방식</h2>
            <div className="field">
              <label htmlFor="integration-title">제목</label>
              <input
                id="integration-title"
                value={draft.integrationTitle}
                onChange={(event) => setDraft({ ...draft, integrationTitle: event.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="integration-body">설명</label>
              <textarea
                id="integration-body"
                value={draft.integrationBody}
                onChange={(event) => setDraft({ ...draft, integrationBody: event.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="integration-privacy">개인정보 안내</label>
              <textarea
                id="integration-privacy"
                value={draft.integrationPrivacyNote}
                onChange={(event) => setDraft({ ...draft, integrationPrivacyNote: event.target.value })}
              />
            </div>
          </section>

          <section className="admin-section">
            <h2>상품 이미지, 가격, 할인</h2>
            <div className="admin-products">
              {draft.products.map((product: Product, index: number) => (
                <article className="admin-product" key={product.slug}>
                  <img src={product.image} alt="" />
                  <div className="admin-product-fields">
                    <div className="field">
                      <label htmlFor={`product-name-${index}`}>상품명</label>
                      <input
                        id={`product-name-${index}`}
                        value={product.name}
                        onChange={(event) =>
                          setDraft({ ...draft, products: updateAt(draft.products, index, { name: event.target.value }) })
                        }
                      />
                    </div>
                    <div className="admin-two">
                      <div className="field">
                        <label htmlFor={`product-category-${index}`}>카테고리</label>
                        <input
                          id={`product-category-${index}`}
                          value={product.category}
                          onChange={(event) =>
                            setDraft({ ...draft, products: updateAt(draft.products, index, { category: event.target.value }) })
                          }
                        />
                      </div>
                      <div className="field">
                        <label htmlFor={`product-price-${index}`}>기준가</label>
                        <input
                          id={`product-price-${index}`}
                          type="number"
                          value={product.price}
                          onChange={(event) =>
                            setDraft({
                              ...draft,
                              products: updateAt(draft.products, index, { price: Number(event.target.value) }),
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="admin-two">
                      <div className="field">
                        <label htmlFor={`product-discount-${index}`}>할인율</label>
                        <input
                          id={`product-discount-${index}`}
                          type="number"
                          value={product.discountPercent ?? 0}
                          onChange={(event) =>
                            setDraft({
                              ...draft,
                              products: updateAt(draft.products, index, {
                                discountPercent: Number(event.target.value) || undefined,
                              }),
                            })
                          }
                        />
                      </div>
                      <div className="field">
                        <label htmlFor={`product-price-note-${index}`}>표시 가격</label>
                        <input
                          id={`product-price-note-${index}`}
                          value={product.priceNote ?? ""}
                          onChange={(event) =>
                            setDraft({
                              ...draft,
                              products: updateAt(draft.products, index, { priceNote: event.target.value }),
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label htmlFor={`product-image-${index}`}>이미지 URL</label>
                      <input
                        id={`product-image-${index}`}
                        value={product.image}
                        onChange={(event) =>
                          setDraft({ ...draft, products: updateAt(draft.products, index, { image: event.target.value }) })
                        }
                      />
                      <ImageUpload
                        label="상품 이미지 업로드"
                        slot={product.slug}
                        onUploaded={(url) => setDraft({ ...draft, products: updateAt(draft.products, index, { image: url }) })}
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
                            products: updateAt(draft.products, index, { summary: event.target.value }),
                          })
                        }
                      />
                    </div>
                    <div className="field">
                      <label htmlFor={`product-description-${index}`}>상세 설명</label>
                      <textarea
                        id={`product-description-${index}`}
                        value={product.description}
                        onChange={(event) =>
                          setDraft({
                            ...draft,
                            products: updateAt(draft.products, index, { description: event.target.value }),
                          })
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
            {draft.reviews.map((review: Review, index: number) => (
              <div className="admin-review" key={index}>
                <input
                  aria-label={`리뷰 작성자 ${index + 1}`}
                  value={review.name}
                  onChange={(event) =>
                    setDraft({ ...draft, reviews: updateAt(draft.reviews, index, { name: event.target.value }) })
                  }
                />
                <input
                  aria-label={`리뷰 맥락 ${index + 1}`}
                  value={review.context}
                  onChange={(event) =>
                    setDraft({ ...draft, reviews: updateAt(draft.reviews, index, { context: event.target.value }) })
                  }
                />
                <textarea
                  aria-label={`리뷰 내용 ${index + 1}`}
                  value={review.body}
                  onChange={(event) =>
                    setDraft({ ...draft, reviews: updateAt(draft.reviews, index, { body: event.target.value }) })
                  }
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
          {saveState === "error" && <p className="error-text">저장에 실패했습니다. 로그인 또는 저장소 연결을 확인해 주세요.</p>}
        </aside>
      </section>
    </main>
  );
}
