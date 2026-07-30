export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  badge: string;
  category: "Web" | "Mobile" | "Desktop";
  lien?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  type: "internship" | "work";
  bullets: string[];
}

export interface FormationItem {
  titre: string;
  ecole: string;
  date: string;
}

export interface ActivityItem {
  title: string;
  icon: string;
  items: string[];
}

export const DATA = {
  header: {
    name: "Marina Kamel",
    title: "Développeuse de logiciels",
    location: "Canada",
    intro: "Passionnée par la création de solutions web modernes, mobiles et performantes."
  },
  about: {
    title: "Salut! 👋",
    subtitle: "Je suis Marina,",
    description: "Développeuse Full-Stack passionnée par la création d'applications web, mobiles et de bureau. Maîtrise des frameworks modernes tels que React, Next.js et Flutter, ainsi que du développement backend avec Node.js et la conteneurisation avec Docker. Reconnue pour ma capacité à résoudre des problèmes complexes, mon esprit de collaboration et mon expérience en environnement Agile (Scrum).",
    objective: "Poursuivre ma carrière comme Software Developer et travailler sur des projets collaboratifs innovants."
  },
  contact: {
    email: "marinakamel909@gmail.com",
    linkedin: "https://www.linkedin.com/in/marina-kamel-a7a08a240",
    github: "https://github.com/MarinaKamel-coder"
  }
};

