"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "./ProductCard";
import { useSiteContent } from "./SiteContentContext";

export function ProductCatalog() {
  const { content } = useSiteContent();
  const filters = useMemo(
    () => ["전체", ...Array.from(new Set(content.products.map((product) => product.category)))],
    [content.products],
  );
  const [active, setActive] = useState("전체");
  const visible = active === "전체" ? content.products : content.products.filter((product) => product.category === active);

  return (
    <>
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
