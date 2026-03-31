const translations = {
  "pt-BR": {
    htmlLang: "pt-BR",
    pageTitle: "Victor Yumoto | Desenvolvedor Full Stack",
    role: "Desenvolvedor FullStack & Automação",
    stack: "JavaScript • TypeScript • React • Node.js • Python",
    cv: "BAIXAR CV",
    cvAria: "Baixar curriculo",
    toggle: "PT-BR",
  },
  en: {
    htmlLang: "en",
    pageTitle: "Victor Yumoto | Full Stack Developer",
    role: "Full Stack Developer & Automation",
    stack: "JavaScript • TypeScript • React • Node.js • Python",
    cv: "DOWNLOAD RESUME",
    cvAria: "Download resume",
    toggle: "EN",
  },
  es: {
    htmlLang: "es",
    pageTitle: "Victor Yumoto | Desarrollador Full Stack",
    role: "Desarrollador Full Stack y Automatización",
    stack: "JavaScript • TypeScript • React • Node.js • Python",
    cv: "DESCARGAR CV",
    cvAria: "Descargar CV",
    toggle: "ES",
  },
  ja: {
    htmlLang: "ja",
    pageTitle: "Victor Yumoto | Full Stack Developer",
    role: "モバイルおよびフルスタック開発者",
    stack: "JavaScript • TypeScript • React • Node.js • Python",
    cv: "履歴書をダウンロード",
    cvAria: "履歴書をダウンロード",
    toggle: "JA",
  },
  fr: {
    htmlLang: "fr",
    pageTitle: "Victor Yumoto | Developpeur Full Stack",
    role: "Developpeur Full Stack et Automatisation",
    stack: "JavaScript • TypeScript • React • Node.js • Python",
    cv: "TELECHARGER LE CV",
    cvAria: "Telecharger le CV",
    toggle: "FR",
  },
  de: {
    htmlLang: "de",
    pageTitle: "Victor Yumoto | Full Stack Entwickler",
    role: "Full Stack Entwickler & Automatisierung",
    stack: "JavaScript • TypeScript • React • Node.js • Python",
    cv: "LEBENSLAUF LADEN",
    cvAria: "Lebenslauf herunterladen",
    toggle: "DE",
  },
  it: {
    htmlLang: "it",
    pageTitle: "Victor Yumoto | Sviluppatore Full Stack",
    role: "Sviluppatore Full Stack e Automazione",
    stack: "JavaScript • TypeScript • React • Node.js • Python",
    cv: "SCARICA CV",
    cvAria: "Scarica il CV",
    toggle: "IT",
  },
  nl: {
    htmlLang: "nl",
    pageTitle: "Victor Yumoto | Full Stack Ontwikkelaar",
    role: "Full Stack Ontwikkelaar & Automatisering",
    stack: "JavaScript • TypeScript • React • Node.js • Python",
    cv: "CV DOWNLOADEN",
    cvAria: "CV downloaden",
    toggle: "NL",
  },
  ko: {
    htmlLang: "ko",
    pageTitle: "Victor Yumoto | Full Stack Developer",
    role: "모바일 및 풀스택 개발자",
    stack: "JavaScript • TypeScript • React • Node.js • Python",
    cv: "이력서 다운로드",
    cvAria: "이력서 다운로드",
    toggle: "KO",
  },
  "zh-CN": {
    htmlLang: "zh-CN",
    pageTitle: "Victor Yumoto | Full Stack Developer",
    role: "移动端与全栈开发者",
    stack: "JavaScript • TypeScript • React • Node.js • Python",
    cv: "下载简历",
    cvAria: "下载简历",
    toggle: "ZH-CN",
  },
  "zh-TW": {
    htmlLang: "zh-TW",
    pageTitle: "Victor Yumoto | Full Stack Developer",
    role: "行動與全端開發者",
    stack: "JavaScript • TypeScript • React • Node.js • Python",
    cv: "下載履歷",
    cvAria: "下載履歷",
    toggle: "ZH-TW",
  },
};

const roleText = document.getElementById("roleText");
const stackText = document.getElementById("stackText");
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
const techs = [
  "TypeScript",
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "Power Automate",
  "Power BI",
  "Excel VBA",
  ".NET",
  "C#",
];
const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const DELAY_BETWEEN_WORDS = 5000;
const longestTechLength = techs.reduce(
  (maxLength, tech) => Math.max(maxLength, tech.length),
  0
);

let nameAnimationRunning = false;
let techIndex = 0;
let charIndex = 0;
let isDeletingTech = false;

function applyLanguage(languageCode) {
  const selected = translations[languageCode] || translations["pt-BR"];

  document.documentElement.lang = selected.htmlLang;
  document.title = selected.pageTitle;
  roleText.textContent = selected.role;
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

function typeStackEffect() {
  const currentTech = techs[techIndex];

  if (!isDeletingTech) {
    stackText.textContent = currentTech.substring(0, charIndex + 1);
    charIndex += 1;

    if (charIndex > currentTech.length) {
      isDeletingTech = true;
      window.setTimeout(typeStackEffect, DELAY_BETWEEN_WORDS);
      return;
    }
  } else {
    if (charIndex <= 1) {
      isDeletingTech = false;
      techIndex = (techIndex + 1) % techs.length;
      charIndex = 0;

      window.setTimeout(typeStackEffect, TYPING_SPEED);
      return;
    }

    stackText.textContent = currentTech.substring(0, charIndex - 1);
    charIndex -= 1;
  }

  window.setTimeout(
    typeStackEffect,
    isDeletingTech ? DELETING_SPEED : TYPING_SPEED
  );
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
stackText.style.minWidth = `${longestTechLength}ch`;
stackText.textContent = techs[0];
charIndex = techs[0].length;
startNameLoop();
typeStackEffect();
