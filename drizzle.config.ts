import { type Config } from "drizzle-kit";

export default {
  driver: "libsql",
  dbCredentials: {
    url: process.env.LOCAL_DB_URL!,
  },
} satisfies Config;
