import { PaymentDashboard } from "../../../components/PaymentDashboard";
import { PageShell } from "../../../components/PageShell";
import { requireChatGPTUser } from "../../chatgpt-auth";

export const dynamic = "force-dynamic";

export default async function AdminPaymentsPage() {
  const user = await requireChatGPTUser("/admin/payments");

  return (
    <PageShell>
      <PaymentDashboard userEmail={user.email} />
    </PageShell>
  );
}
