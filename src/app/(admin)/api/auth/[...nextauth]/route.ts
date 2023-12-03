import { getHandlers } from "@/auth";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const handlers = await getHandlers();
  return handlers.GET(req);
};

export const POST = async (req: NextRequest) => {
  const handlers = await getHandlers();
  return handlers.POST(req);
};
