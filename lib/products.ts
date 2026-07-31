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

const mutedWhiteObject =
  "https://images.unsplash.com/photo-1518709779341-56cf4535e94b?auto=format&fit=crop&w=1200&q=82";
const mutedTableFlowers =
  "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=1200&q=82";
const mutedEventFlowers =
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=82";
const mutedPlantObject =
  "https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1200&q=82";
const mutedOrchid =
  "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=1200&q=82";

export const products: Product[] = [
  {
    slug: "exhibition-opening-bouquet",
    name: "전시 오프닝 부케",
    category: "작가 선물",
    price: 80000,
    priceNote: "80,000원~",
    summary: "작가에게 직접 전하는 절제된 오프닝 축하 부케",
    description:
      "전시 오프닝에 작가에게 전달하기 좋은 저채도 부케입니다. 꽃의 색을 낮추고 형태를 정돈해 작품 앞에서도 과하게 튀지 않도록 구성합니다.",
    image: mutedWhiteObject,
    tag: "ARTIST",
    occasion: "개인전, 단체전, 졸업전시, 북토크, 소규모 오프닝",
    flowers: "화이트 계열 꽃, 그린 소재, 얇은 가지 소재, 메시지 카드",
    galleryMood: "낮은 채도, 낮은 높이, 작품 촬영에 방해되지 않는 볼륨",
    galleryOnly: true,
    options: [
      {
        name: "Mini Opening Bouquet",
        description: "작가 테이블이나 리셉션 데스크에 가볍게 올릴 수 있는 작은 부케입니다.",
        priceDelta: 0,
        image: mutedWhiteObject,
        tag: "80,000원~",
      },
      {
        name: "Standard Opening Bouquet",
        description: "전시 오프닝 사진에 자연스럽게 남는 대표 사이즈의 부케입니다.",
        priceDelta: 40000,
        image: mutedTableFlowers,
        tag: "+40,000원",
      },
      {
        name: "Message Card Set",
        description: "작가에게 전할 짧은 문장을 카드와 함께 정돈해 전달합니다.",
        priceDelta: 10000,
        image: mutedEventFlowers,
        tag: "+10,000원",
      },
    ],
    reviews: [
      {
        name: "전시 초대 고객",
        context: "개인전 오프닝",
        body: "작가에게 부담스럽지 않은 크기라 좋았고, 사진에도 조용하게 잘 남았습니다.",
        rating: 5,
      },
    ],
  },
  {
    slug: "gallery-table-object",
    name: "갤러리 테이블 오브제",
    category: "전시장 오브제",
    price: 120000,
    priceNote: "120,000원~",
    summary: "방명록, 리셉션, 작가 테이블에 놓는 작은 플라워 오브제",
    description:
      "전시장 입구와 리셉션 테이블에 어울리는 낮은 형태의 플라워 오브제입니다. 관람 동선을 막지 않고 작품의 분위기를 방해하지 않는 구성을 우선합니다.",
    image: mutedTableFlowers,
    tag: "BEST",
    occasion: "방명록 테이블, 리셉션 데스크, 작가 테이블, 작품 캡션 근처",
    flowers: "화이트 꽃, 그린 소재, 세라믹 또는 스톤 톤 화기",
    galleryMood: "테이블 높이 기준으로 낮게, 시야를 막지 않는 수평 구성",
    galleryOnly: true,
    options: [
      {
        name: "Reception Table",
        description: "전시장 입구 또는 안내 데스크에 두기 좋은 기본 구성입니다.",
        priceDelta: 0,
        image: mutedTableFlowers,
        tag: "120,000원~",
      },
      {
        name: "Artist Table",
        description: "작가의 책상, 사인 테이블, 포트폴리오 테이블에 어울리는 구성입니다.",
        priceDelta: 30000,
        image: mutedWhiteObject,
        tag: "+30,000원",
      },
      {
        name: "Guest Book Table",
        description: "방명록 옆에 자연스럽게 놓이는 좁고 낮은 형태입니다.",
        priceDelta: 20000,
        image: mutedPlantObject,
        tag: "+20,000원",
      },
    ],
    reviews: [
      {
        name: "갤러리 운영자",
        context: "오프닝 리셉션",
        body: "작품보다 먼저 보이지 않아서 좋았습니다. 공간의 톤과 잘 맞았어요.",
        rating: 5,
      },
    ],
  },
  {
    slug: "gallery-event-object",
    name: "갤러리 행사 오브제",
    category: "행사 오브제",
    price: 180000,
    priceNote: "180,000원~",
    summary: "오프닝 리셉션과 포토월 주변을 위한 절제된 플라워 연출",
    description:
      "오프닝 행사, 프리뷰, 리셉션에 맞춘 플라워 오브제입니다. 화려한 축하 화환 대신 전시의 분위기에 스며드는 형태와 색감으로 제작합니다.",
    image: mutedEventFlowers,
    tag: "OPENING",
    occasion: "전시 오프닝, 프리뷰 데이, 컬렉터 리셉션, 브랜드 협업 전시",
    flowers: "낮은 채도의 계절 꽃, 가지 소재, 스톤 또는 블랙 화기",
    galleryMood: "포토월과 작품 옆에서도 튀지 않는 낮은 명도와 구조감",
    galleryOnly: true,
    options: [
      {
        name: "Opening Desk",
        description: "오프닝 안내 테이블과 접수대에 맞춘 기본 행사 오브제입니다.",
        priceDelta: 0,
        image: mutedEventFlowers,
        tag: "180,000원~",
      },
      {
        name: "Photo Wall Side",
        description: "포토월 한쪽을 가볍게 받쳐주는 세로감 있는 구성입니다.",
        priceDelta: 70000,
        image: mutedPlantObject,
        tag: "+70,000원",
      },
      {
        name: "VIP Reception",
        description: "컬렉터와 관계자 리셉션에 맞춘 조금 더 밀도 있는 구성입니다.",
        priceDelta: 120000,
        image: mutedWhiteObject,
        tag: "+120,000원",
      },
    ],
    reviews: [
      {
        name: "브랜드 전시 담당자",
        context: "프리뷰 리셉션",
        body: "행사장 분위기를 해치지 않으면서도 충분히 축하의 느낌이 있었습니다.",
        rating: 5,
      },
    ],
  },
  {
    slug: "faux-flower-installation",
    name: "갤러리 조화시공",
    category: "조화시공",
    price: 300000,
    priceNote: "300,000원~",
    summary: "전시 기간 동안 유지되는 저채도 조화 설치",
    description:
      "생화 관리가 어려운 장기 전시나 공간 연출이 필요한 갤러리를 위한 조화시공입니다. 작품 조도, 관람 동선, 설치 기간을 고려해 디자인합니다.",
    image: mutedPlantObject,
    tag: "INSTALL",
    occasion: "장기 전시, 갤러리 입구, 포토존, 아트페어 부스, 쇼룸 전시",
    flowers: "고급 조화, 가지 소재, 스톤 베이스, 공간 맞춤 구조물",
    galleryMood: "장기간 유지 가능한 정돈된 선과 낮은 채도의 설치감",
    galleryOnly: true,
    options: [
      {
        name: "Wall Point",
        description: "벽면이나 코너에 작게 들어가는 포인트 조화시공입니다.",
        priceDelta: 0,
        image: mutedPlantObject,
        tag: "300,000원~",
      },
      {
        name: "Entrance Object",
        description: "전시장 입구의 첫인상을 차분하게 만드는 설치 구성입니다.",
        priceDelta: 180000,
        image: mutedEventFlowers,
        tag: "+180,000원",
      },
      {
        name: "Long Exhibition Set",
        description: "전시 기간 내내 유지되는 장기 설치형 구성입니다.",
        priceDelta: 320000,
        image: mutedTableFlowers,
        tag: "+320,000원",
      },
    ],
    reviews: [
      {
        name: "갤러리 디렉터",
        context: "장기 전시",
        body: "관리 부담이 적고 전시 분위기가 깔끔하게 유지됐습니다.",
        rating: 5,
      },
    ],
  },
  {
    slug: "orchid-for-artist",
    name: "작가 축하 난",
    category: "격식 선물",
    price: 150000,
    priceNote: "150,000원~",
    summary: "격식을 갖춰 작가와 갤러리에 전하는 차분한 난 선물",
    description:
      "기관, 갤러리, 컬렉터가 작가에게 격식을 갖춰 보낼 수 있는 난 구성입니다. 과한 리본 장식 대신 절제된 메시지 카드와 화분 톤을 맞춥니다.",
    image: mutedOrchid,
    tag: "FORMAL",
    occasion: "기관 축하, 갤러리 개관, 작가 후원, 기업 전시 협찬",
    flowers: "동양난 또는 서양난, 무채색 화분, 축하 메시지 카드",
    galleryMood: "화이트, 그레이, 블랙 계열의 화분 중심",
    galleryOnly: true,
    options: [
      {
        name: "Oriental Orchid",
        description: "격식 있는 축하에 적합한 차분한 동양난 구성입니다.",
        priceDelta: 0,
        image: mutedOrchid,
        tag: "150,000원~",
      },
      {
        name: "White Orchid",
        description: "화이트 톤 갤러리에 어울리는 밝고 절제된 구성입니다.",
        priceDelta: 50000,
        image: mutedWhiteObject,
        tag: "+50,000원",
      },
      {
        name: "Formal Card Set",
        description: "기관명, 후원명, 축하 문구를 정리한 카드 세트입니다.",
        priceDelta: 10000,
        image: mutedTableFlowers,
        tag: "+10,000원",
      },
    ],
    reviews: [
      {
        name: "기업 후원 담당자",
        context: "작가 후원 선물",
        body: "일반 개업 난 느낌이 아니라 전시 공간에 맞게 차분해서 만족했습니다.",
        rating: 5,
      },
    ],
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
