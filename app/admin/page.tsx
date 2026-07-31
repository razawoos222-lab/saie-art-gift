import { AdminConsole } from "../../components/AdminConsole";
import { PageShell } from "../../components/PageShell";
import { requireAdmin } from "../admin-auth";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const user = await requireAdmin("/admin");

  return (
    <PageShell>
      <AdminConsole userEmail={user.email} />
    </PageShell>
  );
}
