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
const heroScrollText = document.getElementById("heroScrollText");
const aboutLine = document.getElementById("aboutLine");
const projectsLine = document.getElementById("projectsLine");
const experienceLine = document.getElementById("experienceLine");
const educationLine = document.getElementById("educationLine");
const technologiesLine = document.getElementById("technologiesLine");
const aboutKana = document.getElementById("aboutKana");
const projectsKana = document.getElementById("projectsKana");
const experienceKana = document.getElementById("experienceKana");
const educationKana = document.getElementById("educationKana");
const technologiesKana = document.getElementById("technologiesKana");
const aboutLead = document.getElementById("aboutLead");
const aboutTextOne = document.getElementById("aboutTextOne");
const aboutTextTwo = document.getElementById("aboutTextTwo");
const projectsDescription = document.getElementById("projectsDescription");
const experienceDescription = document.getElementById("experienceDescription");
const educationDescription = document.getElementById("educationDescription");
const technologiesDescription = document.getElementById("technologiesDescription");
const sectionHeader = document.getElementById("sectionHeader");
const sectionHeaderLinks = Array.from(document.querySelectorAll("[data-section-link]"));
const sectionDots = Array.from(document.querySelectorAll("[data-section-dot]"));
const projectOneCompany = document.getElementById("projectOneCompany");
const projectOneTitle = document.getElementById("projectOneTitle");
const projectOneSummary = document.getElementById("projectOneSummary");
const projectTwoCompany = document.getElementById("projectTwoCompany");
const projectTwoTitle = document.getElementById("projectTwoTitle");
const projectTwoSummary = document.getElementById("projectTwoSummary");
const experienceOneCompany = document.getElementById("experienceOneCompany");
const experienceOneTitle = document.getElementById("experienceOneTitle");
const experienceOneSummary = document.getElementById("experienceOneSummary");
const experienceTwoCompany = document.getElementById("experienceTwoCompany");
const experienceTwoTitle = document.getElementById("experienceTwoTitle");
const experienceTwoSummary = document.getElementById("experienceTwoSummary");
const experienceThreeCompany = document.getElementById("experienceThreeCompany");
const experienceThreeTitle = document.getElementById("experienceThreeTitle");
const experienceThreeSummary = document.getElementById("experienceThreeSummary");
const experienceLinkOne = document.getElementById("experienceLinkOne");
const experienceLinkTwo = document.getElementById("experienceLinkTwo");
const experienceLinkThree = document.getElementById("experienceLinkThree");
const educationBadgeOne = document.getElementById("educationBadgeOne");
const educationPlaceOne = document.getElementById("educationPlaceOne");
const educationTitleOne = document.getElementById("educationTitleOne");
const educationSummaryOne = document.getElementById("educationSummaryOne");
const educationBadgeTwo = document.getElementById("educationBadgeTwo");
const educationPlaceTwo = document.getElementById("educationPlaceTwo");
const educationTitleTwo = document.getElementById("educationTitleTwo");
const educationSummaryTwo = document.getElementById("educationSummaryTwo");
const projectModal = document.getElementById("projectModal");
const projectModalClose = document.getElementById("projectModalClose");
const projectModalKicker = document.getElementById("projectModalKicker");
const projectModalTitle = document.getElementById("projectModalTitle");
const projectModalStack = document.getElementById("projectModalStack");
const projectModalDescription = document.getElementById("projectModalDescription");
const projectTriggers = Array.from(document.querySelectorAll("[data-project-trigger]"));
const projectCloseElements = Array.from(document.querySelectorAll("[data-project-close]"));
const pageShell = document.querySelector(".page-shell");
const pageSections = Array.from(document.querySelectorAll(".hero-card, .about-section, .projects-section, .experience-section, .education-section, .technologies-section"));
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
let aboutAnimated = false;
let projectsAnimated = false;
let experienceAnimated = false;
let educationAnimated = false;
let technologiesAnimated = false;
let activeSectionId = "";
let currentLanguage = "pt-BR";

