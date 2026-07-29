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
    title: "모아 회원가입 시 10% 할인",
    body: "초대장을 통해 들어온 고객에게 모아 회원 혜택을 안내하고 주문 금액에 반영할 수 있습니다.",
  },
  {
    title: "사이 회원가입 시 10% 적립",
    body: "SAIE 회원 전환 후 다음 주문에 사용할 수 있는 적립 구조를 준비합니다.",
  },
  {
    title: "전시 주소 자동 반영",
    body: "모아 초대장에 등록된 작가, 전시명, 갤러리 정보를 주문서에 자동으로 채웁니다.",
  },
  {
    title: "개인정보 최소 처리",
    body: "회원 여부 신호와 주문에 필요한 정보만 사용하고 불필요한 개인정보 저장을 줄입니다.",
  },
  {
    title: "결제/CS 관리 준비",
    body: "카드, 무통장입금, 간편결제 PG 연결 전에도 주문 접수와 상담 관리를 할 수 있습니다.",
  },
];

const steps: GiftStep[] = [
  {
    number: "01",
    title: "모아 초대장",
    body: "초대장 하단의 작가에게 꽃선물하기 버튼에서 시작합니다.",
  },
  {
    number: "02",
    title: "상품 선택",
    body: "전시에 어울리는 갤러리 전용 플라워를 선택합니다.",
  },
  {
    number: "03",
    title: "메시지 작성",
    body: "작가에게 전할 메시지와 전시 정보를 확인합니다.",
  },
  {
    number: "04",
    title: "주문/결제",
    body: "주문번호가 생성되고 PG 연결 후에는 바로 결제까지 이어집니다.",
  },
];

export const defaultSiteContent: SiteContent = {
  notice: "MOA 모바일초대장과 연결되는 갤러리 전용 꽃선물 서비스입니다.",
  serviceName: "SAIE ART GIFT",
  serviceSubtitle: "작가에게 꽃선물하기",
  ctaLabel: "작가에게 꽃선물하기",
  heroEyebrow: "MOA × SAIE",
  heroTitle: "saie design studio",
  heroBody:
    "작가의 순간에, 꽃으로 남기는 축하. 전시 초대장을 받은 당신이 작가에게 마음을 전하는 가장 감각적인 방식입니다.",
  heroImage: "/hero-cha-hwa.png",
  benefitsTitle: "회원 혜택",
  benefits,
  stepsTitle: "꽃선물하기 쉬운 4단계",
  steps,
  integrationTitle: "연동 방식",
  integrationBody:
    "MOA에서 전시 정보를 전달받아 작가명, 전시명, 갤러리명, 배송 희망일을 주문서에 자동 반영합니다.",
  integrationPrivacyNote:
    "개인정보는 전달하지 않고 암호화된 회원 여부 신호와 주문에 필요한 최소 정보만 처리하는 구조를 기준으로 합니다.",
  moaHeadline: "갤러리 전용 꽃선물하기",
  moaBody:
    "SAIE ART GIFT는 전시 초대장을 받은 분들이 작가에게 꽃과 메시지를 보낼 수 있는 모바일 플라워 기프트 서비스입니다.",
  moaBullets: [
    "작품과 공간의 분위기를 해치지 않는 절제된 플라워 오브제",
    "개인전, 단체전, 졸업전시, 아트페어를 위한 전시 배송",
    "모바일초대장 안에서 바로 이어지는 간편한 주문 흐름",
  ],
  csPhone: "02-000-0000",
  csKakao: "@사이",
  csHours: "평일 10:00-18:00, 전시 오프닝 예약은 별도 상담",
  paymentStatus:
    "PG 키 입력 전 단계입니다. 현재는 주문 접수와 관리자 확인까지 제공하며 실결제 호출은 하지 않습니다.",
  paymentProvider: "토스페이먼츠",
  paymentDashboardNote:
    "PG 연결 후에는 결제 승인, 취소, 부분 환불, 현금영수증 발행 상태를 관리자에서 확인합니다.",
  discountPolicy: "모아 회원가입 시 10% 할인, 사이 회원가입 시 10% 적립 정책을 적용합니다.",
  products,
  reviews: [
    {
      name: "MOA 초대장 고객",
      context: "개인전 오프닝",
      body: "초대장 안에서 바로 작가에게 메시지와 꽃을 보낼 수 있어 전시 축하가 자연스러웠습니다.",
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

export function normalizeSiteContent(value: Partial<SiteContent> | null | undefined): SiteContent {
  return {
    ...defaultSiteContent,
    ...value,
    benefits: value?.benefits?.length ? value.benefits : defaultSiteContent.benefits,
    steps: value?.steps?.length ? value.steps : defaultSiteContent.steps,
    moaBullets: value?.moaBullets?.length ? value.moaBullets : defaultSiteContent.moaBullets,
    products: value?.products?.length ? value.products : defaultSiteContent.products,
    reviews: value?.reviews?.length ? value.reviews : defaultSiteContent.reviews,
  };
}
