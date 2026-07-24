import { AdminConsole } from "../../components/AdminConsole";
import { PageShell } from "../../components/PageShell";
import { requireChatGPTUser } from "../chatgpt-auth";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const user = await requireChatGPTUser("/admin");

  return (
    <PageShell>
      <AdminConsole userEmail={user.email} />
    </PageShell>
  );
}
