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
  { title: "모아 회원가입 시 10% 할인", body: "초대장을 통해 들어온 고객에게 모아 회원 혜택을 안내합니다." },
  { title: "차화 회원가입 시 10% 적립", body: "차화 회원 전환 시 향후 주문에 사용할 수 있는 적립 구조를 준비합니다." },
  { title: "전시 주소로 자동 선물하기", body: "모아 초대장에 등록된 전시장 정보를 기준으로 배송지를 채웁니다." },
  { title: "개인정보 적정 없이 간편하게", body: "회원 여부만 확인하고 불필요한 개인정보 저장을 줄입니다." },
  { title: "다양한 결제수단", body: "카드, 무통장입금, 간편결제 연결을 전제로 결제 화면을 구성합니다." },
];

const steps: GiftStep[] = [
  { number: "01", title: "모아 초대장", body: "초대장 하단의 작가에게 꽃선물하기 버튼을 누릅니다." },
  { number: "02", title: "상품 선택", body: "전시에 어울리는 갤러리 전용 플라워를 선택합니다." },
  { number: "03", title: "메시지 작성 & 정보 확인", body: "작가에게 전할 메시지와 전시 정보를 확인합니다." },
  { number: "04", title: "결제", body: "원하는 결제수단으로 간편하게 결제하면 주문이 접수됩니다." },
];

export const defaultSiteContent: SiteContent = {
  notice: "모아 모바일초대장에 연결되는 갤러리 전용 꽃선물 서비스입니다.",
  serviceName: "CHAHWA ART GIFT",
  serviceSubtitle: "작가에게 꽃선물하기",
  ctaLabel: "작가에게 꽃선물하기",
  heroEyebrow: "MOA × CHAHWA",
  heroTitle: "chahaw design studio",
  heroBody:
    "작가의 순간에, 꽃으로 남기는 축하. 전시 초대장을 받은 당신이 작가에게 마음을 전하는 가장 감각적인 방식입니다.",
  heroImage: "/hero-cha-hwa.png",
  benefitsTitle: "회원 혜택",
  benefits,
  stepsTitle: "꽃선물하기 쉬운 4단계",
  steps,
  integrationTitle: "연동 방식",
  integrationBody:
    "모아에서 전시 정보를 연동받아 작가명, 전시명, 갤러리 주소, 전시 기간을 주문서에 자동으로 채웁니다.",
  integrationPrivacyNote:
    "개인정보는 전달되지 않으며, 회원가입 여부만 확인하여 혜택을 제공합니다.",
  moaHeadline: "갤러리 전용 꽃선물하기",
  moaBody:
    "CHAHWA ART GIFT는 전시 초대장을 받은 분들이 작가에게 꽃과 메시지를 보낼 수 있는 갤러리 전용 플라워 기프트 서비스입니다.",
  moaBullets: [
    "작품과 공간의 분위기를 해치지 않는 절제된 플라워 오브제",
    "전시 오픈, 개인전, 단체전, 졸업전시, 아트페어를 위한 선물",
    "모바일초대장 안에서 바로 연결되는 간편한 주문 흐름",
  ],
  csPhone: "02-000-0000",
  csKakao: "@차화",
  csHours: "평일 10:00-18:00, 전시 오프닝 예약은 별도 상담",
  paymentStatus: "PG 심사 전입니다. 실제 결제는 가맹점 키와 웹훅 시크릿 입력 후 활성화합니다.",
  paymentProvider: "토스페이먼츠",
  paymentDashboardNote:
    "실결제 활성화 후 결제 승인, 취소, 부분 환불, 현금영수증 발행 상태를 관리자에서 확인합니다.",
  discountPolicy: "모아 회원가입 시 10% 할인, 차화 회원가입 시 10% 적립 정책을 적용합니다.",
  products,
  reviews: [
    {
      name: "MOA 초대장 고객",
      context: "개인전 오프닝",
      body: "초대장에서 바로 작가에게 메시지와 꽃을 보낼 수 있어 전시 축하가 훨씬 자연스러웠습니다.",
    },
    {
      name: "갤러리 운영팀",
      context: "전시 공간 배송",
      body: "공간을 해치지 않는 크기와 색감이라 작품 옆에 두어도 부담이 없었습니다.",
    },
    {
      name: "컬렉터 고객",
      context: "작가 선물",
      body: "일반 꽃배달보다 전시의 분위기를 이해하고 보내는 느낌이 들어 좋았습니다.",
    },
  ],
};

export function normalizeSiteContent(value: Partial<SiteContent> | null | undefined): SiteContent {
  return {
    ...defaultSiteContent,
    ...value,
    benefits: value?.benefits?.length ? value.benefits : defaultSiteContent.benefits,
    steps: value?.steps?.length ? value.steps : defaultSiteContent.steps,
    moaBullets: value?.moaBullets?.length ? value.moaBullets : defaultSiteContent.moaBullets,
    products: value?.products?.length === 3 ? value.products : defaultSiteContent.products,
    reviews: value?.reviews?.length ? value.reviews : defaultSiteContent.reviews,
  };
}