export const CURRENT_ACTIVITIES: ActivityItem[] = [
  {
    title: "En cours d'apprentissage",
    icon: "📘",
    items: [
      "Intégration de l'IA dans les applications web", 
      "Patterns TypeScript avancés"
    ]
  },
  {
    title: "En cours de développement",
    icon: "🛠️",
    items: [
      "CADS - Client Accounting Data Store", 
      "Application mobile MyInventory"
    ]
  },
  {
    title: "En cours d'exploration",
    icon: "🚀",
    items: [
      "Clean Architecture & Design Patterns", 
      "Architecture des systèmes frontend"
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Développeuse Logiciel Full-Stack (Stagiaire)",
    company: "Pandora Brand",
    period: "Mai 2026 - Juil 2026",
    location: "Québec, Canada",
    type: "internship",
    bullets: [
      "Développement et optimisation d'un site WordPress multilingue (FR/EN) avec PHP, Tailwind CSS et XAMPP.",
      "Analyse de cahiers de charges et développement de trois applications web transactionnelles : Proximity Planner, Proximity Quote et Proximity Deliver.",
      "Conception d'APIs REST indépendantes, migrations de bases de données sur Supabase (PostgreSQL) et intégration dans un CRM d'entreprise.",
      "Refactoring d'architecture pour découpler les APIs conformément aux spécifications techniques."
    ]
  },
  {
    role: "Adjointe Administrative",
    company: "Fady Mikhael Comptable",
    period: "Mars 2020 – Mai 2025",
    location: "Saint-Hubert, QC, Canada",
    type: "work",
    bullets: [
      "Gestion rigoureuse des dossiers clients, traitement de données critiques et optimisation de flux d'informations internes.",
      "Accueillir et diriger les clients de manière professionnelle, préparer les factures et gérer les paiements.",
      "Effectuer des tests sur les bases de données clients et collaborer à la création d’une page Web.",
      "Collaboration directe avec les équipes techniques pour exprimer les besoins d'automatisation des processus administratifs."
    ]
  },
  {
    role: "Spécialiste en Support Informatique",
    company: "7G Seven Group Co.",
    period: "Juin 2018 – Nov. 2019",
    location: "Égypte",
    type: "work",
    bullets: [
      "Répondre aux requêtes des usagers et les documenter rigoureusement.",
      "Diagnostiquer les postes, les applications et les problèmes réseau à distance.",
      "Tester de nouveaux logiciels, appliquer les correctifs et offrir un support de premier niveau aux usagers TI et TIC."
    ]
  },
  {
    role: "Stagiaire en Télécommunication",
    company: "Orange Égypte",
    period: "Juin 2017 – Sep. 2017",
    location: "Égypte",
    type: "internship",
    bullets: [
      "Fournir un support technique par téléphone et en personne.",
      "Assister à la création d’outils collaboratifs sur mesure (SharePoint).",
      "Participer activement au déploiement d’applications de l'entreprise."
    ]
  }
];

export const FORMATIONS: FormationItem[] = [
  {
    titre: "AEC en Développement de logiciels",
    ecole: "Collège de Maisonneuve, Montréal, QC",
    date: "2025 – 2026"
  },
  {
    titre: "HTML, CSS, JavaScript et React",
    ecole: "Udemy",
    date: "2023 - 2024"
  },
  {
    titre: "Francisation",
    ecole: "Cégep St-Jean-Sur-Richelieu",
    date: "2021 – 2022"
  },
  {
    titre: "Baccalauréat en Ingénierie Informatique",
    ecole: "Université de Helwan, Égypte",
    date: "2012 – 2018"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "📝 Tax Manager - Gestion Fiscale",
    description: "Application web full-stack permettant la gestion des dossiers fiscaux, l'upload sécurisé de documents et le suivi du statut des demandes en temps réel. Inclut un tableau de bord admin.",
    tech: ["Next.js", "TypeScript", "Prisma", "UploadThing", "Tailwind CSS"],
    badge: "Featured",
    category: "Web",
    lien: "https://fadymikhail.vercel.app"
  },
  {
    title: "📊 CADS (Client Accounting Data Store)",
    description: "Une solution full-stack complète conçue pour automatiser la gestion des dossiers clients et les alertes fiscales. Ce système centralise l'accès aux données comptables critiques et le stockage sécurisé.",
    tech: ["React", "Node.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Clerk", "Docker"],
    badge: "Featured",
    category: "Web",
    lien: "https://cads-trust.vercel.app"
  },
  {
    title: "🎓 ApprentisSage - Plateforme E-Learning",
    description: "Plateforme d'apprentissage reliée à l'inscription sécurisée aux formations, l'affichage séquentiel des leçons et des évaluations par quiz pour les étudiants.",
    tech: ["React", "Node.js", "TypeScript", "Tailwind CSS"],
    badge: "LMS Platform",
    category: "Web",
    lien: "https://apprentissage-six.vercel.app"
  },
  {
    title: "📦 MyInventory - Gestion d’inventaire mobile",
    description: "Application mobile intuitive de gestion d'inventaire pour les déménagements. Intègre un système de génération et de scan de codes QR permettant de répertorier instantanément le contenu des cartons.",
    tech: ["Flutter", "Dart", "Mobile UX", "QR Code API"],
    badge: "Mobile App",
    category: "Mobile",
    lien: "https://github.com/MarinaKamel-coder/myinventory.git"
  },
  {
    title: "SOS‑BESOIN",
    badge: "Full‑Stack Transactionnel",
    description: "Plateforme Web transactionnelle permettant à des clients de publier des demandes urgentes (services tech, culturels, académiques) et à des prestataires de soumettre des offres. Intègre un flux de réservation sécurisé avec paiement en ligne et garantit l'intégrité transactionnelle (ACID) des données lors des réservations.",
    tech: ["Next.js (App Router)", "TypeScript", "PostgreSQL (Neon)", "Prisma ORM", "Clerk", "Stripe", "Zod", "React Hook Form"],
    category: "Web",
    lien: "https://sos-besoin.vercel.app" 
  },
  {
    title: "🏆 Meetup Sportif",
    badge: "Hackathon 48h", 
    description: "Plateforme de gestion de ligues sportives communautaires développée en un temps record. Permet aux organisateurs et aux joueurs de planifier des tournois, de gérer des équipes dynamiques et d'orchestrer les demandes d'adhésion avec un système de paiement intégré.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Clerk", "Stripe", "Zod", "React Hook Form"],
    category: "Web",
    lien: "https://meetup-sportif.vercel.app" 
  },
    {
    title: "🌱 GreenCommute",
    description: "Plateforme de covoiturage écologique. Calculez l'impact CO2, gérez les réservations en temps réel et créez une communauté engagée autour du transport écoresponsable.",
    tech: ["React", "Node.js", "TypeScript"],
    badge: "Web App",
    category: "Web",
    lien: "https://green-commute-eight.vercel.app"
  },
    {
    title: "🌶️ Catalogue d’Épice",
    description: "Application web dynamique pour afficher et gérer un catalogue d’épices sur un serveur, avec un système de filtrage et de recherche efficaces.",
    tech: ["HTML", "CSS", "JavaScript", "JSON", "Bootstrap"],
    badge: "Web Dynamic",
    category: "Web",
    lien: "https://app-epices.onrender.com/"
  },
  {
    title: "JewelFlow 💎",
    badge: "Architecture Multi‑Services & DevOps",
    description: "Application de gestion d'inventaire de bijouterie fine. L'accent principal du projet est mis sur la conteneurisation complète d'une architecture découplée (Frontend, Backend, NoSQL) communiquant au sein d'un réseau isolé avec un reverse proxy faisant office de passerelle unique.",
    tech: ["Docker Compose", "Nginx (Gateway)", "React (Vite)", "Node.js (Express)", "MongoDB"],
    category: "Web",
    lien: "https://github.com/MarinaKamel-coder/bijouterie-JewelFlow.git" 
  },

  {
    title: "📁 Gestionnaire de Cabinet Comptable",
    description: "Une application de bureau robuste et intuitive développée en Python 3 avec le framework PyQt6 permettant d'optimiser la gestion et le suivi des dossiers clients.",
    tech: ["Python", "PyQt6"],
    badge: "Desktop App",
    category: "Desktop",
    lien: "https://github.com/MarinaKamel-coder/CADS-desktop.git"
  },
  {
    title: "👤 Portfolio Personnel",
    description: "Site web moderne pour présenter mes expériences, mes formations et mes compétences techniques de manière claire et attractive.",
    tech: ["HTML", "CSS", "JavaScript"],
    badge: "Web static",
    category: "Web",
    lien: "https://marinakamel-coder.github.io/portfolio/"
  },
  {
    title: "🌊 Événement Niagara",
    description: "Application web interactive pour gérer et présenter un événement mémorable aux chutes du Niagara, avec une interface conviviale et responsive.",
    tech: ["HTML", "CSS", "JavaScript"],
    badge: "Web static",
    category: "Web",
    lien: "https://marinakamel-coder.github.io/Niagara_event/"
  }
];

