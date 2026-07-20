import Link from "next/link";
import { formatPrice, type Product } from "../lib/products";
export function ProductCard({ product }: { product: Product }) { return <Link href={`/products/${product.slug}`} className="product-card"><div className="product-image"><img src={product.image} alt={product.name} />{product.tag && <span className="tag">{product.tag}</span>}</div><div className="product-meta"><div><h3>{product.name}</h3><p>{product.summary}</p></div><span className="price">{formatPrice(product.price)}</span></div></Link>; }
