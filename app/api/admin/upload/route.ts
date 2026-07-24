import { getChatGPTUser } from "../../../chatgpt-auth";

async function getBucket() {
  try {
    const { env } = (await import("cloudflare:workers")) as { env: { BUCKET?: R2Bucket } };
    return env.BUCKET;
  } catch {
    return undefined;
  }
}

function safeName(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export async function POST(request: Request) {
  const user = await getChatGPTUser();
  if (!user) return Response.json({ error: "관리자 로그인이 필요합니다." }, { status: 401 });

  const bucket = await getBucket();
  if (!bucket) {
    return Response.json(
      { error: "이미지 저장소가 아직 연결되지 않았습니다." },
      { status: 503 },
    );
  }

  const form = await request.formData();
  const file = form.get("file");
  const slot = String(form.get("slot") ?? "content");

  if (!(file instanceof File)) {
    return Response.json({ error: "업로드할 파일이 없습니다." }, { status: 400 });
  }

  if (!file.type.startsWith("image/")) {
    return Response.json({ error: "이미지 파일만 업로드할 수 있습니다." }, { status: 400 });
  }

  const key = `uploads/${slot}/${Date.now()}-${safeName(file.name) || "image"}`;
  await bucket.put(key, file.stream(), {
    httpMetadata: { contentType: file.type },
    customMetadata: { uploadedBy: user.email },
  });

  return Response.json({ url: `/api/assets/${encodeURIComponent(key)}`, key });
}
