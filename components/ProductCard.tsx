"use client";

import Link from "next/link";
import { displayPrice, formatPrice, salePrice, type Product } from "../lib/products";
import { useCart } from "./CartContext";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const finalPrice = salePrice(product);

  return (
    <article className="product-card curated-card">
      <Link href={`/products/${product.slug}`}>
        <div className="product-image">
          <img src={product.image} alt={product.name} />
          {product.tag && <span className="tag">{product.tag}</span>}
        </div>
        <div className="product-meta">
          <div>
            <h3>{product.name}</h3>
            <p>{product.summary}</p>
          </div>
          <span className="price">
            {product.discountPercent ? (
              <>
                <small>{product.discountPercent}% benefit</small>
                <del>{displayPrice(product)}</del>
                {formatPrice(finalPrice)} ~
              </>
            ) : (
              displayPrice(product)
            )}
          </span>
        </div>
      </Link>
      <button className="add-to-cart" type="button" onClick={() => addItem(product)}>
        선택하기
      </button>
    </article>
  );
}
