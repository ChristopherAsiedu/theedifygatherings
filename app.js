const EVENT = {
  title: "EDIFY",
  theme: "The Knowledge of Yahweh",
  start: "20261205T100000",
  startIso: "2026-12-05T10:00:00+00:00",
  venue: "7 Apam Close, Spintex Cambodia",
  host: "Pastor Christopher Asiedu",
};

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".primary-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    menuButton.querySelector(".sr-only").textContent = expanded ? "Open menu" : "Close menu";
    nav.classList.toggle("is-open", !expanded);
    document.body.classList.toggle("menu-open", !expanded);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.querySelector(".sr-only").textContent = "Open menu";
      nav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    });
  });
}

const countdown = document.querySelector("[data-countdown]");

if (countdown) {
  const start = new Date(EVENT.startIso).getTime();
  const updateCountdown = () => {
    const remaining = start - Date.now();
    if (remaining <= 0) {
      countdown.textContent = "The gathering has begun";
      return;
    }

    const days = Math.floor(remaining / 86_400_000);
    const hours = Math.floor((remaining % 86_400_000) / 3_600_000);
    const minutes = Math.floor((remaining % 3_600_000) / 60_000);
    const seconds = Math.floor((remaining % 60_000) / 1_000);
    countdown.textContent = `${days} days · ${hours} hours · ${minutes} minutes · ${seconds} seconds`;
  };
  updateCountdown();
  window.setInterval(updateCountdown, 1000);
}

function calendarUrl() {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${EVENT.title} — ${EVENT.theme}`,
    dates: `${EVENT.start}/20261205T110000`,
    details: `Hosted by ${EVENT.host}.`,
    location: EVENT.venue,
    ctz: "Africa/Accra",
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}

function downloadCalendar() {
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//The Edify Gatherings//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:edify-2026-12-05@theedifygatherings`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "")}`,
    `DTSTART:${EVENT.start}Z`,
    "DURATION:PT1H",
    `SUMMARY:${EVENT.title} — ${EVENT.theme}`,
    `DESCRIPTION:Hosted by ${EVENT.host}.`,
    `LOCATION:${EVENT.venue}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const file = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(file);
  link.download = "edify-2026-12-05.ics";
  link.click();
  URL.revokeObjectURL(link.href);
}

document.querySelectorAll("[data-calendar]").forEach((button) => {
  button.addEventListener("click", downloadCalendar);
});

document.querySelectorAll("[data-google-calendar]").forEach((link) => {
  link.href = calendarUrl();
});

document.querySelectorAll("[data-share]").forEach((button) => {
  button.addEventListener("click", () => {
    const eventUrl = `${window.location.origin}/gatherings/edify-2026-12-05/`;
    const message = `${EVENT.title} — ${EVENT.theme}\nSaturday, 5 December 2026 at 10:00 AM\n${EVENT.venue}\nHost: ${EVENT.host}\n${eventUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  });
});

const flyerDialog = document.querySelector("#flyer-dialog");
const flyerDialogImage = flyerDialog?.querySelector("img");

document.querySelectorAll("[data-open-flyer]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!flyerDialog || !flyerDialogImage) return;
    flyerDialogImage.src = button.dataset.flyerSrc;
    flyerDialog.showModal();
  });
});

flyerDialog?.querySelector("[data-close-dialog]")?.addEventListener("click", () => flyerDialog.close());
flyerDialog?.addEventListener("click", (event) => {
  if (event.target === flyerDialog) flyerDialog.close();
});

document.querySelectorAll("[data-download-flyer]").forEach((link) => {
  link.href = "/assets/edify-flyer.png";
  link.download = "edify-the-knowledge-of-yahweh-2026-12-05.png";
});

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
