import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const siteContent = sqliteTable("site_content", {
  id: text("id").primaryKey(),
  data: text("data").notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).notNull(),
});

export const orders = sqliteTable("orders", {
  id: text("id").primaryKey(),
  orderNo: text("order_no").notNull().unique(),
  buyerName: text("buyer_name").notNull(),
  buyerPhone: text("buyer_phone").notNull(),
  buyerEmail: text("buyer_email").notNull(),
  recipientArtist: text("recipient_artist").notNull(),
  exhibition: text("exhibition").notNull(),
  gallery: text("gallery").notNull(),
  inviteId: text("invite_id"),
  deliveryDate: text("delivery_date"),
  message: text("message"),
  itemsJson: text("items_json").notNull(),
  total: integer("total").notNull(),
  status: text("status").notNull(),
  paymentStatus: text("payment_status").notNull(),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
});
