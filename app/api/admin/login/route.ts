import { cookies } from "next/headers";
import { ADMIN_COOKIE_NAME } from "../../../admin-auth";

const ADMIN_ID = "admin";
const ADMIN_PASSWORD = "1111";

function isSafeCredential(value: unknown): value is string {
  return typeof value === "string" && value.length > 0 && value.length < 80;
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as { id?: unknown; password?: unknown } | null;
  const id = payload?.id;
  const password = payload?.password;

  if (!isSafeCredential(id) || !isSafeCredential(password) || id !== ADMIN_ID || password !== ADMIN_PASSWORD) {
    return Response.json({ error: "Invalid admin credentials" }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE_NAME, "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
    maxAge: 60 * 60 * 12,
  });

  return Response.json({ ok: true });
}
