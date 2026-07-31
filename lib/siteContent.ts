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
    title: "갤러리로 자동 배송",
    body: "모아 초대장의 작가, 전시, 갤러리 정보가 상품 선택과 주문서까지 이어집니다.",
  },
  {
    title: "MOA 회원 혜택",
    body: "회원 여부가 확인되면 10% 할인 혜택을 적용할 수 있도록 구조를 준비합니다.",
  },
  {
    title: "SAIE 추가 혜택",
    body: "SAIE 회원 전환 시 10% 적립 또는 추가 혜택을 운영할 수 있습니다.",
  },
  {
    title: "갤러리 무드 보호",
    body: "작품을 방해하지 않는 낮은 높이, 낮은 채도, 절제된 구성을 우선합니다.",
  },
  {
    title: "상담 주문 가능",
    body: "설치형 오브제나 기업 협찬 구성은 전화, 카카오 상담으로 이어집니다.",
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
    body: "꽃바구니, 오프닝 테이블, 난, 플랜테리어, 아트 오브제 중 전시에 맞는 구성을 고릅니다.",
  },
  {
    number: "03",
    title: "메시지 작성",
    body: "작가에게 전할 축하 메시지와 주문자 정보를 남깁니다.",
  },
  {
    number: "04",
    title: "주문/상담 접수",
    body: "주문번호가 생성되고 SAIE가 제작, 배송, 결제 가능 여부를 확인합니다.",
  },
];

export const defaultSiteContent: SiteContent = {
  notice: "MOA 초대장에 연결된 갤러리 전용 꽃선물 서비스입니다.",
  serviceName: "SAIE GALLERY GIFT",
  serviceSubtitle: "작가와 갤러리에 보내는 꽃선물",
  ctaLabel: "갤러리 꽃선물 고르기",
  heroEyebrow: "MOA × SAIE",
  heroTitle: "saie gallery gift",
  heroBody:
    "모아 초대장에 연결된 전시 장소로, 작가와 갤러리에 어울리는 꽃을 보냅니다. 작품이 먼저 보이도록 차분한 색과 낮은 높이, 조형적인 구성을 중심으로 제안합니다.",
  heroImage: "/hero-cha-hwa.png",
  benefitsTitle: "초대장에서 바로 이어지는 갤러리 꽃선물",
  benefits,
  stepsTitle: "갤러리에 꽃을 보내는 4단계",
  steps,
  integrationTitle: "모아 초대장 링크 연동",
  integrationBody:
    "모아 초대장의 버튼 링크가 작가명, 전시명, 갤러리명, 전시일, 초대장 ID를 담아 SAIE /gift 페이지로 연결됩니다.",
  integrationPrivacyNote:
    "실제 API 연동 전에는 URL 정보로 주문 흐름을 완성하고, 이후 inviteId 기반 조회와 암호화된 회원 혜택 검증으로 고도화합니다.",
  moaHeadline: "작품을 살려주는 꽃, 갤러리로 바로 보내세요.",
  moaBody:
    "SAIE GALLERY GIFT는 모아 모바일초대장에서 바로 이어지는 작가와 갤러리 전용 플라워 주문 서비스입니다.",
  moaBullets: [
    "초대장 버튼에서 바로 꽃 선택 화면으로 이동",
    "작가, 전시, 갤러리 정보가 주문서까지 자동 유지",
    "꽃바구니, 오프닝 테이블, 난, 플랜테리어, 아트 오브제 중심 구성",
    "전시장 분위기를 방해하지 않는 낮은 채도와 절제된 형태",
  ],
  csPhone: "02-000-0000",
  csKakao: "@saie",
  csHours: "평일 10:00-18:00, 전시 오프닝 예약은 별도 상담",
  paymentStatus:
    "PG 키 입력 전 단계입니다. 현재는 주문 접수와 관리자 확인까지 제공하며 실결제 호출은 하지 않습니다.",
  paymentProvider: "토스페이먼츠",
  paymentDashboardNote:
    "PG 연결 후 결제 승인, 취소, 부분 환불, 현금영수증 발행 상태를 관리자에서 확인합니다.",
  discountPolicy: "MOA 회원 10% 할인, SAIE 회원 10% 적립은 실제 회원 검증 연동 후 적용합니다.",
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

function contentHasBrokenEncoding(content: SiteContent) {
  const strings = [
    content.notice,
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
