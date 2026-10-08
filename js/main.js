// MoTechy: progressively enhanced navigation, enquiries and privacy-conscious events.
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-navigation");
const mobile = window.matchMedia("(max-width: 760px)");
function closeMenu(returnFocus = false) {
  nav?.classList.remove("is-open");
  toggle?.setAttribute("aria-expanded", "false");
  if (returnFocus) toggle?.focus();
}
if (toggle && nav) {
  toggle.hidden = false;
  nav.dataset.enhanced = "true";
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav
    .querySelectorAll("a")
    .forEach((a) => a.addEventListener("click", () => closeMenu()));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true")
      closeMenu(true);
  });
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) closeMenu();
  });
  mobile.addEventListener("change", () => closeMenu());
}
// Remove the indefinite personal-data copies created by the previous website.
try {
  localStorage.removeItem("motechy_leads");
} catch {}
const privacyOptOut =
  navigator.globalPrivacyControl === true || navigator.doNotTrack === "1";
window.va =
  window.va ||
  function (...args) {
    (window.vaq = window.vaq || []).push(args);
  };
// Never send form values or URL query strings to analytics.
window.va("beforeSend", (event) => {
  if (privacyOptOut) return null;
  try {
    const u = new URL(event.url);
    u.search = "";
    u.hash = "";
    return { ...event, url: u.href };
  } catch {
    return event;
  }
});
function track(name, extra = {}) {
  if (privacyOptOut) return;
  window.va("event", { name, data: { page: location.pathname, ...extra } });
  document.dispatchEvent(
    new CustomEvent("motechy:analytics", { detail: { name, ...extra } }),
  );
}
document
  .querySelectorAll("[data-track]")
  .forEach((a) => a.addEventListener("click", () => track(a.dataset.track)));
let source = "direct";
if (!privacyOptOut) {
  try {
    const value = new URLSearchParams(location.search).get("utm_source");
    if (value && /^[a-zA-Z0-9_. -]{1,100}$/.test(value))
      sessionStorage.setItem("motechy_source", value);
    source = sessionStorage.getItem("motechy_source") || "direct";
  } catch {}
}
const form = document.querySelector("#contact-form");
if (form) {
  form.noValidate = true;
  form.querySelector("[name=source]").value = source;
  const selected = new URLSearchParams(location.search).get("service");
  const select = form.elements.service;
  if (selected) {
    const match = [...select.options].find(
      (o) => o.value.toLowerCase() === selected.toLowerCase(),
    );
    if (match) select.value = match.value;
  }
  const summary = document.querySelector("#form-error");
  const submit = form.querySelector("[type=submit]");
  let sending = false;
  function clearErrors() {
    summary.hidden = true;
    summary.textContent = "";
    form
      .querySelectorAll("[aria-invalid]")
      .forEach((e) => e.removeAttribute("aria-invalid"));
    form.querySelectorAll(".field-error").forEach((e) => (e.textContent = ""));
  }
  function showErrors(errors) {
    let first;
    for (const [key, message] of Object.entries(errors)) {
      const el = form.elements.namedItem(key),
        hint = document.getElementById(key + "-error");
      if (el && hint) {
        el.setAttribute("aria-invalid", "true");
        hint.textContent = message;
        if (!first) first = el;
      }
    }
    summary.textContent =
      errors.form || "Please check the marked fields before sending.";
    summary.hidden = false;
    (first || summary).focus();
  }
  form.addEventListener("input", (e) => {
    if (e.target.hasAttribute("aria-invalid")) {
      e.target.removeAttribute("aria-invalid");
      const hint = document.getElementById(e.target.id + "-error");
      if (hint) hint.textContent = "";
    }
  });
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (sending) return;
    clearErrors();
    const data = Object.fromEntries(new FormData(form));
    for (const key of Object.keys(data)) data[key] = String(data[key]).trim();
    const errors = {};
    if (data.name.length < 2) errors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errors.email = "Please enter a valid email address.";
    if (!data.service) errors.service = "Please choose a service.";
    if (data.message.length < 10)
      errors.message = "Please tell us a little more (at least 10 characters).";
    if (Object.keys(errors).length) {
      showErrors(errors);
      return;
    }
    sending = true;
    submit.disabled = true;
    submit.textContent = "Sending…";
    form.setAttribute("aria-busy", "true");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 16000);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
        signal: controller.signal,
      });
      const body = await response.json().catch(() => null);
      if (response.status === 422 && body?.errors) {
        showErrors(body.errors);
        return;
      }
      if (!response.ok || body?.accepted !== true)
        throw new Error("NOT_CONFIRMED");
      form.hidden = true;
      const success = document.querySelector("#form-success");
      success.hidden = false;
      success.focus();
      track("enquiry_accepted", { service: data.service });
    } catch {
      summary.replaceChildren(
        document.createTextNode(
          "We couldn’t confirm delivery. Your details are still here. Please try again, or ",
        ),
      );
      const link = document.createElement("a");
      link.href = "https://wa.me/2348124328229";
      link.textContent = "contact us on WhatsApp";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.addEventListener("click", () => track("whatsapp_click"));
      summary.append(link, document.createTextNode("."));
      summary.hidden = false;
      summary.focus();
      track("enquiry_error");
    } finally {
      clearTimeout(timeout);
      sending = false;
      submit.disabled = false;
      submit.textContent = "Send enquiry";
      form.removeAttribute("aria-busy");
    }
  });
}
