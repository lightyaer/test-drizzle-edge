import { db } from "@/app/db";
import { sql } from "drizzle-orm";
import { NextRequest } from "next/server";

export const runtime = "edge";
export const dynamicParams = true;
export const dynamic = "force-dynamic";

export const GET = async (req: NextRequest) => {
  console.table(req.headers);

  const statement = sql`SELECT strftime('%Y-%m-%dT%H:%M:%S.%fZ','now')`;
  const res = await db.all(statement);

  console.log(res);

  return new Response(JSON.stringify(res));
};
