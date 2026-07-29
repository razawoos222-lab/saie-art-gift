# SAIE ART GIFT

MOA 모바일초대장에 연결되는 `SAIE design studio`의 갤러리 전용 플라워 기프트 사이트입니다.

## 주요 기능

- 모바일 홈, 상품 라인업, 상품 상세, 장바구니, 주문서
- MOA query 연동 준비: `artist`, `exhibition`, `gallery`, `date`, `inviteId`
- 주문번호 생성과 D1 주문 저장
- 비회원 주문조회
- 관리자 콘텐츠 수정, 이미지 업로드, 상품 가격/할인 관리
- 관리자 결제/주문 대시보드
- FAQ, 개인정보 처리 안내, 이용/취소 환불 정책

## 개발

```bash
npm install
npm run dev
npm run build
npm test
npm run lint
```

PG 실결제와 MOA 실제 API 연동은 키와 연동 스펙이 확정된 뒤 활성화합니다.
