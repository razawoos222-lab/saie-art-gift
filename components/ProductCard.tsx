"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { displayPrice, formatPrice, inviteSalePrice, pointAmount, type Product } from "../lib/products";
import { useCart } from "./CartContext";
import { useMoaInvite } from "./useMoaInvite";

export function ProductCard({ product }: { product: Product }) {
  const router = useRouter();
  const { addItem } = useCart();
  const { withInvite } = useMoaInvite();
  const sale = inviteSalePrice(product);
  const points = pointAmount(sale);

  function chooseGift() {
    addItem(product);
    router.push(withInvite("/checkout"));
  }

  return (
    <article className="product-card curated-card">
      <Link href={withInvite(`/products/${product.slug}`)} className="product-card-link">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
          {product.tag && <span className="tag">{product.tag}</span>}
        </div>
        <div className="product-copy">
          <span className="product-category">{product.category}</span>
          <h3>{product.name}</h3>
          <p>{product.summary}</p>
        </div>
        <div className="product-benefit-price">
          <div>
            <span>정가</span>
            <strong>{displayPrice(product)}</strong>
          </div>
          <div>
            <span>MOA 10% 할인가</span>
            <strong>{formatPrice(sale)} ~</strong>
          </div>
          <div>
            <span>SAIE 가입 적립</span>
            <strong>{formatPrice(points)}</strong>
          </div>
        </div>
      </Link>
      <button className="add-to-cart" type="button" onClick={chooseGift}>
        이 선물로 보내기
      </button>
    </article>
  );
}
