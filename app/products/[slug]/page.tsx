import { PageShell } from "../../../components/PageShell";
import { ProductDetailView } from "../../../components/ProductDetailView";

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <PageShell>
      <ProductDetailView slug={slug} />
    </PageShell>
  );
}
