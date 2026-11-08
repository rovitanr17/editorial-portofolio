
export const cvData = {
  en: {
    navigation: {
      home: "Home",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      skills: "Skills",
      languages: "Languages",
    },

    profile: {
      name: "Rovita Nuur Ramadhani", 
      description:
        "Aspiring Data Analyst with a background in Medical Informatics, healthcare processes, and data-driven problem solving.",
    },

    experience: {
      title: "Healthcare IT & Process Analysis",
      subtitle: "Practical experience in clinical environments",
      description:
        "Supported administrative workflows, clinical documentation, and digital process analysis in healthcare settings.",
    },

    education: {
      title: "Medical Informatics",
      institution: "Technische Hochschule Mittelhessen",
    },

    projects: {
      title: "Streaming Success Analysis",
      tools: "Python · Tableau · Data Analytics",
      description:
        "Analyzed music streaming data to identify relationships between playlist reach and streaming performance.",
    },

    skillCategories: [
      {
        title: "Programming Languages",
        skills: [
          "Python", "JavaScript", "Java", "PHP",
          "SQL", "HTML/CSS", "Swift",
        ],
      },
      {
        title: "Frameworks & Libraries",
        skills: [
          "React", "Vue.js", "Laravel", "Express.js",
          "JavaFX", "LangChain", "Tailwind CSS",
          "Bootstrap CSS",
        ],
      },
      {
        title: "Data Analytics & Visualization",
        skills: ["Excel", "Power BI", "Dashboard Design"],
      },
      {
        title: "Database & Development Tools",
        skills: [
          "PostgreSQL", "Git", "GitHub", "GitLab",
          "Postman", "Docker", "VS Code",
        ],
      },
      {
        title: "Project Management & Collaboration",
        skills: [
          "Jira", "Confluence", "Notion", "Trello",
          "Slack", "Microsoft Teams",
        ],
      },
      {
        title: "Design & Creative Tools",
        skills: [
          "Figma", "Adobe Photoshop", "Adobe Lightroom",
          "Adobe After Effects", "Blender",
          "DaVinci Resolve", "Canva", "CapCut",
        ],
      },
    ],

    spokenLanguages: "Indonesian · English · German",
  },

  de: {
    navigation: {
      home: "Startseite",
      experience: "Berufserfahrung",
      education: "Ausbildung",
      projects: "Projekte",
      skills: "Kenntnisse",
      languages: "Sprachen",
    },

    profile: {
      name: "Rovita Nuur Ramadhani",
      description:
        "Angehende Data Analystin mit einem Hintergrund in Medizinischer Informatik, klinischen Prozessen und datenbasierter Problemlösung.",
    },

    experience: {
      title: "IT im Gesundheitswesen & Prozessanalyse",
      subtitle: "Praktische Erfahrung im klinischen Umfeld",
      description:
        "Unterstützung administrativer Abläufe, klinischer Dokumentationsprozesse und der Analyse digitaler Arbeitsabläufe im Gesundheitswesen.",
    },

    education: {
      title: "Medizinische Informatik",
      institution: "Technische Hochschule Mittelhessen",
    },

    projects: {
      title: "Streaming Success Analysis",
      tools: "Python · Tableau · Datenanalyse",
      description:
        "Analyse von Musikstreaming-Daten zur Untersuchung des Zusammenhangs zwischen Playlist-Reichweite und Streaming-Erfolg.",
    },

    skillCategories: [
      {
        title: "Programmiersprachen",
        skills: [
          "Python", "JavaScript", "Java", "PHP",
          "SQL", "HTML/CSS", "Swift",
        ],
      },
      {
        title: "Frameworks & Bibliotheken",
        skills: [
          "React", "Vue.js", "Laravel", "Express.js",
          "JavaFX", "LangChain", "Tailwind CSS",
          "Bootstrap CSS",
        ],
      },
      {
        title: "Datenanalyse & Visualisierung",
        skills: ["Excel", "Power BI", "Dashboard Design"],
      },
      {
        title: "Datenbanken & Entwicklungstools",
        skills: [
          "PostgreSQL", "Git", "GitHub", "GitLab",
          "Postman", "Docker", "VS Code",
        ],
      },
      {
        title: "Projektmanagement & Zusammenarbeit",
        skills: [
          "Jira", "Confluence", "Notion", "Trello",
          "Slack", "Microsoft Teams",
        ],
      },
      {
        title: "Design & Kreativtools",
        skills: [
          "Figma", "Adobe Photoshop", "Adobe Lightroom",
          "Adobe After Effects", "Blender",
          "DaVinci Resolve", "Canva", "CapCut",
        ],
      },
    ],

    spokenLanguages: "Indonesisch · Englisch · Deutsch",
  },
};

export type Language = keyof typeof cvData;
