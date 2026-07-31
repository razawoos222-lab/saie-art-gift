# SAIE ARTIST GIFT

MOA 모바일초대장에서 연결되는 `SAIE STUDIO DESIGN`의 작가 전용 플라워 기프트 사이트입니다.

## 주요 기능

- 모바일 우선 홈, 작가 선물 선택, 상품 상세, 장바구니, 주문서
- MOA query 연동 준비: `artist`, `exhibition`, `gallery`, `date`, `inviteId`
- 작가명, 전시명, 갤러리명, 전시장 주소 자동 반영
- 작가 선물, 갤러리 테이블 오브제, 갤러리 행사 오브제, 갤러리 조화시공 상품 구성
- 상품별 세부 옵션과 리뷰 노출
- 주문번호 생성과 D1 주문 저장
- 비회원 주문조회
- 관리자 콘텐츠 수정, 이미지 업로드, 상품/옵션/리뷰 관리
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

PG 실결제와 MOA 정식 연동은 키와 연동 스펙이 확정된 뒤 활성화합니다. 현재 할인 정책은 MOA 초대장 링크 유입 주문 10% 할인, SAIE 회원가입 완료 시 10% 적립을 기준으로 합니다.
