const translations = {
  en: {
    disclaimerText: "This website is under construction",
    // Navigation
    navAbout: "About Me",
    navProjects: "Projects",
    navContact: "Contact",
    
    // About Section
    aboutTitle: "About Me",
    aboutText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Passionate software developer with a strong background in building efficient and scalable applications.",
    skillsTitle: "Skills & Technologies",
    skillFrontend: "Frontend",
    skillBackend: "Backend",
    skillTools: "Tools & Others",
    experienceTitle: "Experiences",
    exp1Title: "Software Designer",
    exp1Company: "Luminator Technology Group - Rails division",
    exp1Date: "January 2025 - Present",
    exp2Title: "Decision Support",
    exp2Company: "DRDC (Defence Research and Development Canada)",
    exp2Date: "May 2023 - April 2024",
    exp3Title: "Data Science Intern",
    exp3Company: "Quebec Ministry of Forests, Wildlife and Parks",
    exp3Date: "May 2022 - August 2024",
    expDesc1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Designed and implemented software solutions with focus on user experience and scalability.",
    expDesc2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Provided decision support solutions for continental defense operations.",
    expDesc3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Applied data science techniques to analyze forestry and wildlife management datasets.",
    educationTitle: "Education",
    edu1Title: "Bachelor's Degree in Computer Engineering",
    edu1Company: "Laval University",
    edu1Date: "2025",
    eduDesc1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Major in Software Engineering with focus on modern development practices.",
    
    // Projects Section
    projectsTitle: "Projects",
    project1Title: "E-Commerce Platform",
    project1Desc: "A full-stack e-commerce application with user authentication, product management, and payment integration. Features include shopping cart, order tracking, and admin dashboard.",
    project2Title: "Task Management App",
    project2Desc: "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Includes priority levels and deadline tracking.",
    project3Title: "Weather Dashboard",
    project3Desc: "An interactive weather application that displays current weather conditions and forecasts. Features include geolocation support, multiple city tracking, and data visualization.",
    project4Title: "Portfolio Generator",
    project4Desc: "A web application that helps developers create professional portfolio websites. Users can customize templates, add projects, and export their portfolio as static HTML.",
    liveDemo: "Live Demo",
    viewCode: "View Code",
    
    // Contact Section
    contactTitle: "Contact",
    contactText: "Feel free to reach out for collaborations or just a friendly chat!",
    contactCtaText: "Let's build something amazing together!",
    contactBtn: "Get in Touch",
    
    // Footer
    footerText: "Made with passion by Yassine Majoul"
  },
  fr: {
    disclaimerText: "Ce site web est en chantier",
    // Navigation
    navAbout: "À propos",
    navProjects: "Projets",
    navContact: "Contact",
    
    // About Section
    aboutTitle: "À propos de moi",
    aboutText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Développeur logiciel passionné avec une solide expérience dans la création d'applications efficaces et évolutives.",
    skillsTitle: "Compétences & Technologies",
    skillFrontend: "Frontend",
    skillBackend: "Backend",
    skillTools: "Outils & Autres",
    experienceTitle: "Expériences",
    exp1Title: "Concepteur logiciel",
    exp1Company: "Luminator Technology Group - Division Rails",
    exp1Date: "Janvier 2025 - Présent",
    exp2Title: "Support à la prise de décision",
    exp2Company: "RDDC (Recherche et développement pour la défense du Canada)",
    exp2Date: "Mai 2023 - Avril 2024",
    exp3Title: "Stagiaire en sciences de données",
    exp3Company: "Ministère des Forêts, de la Faune et des Parcs du Québec",
    exp3Date: "Mai 2022 - Août 2024",
    expDesc1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conception et implémentation de solutions logicielles en mettant l'accent sur l'expérience utilisateur et l'évolutivité.",
    expDesc2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fourniture de solutions de soutien à la décision pour les opérations de défense continentale.",
    expDesc3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Application de techniques de science des données pour analyser les ensembles de données de gestion des forêts et de la faune.",
    educationTitle: "Formation",
    edu1Title: "Baccalauréat en Génie Informatique",
    edu1Company: "Université Laval",
    edu1Date: "2025",
    eduDesc1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Majeure en Génie Logiciel avec accent sur les pratiques de développement modernes.",
    
    // Projects Section
    projectsTitle: "Projets",
    project1Title: "Plateforme E-Commerce",
    project1Desc: "Une application e-commerce full-stack avec authentification utilisateur, gestion des produits et intégration de paiement. Fonctionnalités incluant panier d'achat, suivi des commandes et tableau de bord administrateur.",
    project2Title: "Application de Gestion de Tâches",
    project2Desc: "Un outil collaboratif de gestion de tâches avec mises à jour en temps réel, fonctionnalité glisser-déposer et fonctionnalités de collaboration d'équipe. Inclut des niveaux de priorité et un suivi des échéances.",
    project3Title: "Tableau de Bord Météo",
    project3Desc: "Une application météo interactive qui affiche les conditions météorologiques actuelles et les prévisions. Fonctionnalités incluant le support de géolocalisation, le suivi de plusieurs villes et la visualisation de données.",
    project4Title: "Générateur de Portfolio",
    project4Desc: "Une application web qui aide les développeurs à créer des sites web de portfolio professionnels. Les utilisateurs peuvent personnaliser les modèles, ajouter des projets et exporter leur portfolio en HTML statique.",
    liveDemo: "Démo en direct",
    viewCode: "Voir le code",
    
    // Contact Section
    contactTitle: "Contact",
    contactText: "N'hésitez pas à me contacter pour des collaborations ou simplement pour discuter !",
    contactCtaText: "Construisons quelque chose d'incroyable ensemble !",
    contactBtn: "Me contacter",
    
    // Footer
    footerText: "Créé avec passion par Yassine Majoul"
  }
};

