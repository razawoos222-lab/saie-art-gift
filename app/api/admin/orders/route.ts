import { ensureOrdersTable, getD1Binding, toStoredOrder } from "../../../../lib/orders";
import { getChatGPTUser } from "../../../chatgpt-auth";

export async function GET() {
  const user = await getChatGPTUser();
  if (!user) {
    return Response.json({ error: "관리자 로그인이 필요합니다." }, { status: 401 });
  }

  const db = await getD1Binding();
  if (!db) {
    return Response.json({ orders: [], storage: "none" });
  }

  await ensureOrdersTable(db);
  const result = await db.prepare("SELECT * FROM orders ORDER BY created_at DESC LIMIT 50").all<Parameters<typeof toStoredOrder>[0]>();
  const orders = (result.results ?? []).map(toStoredOrder);

  return Response.json({ orders, storage: "d1" });
}
