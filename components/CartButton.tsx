"use client";
import Link from "next/link";
import { useCart } from "./CartContext";
export function CartButton() { const { count } = useCart(); return <Link href="/cart" className="cart-button" aria-label={`장바구니 ${count}개`}>장바구니 <span>{count}</span></Link>; }