let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  
  // Update active language button
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  const t = translations[lang];
  
  // Navigation
  document.getElementById("nav-about").innerText = t.navAbout;
  document.getElementById("nav-projects").innerText = t.navProjects;
  document.getElementById("nav-contact").innerText = t.navContact;
  
  // About Section
  document.getElementById("title-about").innerText = t.aboutTitle;
  document.getElementById("about-text").innerText = t.aboutText;
  document.getElementById("title-skills").innerText = t.skillsTitle;
  document.getElementById("skill-frontend").innerText = t.skillFrontend;
  document.getElementById("skill-backend").innerText = t.skillBackend;
  document.getElementById("skill-tools").innerText = t.skillTools;
  document.getElementById("title-experience").innerText = t.experienceTitle;
  document.getElementById("exp-1-title").innerText = t.exp1Title;
  document.getElementById("exp-1-company").innerText = t.exp1Company;
  document.getElementById("exp-1-date").innerText = t.exp1Date;
  document.getElementById("exp-2-title").innerText = t.exp2Title;
  document.getElementById("exp-2-company").innerText = t.exp2Company;
  document.getElementById("exp-2-date").innerText = t.exp2Date;
  document.getElementById("exp-3-title").innerText = t.exp3Title;
  document.getElementById("exp-3-company").innerText = t.exp3Company;
  document.getElementById("exp-3-date").innerText = t.exp3Date;
  document.getElementById("exp-desc-1").innerText = t.expDesc1;
  document.getElementById("exp-desc-2").innerText = t.expDesc2;
  document.getElementById("exp-desc-3").innerText = t.expDesc3;
  document.getElementById("title-education").innerText = t.educationTitle;
  document.getElementById("edu-1-title").innerText = t.edu1Title;
  document.getElementById("edu-1-company").innerText = t.edu1Company;
  document.getElementById("edu-1-date").innerText = t.edu1Date;
  document.getElementById("edu-desc-1").innerText = t.eduDesc1;
  
  // Projects Section
  document.getElementById("title-projects").innerText = t.projectsTitle;
  document.getElementById("project-1-title").innerText = t.project1Title;
  document.getElementById("project-1-desc").innerText = t.project1Desc;
  document.getElementById("project-2-title").innerText = t.project2Title;
  document.getElementById("project-2-desc").innerText = t.project2Desc;
  document.getElementById("project-3-title").innerText = t.project3Title;
  document.getElementById("project-3-desc").innerText = t.project3Desc;
  document.getElementById("project-4-title").innerText = t.project4Title;
  document.getElementById("project-4-desc").innerText = t.project4Desc;
  
  // Update all "Live Demo" and "View Code" links
  document.querySelectorAll('[id^="project-"][id$="-demo"]').forEach(el => {
    el.innerText = t.liveDemo;
  });
  document.querySelectorAll('[id^="project-"][id$="-code"]').forEach(el => {
    el.innerText = t.viewCode;
  });
  
  // Contact Section
  document.getElementById("title-contact").innerText = t.contactTitle;
  document.getElementById("contact-text").innerText = t.contactText;
  document.getElementById("contact-cta-text").innerText = t.contactCtaText;
  document.getElementById("contact-btn").innerText = t.contactBtn;
  
  // Footer
  document.getElementById("footer-text").innerText = t.footerText;
}

function showTab(tabName) {
  // Hide all tab contents
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Remove active class from all tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Show selected tab
  document.getElementById(`tab-${tabName}`).classList.add('active');
  
  // Add active class to clicked button
  event.target.classList.add('active');
}

// Initialize
document.getElementById("year").innerText = new Date().getFullYear();

// Set default language on load
window.addEventListener('DOMContentLoaded', () => {
  setLang('en');
});
