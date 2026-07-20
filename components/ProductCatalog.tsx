"use client";
import { useState } from "react";
import { products } from "../lib/products";
import { ProductCard } from "./ProductCard";

const filters = ["전체", "부케", "플라워 박스", "화병꽃", "기업/행사"];

export function ProductCatalog() {
  const [active, setActive] = useState("전체");
  const visible = active === "전체" ? products : products.filter((product) => product.category === active);
  return <><div className="filter-row" aria-label="상품 카테고리">{filters.map((filter) => <button type="button" key={filter} className={`filter ${active === filter ? "active" : ""}`} onClick={() => setActive(filter)}>{filter}</button>)}</div><div className="product-grid">{visible.map((product) => <ProductCard key={product.slug} product={product} />)}</div></>;
}
