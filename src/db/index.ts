import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const client = createClient({
  url: process.env.LOCAL_URL as string,
});

export const db = drizzle(client, {
  logger: true,
});
