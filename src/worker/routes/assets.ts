import type { Env } from "../worker";

export async function handleAssets(req: Request, env: Env): Promise<Response> {
  const res = await env.ASSETS.fetch(req);
  if (res.status !== 404) return res;
  
  const url = new URL(req.url);
  return env.ASSETS.fetch(new Request(new URL("/index.html", url.origin), req));
}