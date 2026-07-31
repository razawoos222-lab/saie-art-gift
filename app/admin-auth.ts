import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getChatGPTUser, type ChatGPTUser } from "./chatgpt-auth";

export const ADMIN_COOKIE_NAME = "saie-admin";

export type AdminIdentity = ChatGPTUser | { displayName: string; email: string; fullName: null };

export async function getAdminIdentity(): Promise<AdminIdentity | null> {
  const chatGPTUser = await getChatGPTUser();
  if (chatGPTUser) return chatGPTUser;

  const cookieStore = await cookies();
  if (cookieStore.get(ADMIN_COOKIE_NAME)?.value === "1") {
    return {
      displayName: "admin",
      email: "admin",
      fullName: null,
    };
  }

  return null;
}

export async function requireAdmin(returnTo = "/admin"): Promise<AdminIdentity> {
  const admin = await getAdminIdentity();
  if (admin) return admin;
  redirect(`/admin/login?return_to=${encodeURIComponent(returnTo)}`);
}
