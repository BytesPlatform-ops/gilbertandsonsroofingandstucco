import { NextResponse } from "next/server";

const page = (requestId: string) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>402: HOSTING_PLAN_EXPIRED</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{height:100%}
  body{background:#0a0a0a;color:#ededed;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;display:flex;flex-direction:column;-webkit-font-smoothing:antialiased}
  main{flex:1;display:flex;align-items:center;justify-content:center;padding:24px}
  .box{max-width:290px}
  h1{font-size:24px;font-weight:600;letter-spacing:-0.02em;margin-bottom:14px}
  p{font-size:16px;line-height:1.5;margin-bottom:22px}
  code{display:block;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:12px;line-height:1.7;color:#a1a1a1;word-break:break-all}
  footer{padding:32px 24px;text-align:center;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:12px;letter-spacing:0.04em;color:#a1a1a1}
</style>
</head>
<body>
<main>
  <div class="box">
    <h1>This site is unavailable</h1>
    <p>The hosting plan for this site has expired. Service will resume once the account is renewed.</p>
    <code>402 HOSTING_PLAN_EXPIRED</code>
    <code>${requestId}</code>
  </div>
</main>
<footer>CONTACT SITE OWNER</footer>
</body>
</html>`;

function requestId() {
  const rand = Math.random().toString(36).slice(2, 7);
  const hex = crypto.randomUUID().replace(/-/g, "").slice(0, 12);
  return `iad1::${rand}-${Date.now()}-${hex}`;
}

export function proxy() {
  return new NextResponse(page(requestId()), {
    status: 402,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
      "x-robots-tag": "noindex",
    },
  });
}
