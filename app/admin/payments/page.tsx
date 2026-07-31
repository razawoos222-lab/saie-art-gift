import { PaymentDashboard } from "../../../components/PaymentDashboard";
import { PageShell } from "../../../components/PageShell";
import { requireAdmin } from "../../admin-auth";

export const dynamic = "force-dynamic";

export default async function AdminPaymentsPage() {
  const user = await requireAdmin("/admin/payments");

  return (
    <PageShell>
      <PaymentDashboard userEmail={user.email} />
    </PageShell>
  );
}
