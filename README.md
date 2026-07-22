# ChaHwa

차화는 계절 꽃을 중심으로 한 프리미엄 꽃 선물 사이트입니다. 현재 버전은 홈, 상품 탐색과 상세 페이지, 상황별 추천, 브랜드 소개, 주문 상담 폼을 포함합니다.

## 시작하기

```bash
npm install
npm run dev
```

프로덕션 빌드는 `npm run build`로 확인합니다.

## 환경 변수

`.env.example`을 참고해 `.env.local`을 만듭니다.

- `NEXT_PUBLIC_SITE_URL`: 배포 사이트 주소
- `NEXT_PUBLIC_MOA_BASE_URL`: MOA 선물하기 연결 주소
- `NEXT_PUBLIC_KAKAO_CHANNEL_URL`: 카카오톡 채널 주소

실제 MOA 연동과 상담 저장은 다음 단계에서 해당 URL과 API 계약에 맞춰 연결합니다.

회원 혜택과 전시 배송을 포함한 연동 요구사항은 [MOA 연동 PRD](docs/PRD-MOA-INTEGRATION.md)에 정리되어 있습니다.
