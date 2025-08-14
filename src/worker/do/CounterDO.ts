export class CounterDO {
  constructor(private state: DurableObjectState) {}

  async fetch(req: Request): Promise<Response> {
    const url = new URL(req.url);
    
    if (url.pathname === "/inc" && req.method !== "GET") {
      const total = await this.state.storage.transaction(async tx => {
        const cur = (await tx.get<number>("total")) ?? 0;
        const next = cur + 1;
        await tx.put("total", next);
        return next;
      });
      return json({ total });
    }
    
    if (url.pathname === "/get") {
      const total = (await this.state.storage.get<number>("total")) ?? 0;
      return json({ total });
    }
    
    return new Response("Not found", { status: 404 });
  }
}

const json = (d: unknown) =>
  new Response(JSON.stringify(d), { headers: { "content-type": "application/json" } });