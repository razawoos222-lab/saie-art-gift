import { ensureOrdersTable, getD1Binding, makeOrderNo, toStoredOrder, type OrderItem } from "../../../lib/orders";

type OrderPayload = {
  buyerName?: string;
  buyerPhone?: string;
  buyerEmail?: string;
  recipientArtist?: string;
  exhibition?: string;
  gallery?: string;
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
    return Response.json({ error: "주문 저장소가 아직 연결되지 않았습니다." }, { status: 503 });
  }

  const payload = (await request.json()) as OrderPayload;
  if (!required(payload.buyerName) || !required(payload.buyerPhone) || !payload.items?.length) {
    return Response.json({ error: "주문자명, 연락처, 상품 정보가 필요합니다." }, { status: 400 });
  }

  const total = Number(payload.total ?? 0);
  if (!Number.isFinite(total) || total < 1) {
    return Response.json({ error: "주문 금액이 올바르지 않습니다." }, { status: 400 });
  }

  await ensureOrdersTable(db);
  const now = Date.now();
  const id = crypto.randomUUID();
  const orderNo = makeOrderNo();

  await db
    .prepare(
      "INSERT INTO orders (id, order_no, buyer_name, buyer_phone, buyer_email, recipient_artist, exhibition, gallery, invite_id, delivery_date, message, items_json, total, status, payment_status, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    )
    .bind(
      id,
      orderNo,
      payload.buyerName?.trim(),
      payload.buyerPhone?.trim(),
      payload.buyerEmail?.trim() ?? "",
      payload.recipientArtist?.trim() || "작가 미정",
      payload.exhibition?.trim() || "전시 정보 미정",
      payload.gallery?.trim() || "갤러리 미정",
      payload.inviteId?.trim() || null,
      payload.deliveryDate?.trim() || null,
      payload.message?.trim() || null,
      JSON.stringify(payload.items),
      total,
      "주문 접수",
      "PG 연결 대기",
      now,
    )
    .run();

  return Response.json({
    order: {
      id,
      orderNo,
      status: "주문 접수",
      paymentStatus: "PG 연결 대기",
      createdAt: now,
    },
  });
}

export async function GET(request: Request) {
  const db = await getD1Binding();
  if (!db) {
    return Response.json({ error: "주문 저장소가 아직 연결되지 않았습니다." }, { status: 503 });
  }

  const url = new URL(request.url);
  const orderNo = url.searchParams.get("orderNo")?.trim();
  const phone = url.searchParams.get("phone")?.trim();
  if (!orderNo || !phone) {
    return Response.json({ error: "주문번호와 연락처가 필요합니다." }, { status: 400 });
  }

  await ensureOrdersTable(db);
  const row = await db
    .prepare("SELECT * FROM orders WHERE order_no = ? AND buyer_phone = ?")
    .bind(orderNo, phone)
    .first<Parameters<typeof toStoredOrder>[0]>();

  if (!row) {
    return Response.json({ error: "일치하는 주문을 찾지 못했습니다." }, { status: 404 });
  }

  return Response.json({ order: toStoredOrder(row) });
}
