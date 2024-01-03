import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const client = createClient({
    url: "./data.db",
});

export const db = drizzle(client, {
  logger: true,
});
