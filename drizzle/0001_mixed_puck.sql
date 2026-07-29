CREATE TABLE `orders` (
	`id` text PRIMARY KEY NOT NULL,
	`order_no` text NOT NULL,
	`buyer_name` text NOT NULL,
	`buyer_phone` text NOT NULL,
	`buyer_email` text NOT NULL,
	`recipient_artist` text NOT NULL,
	`exhibition` text NOT NULL,
	`gallery` text NOT NULL,
	`invite_id` text,
	`delivery_date` text,
	`message` text,
	`items_json` text NOT NULL,
	`total` integer NOT NULL,
	`status` text NOT NULL,
	`payment_status` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `orders_order_no_unique` ON `orders` (`order_no`);