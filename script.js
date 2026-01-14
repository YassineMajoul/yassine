const translations = {
  en: {
    aboutTitle: "About",
    aboutText: "Software developer passionate about building clean and efficient systems.",
    projectsTitle: "Projects",
    contactTitle: "Contact"
  },
  fr: {
    aboutTitle: "À propos",
    aboutText: "Développeur logiciel passionné par la création de systèmes propres et efficaces.",
    projectsTitle: "Projets",
    contactTitle: "Contact"
  }
};

function setLang(lang) {
  document.getElementById("title-about").innerText = translations[lang].aboutTitle;
  document.getElementById("about-text").innerText = translations[lang].aboutText;
  document.getElementById("title-projects").innerText = translations[lang].projectsTitle;
  document.getElementById("title-contact").innerText = translations[lang].contactTitle;
}

document.getElementById("year").innerText = new Date().getFullYear();
