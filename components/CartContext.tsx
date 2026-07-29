"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { salePrice, type Product } from "../lib/products";

export type CartItem = { product: Product; quantity: number };

type CartContextValue = {
  items: CartItem[];
  count: number;
  total: number;
  addItem: (product: Product) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  removeItem: (slug: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function loadStoredCart() {
  if (typeof window === "undefined") return [];

  const stored = window.localStorage.getItem("saie-cart");
  if (!stored) return [];

  try {
    return JSON.parse(stored) as CartItem[];
  } catch {
    window.localStorage.removeItem("saie-cart");
    return [];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setItems(loadStoredCart());
      setReady(true);
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (ready) window.localStorage.setItem("saie-cart", JSON.stringify(items));
  }, [items, ready]);

  const value = useMemo(
    () => ({
      items,
      count: items.reduce((sum, item) => sum + item.quantity, 0),
      total: items.reduce((sum, item) => sum + salePrice(item.product) * item.quantity, 0),
      addItem: (product: Product) =>
        setItems((current) => {
          const found = current.find((item) => item.product.slug === product.slug);

          return found
            ? current.map((item) =>
                item.product.slug === product.slug
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              )
            : [...current, { product, quantity: 1 }];
        }),
      updateQuantity: (slug: string, quantity: number) =>
        setItems((current) =>
          quantity < 1
            ? current.filter((item) => item.product.slug !== slug)
            : current.map((item) =>
                item.product.slug === slug ? { ...item, quantity } : item,
              ),
        ),
      removeItem: (slug: string) =>
        setItems((current) => current.filter((item) => item.product.slug !== slug)),
      clear: () => setItems([]),
    }),
    [items],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