const sectionTranslations = {
  "pt-BR": {
    heroScroll: "Projetos abaixo",
    nav: {
      home: "Home",
      about: "Sobre",
      projects: "Projetos",
      experience: "Experiência",
      education: "Formação",
      technologies: "Tecnologias",
    },
    titles: {
      about: "SOBRE MIM",
      projects: "PROJETOS",
      experience: "EXPERIÊNCIA PROFISSIONAL",
      education: "FORMAÇÃO ACADÊMICA",
      technologies: "TECNOLOGIAS",
    },
    about: {
      lead:
        "Sou estudante de Sistemas de Informação com foco em automação de processos, análise de dados e eficiência operacional. Atualmente atuo na MSC, onde desenvolvo soluções que otimizam fluxos de trabalho e melhoram a visibilidade de dados, utilizando ferramentas como Power BI, Excel (VBA) e Power Automate.",
      textOne:
        "Tenho experiência na criação de automações e dashboards que reduzem atividades manuais e apoiam a tomada de decisão. Ao longo da minha trajetória, também atuei com suporte técnico, manutenção de sistemas e organização de dados, o que fortaleceu minha visão prática e orientada a resultados.",
      textTwo:
        "Busco constantemente evoluir minhas habilidades em tecnologia, desenvolvimento e integração de sistemas, com o objetivo de criar soluções inteligentes que gerem impacto real no negócio.",
    },
    descriptions: {
      projects:
        "Aqui você encontra todos os projetos em que já trabalhei, sejam pessoais ou aqueles realizados com vínculo empregatício, nos quais atuei no time de desenvolvimento.",
      experience:
        "Conheça minha trajetória profissional, da atuação mais recente aos primeiros projetos.",
      education:
        "Minha base acadêmica combina desenvolvimento de sistemas, infraestrutura de TI e aplicação prática em soluções voltadas ao ambiente corporativo.",
      technologies:
        "Tecnologias que utilizo no desenvolvimento de interfaces, automações, backend e infraestrutura.",
    },
    projects: {
      oneCompany: "Projeto Pessoal",
      oneTitle: "Deck Forge",
      oneSummary: "Clique para abrir a descrição do projeto na própria página.",
      twoCompany: "Cliente Santiago Locação",
      twoTitle: "Santiago Locação Page",
      twoSummary: "Landing page moderna para apresentação de serviços e logística.",
    },
    experience: {
      oneCompany: "MSC Brasil",
      oneTitle: "Assistente de Customer Service / Quality",
      oneSummary:
        "Atuo com análise de bookings, tratamento de divergências e suporte operacional. Desenvolvo e mantenho automações utilizando VBA, Power Apps e Power Automate, com foco na melhoria de processos, ganho de eficiência e otimização da comunicação com clientes e outras agências.",
      twoCompany: "MSC Brasil",
      twoTitle: "Estagiário",
      twoSummary:
        "Atuei no desenvolvimento de melhorias no sistema de comunicação com clientes, criando soluções em VBA para disparo de e-mails em lote, aumentando a produtividade e reduzindo o tempo de resposta das operações.",
      threeCompany: "Colégio COC",
      threeTitle: "Estagiário",
      threeSummary:
        "Atuei no suporte às rotinas administrativas e tecnológicas, com foco em WordPress para manutenção e atualização de conteúdos. Também auxiliava na organização de dados, atendimento interno e apoio em processos operacionais.",
      details: "Mostrar detalhes",
    },
    education: {
      badgeOne: "Graduação em andamento",
      placeOne: "Universidade Santa Cecília",
      titleOne: "Sistemas de Informação",
      summaryOne:
        "Graduação em andamento, com foco no desenvolvimento de sistemas, análise de dados e automação de processos. Durante a formação, venho adquirindo conhecimentos em lógica de programação, desenvolvimento web, banco de dados e integração de sistemas, além de aplicar esses conceitos em projetos práticos e soluções voltadas ao ambiente corporativo.",
      badgeTwo: "Formação Técnica",
      placeTwo: "SENAI Santos",
      titleTwo: "Técnico em Redes de Computadores",
      summaryTwo:
        "Formação técnica voltada para infraestrutura de redes e suporte em tecnologia da informação. Desenvolvimento de habilidades em configuração de redes, protocolos de comunicação, manutenção de sistemas, segurança básica e suporte técnico, proporcionando uma base sólida para atuação na área de TI.",
    },
  },
  en: {
    heroScroll: "Projects below",
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      technologies: "Technologies",
    },
    titles: {
      about: "ABOUT ME",
      projects: "PROJECTS",
      experience: "PROFESSIONAL EXPERIENCE",
      education: "ACADEMIC BACKGROUND",
      technologies: "TECHNOLOGIES",
    },
    about: {
      lead:
        "I am an Information Systems student focused on process automation, data analysis, and operational efficiency. I currently work at MSC, where I build solutions that optimize workflows and improve data visibility using tools such as Power BI, Excel (VBA), and Power Automate.",
      textOne:
        "I have experience creating automations and dashboards that reduce manual work and support decision-making. Throughout my journey, I have also worked with technical support, system maintenance, and data organization, which strengthened my practical and results-oriented mindset.",
      textTwo:
        "I constantly seek to improve my skills in technology, development, and systems integration, aiming to create intelligent solutions that generate real business impact.",
    },
    descriptions: {
      projects:
        "Here you can find the projects I have worked on, both personal and professional, including work developed as part of company teams.",
      experience:
        "Explore my professional journey, from my most recent role to my earlier experiences.",
      education:
        "My academic background combines systems development, IT infrastructure, and practical application in solutions for corporate environments.",
      technologies:
        "Technologies I use across interface development, automation, backend, and infrastructure.",
    },
    projects: {
      oneCompany: "Personal Project",
      oneTitle: "Deck Forge",
      oneSummary: "Click to open the project description on this page.",
      twoCompany: "Client Santiago Locacao",
      twoTitle: "Santiago Locacao Page",
      twoSummary: "Modern landing page built to showcase services and logistics.",
    },
    experience: {
      oneCompany: "MSC Brasil",
      oneTitle: "Customer Service / Quality Assistant",
      oneSummary:
        "I work with booking analysis, discrepancy handling, and operational support. I develop and maintain automations using VBA, Power Apps, and Power Automate, focusing on process improvement, efficiency gains, and better communication with clients and other agencies.",
      twoCompany: "MSC Brasil",
      twoTitle: "Intern",
      twoSummary:
        "I worked on improvements to the customer communication system, creating VBA solutions for bulk email sending, increasing productivity and reducing operational response time.",
      threeCompany: "COC School",
      threeTitle: "Intern",
      threeSummary:
        "I supported administrative and technological routines, focusing on WordPress for content maintenance and updates. I also helped with data organization, internal support, and operational processes.",
      details: "Show details",
    },
    education: {
      badgeOne: "Undergraduate in progress",
      placeOne: "Santa Cecilia University",
      titleOne: "Information Systems",
      summaryOne:
        "Undergraduate degree in progress, focused on systems development, data analysis, and process automation. During this program, I have been building knowledge in programming logic, web development, databases, and systems integration, while applying these concepts in practical projects and solutions for corporate environments.",
      badgeTwo: "Technical Degree",
      placeTwo: "SENAI Santos",
      titleTwo: "Computer Networks Technician",
      summaryTwo:
        "Technical education focused on network infrastructure and IT support. It developed skills in network configuration, communication protocols, system maintenance, basic security, and technical support, providing a solid foundation for working in IT.",
    },
  },
};

