import { defaultSiteContent, normalizeSiteContent, type SiteContent } from "../../../lib/siteContent";
import { getChatGPTUser } from "../../chatgpt-auth";

const CONTENT_ID = "main";

async function getBinding() {
  try {
    const { env } = (await import("cloudflare:workers")) as { env: { DB?: D1Database } };
    return env.DB;
  } catch {
    return undefined;
  }
}

async function ensureTable(db: D1Database) {
  await db
    .prepare(
      "CREATE TABLE IF NOT EXISTS site_content (id TEXT PRIMARY KEY NOT NULL, data TEXT NOT NULL, updated_at INTEGER NOT NULL)",
    )
    .run();
}

export async function GET() {
  const db = await getBinding();

  if (!db) {
    return Response.json({ content: defaultSiteContent, storage: "default" });
  }

  await ensureTable(db);
  const row = await db
    .prepare("SELECT data FROM site_content WHERE id = ?")
    .bind(CONTENT_ID)
    .first<{ data: string }>();

  if (!row) {
    const data = JSON.stringify(defaultSiteContent);
    await db.prepare("INSERT INTO site_content (id, data, updated_at) VALUES (?, ?, ?)").bind(CONTENT_ID, data, Date.now()).run();
    return Response.json({ content: defaultSiteContent, storage: "d1" });
  }

  return Response.json({ content: normalizeSiteContent(JSON.parse(row.data)), storage: "d1" });
}

export async function PUT(request: Request) {
  const user = await getChatGPTUser();
  if (!user) {
    return Response.json({ error: "관리자 로그인이 필요합니다." }, { status: 401 });
  }

  const db = await getBinding();
  const payload = (await request.json()) as Partial<SiteContent>;
  const content = normalizeSiteContent(payload);

  if (!db) {
    return Response.json({ error: "관리자 저장소가 아직 연결되지 않아 현재 환경에서는 저장할 수 없습니다." }, { status: 503 });
  }

  await ensureTable(db);
  await db
    .prepare(
      "INSERT INTO site_content (id, data, updated_at) VALUES (?, ?, ?) ON CONFLICT(id) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at",
    )
    .bind(CONTENT_ID, JSON.stringify(content), Date.now())
    .run();

  return Response.json({ content, storage: "d1" });
}
