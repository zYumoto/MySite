const translations = {
  "pt-BR": {
    htmlLang: "pt-BR",
    pageTitle: "Victor Yumoto | Desenvolvedor Full Stack",
    role: "Desenvolvedor FullStack & Automação",
    stack: "JavaScript • TypeScript • React • Node.js • Python",
    toggle: "PT-BR",
  },
  en: {
    htmlLang: "en",
    pageTitle: "Victor Yumoto | Full Stack Developer",
    role: "Full Stack Developer & Automation",
    stack: "JavaScript • TypeScript • React • Node.js • Python",
    toggle: "EN",
  },
  es: {
    htmlLang: "es",
    pageTitle: "Victor Yumoto | Desarrollador Full Stack",
    role: "Desarrollador Full Stack y Automatización",
    stack: "JavaScript • TypeScript • React • Node.js • Python",
    toggle: "ES",
  },
  ja: {
    htmlLang: "ja",
    pageTitle: "Victor Yumoto | Full Stack Developer",
    role: "フルスタック・自動化エンジニア",
    stack: "JavaScript • TypeScript • React • Node.js • Python",
    toggle: "JA",
  },
  fr: {
    htmlLang: "fr",
    pageTitle: "Victor Yumoto | Developpeur Full Stack",
    role: "Developpeur Full Stack et Automatisation",
    stack: "JavaScript • TypeScript • React • Node.js • Python",
    toggle: "FR",
  },
  de: {
    htmlLang: "de",
    pageTitle: "Victor Yumoto | Full Stack Entwickler",
    role: "Full Stack Entwickler & Automatisierung",
    stack: "JavaScript • TypeScript • React • Node.js • Python",
    toggle: "DE",
  },
  it: {
    htmlLang: "it",
    pageTitle: "Victor Yumoto | Sviluppatore Full Stack",
    role: "Sviluppatore Full Stack e Automazione",
    stack: "JavaScript • TypeScript • React • Node.js • Python",
    toggle: "IT",
  },
  nl: {
    htmlLang: "nl",
    pageTitle: "Victor Yumoto | Full Stack Ontwikkelaar",
    role: "Full Stack Ontwikkelaar & Automatisering",
    stack: "JavaScript • TypeScript • React • Node.js • Python",
    toggle: "NL",
  },
  ko: {
    htmlLang: "ko",
    pageTitle: "Victor Yumoto | Full Stack Developer",
    role: "풀스택 및 자동화 개발자",
    stack: "JavaScript • TypeScript • React • Node.js • Python",
    toggle: "KO",
  },
  "zh-CN": {
    htmlLang: "zh-CN",
    pageTitle: "Victor Yumoto | Full Stack Developer",
    role: "全栈与自动化开发者",
    stack: "JavaScript • TypeScript • React • Node.js • Python",
    toggle: "ZH-CN",
  },
  "zh-TW": {
    htmlLang: "zh-TW",
    pageTitle: "Victor Yumoto | Full Stack Developer",
    role: "全端與自動化開發者",
    stack: "JavaScript • TypeScript • React • Node.js • Python",
    toggle: "ZH-TW",
  },
};

