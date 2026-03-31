const translations = {
  "pt-BR": {
    htmlLang: "pt-BR",
    pageTitle: "Victor Yumoto | Desenvolvedor Full Stack",
    role: "Desenvolvedor Mobile e Full Stack",
    stack: "TypeScript",
    cv: "BAIXAR CV",
    cvAria: "Baixar curriculo",
    toggle: "PT-BR",
  },
  en: {
    htmlLang: "en",
    pageTitle: "Victor Yumoto | Full Stack Developer",
    role: "Mobile and Full Stack Developer",
    stack: "TypeScript",
    cv: "DOWNLOAD RESUME",
    cvAria: "Download resume",
    toggle: "EN",
  },
  es: {
    htmlLang: "es",
    pageTitle: "Victor Yumoto | Desarrollador Full Stack",
    role: "Desarrollador Mobile y Full Stack",
    stack: "TypeScript",
    cv: "DESCARGAR CV",
    cvAria: "Descargar CV",
    toggle: "ES",
  },
  ja: {
    htmlLang: "ja",
    pageTitle: "Victor Yumoto | Full Stack Developer",
    role: "モバイルおよびフルスタック開発者",
    stack: "TypeScript",
    cv: "履歴書をダウンロード",
    cvAria: "履歴書をダウンロード",
    toggle: "JA",
  },
  fr: {
    htmlLang: "fr",
    pageTitle: "Victor Yumoto | Developpeur Full Stack",
    role: "Developpeur Mobile et Full Stack",
    stack: "TypeScript",
    cv: "TELECHARGER LE CV",
    cvAria: "Telecharger le CV",
    toggle: "FR",
  },
  de: {
    htmlLang: "de",
    pageTitle: "Victor Yumoto | Full Stack Entwickler",
    role: "Mobile und Full Stack Entwickler",
    stack: "TypeScript",
    cv: "LEBENSLAUF LADEN",
    cvAria: "Lebenslauf herunterladen",
    toggle: "DE",
  },
  it: {
    htmlLang: "it",
    pageTitle: "Victor Yumoto | Sviluppatore Full Stack",
    role: "Sviluppatore Mobile e Full Stack",
    stack: "TypeScript",
    cv: "SCARICA CV",
    cvAria: "Scarica il CV",
    toggle: "IT",
  },
  nl: {
    htmlLang: "nl",
    pageTitle: "Victor Yumoto | Full Stack Ontwikkelaar",
    role: "Mobile en Full Stack Ontwikkelaar",
    stack: "TypeScript",
    cv: "CV DOWNLOADEN",
    cvAria: "CV downloaden",
    toggle: "NL",
  },
  ko: {
    htmlLang: "ko",
    pageTitle: "Victor Yumoto | Full Stack Developer",
    role: "모바일 및 풀스택 개발자",
    stack: "TypeScript",
    cv: "이력서 다운로드",
    cvAria: "이력서 다운로드",
    toggle: "KO",
  },
  "zh-CN": {
    htmlLang: "zh-CN",
    pageTitle: "Victor Yumoto | Full Stack Developer",
    role: "移动端与全栈开发者",
    stack: "TypeScript",
    cv: "下载简历",
    cvAria: "下载简历",
    toggle: "ZH-CN",
  },
  "zh-TW": {
    htmlLang: "zh-TW",
    pageTitle: "Victor Yumoto | Full Stack Developer",
    role: "行動與全端開發者",
    stack: "TypeScript",
    cv: "下載履歷",
    cvAria: "下載履歷",
    toggle: "ZH-TW",
  },
};

const roleText = document.getElementById("roleText");
const stackText = document.getElementById("stackText");
const cvText = document.getElementById("cvText");
const cvButton = document.getElementById("cvButton");
const nameTitle = document.getElementById("nameTitle");
const nameLine1 = document.getElementById("nameLine1");
const nameLine2 = document.getElementById("nameLine2");
const languageSwitcher = document.getElementById("languageSwitcher");
const languageToggle = document.getElementById("languageToggle");
const languageMenu = document.getElementById("languageMenu");
const languageOptions = Array.from(document.querySelectorAll(".language-option"));
const nameStates = {
  latin: ["VICTOR", "YUMOTO"],
  japanese: ["ビクター", "湯本"],
};

const NAME_SWAP_INTERVAL = 15000;
const NAME_HOLD_DURATION = 2200;
const LETTER_DELAY = 110;
let nameAnimationRunning = false;

function applyLanguage(languageCode) {
  const selected = translations[languageCode] || translations["pt-BR"];

  document.documentElement.lang = selected.htmlLang;
  document.title = selected.pageTitle;
  roleText.textContent = selected.role;
  stackText.textContent = selected.stack;
  cvText.textContent = selected.cv;
  cvButton.setAttribute("aria-label", selected.cvAria);
  languageToggle.textContent = selected.toggle;

  languageOptions.forEach((option) => {
    option.classList.toggle("is-active", option.dataset.lang === languageCode);
  });

  window.localStorage.setItem("preferred-language", languageCode);
}

function openMenu() {
  languageSwitcher.classList.add("is-open");
  languageToggle.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  languageSwitcher.classList.remove("is-open");
  languageToggle.setAttribute("aria-expanded", "false");
}

function wait(duration) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration);
  });
}

async function typeText(lineElement, nextText, { japanese = false } = {}) {
  lineElement.classList.add("is-writing");
  lineElement.classList.toggle("is-japanese", japanese);
  lineElement.textContent = "";

  for (const character of nextText) {
    lineElement.textContent += character;
    await wait(LETTER_DELAY);
  }

  lineElement.classList.remove("is-writing");
}

async function writeName(lines, { japanese = false } = {}) {
  const nameLineElements = [nameLine1, nameLine2];

  for (let index = 0; index < nameLineElements.length; index += 1) {
    await typeText(nameLineElements[index], lines[index], { japanese });
    await wait(80);
  }
}

async function playNameTranslation() {
  if (nameAnimationRunning) {
    return;
  }

  nameAnimationRunning = true;
  nameTitle.classList.add("is-animating");

  await writeName(nameStates.japanese, { japanese: true });
  await wait(NAME_HOLD_DURATION);
  await writeName(nameStates.latin, { japanese: false });

  nameTitle.classList.remove("is-animating");
  nameAnimationRunning = false;
}

function startNameLoop() {
  window.setInterval(() => {
    playNameTranslation();
  }, NAME_SWAP_INTERVAL);
}

languageToggle.addEventListener("click", () => {
  const isExpanded = languageToggle.getAttribute("aria-expanded") === "true";

  if (isExpanded) {
    closeMenu();
    return;
  }

  openMenu();
});

languageOptions.forEach((option) => {
  option.addEventListener("click", () => {
    applyLanguage(option.dataset.lang);
    closeMenu();
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".language-switcher")) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

const savedLanguage = window.localStorage.getItem("preferred-language");
applyLanguage(savedLanguage || "pt-BR");
startNameLoop();
