import test from "node:test";
import assert from "node:assert/strict";
import { validateEnquiry, deliverEnquiry } from "../lib/contact.mjs";
import handler from "../api/contact.js";
const valid = {
  name: "Audit Example",
  email: "audit@example.com",
  phone: "",
  business: "",
  service: "Branding",
  budget: "",
  message: "This is a simulated test enquiry.",
  source: "direct",
  website_url: "",
};
function response() {
  return {
    statusCode: 0,
    headers: {},
    body: "",
    setHeader(k, v) {
      this.headers[k] = v;
    },
    end(value = "") {
      this.body = value;
    },
  };
}
test("Enquiries enforce required fields, limits, service choices and honeypot", () => {
  assert.equal(validateEnquiry(valid).valid, true);
  for (const changed of [
    { email: "bad" },
    { name: "A" },
    { service: "Unknown" },
    { message: "short" },
    { message: "x".repeat(5001) },
    { website_url: "spam.example" },
    { email: ["a@example.com"] },
    { name: "Header\nInjection" },
  ])
    assert.equal(validateEnquiry({ ...valid, ...changed }).valid, false);
});
test("An HTTP success without explicit provider acceptance never confirms delivery", async () => {
  for (const [ok, body] of [
    [false, { success: true }],
    [true, { success: "false" }],
    [true, {}],
  ]) {
    await assert.rejects(
      () =>
        deliverEnquiry(valid, {
          fetchImpl: async () => ({ ok, json: async () => body }),
        }),
      /DELIVERY_NOT_ACCEPTED/,
    );
  }
  for (const accepted of [true, "true"])
    assert.deepEqual(
      await deliverEnquiry(valid, {
        fetchImpl: async () => ({
          ok: true,
          json: async () => ({ success: accepted }),
        }),
      }),
      { accepted: true },
    );
});
test("Software enquiries reach the delivery provider with the selected service and budget", async () => {
  const enquiry = validateEnquiry({
    ...valid,
    service: "Software Development",
    budget: "₦700k+",
  });
  assert.equal(enquiry.valid, true);
  let sent;
  await deliverEnquiry(enquiry.data, {
    fetchImpl: async (_url, options) => {
      sent = JSON.parse(options.body);
      return { ok: true, json: async () => ({ success: true }) };
    },
  });
  assert.equal(sent.service, "Software Development");
  assert.equal(sent.budget, "₦700k+");
  assert.equal(sent._subject, "MoTechy enquiry: Software Development");
});
test("Network and response-decoding failures propagate as delivery errors", async () => {
  await assert.rejects(
    () =>
      deliverEnquiry(valid, {
        fetchImpl: async () => {
          throw Error("timeout");
        },
      }),
    /timeout/,
  );
  await assert.rejects(
    () =>
      deliverEnquiry(valid, {
        fetchImpl: async () => ({
          ok: true,
          json: async () => {
            throw Error("invalid JSON");
          },
        }),
      }),
    /DELIVERY_NOT_ACCEPTED/,
  );
});
test("Endpoint rejects cross-origin, malformed and oversized requests before delivery", async () => {
  const original = global.fetch;
  global.fetch = async () => {
    throw Error("Provider must not be called");
  };
  try {
    for (const [patch, status] of [
      [{ method: "GET" }, 405],
      [
        {
          headers: {
            origin: "https://evil.example",
            accept: "application/json",
            "content-type": "application/json",
          },
        },
        403,
      ],
      [{ body: "not json" }, 400],
      [{ body: { ...valid, message: "x".repeat(13000) } }, 413],
      [{ body: { ...valid, email: "bad" } }, 422],
    ]) {
      const req = {
        method: "POST",
        headers: {
          origin: "https://motechy.vercel.app",
          accept: "application/json",
          "content-type": "application/json",
        },
        body: valid,
        ...patch,
      };
      const res = response();
      await handler(req, res);
      assert.equal(res.statusCode, status);
      assert.equal(JSON.parse(res.body).accepted, false);
    }
  } finally {
    global.fetch = original;
  }
});
test("Endpoint confirms only accepted delivery and returns recoverable failures", async () => {
  const original = global.fetch;
  try {
    for (const accepted of [true, false]) {
      global.fetch = async () => ({
        ok: true,
        json: async () => ({ success: accepted }),
      });
      const res = response();
      await handler(
        {
          method: "POST",
          headers: {
            origin: "https://motechy.vercel.app",
            accept: "application/json",
            "content-type": "application/json",
          },
          body: valid,
        },
        res,
      );
      assert.equal(res.statusCode, accepted ? 200 : 503);
      assert.equal(JSON.parse(res.body).accepted, accepted);
    }
    global.fetch = async () => {
      throw Error("network");
    };
    const res = response();
    await handler(
      {
        method: "POST",
        headers: {
          origin: "https://motechy.vercel.app",
          accept: "application/json",
          "content-type": "application/json",
        },
        body: valid,
      },
      res,
    );
    assert.equal(res.statusCode, 503);
    assert.equal(JSON.parse(res.body).accepted, false);
  } finally {
    global.fetch = original;
  }
});
test("Native no-JavaScript form receives an HTML response without reflecting submitted content", async () => {
  const original = global.fetch;
  global.fetch = async () => ({
    ok: true,
    json: async () => ({ success: true }),
  });
  try {
    const res = response();
    await handler(
      {
        method: "POST",
        headers: {
          origin: "https://motechy.vercel.app",
          accept: "text/html",
          "content-type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(valid).toString(),
      },
      res,
    );
    assert.equal(res.statusCode, 200);
    assert.match(res.body, /enquiry has been accepted/);
    assert.doesNotMatch(res.body, /audit@example.com/);
  } finally {
    global.fetch = original;
  }
});
