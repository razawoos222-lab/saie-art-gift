"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "./ProductCard";
import { useMoaInvite } from "./useMoaInvite";
import { useSiteContent } from "./SiteContentContext";

export function ProductCatalog() {
  const { content } = useSiteContent();
  const { hasInvite, invite } = useMoaInvite();
  const filters = useMemo(
    () => ["전체", ...Array.from(new Set(content.products.map((product) => product.category)))],
    [content.products],
  );
  const [active, setActive] = useState("전체");
  const visible = active === "전체" ? content.products : content.products.filter((product) => product.category === active);

  return (
    <>
      {hasInvite && (
        <section className="moa-context-card" aria-label="MOA 초대장 전시 정보">
          <p className="eyebrow">MOA invitation connected</p>
          <h2>{invite.exhibition ?? "전시 정보가 연결되었습니다."}</h2>
          <p>
            {invite.artist ?? "작가"} · {invite.gallery ?? "갤러리"}
            {invite.date ? ` · ${invite.date}` : ""}
          </p>
          <small>상품을 선택하면 이 전시 정보가 주문서에 자동으로 이어집니다.</small>
        </section>
      )}
      <div className="filter-row" aria-label="상품 카테고리">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter}
            className={`filter ${active === filter ? "active" : ""}`}
            onClick={() => setActive(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="product-grid">
        {visible.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </>
  );
}
