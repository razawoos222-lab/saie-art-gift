import { InquiryForm } from "../../components/InquiryForm";
import { PageShell } from "../../components/PageShell";

export default function ContactPage() {
  const kakaoHref = process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL || "/contact";

  return (
    <PageShell>
      <main className="container">
        <section className="inquiry-layout">
          <aside className="contact-aside">
            <p className="eyebrow">Order consultation</p>
            <h1>
              전시와 마음에 맞는
              <br />
              꽃을 상담하세요.
            </h1>
            <p>상품 선택, 카드 문구, 배송/설치 일정, 갤러리 반입 조건까지 SAIE가 확인해 안내드립니다.</p>
            <div className="contact-methods">
              <a href="tel:02-000-0000">전화 상담 02-000-0000</a>
              <a href={kakaoHref}>카카오톡 채널 문의</a>
              <a href="mailto:hello@saie.kr">hello@saie.kr</a>
            </div>
          </aside>
          <InquiryForm />
        </section>
      </main>
    </PageShell>
  );
}
