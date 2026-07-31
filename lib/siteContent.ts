import { products, type Product } from "./products";

export const SITE_CONTENT_VERSION = 4;

export type Review = {
  name: string;
  context: string;
  body: string;
  rating?: number;
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

export type HeroStyle = {
  titleSize: number;
  titleLineHeight: number;
  subtitleSize: number;
  bodySize: number;
  bodyLineHeight: number;
  textGap: number;
  imageHeight: number;
  imageSaturation: number;
};

export type SiteContent = {
  contentVersion: number;
  notice: string;
  brandName: string;
  brandKoreanName: string;
  serviceName: string;
  serviceSubtitle: string;
  ctaLabel: string;
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  heroImage: string;
  heroStyle: HeroStyle;
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

const defaultHeroStyle: HeroStyle = {
  titleSize: 64,
  titleLineHeight: 1.16,
  subtitleSize: 18,
  bodySize: 16,
  bodyLineHeight: 1.85,
  textGap: 26,
  imageHeight: 460,
  imageSaturation: 58,
};

const benefits: Benefit[] = [
  {
    title: "초대장 링크 10% 할인",
    body: "모아 초대장에서 들어온 주문은 회원정보 확인 없이 10% 할인을 적용합니다.",
  },
  {
    title: "SAIE 가입 10% 적립",
    body: "SAIE 회원가입을 완료하면 최종 주문 금액 기준 10% 적립 예정 금액을 확인할 수 있습니다.",
  },
  {
    title: "전시 정보 자동 반영",
    body: "작가명, 전시명, 갤러리명, 전시장 주소가 주문서에 자동 표시됩니다.",
  },
  {
    title: "개인정보 최소 수집",
    body: "모아 회원정보를 받지 않고 주문, 배송, 상담에 필요한 정보만 수집합니다.",
  },
  {
    title: "갤러리 무드 보호",
    body: "작품보다 꽃이 먼저 보이지 않도록 낮은 채도와 절제된 형태를 우선합니다.",
  },
];

const steps: GiftStep[] = [
  {
    number: "01",
    title: "모아 초대장",
    body: "초대장 하단의 작가에게 꽃 선물하기 버튼에서 SAIE로 이동합니다.",
  },
  {
    number: "02",
    title: "선물 선택",
    body: "작가 선물, 전시 선물, 갤러리 행사, 조화시공 중 전시에 맞는 구성을 고릅니다.",
  },
  {
    number: "03",
    title: "메시지 작성",
    body: "작가에게 전할 축하 메시지와 배송/설치 희망일을 남깁니다.",
  },
  {
    number: "04",
    title: "주문 접수",
    body: "10% 할인과 10% 적립 예정 금액을 확인한 뒤 주문을 접수합니다.",
  },
];

export const defaultSiteContent: SiteContent = {
  contentVersion: SITE_CONTENT_VERSION,
  notice: "MOA 초대장 링크 주문은 10% 할인, SAIE 회원가입 시 10% 적립 혜택이 적용됩니다.",
  brandName: "SAIE STUDIO DESIGN",
  brandKoreanName: "사이 스튜디오 디자인",
  serviceName: "SAIE ARTIST GIFT",
  serviceSubtitle: "작가에게 꽃 선물하기",
  ctaLabel: "선물 선택하기",
  heroEyebrow: "MOA × SAIE",
  heroTitle: "작가의 순간에,\n꽃으로 남기는 축하.",
  heroBody:
    "모아 초대장에서 바로 이어지는 작가 전용 꽃선물 서비스입니다. 작품과 갤러리 공간을 해치지 않도록 낮은 채도, 낮은 높이, 절제된 형태의 플라워 오브제를 제안합니다.",
  heroImage: "/hero-saie-art-gift.png",
  heroStyle: defaultHeroStyle,
  benefitsTitle: "초대장 링크만으로 간단하게 받는 혜택",
  benefits,
  stepsTitle: "작가에게 꽃을 보내는 4단계",
  steps,
  integrationTitle: "MOA 초대장 연결",
  integrationBody: "모아 초대장 링크에 포함된 작가명, 전시명, 갤러리명, 전시일 정보를 주문서에 반영합니다.",
  integrationPrivacyNote: "주문과 배송에 필요한 최소 정보만 확인합니다.",
  moaHeadline: "모아 초대장에서 바로 이어지는 작가 꽃선물",
  moaBody: "초대장을 받은 고객이 별도 검색 없이 작가에게 꽃과 메시지를 보낼 수 있도록 구성합니다.",
  moaBullets: [
    "초대장 링크 유입 주문은 10% 할인",
    "SAIE 회원가입 완료 시 10% 적립 예정 금액 표시",
    "작가명, 전시명, 갤러리명이 주문서에 자동 표시",
    "모아 회원 개인정보를 직접 받지 않는 최소 수집 방식",
  ],
  csPhone: "02-000-0000",
  csKakao: "@saie",
  csHours: "평일 10:00-18:00, 전시 오프닝 설치는 별도 상담",
  paymentStatus: "현재는 PG 키 입력 전 단계입니다. 주문은 접수형으로 운영하고, 실결제 연결 전에는 결제 호출을 하지 않습니다.",
  paymentProvider: "토스페이먼츠",
  paymentDashboardNote: "PG 연결 후 결제 승인, 취소, 부분 환불, 현금영수증 발행 상태를 관리자에서 확인합니다.",
  discountPolicy: "MOA 초대장 링크 유입 주문은 10% 할인, SAIE 회원가입 완료 시 10% 적립으로 운영합니다.",
  products,
  reviews: [
    {
      name: "모아 초대장 고객",
      context: "작가 개인전 선물",
      body: "초대장 안에서 바로 주문할 수 있어 편했고, 꽃이 전시 분위기와 잘 어울렸습니다.",
      rating: 5,
    },
    {
      name: "갤러리 운영자",
      context: "오프닝 리셉션",
      body: "작품 옆에 두어도 과하지 않았고, 사진 촬영 때도 공간이 정돈되어 보였습니다.",
      rating: 5,
    },
    {
      name: "컬렉터 고객",
      context: "전시 축하 선물",
      body: "일반 꽃배달보다 작가와 갤러리의 상황을 이해하고 보낸 느낌이 있어 좋았습니다.",
      rating: 5,
    },
  ],
};

function hasBrokenEncoding(value: unknown) {
  if (typeof value !== "string") return false;
  return value.includes("\uFFFD") || /[\u4e00-\u9fff\uf900-\ufaff]/.test(value);
}

function clampNumber(value: unknown, fallback: number, min: number, max: number) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.min(max, Math.max(min, number));
}

function normalizeHeroStyle(value: Partial<HeroStyle> | undefined): HeroStyle {
  return {
    titleSize: clampNumber(value?.titleSize, defaultHeroStyle.titleSize, 32, 110),
    titleLineHeight: clampNumber(value?.titleLineHeight, defaultHeroStyle.titleLineHeight, 0.9, 1.8),
    subtitleSize: clampNumber(value?.subtitleSize, defaultHeroStyle.subtitleSize, 12, 32),
    bodySize: clampNumber(value?.bodySize, defaultHeroStyle.bodySize, 12, 24),
    bodyLineHeight: clampNumber(value?.bodyLineHeight, defaultHeroStyle.bodyLineHeight, 1.2, 2.4),
    textGap: clampNumber(value?.textGap, defaultHeroStyle.textGap, 8, 72),
    imageHeight: clampNumber(value?.imageHeight, defaultHeroStyle.imageHeight, 240, 760),
    imageSaturation: clampNumber(value?.imageSaturation, defaultHeroStyle.imageSaturation, 0, 140),
  };
}

function contentHasBrokenEncoding(content: SiteContent) {
  const strings = [
    content.notice,
    content.brandName,
    content.brandKoreanName,
    content.serviceName,
    content.serviceSubtitle,
    content.ctaLabel,
    content.heroEyebrow,
    content.heroTitle,
    content.heroBody,
    content.benefitsTitle,
    content.stepsTitle,
    content.integrationTitle,
    content.integrationBody,
    content.integrationPrivacyNote,
    content.moaHeadline,
    content.moaBody,
    content.discountPolicy,
  ];

  return (
    strings.some(hasBrokenEncoding) ||
    content.benefits.some((item) => hasBrokenEncoding(item.title) || hasBrokenEncoding(item.body)) ||
    content.steps.some((item) => hasBrokenEncoding(item.title) || hasBrokenEncoding(item.body)) ||
    content.moaBullets.some(hasBrokenEncoding) ||
    content.products.some(
      (product) =>
        hasBrokenEncoding(product.name) ||
        hasBrokenEncoding(product.category) ||
        hasBrokenEncoding(product.summary) ||
        hasBrokenEncoding(product.description) ||
        hasBrokenEncoding(product.occasion) ||
        hasBrokenEncoding(product.flowers) ||
        hasBrokenEncoding(product.galleryMood),
    )
  );
}

function hasLegacyCatalog(content: Partial<SiteContent> | null | undefined) {
  if (!content?.products?.length) return false;
  const names = content.products.map((product) => `${product.name} ${product.category} ${product.summary}`).join(" ");
  return /기관|기업\/기관|그린 오브제|플라워 박스|아티스트 축하 플라워 박스|gallery-opening-bouquet/.test(names);
}

export function normalizeSiteContent(value: Partial<SiteContent> | null | undefined): SiteContent {
  if (!value || value.contentVersion !== SITE_CONTENT_VERSION || hasLegacyCatalog(value)) {
    return defaultSiteContent;
  }

  const base = {
    ...defaultSiteContent,
    ...value,
    contentVersion: SITE_CONTENT_VERSION,
    brandName: value.brandName || defaultSiteContent.brandName,
    brandKoreanName: value.brandKoreanName || defaultSiteContent.brandKoreanName,
    heroStyle: normalizeHeroStyle(value.heroStyle),
    benefits: value.benefits?.length ? value.benefits : defaultSiteContent.benefits,
    steps: value.steps?.length ? value.steps : defaultSiteContent.steps,
    moaBullets: value.moaBullets?.length ? value.moaBullets : defaultSiteContent.moaBullets,
    products: value.products?.length ? value.products : defaultSiteContent.products,
    reviews: value.reviews?.length ? value.reviews : defaultSiteContent.reviews,
  };

  if (contentHasBrokenEncoding(base)) {
    return defaultSiteContent;
  }

  return base;
}
