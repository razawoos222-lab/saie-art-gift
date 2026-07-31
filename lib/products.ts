export type ProductOption = {
  name: string;
  description: string;
  priceDelta?: number;
  image?: string;
  tag?: string;
};

export type ProductReview = {
  name: string;
  context: string;
  body: string;
  rating?: number;
};

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
  galleryMood?: string;
  galleryOnly?: boolean;
  options?: ProductOption[];
  reviews?: ProductReview[];
};

const images = {
  whiteObject: "https://images.unsplash.com/photo-1518709779341-56cf4535e94b?auto=format&fit=crop&w=1200&q=82",
  table: "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=1200&q=82",
  event: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=82",
  stone: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1200&q=82",
  orchid: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=1200&q=82",
  wall: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&w=1200&q=82",
};

const commonReviews: ProductReview[] = [
  {
    name: "모아 초대장 고객",
    context: "작가 개인전",
    body: "전시장 분위기를 해치지 않는 차분한 구성이어서 작가에게 전하기 좋았습니다.",
    rating: 5,
  },
];

function openingOptions(baseImage: string): ProductOption[] {
  return [
    {
      name: "Small",
      description: "작가에게 가볍게 전달하기 좋은 작은 사이즈입니다.",
      priceDelta: 0,
      image: baseImage,
      tag: "기본",
    },
    {
      name: "Standard",
      description: "오프닝 사진과 작가 테이블에 가장 자연스러운 대표 사이즈입니다.",
      priceDelta: 40000,
      image: images.table,
      tag: "+40,000원",
    },
    {
      name: "Premium",
      description: "중요한 개인전과 VIP 축하에 맞춘 풍성하지만 낮은 채도의 구성입니다.",
      priceDelta: 90000,
      image: images.event,
      tag: "+90,000원",
    },
  ];
}

