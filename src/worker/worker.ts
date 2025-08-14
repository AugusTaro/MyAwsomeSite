import { handleCounter } from "./routes/counter";
import { handleAssets } from "./routes/assets";

export { CounterDO } from "./do/CounterDO";

export interface Env {
  ASSETS: Fetcher;
  COUNTER_DO: DurableObjectNamespace;
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url);
    
    if (url.pathname === "/api/counter") {
      return handleCounter(req, env);
    }
    
    return handleAssets(req, env);
  }
};