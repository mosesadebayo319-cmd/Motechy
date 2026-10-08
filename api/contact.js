import { validateEnquiry, deliverEnquiry } from "../lib/contact.mjs";
const site = () => process.env.SITE_URL || "https://motechy.vercel.app";
function send(res, status, payload, json) {
  res.statusCode = status;
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("X-Content-Type-Options", "nosniff");
  if (json) {
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify(payload));
  }
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  const accepted = payload.accepted === true;
  const message = accepted
    ? "Your enquiry has been accepted. We usually respond within one business day."
    : status === 422
      ? "Please go back and check your name, email, service and project description."
      : "We could not confirm that your enquiry was sent. Please go back to try again or contact us on WhatsApp.";
  res.end(
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${accepted ? "Enquiry accepted" : "Enquiry not sent"} — MoTechy</title></head><body><main><h1>${accepted ? "Thank you for getting in touch." : "Your enquiry has not been confirmed."}</h1><p>${message}</p><p><a href="/contact">Return to the contact page</a></p><p><a href="https://wa.me/2348124328229">Contact MoTechy on WhatsApp</a></p></main></body></html>`,
  );
}
export default async function handler(req, res) {
  const json = String(req.headers.accept || "").includes("application/json");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return send(
      res,
      405,
      { accepted: false, error: "Method not allowed." },
      true,
    );
  }
  const contentType = String(req.headers["content-type"] || "").split(";")[0];
  if (
    !["application/json", "application/x-www-form-urlencoded"].includes(
      contentType,
    )
  )
    return send(
      res,
      415,
      { accepted: false, error: "Unsupported request." },
      json,
    );
  // Same-origin browser requests only. This is an origin check, not an authentication mechanism.
  const allowed = new Set([
    new URL(site()).origin,
    "https://motechy.com",
    "https://www.motechy.com",
  ]);
  if (process.env.VERCEL_URL) allowed.add("https://" + process.env.VERCEL_URL);
  if (process.env.NODE_ENV !== "production")
    allowed.add("http://localhost:8080");
  if (!allowed.has(req.headers.origin))
    return send(
      res,
      403,
      {
        accepted: false,
        error: "Please send your enquiry from our contact page.",
      },
      json,
    );
  let input = req.body;
  try {
    if (typeof input === "string") {
      if (Buffer.byteLength(input) > 12000)
        return send(
          res,
          413,
          { accepted: false, error: "Please shorten your message." },
          json,
        );
      input =
        contentType === "application/json"
          ? JSON.parse(input)
          : Object.fromEntries(new URLSearchParams(input));
    }
    if (!input || Array.isArray(input) || typeof input !== "object")
      return send(
        res,
        400,
        { accepted: false, error: "Invalid enquiry." },
        json,
      );
    if (Buffer.byteLength(JSON.stringify(input)) > 12000)
      return send(
        res,
        413,
        { accepted: false, error: "Please shorten your message." },
        json,
      );
  } catch {
    return send(res, 400, { accepted: false, error: "Invalid enquiry." }, json);
  }
  const result = validateEnquiry(input);
  if (!result.valid)
    return send(
      res,
      422,
      {
        accepted: false,
        error: "Please check the highlighted fields.",
        errors: result.errors,
      },
      json,
    );
  try {
    await deliverEnquiry(result.data);
    return send(res, 200, { accepted: true }, json);
  } catch {
    return send(
      res,
      503,
      {
        accepted: false,
        error:
          "We couldn’t confirm delivery. Your details are still here. Please try again or contact us on WhatsApp.",
      },
      json,
    );
  }
}
