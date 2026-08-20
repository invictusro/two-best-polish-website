const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("is-open", !open);
});
document.querySelectorAll(".nav a").forEach((link) => link.addEventListener("click", () => {
  menuButton?.setAttribute("aria-expanded", "false"); nav?.classList.remove("is-open");
}));
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
}), { threshold: 0.12 });
document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
document.querySelectorAll("[data-year]").forEach((element) => { element.textContent = new Date().getFullYear(); });
const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", (event) => { if (glow) { glow.style.left = `${event.clientX}px`; glow.style.top = `${event.clientY}px`; } });