export const products: Product[] = [
  {
    slug: "exhibition-opening-bouquet",
    name: "전시 오프닝 부케",
    category: "작가 선물",
    price: 80000,
    priceNote: "80,000원~",
    summary: "작가에게 직접 전하는 절제된 오프닝 축하 부케",
    description: "작가에게 바로 전달하기 좋은 낮은 채도의 축하 부케입니다. 작품 촬영과 관람 동선을 방해하지 않는 크기로 제작합니다.",
    image: images.whiteObject,
    tag: "MOA 전용",
    occasion: "개인전, 단체전, 졸업전시, 북토크, 소규모 오프닝",
    flowers: "화이트 계열 꽃, 그린 소재, 얇은 가지 소재, 메시지 카드",
    galleryMood: "낮은 채도, 낮은 높이, 작품 촬영에 방해되지 않는 볼륨",
    galleryOnly: true,
    options: openingOptions(images.whiteObject),
    reviews: commonReviews,
  },
  {
    slug: "artist-table-bouquet",
    name: "작가 테이블 부케",
    category: "작가 선물",
    price: 95000,
    priceNote: "95,000원~",
    summary: "사인 테이블과 방명록 옆에 어울리는 낮은 부케",
    description: "작가의 사인 테이블, 방명록, 포트폴리오 테이블에 자연스럽게 놓이는 낮은 구성입니다.",
    image: images.table,
    tag: "LOW",
    occasion: "작가 테이블, 사인회, 북토크, 리셉션 데스크",
    flowers: "크림 톤 꽃, 유칼립투스, 얇은 가지 소재",
    galleryMood: "테이블 위 시야를 막지 않는 수평형 구성",
    galleryOnly: true,
    options: openingOptions(images.table),
    reviews: commonReviews,
  },
  {
    slug: "collector-note-bouquet",
    name: "컬렉터 노트 부케",
    category: "작가 선물",
    price: 120000,
    priceNote: "120,000원~",
    summary: "짧은 축하 메시지와 함께 보내는 작가 선물",
    description: "컬렉터, 지인, 관계자가 작가에게 메시지와 함께 보낼 수 있는 차분한 부케입니다.",
    image: images.event,
    tag: "MESSAGE",
    occasion: "컬렉터 선물, 작가 후원, 전시 축하 메시지",
    flowers: "화이트 꽃, 포인트 소재, 메시지 카드",
    galleryMood: "작가에게 전달된 뒤 테이블에 놓기 좋은 크기",
    galleryOnly: true,
    options: openingOptions(images.event),
    reviews: commonReviews,
  },
  {
    slug: "gallery-table-object",
    name: "갤러리 테이블 오브제",
    category: "전시 선물",
    price: 140000,
    priceNote: "140,000원~",
    summary: "리셉션과 방명록 테이블을 위한 플라워 오브제",
    description: "전시장 입구와 리셉션 테이블에 어울리는 낮은 형태의 플라워 오브제입니다.",
    image: images.table,
    tag: "BEST",
    occasion: "방명록 테이블, 리셉션 데스크, 작품 캡션 근처",
    flowers: "화이트 꽃, 그린 소재, 세라믹 또는 스톤 톤 화기",
    galleryMood: "작품보다 먼저 보이지 않는 낮은 높이와 차분한 색감",
    galleryOnly: true,
    options: openingOptions(images.table),
    reviews: commonReviews,
  },
  {
    slug: "gallery-entry-object",
    name: "갤러리 입구 오브제",
    category: "전시 선물",
    price: 180000,
    priceNote: "180,000원~",
    summary: "전시장 첫인상을 만드는 입구용 오브제",
    description: "갤러리 입구, 안내 데스크, 초대장 확인 공간에 어울리는 정돈된 플라워 오브제입니다.",
    image: images.stone,
    tag: "ENTRY",
    occasion: "갤러리 입구, 안내 데스크, 오프닝 접수대",
    flowers: "가지 소재, 크림 톤 꽃, 스톤 화기",
    galleryMood: "관람 동선을 방해하지 않는 세로감 있는 구성",
    galleryOnly: true,
    options: openingOptions(images.stone),
    reviews: commonReviews,
  },
  {
    slug: "caption-side-object",
    name: "캡션 사이드 오브제",
    category: "전시 선물",
    price: 110000,
    priceNote: "110,000원~",
    summary: "작품 캡션 근처에 놓기 좋은 작은 오브제",
    description: "작품 옆에 과하게 튀지 않도록 색과 높이를 낮춘 소형 오브제입니다.",
    image: images.whiteObject,
    tag: "SMALL",
    occasion: "작품 캡션 근처, 소규모 전시, 작가 테이블",
    flowers: "소형 화기, 화이트 꽃, 그린 포인트",
    galleryMood: "작품과 사진 프레임을 침범하지 않는 작은 규모",
    galleryOnly: true,
    options: openingOptions(images.whiteObject),
    reviews: commonReviews,
  },
  {
    slug: "gallery-event-object",
    name: "갤러리 행사 오브제",
    category: "갤러리 행사",
    price: 220000,
    priceNote: "220,000원~",
    summary: "오프닝 리셉션과 포토월 주변을 위한 플라워 연출",
    description: "화려한 축하 화환 대신 전시의 분위기에 스며드는 행사 오브제입니다.",
    image: images.event,
    tag: "OPENING",
    occasion: "전시 오프닝, 프리뷰 데이, 컬렉터 리셉션",
    flowers: "낮은 채도의 계절 꽃, 가지 소재, 스톤 또는 블랙 화기",
    galleryMood: "포토월과 작품 옆에서도 튀지 않는 낮은 명도와 구조감",
    galleryOnly: true,
    options: openingOptions(images.event),
    reviews: commonReviews,
  },
  {
    slug: "photo-wall-flower-object",
    name: "포토월 플라워 오브제",
    category: "갤러리 행사",
    price: 280000,
    priceNote: "280,000원~",
    summary: "작가와 관람객 사진 배경을 정돈하는 오브제",
    description: "포토월 한쪽을 받쳐주되 인물과 작품보다 앞서 보이지 않도록 톤을 낮춘 구성입니다.",
    image: images.wall,
    tag: "PHOTO",
    occasion: "오프닝 포토월, VIP 리셉션, 브랜드 협업 전시",
    flowers: "가지 소재, 무채색 화기, 낮은 채도 꽃",
    galleryMood: "사진 배경에 조용히 남는 구조감",
    galleryOnly: true,
    options: openingOptions(images.wall),
    reviews: commonReviews,
  },
  {
    slug: "vip-reception-piece",
    name: "VIP 리셉션 피스",
    category: "갤러리 행사",
    price: 350000,
    priceNote: "350,000원~",
    summary: "중요한 오프닝과 후원 리셉션을 위한 프리미엄 피스",
    description: "컬렉터, 후원사, 기관 관계자가 참석하는 리셉션에 맞춘 고급 플라워 피스입니다.",
    image: images.stone,
    tag: "VIP",
    occasion: "VIP 오프닝, 기업 협찬, 기관 후원, 프리뷰 리셉션",
    flowers: "스톤 화기, 가지 소재, 화이트 또는 버건디 포인트",
    galleryMood: "프리미엄이지만 절제된 전시장용 구성",
    galleryOnly: true,
    options: openingOptions(images.stone),
    reviews: commonReviews,
  },
  {
    slug: "faux-flower-installation",
    name: "갤러리 조화시공",
    category: "조화시공",
    price: 300000,
    priceNote: "300,000원~",
    summary: "전시 기간 동안 유지되는 저채도 조화 설치",
    description: "생화 관리가 어려운 장기 전시나 공간 연출이 필요한 갤러리를 위한 조화시공입니다.",
    image: images.stone,
    tag: "INSTALL",
    occasion: "장기 전시, 갤러리 입구, 포토존, 아트페어 부스",
    flowers: "고급 조화, 가지 소재, 스톤 베이스, 공간 맞춤 구조물",
    galleryMood: "장기간 유지 가능한 정돈된 선과 낮은 채도의 설치감",
    galleryOnly: true,
    options: openingOptions(images.stone),
    reviews: commonReviews,
  },
  {
    slug: "wall-point-installation",
    name: "벽면 포인트 조화시공",
    category: "조화시공",
    price: 420000,
    priceNote: "420,000원~",
    summary: "작품 동선을 피해 벽면에 들어가는 조화 포인트",
    description: "전시장 벽면이나 코너에 조용히 들어가는 장기 유지형 조화시공입니다.",
    image: images.wall,
    tag: "WALL",
    occasion: "장기 전시, 갤러리 코너, 쇼룸, 아트페어 부스",
    flowers: "조화 가지, 무채색 베이스, 벽면 고정 구조",
    galleryMood: "작품 간섭을 최소화한 벽면 중심 구성",
    galleryOnly: true,
    options: openingOptions(images.wall),
    reviews: commonReviews,
  },
  {
    slug: "orchid-for-artist",
    name: "작가 축하 난",
    category: "격식 선물",
    price: 150000,
    priceNote: "150,000원~",
    summary: "격식을 갖춰 작가와 갤러리에 전하는 차분한 난 선물",
    description: "기관, 갤러리, 컬렉터가 작가에게 격식을 갖춰 보낼 수 있는 난 구성입니다.",
    image: images.orchid,
    tag: "FORMAL",
    occasion: "기관 축하, 갤러리 개관, 작가 후원, 기업 전시 협찬",
    flowers: "동양난 또는 서양난, 무채색 화분, 축하 메시지 카드",
    galleryMood: "화이트, 그레이, 블랙 계열의 화분 중심",
    galleryOnly: true,
    options: openingOptions(images.orchid),
    reviews: commonReviews,
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

export function inviteSalePrice(product: Product) {
  return Math.round(product.price * 0.9);
}

export function pointAmount(price: number) {
  return Math.round(price * 0.1);
}

export function displayPrice(product: Product) {
  return product.priceNote ?? `${formatPrice(product.price)} ~`;
}