const hoverTitleConfigs = [
  { line: aboutLine, kana: aboutKana, key: "about" },
  { line: projectsLine, kana: projectsKana, key: "projects" },
  { line: experienceLine, kana: experienceKana, key: "experience" },
  { line: educationLine, kana: educationKana, key: "education" },
  { line: technologiesLine, kana: technologiesKana, key: "technologies" },
];

function lockTitleWidths() {
  hoverTitleConfigs.forEach(({ line }) => {
    if (!line) {
      return;
    }

    line.style.minWidth = "0px";
    const width = line.getBoundingClientRect().width;
    line.style.minWidth = `${Math.ceil(width)}px`;
  });
}

function applyLanguage(languageCode) {
  const selected = translations[languageCode] || translations["pt-BR"];
  const sectionText = sectionTranslations[languageCode] || sectionTranslations["pt-BR"];
  currentLanguage = languageCode;

  document.documentElement.lang = selected.htmlLang;
  document.title = selected.pageTitle;
  roleText.textContent = selected.role;
  languageToggle.textContent = selected.toggle;
  heroScrollText.textContent = sectionText.heroScroll;

  sectionHeaderLinks.forEach((link) => {
    link.textContent = sectionText.nav[link.dataset.sectionLink];
  });

  aboutLine.textContent = sectionText.titles.about;
  aboutLine.dataset.baseText = sectionText.titles.about;
  projectsLine.textContent = sectionText.titles.projects;
  projectsLine.dataset.baseText = sectionText.titles.projects;
  experienceLine.textContent = sectionText.titles.experience;
  experienceLine.dataset.baseText = sectionText.titles.experience;
  educationLine.textContent = sectionText.titles.education;
  educationLine.dataset.baseText = sectionText.titles.education;
  technologiesLine.textContent = sectionText.titles.technologies;
  technologiesLine.dataset.baseText = sectionText.titles.technologies;

  aboutLead.textContent = sectionText.about.lead;
  aboutTextOne.textContent = sectionText.about.textOne;
  aboutTextTwo.textContent = sectionText.about.textTwo;
  projectsDescription.textContent = sectionText.descriptions.projects;
  experienceDescription.textContent = sectionText.descriptions.experience;
  educationDescription.textContent = sectionText.descriptions.education;
  technologiesDescription.textContent = sectionText.descriptions.technologies;

  projectOneCompany.textContent = sectionText.projects.oneCompany;
  projectOneTitle.textContent = sectionText.projects.oneTitle;
  projectOneSummary.textContent = sectionText.projects.oneSummary;
  projectTwoCompany.textContent = sectionText.projects.twoCompany;
  projectTwoTitle.textContent = sectionText.projects.twoTitle;
  projectTwoSummary.textContent = sectionText.projects.twoSummary;

  experienceOneCompany.textContent = sectionText.experience.oneCompany;
  experienceOneTitle.textContent = sectionText.experience.oneTitle;
  experienceOneSummary.textContent = sectionText.experience.oneSummary;
  experienceTwoCompany.textContent = sectionText.experience.twoCompany;
  experienceTwoTitle.textContent = sectionText.experience.twoTitle;
  experienceTwoSummary.textContent = sectionText.experience.twoSummary;
  experienceThreeCompany.textContent = sectionText.experience.threeCompany;
  experienceThreeTitle.textContent = sectionText.experience.threeTitle;
  experienceThreeSummary.textContent = sectionText.experience.threeSummary;
  experienceLinkOne.textContent = sectionText.experience.details;
  experienceLinkTwo.textContent = sectionText.experience.details;
  experienceLinkThree.textContent = sectionText.experience.details;

  educationBadgeOne.textContent = sectionText.education.badgeOne;
  educationPlaceOne.textContent = sectionText.education.placeOne;
  educationTitleOne.textContent = sectionText.education.titleOne;
  educationSummaryOne.textContent = sectionText.education.summaryOne;
  educationBadgeTwo.textContent = sectionText.education.badgeTwo;
  educationPlaceTwo.textContent = sectionText.education.placeTwo;
  educationTitleTwo.textContent = sectionText.education.titleTwo;
  educationSummaryTwo.textContent = sectionText.education.summaryTwo;

  languageOptions.forEach((option) => {
    option.classList.toggle("is-active", option.dataset.lang === languageCode);
  });

  lockTitleWidths();

  window.localStorage.setItem("preferred-language", languageCode);
}

