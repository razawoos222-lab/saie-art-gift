import { products, type Product } from "./products";

export type Review = {
  name: string;
  context: string;
  body: string;
};

export type Benefit = {
  title: string;
  body: string;
};

export type GiftStep = {
  number: string;
  title: string;
  body: string;
};

export type SiteContent = {
  notice: string;
  serviceName: string;
  serviceSubtitle: string;
  ctaLabel: string;
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  heroImage: string;
  benefitsTitle: string;
  benefits: Benefit[];
  stepsTitle: string;
  steps: GiftStep[];
  integrationTitle: string;
  integrationBody: string;
  integrationPrivacyNote: string;
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

const benefits: Benefit[] = [
  {
    title: "초대장 정보 자동 연결",
    body: "모아 초대장에서 전달된 작가명, 전시명, 갤러리명이 꽃 선택과 주문서까지 이어집니다.",
  },
  {
    title: "전시 공간에 맞춘 상품",
    body: "일반 꽃배달보다 갤러리 분위기와 작품 옆 배치를 고려한 플라워 오브제를 제안합니다.",
  },
  {
    title: "메시지 함께 전달",
    body: "꽃만 보내는 것이 아니라 작가에게 전할 짧은 축하 메시지를 함께 남깁니다.",
  },
  {
    title: "개인정보 최소 처리",
    body: "주문 접수와 배송 확인에 필요한 정보만 받고, 모아 회원 여부는 이후 암호화 신호로 연동합니다.",
  },
  {
    title: "관리자 운영 준비",
    body: "상품 이미지, 가격, 문구, 주문 상태, 결제 안내를 관리자 화면에서 관리할 수 있습니다.",
  },
];

const steps: GiftStep[] = [
  {
    number: "01",
    title: "모아 초대장",
    body: "초대장의 작가에게 꽃선물하기 버튼을 누르면 SAIE 꽃선물 화면으로 연결됩니다.",
  },
  {
    number: "02",
    title: "꽃 선택",
    body: "전시 공간에 어울리는 플라워 오브제를 고릅니다.",
  },
  {
    number: "03",
    title: "메시지 작성",
    body: "작가에게 전할 축하 메시지와 주문자 정보를 입력합니다.",
  },
  {
    number: "04",
    title: "주문 접수",
    body: "주문번호가 생성되고 SAIE가 제작 가능 여부와 결제 안내를 확인합니다.",
  },
];

export const defaultSiteContent: SiteContent = {
  notice: "MOA 초대장에서 이어지는 갤러리 전용 꽃선물 서비스입니다.",
  serviceName: "SAIE ARTIST GIFT",
  serviceSubtitle: "모아 초대장에서 이어지는 작가 꽃선물",
  ctaLabel: "꽃 선택하기",
  heroEyebrow: "MOA × SAIE",
  heroTitle: "saie artist gift",
  heroBody:
    "모아 초대장을 받은 사람이 작가에게 꽃과 메시지를 보낼 수 있는 모바일 전용 주문 화면입니다.",
  heroImage: "/hero-cha-hwa.png",
  benefitsTitle: "초대장 연동 흐름",
  benefits,
  stepsTitle: "작가에게 꽃을 보내는 4단계",
  steps,
  integrationTitle: "모아 링크 연동",
  integrationBody:
    "모아 초대장의 버튼 링크에 작가명, 전시명, 갤러리명, 전시일, 초대장 ID를 담아 SAIE /gift 페이지로 연결합니다.",
  integrationPrivacyNote:
    "실제 API 연동 전에는 URL 정보로 주문 흐름을 완성하고, 이후 inviteId 기반 조회와 회원 혜택 검증으로 고도화합니다.",
  moaHeadline: "모아 초대장 전용 꽃선물",
  moaBody:
    "SAIE ARTIST GIFT는 모아 모바일초대장에서 바로 이어지는 작가 전용 플라워 기프트 주문 서비스입니다.",
  moaBullets: [
    "초대장 버튼에서 바로 꽃 선택 화면으로 이동",
    "작가, 전시, 갤러리 정보가 주문서까지 자동 유지",
    "갤러리 공간에 맞춘 절제된 플라워 오브제 중심 구성",
  ],
  csPhone: "02-000-0000",
  csKakao: "@사이",
  csHours: "평일 10:00-18:00, 전시 오프닝 예약은 별도 상담",
  paymentStatus:
    "PG 키 입력 전 단계입니다. 현재는 주문 접수와 관리자 확인까지 제공하며 실결제 호출은 하지 않습니다.",
  paymentProvider: "토스페이먼츠",
  paymentDashboardNote:
    "PG 연결 후 결제 승인, 취소, 부분 환불, 현금영수증 발행 상태를 관리자에서 확인합니다.",
  discountPolicy: "모아 회원 10% 할인, 사이 회원 10% 적립 정책은 실제 회원 검증 연동 후 적용합니다.",
  products,
  reviews: [
    {
      name: "MOA 초대장 고객",
      context: "개인전 오프닝",
      body: "초대장에서 바로 작가에게 메시지와 꽃을 보낼 수 있어 전시 축하가 자연스러웠습니다.",
    },
    {
      name: "갤러리 운영팀",
      context: "전시 공간 배송",
      body: "공간을 해치지 않는 크기와 색감이라 작품 옆에 두어도 부담이 없었습니다.",
    },
    {
      name: "컬렉터 고객",
      context: "작가 선물",
      body: "일반 꽃배달보다 전시의 분위기를 이해하고 보낸 느낌이 들어 좋았습니다.",
    },
  ],
};

function hasBrokenEncoding(value: unknown) {
  return typeof value === "string" && /[�苑紐묎쾶寃좏꾩뚮쇰뺣濡낅쒕湲媛곕蹂諛횞]/.test(value);
}

export function normalizeSiteContent(value: Partial<SiteContent> | null | undefined): SiteContent {
  const base = {
    ...defaultSiteContent,
    ...value,
    benefits: value?.benefits?.length ? value.benefits : defaultSiteContent.benefits,
    steps: value?.steps?.length ? value.steps : defaultSiteContent.steps,
    moaBullets: value?.moaBullets?.length ? value.moaBullets : defaultSiteContent.moaBullets,
    products: value?.products?.length ? value.products : defaultSiteContent.products,
    reviews: value?.reviews?.length ? value.reviews : defaultSiteContent.reviews,
  };

  if (
    hasBrokenEncoding(base.serviceSubtitle) ||
    hasBrokenEncoding(base.ctaLabel) ||
    hasBrokenEncoding(base.heroBody) ||
    hasBrokenEncoding(base.benefitsTitle)
  ) {
    return { ...defaultSiteContent, products: base.products };
  }

  return base;
}
