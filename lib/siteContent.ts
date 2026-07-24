import { products, type Product } from "./products";

export type Review = {
  name: string;
  context: string;
  body: string;
};

export type SiteContent = {
  notice: string;
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  heroImage: string;
  moaHeadline: string;
  moaBody: string;
  moaBullets: string[];
  csPhone: string;
  csKakao: string;
  csHours: string;
  paymentStatus: string;
  paymentProvider: string;
  paymentDashboardNote: string;
  discountPolicy: string;
  products: Product[];
  reviews: Review[];
};

export const defaultSiteContent: SiteContent = {
  notice: "모아 전시 오프닝 선물 예약은 최소 하루 전 상담을 권장합니다.",
  heroEyebrow: "MOA gallery flower gifting",
  heroTitle: "갤러리 전시의 순간을 꽃으로 전합니다.",
  heroBody:
    "차화는 모아 전시 일정과 갤러리 공간에 맞춰 작가, 컬렉터, 관람객에게 자연스럽게 전달되는 꽃선물을 제안합니다.",
  heroImage: "/hero-cha-hwa.png",
  moaHeadline: "모아 전용 갤러리 꽃선물 파트너",
  moaBody:
    "전시명, 작가명, 갤러리 위치, 오프닝 시간을 기준으로 상품을 고르고 배송 흐름을 단순화하는 것을 목표로 합니다. 실제 모아 연동 전까지는 주문서에서 주소를 직접 입력합니다.",
  moaBullets: [
    "전시 오프닝과 프리뷰 데이에 맞춘 예약 배송",
    "작품과 공간을 해치지 않는 낮은 채도 중심의 플라워 디자인",
    "모아 회원 할인, 차화 가입 적립 정책을 반영할 수 있는 가격 구조",
  ],
  csPhone: "02-000-0000",
  csKakao: "@차화",
  csHours: "평일 10:00-18:00, 전시 오프닝 예약은 별도 상담",
  paymentStatus: "PG 심사 전입니다. 토스페이먼츠, KG이니시스, 나이스페이 중 선택 후 실제 결제를 연결합니다.",
  paymentProvider: "토스페이먼츠",
  paymentDashboardNote:
    "실결제 활성화 후에는 결제 승인, 취소, 부분 환불, 현금영수증 발행 상태를 관리자에서 확인합니다.",
  discountPolicy: "모아 신규 회원 10% 할인, 차화 신규 가입 10% 적립 정책을 적용할 수 있도록 상품별 할인율을 분리 관리합니다.",
  products,
  reviews: [
    {
      name: "MOA 전시 운영팀",
      context: "갤러리 오프닝 배송",
      body: "공간 분위기에 맞춰 꽃 높이와 색감을 잡아줘서 작품 사진에도 자연스럽게 담겼습니다.",
    },
    {
      name: "컬렉터 고객",
      context: "작가 축하 선물",
      body: "주소와 시간 확인이 복잡했는데 전시 일정 기준으로 안내받아 편했습니다.",
    },
    {
      name: "브랜드 행사 담당자",
      context: "기관 행사 그린 오브제",
      body: "일반 화환 느낌이 아니라 전시장에 놓기 좋은 오브제처럼 보여 만족도가 높았습니다.",
    },
  ],
};

export function normalizeSiteContent(value: Partial<SiteContent> | null | undefined): SiteContent {
  return {
    ...defaultSiteContent,
    ...value,
    moaBullets: value?.moaBullets?.length ? value.moaBullets : defaultSiteContent.moaBullets,
    products: value?.products?.length ? value.products : defaultSiteContent.products,
    reviews: value?.reviews?.length ? value.reviews : defaultSiteContent.reviews,
  };
}
