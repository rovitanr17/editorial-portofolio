import { title } from "process";

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

    
     education: [
      {title: "Bachelor´s studies in Digital Medicine",
      institution: "Technische Hochschule Mittelhessen",
      description: "Bachelor´s studies in Digital Medicine. Previously studied Medical Informatics (2021-2026)"
      },
      
      { title:"Studienkolleg Hochschule Wismar",
        period:"2020-2021",
        description:"Festellungsprüfung (University entrance qualification exam)",
      },

      { title:"SMAN 7 Surakarta",
        period:"2015-2018",
        description:"Upper secondary education with a focus on natural science",
      },
    
     ],
    

    experience: {
      title: "Healthcare IT & Process Analysis",
      subtitle: "Practical experience in clinical environments",
      description:
        "Supported administrative workflows, clinical documentation, and digital process analysis in healthcare settings.",
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
    

    education: [
    {
      title: "Bachelorstudium in Digitale Medizin",
      institution: "Technische Hochschule Mittelhessen",
      description:"Bachelorstudium Digital Medizin. Zuvor Studium der Medizinischen Informatik (2021-2026)",
    },

    { title:"Studienkolleg Hochschule Wismar",
        period:"2020-2021",
        description:"Festellungsprüfung",
      },

      { title:"SMAN 7 Surakarta",
        period:"2015-2018",
        description:"Oberschule mit naturwissenschaftlichem Schwerpunkt",
      },


  ],

    experience: {
      title: "IT im Gesundheitswesen & Prozessanalyse",
      subtitle: "Praktische Erfahrung im klinischen Umfeld",
      description:
        "Unterstützung administrativer Abläufe, klinischer Dokumentationsprozesse und der Analyse digitaler Arbeitsabläufe im Gesundheitswesen.",
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
