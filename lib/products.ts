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
    slug: "small-object",
    name: "Small Object",
    category: "Artist Gift",
    price: 80000,
    priceNote: "80,000원 ~",
    summary: "작은 축하를 위한 플라워 오브제",
    description:
      "작가 테이블, 리셉션 데스크, 작품 캡션 근처에 둘 수 있는 작은 플라워 오브제입니다. 과하지 않고 사진에 예쁘게 남는 구성을 우선합니다.",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=85",
    tag: "LIGHT",
    occasion: "지인 선물, 학생 전시, 소규모 전시",
    flowers: "화이트 플라워, 그린 브랜치, 스톤/세라믹 화기",
    galleryOnly: true,
  },
  {
    slug: "gallery-arrangement",
    name: "Gallery Arrangement",
    category: "Artist Gift",
    price: 180000,
    priceNote: "180,000원 ~",
    discountPercent: 10,
    summary: "전시 공간에 어울리는 대표 플라워 기프트",
    description:
      "개인전, 단체전, 갤러리 오프닝에 어울리는 대표 구성입니다. 작품과 공간을 해치지 않도록 낮은 채도와 절제된 형태로 제작합니다.",
    image:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=85",
    tag: "BEST",
    occasion: "개인전, 단체전, 갤러리 오프닝",
    flowers: "아네모네, 계절 가지 소재, 그린, 차분한 포인트 플라워",
    galleryOnly: true,
  },
  {
    slug: "opening-piece",
    name: "Opening Piece",
    category: "Premium",
    price: 300000,
    priceNote: "300,000원 ~",
    summary: "오프닝을 위한 프리미엄 플라워 연출",
    description:
      "중요한 개인전, VIP 선물, 기업 협찬, 브랜드 전시에 적합한 설치형 플라워 피스입니다. 꽃선물이면서 동시에 공간 연출에 가까운 상품입니다.",
    image:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=1200&q=85",
    tag: "PREMIUM",
    occasion: "VIP 선물, 기업/브랜드 협찬, 작가 후원",
    flowers: "구조감 있는 가지 소재, 대형 화기, 절제된 색의 계절 꽃",
    galleryOnly: true,
  },
];

export const formatPrice = (price: number) => `${price.toLocaleString("ko-KR")}원`;

export const displayPrice = (product: Product) => product.priceNote ?? `${formatPrice(product.price)} ~`;

export const salePrice = (product: Product) =>
  product.discountPercent ? Math.round(product.price * (1 - product.discountPercent / 100)) : product.price;
