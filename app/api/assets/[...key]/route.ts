async function getBucket() {
  try {
    const { env } = (await import("cloudflare:workers")) as { env: { BUCKET?: R2Bucket } };
    return env.BUCKET;
  } catch {
    return undefined;
  }
}

export async function GET(_request: Request, { params }: { params: Promise<{ key: string[] }> }) {
  const { key } = await params;
  const bucket = await getBucket();
  if (!bucket) return new Response("Storage unavailable", { status: 503 });

  const objectKey = key.join("/");
  const object = await bucket.get(objectKey);
  if (!object) return new Response("Not found", { status: 404 });

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("cache-control", "public, max-age=31536000, immutable");

  return new Response(object.body, { headers });
}
