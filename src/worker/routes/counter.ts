import type { Env } from "../worker";

export async function handleCounter(_req: Request, env: Env): Promise<Response> {
  const id = env.COUNTER_DO.idFromName("global");
  const obj = env.COUNTER_DO.get(id);
  const res = await obj.fetch("https://do/inc", { method: "POST" });
  return new Response(await res.text(), { headers: { "content-type": "application/json" } });
}