function setupTitleHoverTranslations() {
  hoverTitleConfigs.forEach(({ line, kana, key }) => {
    if (!line || !kana) {
      return;
    }

    const container = line.parentElement;

    container.addEventListener("mouseenter", () => {
      if (!line.classList.contains("is-revealed")) {
        return;
      }

      line.classList.remove("is-writing");
      line.classList.add("is-japanese", "is-revealed");
      line.textContent = kana.textContent;
    });

    container.addEventListener("mouseleave", () => {
      if (!line.classList.contains("is-revealed")) {
        return;
      }

      line.classList.remove("is-japanese", "is-writing");
      line.classList.add("is-revealed");
      line.textContent =
        (sectionTranslations[currentLanguage] || sectionTranslations["pt-BR"]).titles[key];
    });
  });
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
  await typeText(
    projectsLine,
    (sectionTranslations[currentLanguage] || sectionTranslations["pt-BR"]).titles.projects
  );
  projectsLine.classList.add("is-revealed");
}

async function startAboutTitle() {
  if (!aboutLine || aboutAnimated) {
    return;
  }

  aboutAnimated = true;
  await typeText(
    aboutLine,
    (sectionTranslations[currentLanguage] || sectionTranslations["pt-BR"]).titles.about
  );
  aboutLine.classList.add("is-revealed");
}

