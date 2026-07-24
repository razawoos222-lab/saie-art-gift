"use client";

import Link from "next/link";
import { formatPrice, salePrice, type Product } from "../lib/products";
import { useCart } from "./CartContext";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const finalPrice = salePrice(product);

  return (
    <article className="product-card">
      <Link href={`/products/${product.slug}`}>
        <div className="product-image">
          <img src={product.image} alt={product.name} />
          {product.tag && <span className="tag">{product.tag}</span>}
          {product.galleryOnly && <span className="tag tag-right">Gallery</span>}
        </div>
        <div className="product-meta">
          <div>
            <h3>{product.name}</h3>
            <p>{product.summary}</p>
          </div>
          <span className="price">
            {product.discountPercent ? (
              <>
                <small>{product.discountPercent}%</small>
                <del>{formatPrice(product.price)}</del>
              </>
            ) : null}
            {formatPrice(finalPrice)}
          </span>
        </div>
      </Link>
      <button className="add-to-cart" type="button" onClick={() => addItem(product)}>
        장바구니에 담기
      </button>
    </article>
  );
}
