const header = document.querySelector("[data-header]");
const navLinks = [...document.querySelectorAll(".nav a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
const langToggle = document.querySelector("[data-lang-toggle]");
const langLabel = document.querySelector("[data-lang-label]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const description = document.querySelector('meta[name="description"]');

const titles = {
  ja: "大有国際株式会社｜スマート物流・自動倉庫ソリューション",
  en: "Grandio International Co., Ltd. | Smart Logistics & Intelligent Warehousing Solutions",
};

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

function setMenuOpen(isOpen) {
  header.classList.toggle("is-menu-open", isOpen);
  menuToggle?.setAttribute("aria-expanded", String(isOpen));
}

function updateActiveLink() {
  if (window.location.hash) {
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === window.location.hash);
    });
    return;
  }

  const current = sections
    .map((section) => ({
      id: section.id,
      top: Math.abs(section.getBoundingClientRect().top - 120),
    }))
    .sort((a, b) => a.top - b.top)[0];

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${current?.id}`);
  });
}

function setLanguage(lang) {
  const nextLang = lang === "en" ? "en" : "ja";
  document.body.classList.toggle("lang-ja", nextLang === "ja");
  document.body.classList.toggle("lang-en", nextLang === "en");
  document.documentElement.lang = nextLang;
  document.title = titles[nextLang];
  description?.setAttribute("content", description.dataset[`description${nextLang === "en" ? "En" : "Ja"}`]);
  langLabel.textContent = nextLang === "en" ? "JP" : "EN";
  localStorage.setItem("grandio-lang", nextLang);
}

langToggle?.addEventListener("click", () => {
  const isEnglish = document.body.classList.contains("lang-en");
  setLanguage(isEnglish ? "ja" : "en");
});

menuToggle?.addEventListener("click", () => {
  setMenuOpen(!header.classList.contains("is-menu-open"));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

window.addEventListener("scroll", () => {
  updateHeader();
  updateActiveLink();
});

window.addEventListener("hashchange", () => {
  updateActiveLink();
  setMenuOpen(false);
});

setLanguage(localStorage.getItem("grandio-lang") || "ja");
updateHeader();
updateActiveLink();