async function startExperienceTitle() {
  if (!experienceLine || experienceAnimated) {
    return;
  }

  experienceAnimated = true;
  await typeText(
    experienceLine,
    (sectionTranslations[currentLanguage] || sectionTranslations["pt-BR"]).titles.experience
  );
  experienceLine.classList.add("is-revealed");
}

async function startEducationTitle() {
  if (!educationLine || educationAnimated) {
    return;
  }

  educationAnimated = true;
  await typeText(
    educationLine,
    (sectionTranslations[currentLanguage] || sectionTranslations["pt-BR"]).titles.education
  );
  educationLine.classList.add("is-revealed");
}

async function startTechnologiesTitle() {
  if (!technologiesLine || technologiesAnimated) {
    return;
  }

  technologiesAnimated = true;
  await typeText(
    technologiesLine,
    (sectionTranslations[currentLanguage] || sectionTranslations["pt-BR"]).titles.technologies
  );
  technologiesLine.classList.add("is-revealed");
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

function watchAboutTitle() {
  if (!aboutLine) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        startAboutTitle();
        observer.disconnect();
      });
    },
    {
      threshold: 0.45,
    }
  );

  observer.observe(aboutLine);
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

function watchEducationTitle() {
  if (!educationLine) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        startEducationTitle();
        observer.disconnect();
      });
    },
    {
      threshold: 0.45,
    }
  );

  observer.observe(educationLine);
}

function watchTechnologiesTitle() {
  if (!technologiesLine) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        startTechnologiesTitle();
        observer.disconnect();
      });
    },
    {
      threshold: 0.45,
    }
  );

  observer.observe(technologiesLine);
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

function setActiveSection(section) {
  if (!section) {
    return;
  }

  const nextSectionId = section.id || "home";

  if (activeSectionId === nextSectionId) {
    return;
  }

  activeSectionId = nextSectionId;

  if (sectionHeader) {
    sectionHeader.classList.toggle("is-visible", nextSectionId !== "home");
    sectionHeader.setAttribute("aria-hidden", nextSectionId === "home" ? "true" : "false");
  }

  sectionHeaderLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.sectionLink === nextSectionId);
  });

  sectionDots.forEach((dot) => {
    dot.classList.toggle("is-active", dot.dataset.sectionDot === nextSectionId);
  });
}

function watchSectionNavigation() {
  if (!pageSections.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    setActiveSection(pageSections[0]);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((left, right) => right.intersectionRatio - left.intersectionRatio);

      if (!visibleEntries.length) {
        return;
      }

      setActiveSection(visibleEntries[0].target);
    },
    {
      root: pageShell,
      threshold: [0.35, 0.6, 0.85],
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
setActiveSection(pageSections[0]);
stackText.style.minWidth = `${longestTechLength}ch`;
stackText.textContent = techs[0];
charIndex = techs[0].length;
startNameLoop();
typeStackEffect();
setupTitleHoverTranslations();
watchAboutTitle();
watchProjectsTitle();
watchExperienceTitle();
watchEducationTitle();
watchTechnologiesTitle();
watchSectionTransitions();
watchSectionNavigation();

