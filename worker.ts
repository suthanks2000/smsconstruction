interface Env {
  ASSETS: {
    fetch: (request: Request | string) => Promise<Response>;
  };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Redirect www.smsconstruction.in to smsconstruction.in (non-www)
    // and force HTTPS
    if (url.hostname === "www.smsconstruction.in" || url.protocol === "http:") {
      url.hostname = "smsconstruction.in";
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};

