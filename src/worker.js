// Cloudflare Workers with [assets] configuration
export default {
  async fetch(request, env) {
    // 静的アセットを返す
    return env.ASSETS.fetch(request);
  }
}