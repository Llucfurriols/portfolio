// nav shadow on scroll
const nav = document.querySelector(".nav");
const onScroll = () => nav && nav.classList.toggle("scrolled", window.scrollY > 24);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// reveal on scroll, staggered per sibling group
const revealed = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add("in"), e.target.dataset.delay || 0);
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );
  revealed.forEach((el, i) => {
    if (!el.dataset.delay) el.dataset.delay = (i % 3) * 80;
    io.observe(el);
  });
} else {
  revealed.forEach((el) => el.classList.add("in"));
}

// curriculum grid: expandable subject tiles
document.querySelectorAll(".tile[data-open]").forEach((tile) => {
  tile.setAttribute("aria-expanded", "false");
  tile.addEventListener("click", () => {
    const panel = document.getElementById(tile.getAttribute("aria-controls"));
    if (!panel) return;
    const isOpen = tile.getAttribute("aria-expanded") === "true";
    const row = tile.closest(".curri-tiles");
    row.querySelectorAll(".tile[data-open]").forEach((t) => t.setAttribute("aria-expanded", "false"));
    row.querySelectorAll(".curri-panel").forEach((p) => p.classList.remove("open"));
    if (!isOpen) {
      tile.setAttribute("aria-expanded", "true");
      panel.classList.add("open");
    }
  });
});

// current year
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
