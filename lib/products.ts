export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
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
    slug: "gallery-opening-bouquet",
    name: "전시 오프닝 부케",
    category: "갤러리 축하",
    price: 79000,
    discountPercent: 10,
    summary: "작품과 공간을 해치지 않는 낮고 깊은 색감",
    description:
      "갤러리 오프닝, 작가 리셉션, 프리뷰 데이에 맞춘 차화의 대표 부케입니다. 작품 옆에서 과하게 튀지 않도록 색 온도와 높이를 조정합니다.",
    image:
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=85",
    tag: "MOA 전용",
    occasion: "전시 오프닝",
    flowers: "가든 로즈, 리시안셔스, 계절 소재, 라인 그린",
    galleryOnly: true,
  },
  {
    slug: "curator-note-basket",
    name: "큐레이터 노트 바스켓",
    category: "전시 선물",
    price: 68000,
    summary: "짧은 카드 문구와 함께 보내기 좋은 플라워 바스켓",
    description:
      "전시 축하, 컬렉터 방문, 갤러리 스태프 감사 인사에 어울리는 바스켓입니다. 이동과 배치가 쉬워 전시장 데스크나 라운지에 적합합니다.",
    image:
      "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1000&q=85",
    occasion: "감사와 응원",
    flowers: "카네이션, 튤립, 스톡, 계절 잎 소재",
    galleryOnly: true,
  },
  {
    slug: "collector-white-vase",
    name: "컬렉터 화이트 베이스",
    category: "화병꽃",
    price: 92000,
    discountPercent: 5,
    summary: "화이트 톤 전시장과 잘 맞는 화병형 선물",
    description:
      "주소 입력 없이 갤러리 전시 정보로 배송하는 흐름을 염두에 둔 화병꽃입니다. 작품 사진 촬영 배경에도 부담이 적습니다.",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=85",
    tag: "BEST",
    occasion: "갤러리 방문",
    flowers: "백합, 라넌큘러스, 델피늄, 계절 그린",
    galleryOnly: true,
  },
  {
    slug: "artist-congrats-box",
    name: "아티스트 축하 플라워 박스",
    category: "플라워 박스",
    price: 75000,
    summary: "작가에게 바로 전달하기 좋은 컴팩트 박스",
    description:
      "작가와 전시 관계자에게 부담 없이 전달할 수 있는 선물형 플라워 박스입니다. 카드 메시지와 리본 문구를 주문 단계에서 받을 수 있습니다.",
    image:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=1000&q=85",
    occasion: "작가 축하",
    flowers: "다알리아, 장미, 카네이션, 스프레이 소재",
    galleryOnly: true,
  },
  {
    slug: "soft-private-view",
    name: "프라이빗 뷰 부케",
    category: "갤러리 축하",
    price: 64000,
    summary: "프라이빗 뷰와 소규모 모임에 맞춘 부드러운 톤",
    description:
      "차분한 핑크와 살구 톤으로 구성한 부케입니다. 과장된 축하보다 세련된 인사를 전하고 싶을 때 적합합니다.",
    image:
      "https://images.unsplash.com/photo-1494336934272-f0e7f74de7d3?auto=format&fit=crop&w=1000&q=85",
    occasion: "프라이빗 뷰",
    flowers: "스프레이 로즈, 아스트란티아, 계절 초화",
    galleryOnly: true,
  },
  {
    slug: "institution-green",
    name: "기관 행사 그린 오브제",
    category: "기업/기관",
    price: 120000,
    summary: "미술관, 재단, 브랜드 행사에 어울리는 그린 오브제",
    description:
      "행사 규모와 공간 동선에 맞춰 상담 후 제작하는 플라워 오브제입니다. 브랜드 행사와 전시 오픈 리셉션에 적합합니다.",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1000&q=85",
    tag: "상담",
    occasion: "기관 행사",
    flowers: "계절 꽃, 수입 그린, 구조감 있는 소재",
    galleryOnly: true,
  },
];

export const formatPrice = (price: number) => `${price.toLocaleString("ko-KR")}원`;
export const salePrice = (product: Product) =>
  product.discountPercent ? Math.round(product.price * (1 - product.discountPercent / 100)) : product.price;
