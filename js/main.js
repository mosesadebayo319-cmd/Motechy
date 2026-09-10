/* MoTechy — site interactions */

(function () {
  "use strict";

  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const yearEls = document.querySelectorAll("[data-year]");
  const FORM_EMAIL = "motechy123@gmail.com";

  yearEls.forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });

  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 24);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toggle && mobileNav) {
    toggle.addEventListener("click", () => {
      const open = mobileNav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("nav-open", open);
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        toggle.classList.remove("open");
        document.body.classList.remove("nav-open");
      });
    });
  }

  // Scroll reveal
  const reveals = document.querySelectorAll(".reveal");
  if (reveals.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("visible"));
  }

  // Animated counters
  const counters = document.querySelectorAll("[data-count]");
  if (counters.length && "IntersectionObserver" in window) {
    const animateCount = (el) => {
      const target = parseFloat(el.getAttribute("data-count") || "0");
      const suffix = el.getAttribute("data-suffix") || "";
      const prefix = el.getAttribute("data-prefix") || "";
      const duration = 1400;
      const start = performance.now();
      const isFloat = !Number.isInteger(target);

      function frame(now) {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const value = target * eased;
        el.textContent =
          prefix +
          (isFloat ? value.toFixed(1) : Math.round(value).toLocaleString()) +
          suffix;
        if (t < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    };

    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            cio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach((el) => cio.observe(el));
  }

  // FAQ accordion
  document.querySelectorAll(".faq-item").forEach((item) => {
    const btn = item.querySelector(".faq-q");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const wasOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach((other) => {
        if (other !== item) other.classList.remove("open");
      });
      item.classList.toggle("open", !wasOpen);
      btn.setAttribute("aria-expanded", !wasOpen ? "true" : "false");
    });
  });

  // Contact form → localStorage + email (FormSubmit) + WhatsApp
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      clearErrors(form);

      const data = {
        name: val("name"),
        email: val("email"),
        phone: val("phone"),
        business: val("business"),
        service: val("service"),
        budget: val("budget"),
        message: val("message"),
      };

      let ok = true;
      if (!data.name || data.name.length < 2) {
        setError("name", "Please enter your name.");
        ok = false;
      }
      if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        setError("email", "Enter a valid email address.");
        ok = false;
      }
      if (!data.service) {
        setError("service", "Select a service.");
        ok = false;
      }
      if (!data.message || data.message.length < 10) {
        setError("message", "Tell us a bit more (at least 10 characters).");
        ok = false;
      }
      if (!ok) return;

      const submitBtn = form.querySelector('[type="submit"]');
      const originalLabel = submitBtn ? submitBtn.textContent : "";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending…";
      }

      const lead = {
        ...data,
        at: new Date().toISOString(),
        source: window.location.href,
        userAgent: navigator.userAgent.slice(0, 180),
      };

      // 1) Browser storage (always)
      let storageOk = false;
      try {
        const leads = JSON.parse(localStorage.getItem("motechy_leads") || "[]");
        leads.push(lead);
        localStorage.setItem("motechy_leads", JSON.stringify(leads));
        storageOk = true;
      } catch (_) {
        /* private mode / quota */
      }

      // 2) Email via FormSubmit AJAX
      let emailOk = false;
      let emailNote = "";
      try {
        const res = await fetch(
          `https://formsubmit.co/ajax/${encodeURIComponent(FORM_EMAIL)}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              name: data.name,
              email: data.email,
              phone: data.phone || "—",
              business: data.business || "—",
              service: data.service,
              budget: data.budget || "—",
              message: data.message,
              _subject: `MoTechy enquiry — ${data.service} — ${data.name}`,
              _template: "table",
              _captcha: "false",
              _replyto: data.email,
            }),
          }
        );
        emailOk = res.ok;
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          emailNote = body.message || "Email service did not accept the request.";
        }
      } catch (err) {
        emailNote = "Could not reach email service (check connection).";
      }

      // 3) Success UI
      const success = document.getElementById("form-success");
      const successDetail = document.getElementById("form-success-detail");
      form.classList.add("form-hidden");
      if (success) success.classList.add("show");

      if (successDetail) {
        const bits = [];
        if (emailOk) bits.push("sent to MoTechy by email");
        else bits.push("saved locally" + (emailNote ? ` (email: ${emailNote})` : " — email may need first-time FormSubmit activation"));
        if (storageOk) bits.push("stored in this browser");
        bits.push("WhatsApp is opening with your brief");
        successDetail.textContent =
          "Your enquiry was " + bits.join(" · ") + ".";
      }

      // 4) WhatsApp handoff
      const wa = buildWhatsApp(data);
      const waLink = document.getElementById("success-wa-link");
      if (waLink) waLink.href = wa;

      setTimeout(() => {
        window.open(wa, "_blank", "noopener,noreferrer");
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalLabel || "Send brief";
        }
      }, 500);
    });
  }

  function val(id) {
    const el = document.getElementById(id);
    return el ? el.value.trim() : "";
  }

  function setError(id, msg) {
    const group = document.getElementById(id)?.closest(".form-group");
    const input = document.getElementById(id);
    if (group) {
      group.classList.add("has-error");
      const err = group.querySelector(".error-msg");
      if (err) err.textContent = msg;
    }
    if (input) input.classList.add("error");
  }

  function clearErrors(formEl) {
    formEl.querySelectorAll(".form-group").forEach((g) => {
      g.classList.remove("has-error");
    });
    formEl.querySelectorAll(".error").forEach((el) => el.classList.remove("error"));
  }

  function buildWhatsApp(data) {
    const phone = "2348124328229";
    const lines = [
      "Hi MoTechy — I'd like to grow my brand online.",
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.phone ? `Phone: ${data.phone}` : null,
      data.business ? `Business: ${data.business}` : null,
      `Service: ${data.service}`,
      data.budget ? `Budget: ${data.budget}` : null,
      "",
      "Message:",
      data.message,
    ].filter(Boolean);
    return `https://wa.me/${phone}?text=${encodeURIComponent(lines.join("\n"))}`;
  }

  // Prefill service from query string
  const params = new URLSearchParams(window.location.search);
  const serviceParam = params.get("service");
  if (serviceParam && document.getElementById("service")) {
    const select = document.getElementById("service");
    const opt = Array.from(select.options).find(
      (o) => o.value.toLowerCase() === serviceParam.toLowerCase()
    );
    if (opt) select.value = opt.value;
  }

  // Active nav for hash sections on homepage
  const sections = document.querySelectorAll("section[id]");
  if (sections.length > 1) {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${id}`
            );
          });
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
  }
})();
