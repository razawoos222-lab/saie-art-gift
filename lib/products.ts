export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  priceNote?: string;
  discountPercent?: number;
  summary: string;
  description: string;
  image: string;
  tag?: string;
  occasion: string;
  flowers: string;
  galleryOnly?: boolean;
};

export const products: Product[] = [
  {
    slug: "opening-table",
    name: "Opening Table",
    category: "오프닝 테이블",
    price: 90000,
    priceNote: "90,000원 ~",
    summary: "작가 테이블과 리셉션에 낮게 놓이는 갤러리 플라워",
    description:
      "전시 오프닝의 작가 테이블, 리셉션 데스크, 방명록 근처에 어울리는 낮은 높이의 플라워 구성입니다. 작품 시선을 방해하지 않도록 채도와 형태를 절제합니다.",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=85",
    tag: "BEST",
    occasion: "개인전 오프닝, 작가 테이블, 갤러리 리셉션",
    flowers: "화이트, 그린 계열 꽃과 가지 소재, 낮은 화기",
    galleryOnly: true,
  },
  {
    slug: "tone-down-basket",
    name: "Tone-down Flower Basket",
    category: "꽃바구니",
    price: 120000,
    priceNote: "120,000원 ~",
    summary: "갤러리 분위기를 해치지 않는 차분한 꽃바구니",
    description:
      "강한 색감이나 과한 축하 장식 대신 낮은 채도의 꽃과 그린 소재로 구성한 전시 축하 꽃바구니입니다. 작가와 갤러리에 격식 있게 선물하기 좋습니다.",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=85",
    tag: "GALLERY",
    occasion: "개인전, 단체전, 졸업전시, 아트페어",
    flowers: "톤다운 계절 꽃, 그린, 자연스러운 바스켓",
    galleryOnly: true,
  },
  {
    slug: "gallery-orchid",
    name: "Gallery Orchid",
    category: "난",
    price: 150000,
    priceNote: "150,000원 ~",
    summary: "격식 있는 전시 축하를 위한 난 선물",
    description:
      "작가, 갤러리, 기관 전시에 격식 있게 보낼 수 있는 난 구성입니다. 화려함보다 정갈한 인상을 우선해 전시장 입구나 리셉션에 어울립니다.",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=1200&q=85",
    tag: "FORMAL",
    occasion: "갤러리 개관, 기관 전시, 작가 축하, 브랜드 전시",
    flowers: "동양난 또는 서양난, 정갈한 화분, 축하 메시지 카드",
    galleryOnly: true,
  },
  {
    slug: "planterior-object",
    name: "Planterior Object",
    category: "플랜테리어",
    price: 150000,
    priceNote: "150,000원 ~",
    summary: "전시 기간 동안 공간을 조용히 채우는 식물 오브제",
    description:
      "전시 기간 동안 오래 유지되는 식물 기반 오브제입니다. 작품 옆이나 갤러리 코너를 조용히 채우는 선물로, 생화보다 유지 기간이 긴 구성이 필요할 때 적합합니다.",
    image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1200&q=85",
    tag: "LONG",
    occasion: "장기 전시, 갤러리 공간 선물, 작가 작업실 선물",
    flowers: "관엽 식물, 세라믹 또는 스톤 화기, 절제된 장식 소재",
    galleryOnly: true,
  },
  {
    slug: "art-object-piece",
    name: "Art Object Piece",
    category: "아트 오브제",
    price: 300000,
    priceNote: "300,000원 ~",
    summary: "작품 옆에 놓이는 조형적 플라워 선물",
    description:
      "중요한 개인전, VIP 축하, 브랜드 협찬에 어울리는 조형적 플라워 피스입니다. 꽃선물이면서 동시에 전시 공간 연출에 가까운 프리미엄 구성입니다.",
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1200&q=85",
    tag: "PREMIUM",
    occasion: "VIP 선물, 기업 협찬, 브랜드 팝업, 주요 개인전",
    flowers: "구조감 있는 가지 소재, 대형 화기, 절제된 색의 계절 꽃",
    galleryOnly: true,
  },
];

export function formatPrice(price: number) {
  return new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
    maximumFractionDigits: 0,
  }).format(price);
}

export function salePrice(product: Product) {
  if (!product.discountPercent) return product.price;
  return Math.round(product.price * (1 - product.discountPercent / 100));
}

export function displayPrice(product: Product) {
  return product.priceNote ?? `${formatPrice(product.price)} ~`;
}
