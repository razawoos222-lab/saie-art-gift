import { ensureOrdersTable, getD1Binding, makeOrderNo, toStoredOrder, type OrderItem } from "../../../lib/orders";

type OrderPayload = {
  buyerName?: string;
  buyerPhone?: string;
  buyerEmail?: string;
  recipientArtist?: string;
  exhibition?: string;
  gallery?: string;
  galleryAddress?: string;
  inviteId?: string;
  deliveryDate?: string;
  message?: string;
  items?: OrderItem[];
  total?: number;
};

function required(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  const db = await getD1Binding();
  if (!db) {
    return Response.json({ error: "ORDER_STORAGE_NOT_CONNECTED" }, { status: 503 });
  }

  const payload = (await request.json()) as OrderPayload;
  if (!required(payload.buyerName) || !required(payload.buyerPhone) || !payload.items?.length) {
    return Response.json({ error: "ORDER_REQUIRED_FIELDS_MISSING" }, { status: 400 });
  }

  const total = Number(payload.total ?? 0);
  if (!Number.isFinite(total) || total < 1) {
    return Response.json({ error: "ORDER_TOTAL_INVALID" }, { status: 400 });
  }

  await ensureOrdersTable(db);
  const now = Date.now();
  const id = crypto.randomUUID();
  const orderNo = makeOrderNo();

  await db
    .prepare(
      "INSERT INTO orders (id, order_no, buyer_name, buyer_phone, buyer_email, recipient_artist, exhibition, gallery, gallery_address, invite_id, delivery_date, message, items_json, total, status, payment_status, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    )
    .bind(
      id,
      orderNo,
      payload.buyerName?.trim(),
      payload.buyerPhone?.trim(),
      payload.buyerEmail?.trim() ?? "",
      payload.recipientArtist?.trim() || "Artist TBD",
      payload.exhibition?.trim() || "Exhibition TBD",
      payload.gallery?.trim() || "Gallery TBD",
      payload.galleryAddress?.trim() || null,
      payload.inviteId?.trim() || null,
      payload.deliveryDate?.trim() || null,
      payload.message?.trim() || null,
      JSON.stringify(payload.items),
      total,
      "ORDER_RECEIVED",
      "PG_PENDING",
      now,
    )
    .run();

  return Response.json({
    order: {
      id,
      orderNo,
      status: "ORDER_RECEIVED",
      paymentStatus: "PG_PENDING",
      createdAt: now,
    },
  });
}

export async function GET(request: Request) {
  const db = await getD1Binding();
  if (!db) {
    return Response.json({ error: "ORDER_STORAGE_NOT_CONNECTED" }, { status: 503 });
  }

  const url = new URL(request.url);
  const orderNo = url.searchParams.get("orderNo")?.trim();
  const phone = url.searchParams.get("phone")?.trim();
  if (!orderNo || !phone) {
    return Response.json({ error: "ORDER_LOOKUP_FIELDS_MISSING" }, { status: 400 });
  }

  await ensureOrdersTable(db);
  const row = await db
    .prepare("SELECT * FROM orders WHERE order_no = ? AND buyer_phone = ?")
    .bind(orderNo, phone)
    .first<Parameters<typeof toStoredOrder>[0]>();

  if (!row) {
    return Response.json({ error: "ORDER_NOT_FOUND" }, { status: 404 });
  }

  return Response.json({ order: toStoredOrder(row) });
}
