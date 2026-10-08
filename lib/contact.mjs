export const services = new Set([
  "Social Media Management",
  "Branding",
  "Content Strategy",
  "Paid Ads",
  "Digital Growth",
  "Creative Design",
  "Starter package",
  "Growth package",
  "Scale package",
  "Not sure — need advice",
]);
const budgets = new Set([
  "",
  "Under ₦150k",
  "₦150k – ₦350k",
  "₦350k – ₦700k",
  "₦700k+",
]);
export function validateEnquiry(input) {
  const errors = {};
  const data = {};
  for (const [key, max] of Object.entries({
    name: 120,
    email: 254,
    phone: 120,
    business: 120,
    service: 80,
    budget: 60,
    message: 5000,
    source: 100,
    website_url: 200,
  })) {
    const raw = input?.[key];
    if (raw != null && typeof raw !== "string") {
      errors[key] = "Please enter a valid value.";
      data[key] = "";
      continue;
    }
    const value = (raw || "").trim();
    data[key] = value;
    if (value.length > max)
      errors[key] = `Please use ${max} characters or fewer.`;
  }
  if (data.name.length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Please enter a valid email address.";
  if (/[\r\n]/.test(data.name + data.email + data.phone + data.business))
    errors.name = "Please use a single line for your contact details.";
  if (!services.has(data.service)) errors.service = "Please choose a service.";
  if (!budgets.has(data.budget))
    errors.budget = "Please choose a listed budget.";
  if (data.message.length < 10)
    errors.message = "Please tell us a little more (at least 10 characters).";
  data.source = /^[a-zA-Z0-9_. -]{1,100}$/.test(data.source)
    ? data.source
    : "direct";
  if (data.website_url)
    errors.form =
      "We could not accept this enquiry. Please contact us directly.";
  return { data, errors, valid: Object.keys(errors).length === 0 };
}
export function acceptedByProvider(response, body) {
  return response.ok && (body?.success === true || body?.success === "true");
}
export async function deliverEnquiry(
  data,
  {
    fetchImpl = fetch,
    email = process.env.FORM_EMAIL || "motechy123@gmail.com",
    site = process.env.SITE_URL || "https://motechy.vercel.app",
  } = {},
) {
  const response = await fetchImpl(
    `https://formsubmit.co/ajax/${encodeURIComponent(email)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: site,
        Referer: site + "/contact",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone || "Not provided",
        business: data.business || "Not provided",
        service: data.service,
        budget: data.budget || "To discuss",
        message: data.message,
        source: data.source,
        _subject: `MoTechy enquiry: ${data.service}`,
        _replyto: data.email,
        _template: "table",
        _honey: data.website_url || "",
        _url: site + "/contact",
      }),
      signal: AbortSignal.timeout(12000),
    },
  );
  const body = await response.json().catch(() => null);
  if (!acceptedByProvider(response, body))
    throw new Error("DELIVERY_NOT_ACCEPTED");
  return { accepted: true };
}
