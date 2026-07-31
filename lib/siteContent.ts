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
  titleSize: 72,
  titleLineHeight: 1.18,
  subtitleSize: 19,
  bodySize: 16,
  bodyLineHeight: 1.9,
  textGap: 28,
  imageHeight: 460,
  imageSaturation: 78,
};

const benefits: Benefit[] = [
  {
    title: "초대장 링크 10% 할인",
    body: "모아 초대장에서 들어온 주문은 모아 회원정보를 받지 않고도 10% 할인을 적용합니다.",
  },
  {
    title: "SAIE 가입 10% 적립",
    body: "주문자가 SAIE 회원가입까지 완료하면 주문 기준 10% 적립 혜택을 운영할 수 있습니다.",
  },
  {
    title: "전시 장소 자동 연결",
    body: "초대장의 작가, 전시, 갤러리 정보가 상품 선택과 주문서까지 이어집니다.",
  },
  {
    title: "개인정보 최소화",
    body: "할인을 위해 모아 회원정보를 넘겨받지 않고, 주문과 배송에 필요한 정보만 받습니다.",
  },
  {
    title: "갤러리 무드 보호",
    body: "작품을 방해하지 않는 낮은 높이, 낮은 채도, 절제된 구성을 우선합니다.",
  },
];

const steps: GiftStep[] = [
  {
    number: "01",
    title: "모아 초대장",
    body: "초대장의 작가에게 꽃선물하기 버튼에서 SAIE로 이동합니다.",
  },
  {
    number: "02",
    title: "갤러리 꽃 선택",
    body: "전시에 맞는 꽃바구니, 오프닝 테이블, 난, 플랜테리어, 아트 오브제를 고릅니다.",
  },
  {
    number: "03",
    title: "메시지 작성",
    body: "작가에게 전할 축하 메시지와 주문자 정보를 남깁니다.",
  },
  {
    number: "04",
    title: "주문/상담 접수",
    body: "초대장 할인 적용 후 주문번호가 생성되고, SAIE가 제작과 배송 일정을 확인합니다.",
  },
];

export const defaultSiteContent: SiteContent = {
  notice: "MOA 초대장 링크로 들어온 주문은 10% 할인이 적용됩니다.",
  brandName: "SAIE STUDIO DESIGN",
  brandKoreanName: "사이스튜디오디자인",
  serviceName: "SAIE GALLERY GIFT",
  serviceSubtitle: "작가와 갤러리에 보내는 꽃선물",
  ctaLabel: "갤러리 꽃선물 고르기",
  heroEyebrow: "MOA × SAIE",
  heroTitle: "갤러리 전시의 순간을 꽃으로 전합니다.",
  heroBody:
    "모아 초대장에 연결된 전시 장소로, 작가와 갤러리에 어울리는 꽃을 보냅니다. 작품이 먼저 보이도록 차분한 색과 낮은 높이, 조형적인 구성을 중심으로 제안합니다.",
  heroImage: "/hero-cha-hwa.png",
  heroStyle: defaultHeroStyle,
  benefitsTitle: "초대장 링크만으로 간단하게 받는 혜택",
  benefits,
  stepsTitle: "갤러리에 꽃을 보내는 4단계",
  steps,
  integrationTitle: "모아 초대장 링크 연동",
  integrationBody:
    "모아 초대장의 버튼 링크가 작가명, 전시명, 갤러리명, 전시일, 초대장 ID를 담아 SAIE /gift 페이지로 연결됩니다.",
  integrationPrivacyNote:
    "모아 회원정보를 직접 전달받아 검증하지 않고, 초대장 링크 유입 여부만 할인 조건으로 사용하면 개인정보 제공 범위와 보관 이슈를 줄일 수 있습니다.",
  moaHeadline: "작품을 살려주는 꽃, 갤러리로 바로 보내세요.",
  moaBody:
    "SAIE GALLERY GIFT는 모아 모바일초대장에서 바로 이어지는 작가와 갤러리 전용 플라워 주문 서비스입니다.",
  moaBullets: [
    "초대장 버튼에서 바로 꽃 선택 화면으로 이동",
    "초대장 링크 유입 주문은 모아 회원정보 확인 없이 10% 할인",
    "SAIE 회원가입 시 주문 기준 10% 적립 운영 가능",
    "작가, 전시, 갤러리 정보가 주문서까지 자동 유지",
    "꽃바구니, 오프닝 테이블, 난, 플랜테리어, 아트 오브제 중심 구성",
  ],
  csPhone: "02-000-0000",
  csKakao: "@saie",
  csHours: "평일 10:00-18:00, 전시 오프닝 예약은 별도 상담",
  paymentStatus:
    "PG 키 입력 전 단계입니다. 현재는 주문 접수와 관리자 확인까지 제공하며 실결제 호출은 하지 않습니다.",
  paymentProvider: "토스페이먼츠",
  paymentDashboardNote:
    "PG 연결 후 결제 승인, 취소, 부분 환불, 현금영수증 발행 상태를 관리자에서 확인합니다.",
  discountPolicy: "MOA 초대장 링크 유입 주문은 10% 할인, SAIE 회원가입 완료 시 10% 적립으로 운영합니다.",
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
      body: "일반 꽃배달보다 전시 분위기를 이해하고 보낸 느낌이 들어 좋았습니다.",
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
        hasBrokenEncoding(product.category) ||
        hasBrokenEncoding(product.summary) ||
        hasBrokenEncoding(product.description) ||
        hasBrokenEncoding(product.occasion) ||
        hasBrokenEncoding(product.flowers),
    )
  );
}

export function normalizeSiteContent(value: Partial<SiteContent> | null | undefined): SiteContent {
  const base = {
    ...defaultSiteContent,
    ...value,
    brandName: value?.brandName || defaultSiteContent.brandName,
    brandKoreanName: value?.brandKoreanName || defaultSiteContent.brandKoreanName,
    heroStyle: normalizeHeroStyle(value?.heroStyle),
    benefits: value?.benefits?.length ? value.benefits : defaultSiteContent.benefits,
    steps: value?.steps?.length ? value.steps : defaultSiteContent.steps,
    moaBullets: value?.moaBullets?.length ? value.moaBullets : defaultSiteContent.moaBullets,
    products: value?.products?.length ? value.products : defaultSiteContent.products,
    reviews: value?.reviews?.length ? value.reviews : defaultSiteContent.reviews,
  };

  if (contentHasBrokenEncoding(base)) {
    return defaultSiteContent;
  }

  return base;
}