export const DETAILED_SKILLS = {
  "Développement Frontend & Mobile": [
    { nom: "HTML5", niveau: "Avancé" },
    { nom: "CSS3", niveau: "Avancé" },
    { nom: "JavaScript", niveau: "Avancé" },
    { nom: "TypeScript", niveau: "Avancé" },
    { nom: "React", niveau: "Avancé" },
    { nom: "Next.js", niveau: "Avancé" },
    { nom: "Flutter", niveau: "Avancé" },
    { nom: "Dart", niveau: "Avancé" },
    { nom: "Zod", niveau: "Avancé" }
  ],
  "Développement Backend & API": [
    { nom: "Node.js", niveau: "Avancé" },
    { nom: "Rust", niveau: "Intermédiaire" },
    { nom: "REST API", niveau: "Avancé" },
    { nom: "JWT", niveau: "Avancé" },
    { nom: "Clerk", niveau: "Avancé" },
    { nom: "Stackauth", niveau: "Intermédiaire" },
    { nom: "Stripe (Paiements)", niveau: "Avancé" },
    { nom: "Webhooks", niveau: "Avancé" }
  ],
  "Applications de Bureau": [
    { nom: "Python (PyQt)", niveau: "Avancé" },
    { nom: "Java (JavaFX)", niveau: "Avancé" }
  ],
  "Bases de données": ["MySQL", "SQL", "PostgreSQL", "Neon DB", "MongoDB"],
  "Outils & DevOps": [
    { nom: "Docker & Compose", niveau: "Avancé" },
    { nom: "Git / GitHub", niveau: "Avancé" },
    { nom: "VS Code", niveau: "Avancé" },
    { nom: "CI/CD", niveau: "Avancé" }
  ],
  "Gestion & Agilité": ["Agile (Scrum)", "Sprints", "Backlog", "User Stories", "Communication"],
  "Autres": ["Français, Anglais, Arabe", "Word, Excel, PowerPoint", "SharePoint"]
};