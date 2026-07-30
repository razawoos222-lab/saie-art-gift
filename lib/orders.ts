export type OrderItem = {
  slug: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
};

export type StoredOrder = {
  id: string;
  orderNo: string;
  buyerName: string;
  buyerPhone: string;
  buyerEmail: string;
  recipientArtist: string;
  exhibition: string;
  gallery: string;
  galleryAddress: string | null;
  inviteId: string | null;
  deliveryDate: string | null;
  message: string | null;
  items: OrderItem[];
  total: number;
  status: string;
  paymentStatus: string;
  createdAt: number;
};

type OrderRow = {
  id: string;
  order_no: string;
  buyer_name: string;
  buyer_phone: string;
  buyer_email: string;
  recipient_artist: string;
  exhibition: string;
  gallery: string;
  gallery_address?: string | null;
  invite_id: string | null;
  delivery_date: string | null;
  message: string | null;
  items_json: string;
  total: number;
  status: string;
  payment_status: string;
  created_at: number;
};

export async function getD1Binding() {
  try {
    const { env } = (await import("cloudflare:workers")) as { env: { DB?: D1Database } };
    return env.DB;
  } catch {
    return undefined;
  }
}

export async function ensureOrdersTable(db: D1Database) {
  await db
    .prepare(
      "CREATE TABLE IF NOT EXISTS orders (id TEXT PRIMARY KEY NOT NULL, order_no TEXT NOT NULL UNIQUE, buyer_name TEXT NOT NULL, buyer_phone TEXT NOT NULL, buyer_email TEXT NOT NULL, recipient_artist TEXT NOT NULL, exhibition TEXT NOT NULL, gallery TEXT NOT NULL, gallery_address TEXT, invite_id TEXT, delivery_date TEXT, message TEXT, items_json TEXT NOT NULL, total INTEGER NOT NULL, status TEXT NOT NULL, payment_status TEXT NOT NULL, created_at INTEGER NOT NULL)",
    )
    .run();

  const tableInfo = await db.prepare("PRAGMA table_info(orders)").all<{ name: string }>();
  const columns = new Set((tableInfo.results ?? []).map((column) => column.name));
  if (!columns.has("gallery_address")) {
    await db.prepare("ALTER TABLE orders ADD COLUMN gallery_address TEXT").run();
  }
}

export function toStoredOrder(row: OrderRow): StoredOrder {
  return {
    id: row.id,
    orderNo: row.order_no,
    buyerName: row.buyer_name,
    buyerPhone: row.buyer_phone,
    buyerEmail: row.buyer_email,
    recipientArtist: row.recipient_artist,
    exhibition: row.exhibition,
    gallery: row.gallery,
    galleryAddress: row.gallery_address ?? null,
    inviteId: row.invite_id,
    deliveryDate: row.delivery_date,
    message: row.message,
    items: JSON.parse(row.items_json) as OrderItem[],
    total: row.total,
    status: row.status,
    paymentStatus: row.payment_status,
    createdAt: row.created_at,
  };
}

export function makeOrderNo() {
  const now = new Date();
  const date = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(
    now.getDate(),
  ).padStart(2, "0")}`;
  const code = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `SAIE-${date}-${code}`;
}