const roleText = document.getElementById("roleText");
const stackText = document.getElementById("stackText");
const nameTitle = document.getElementById("nameTitle");
const nameLine1 = document.getElementById("nameLine1");
const nameLine2 = document.getElementById("nameLine2");
const projectsLine = document.getElementById("projectsLine");
const experienceLine = document.getElementById("experienceLine");
const projectModal = document.getElementById("projectModal");
const projectModalClose = document.getElementById("projectModalClose");
const projectModalKicker = document.getElementById("projectModalKicker");
const projectModalTitle = document.getElementById("projectModalTitle");
const projectModalStack = document.getElementById("projectModalStack");
const projectModalDescription = document.getElementById("projectModalDescription");
const projectTriggers = Array.from(document.querySelectorAll("[data-project-trigger]"));
const projectCloseElements = Array.from(document.querySelectorAll("[data-project-close]"));
const pageShell = document.querySelector(".page-shell");
const pageSections = Array.from(document.querySelectorAll(".hero-card, .projects-section, .experience-section"));
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
const projectsData = {
  "deck-forge": {
    kicker: "Projeto Pessoal",
    title: "Deck Forge",
    stack: ["React", "Node.js", "MongoDB"],
    description:
      "Desenvolvi o Mtg-Commander, uma aplicação focada no gerenciamento e análise de decks do formato Commander de Magic: The Gathering. O projeto permite organizar cartas, visualizar dados estratégicos e integrar informações externas, proporcionando uma experiência mais eficiente para jogadores e entusiastas do jogo.",
  },
  "santiago-page": {
    kicker: "Cliente Santiago Locacao",
    title: "Santiago Locacao Page",
    stack: ["React", "CSS / Tailwind", "JavaScript"],
    description:
      "Pagina Oficial Santiago Locacao Page. Landing page moderna desenvolvida para apresentacao de servicos e logistica, com foco em design responsivo e experiencia visual.",
  },
};

let nameAnimationRunning = false;
let techIndex = 0;
let charIndex = 0;
let isDeletingTech = false;
let projectsAnimated = false;
let experienceAnimated = false;

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

async function startProjectsTitle() {
  if (!projectsLine || projectsAnimated) {
    return;
  }

  projectsAnimated = true;
  await typeText(projectsLine, "PROJETOS");
  projectsLine.classList.add("is-revealed");
}

async function startExperienceTitle() {
  if (!experienceLine || experienceAnimated) {
    return;
  }

  experienceAnimated = true;
  await typeText(experienceLine, "EXPERIÊNCIA");
  experienceLine.classList.add("is-revealed");
}

function watchProjectsTitle() {
  if (!projectsLine) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        startProjectsTitle();
        observer.disconnect();
      });
    },
    {
      threshold: 0.45,
    }
  );

  observer.observe(projectsLine);
}

function watchExperienceTitle() {
  if (!experienceLine) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        startExperienceTitle();
        observer.disconnect();
      });
    },
    {
      threshold: 0.45,
    }
  );

  observer.observe(experienceLine);
}

function watchSectionTransitions() {
  if (!pageSections.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    pageSections.forEach((section) => {
      section.classList.add("is-visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.35) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      root: pageShell,
      threshold: [0.35, 0.6],
    }
  );

  pageSections.forEach((section) => {
    observer.observe(section);
  });
}

function openProjectModal(projectId) {
  if (!projectModal) {
    return;
  }

  const project = projectsData[projectId];

  if (!project) {
    return;
  }

  projectModalKicker.textContent = project.kicker;
  projectModalTitle.textContent = project.title;
  projectModalDescription.textContent = project.description;
  projectModalStack.innerHTML = project.stack
    .map((item) => `<span class="stack-pill">${item}</span>`)
    .join("");

  projectModal.classList.add("is-open");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-modal-open");
}

function closeProjectModal() {
  if (!projectModal) {
    return;
  }

  projectModal.classList.remove("is-open");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-modal-open");
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

projectTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    openProjectModal(trigger.dataset.projectTrigger);
  });
});

projectCloseElements.forEach((element) => {
  element.addEventListener("click", closeProjectModal);
});

if (projectModalClose) {
  projectModalClose.addEventListener("click", closeProjectModal);
}

document.addEventListener("click", (event) => {
  if (!event.target.closest(".language-switcher")) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    closeProjectModal();
  }
});

const savedLanguage = window.localStorage.getItem("preferred-language");
applyLanguage(savedLanguage || "pt-BR");
stackText.style.minWidth = `${longestTechLength}ch`;
stackText.textContent = techs[0];
charIndex = techs[0].length;
startNameLoop();
typeStackEffect();
watchProjectsTitle();
watchExperienceTitle();
watchSectionTransitions();
