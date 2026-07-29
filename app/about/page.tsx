import { PageShell } from "../../components/PageShell";

export default function AboutPage() {
  return (
    <PageShell>
      <main>
        <section className="page-intro">
          <div className="container">
            <p className="eyebrow">About SAIE</p>
            <h1 className="display">
              공간을 읽고,
              <br />
              장면을 만듭니다.
            </h1>
            <p>SAIE design studio는 꽃을 하나의 오브제로 다루며, 전시와 일상에 오래 남을 장면을 제안합니다.</p>
          </div>
        </section>
        <section className="container about-layout">
          <article className="about-panel">
            <h2>전시를 위한 플라워</h2>
            <p>작품과 공간의 분위기를 해치지 않도록 필요한 만큼의 색과 형태만 남겨 제작합니다.</p>
          </article>
          <article className="about-panel dark">
            <h2>일상을 위한 선물</h2>
            <p>생일, 감사, 응원처럼 일반 꽃선물이 필요한 순간에도 SAIE의 절제된 감도로 구성합니다.</p>
          </article>
        </section>
      </main>
    </PageShell>
  );
}
