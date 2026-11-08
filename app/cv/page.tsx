import Link from "next/link";
import SkillGroup from "@/components/SkillGroup";

export default function CVPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-10 text-[#242424] md:px-12">

      {/* Back to Home */}
      <header className="mb-12">
        <Link href="/" className="text-sm hover:underline">
          ← Home
        </Link>
      </header>

      {/* Section Navigation */}
      <nav
        aria-label="CV sections"
        className="mb-12 flex flex-wrap gap-4 text-sm text-[#666666]"
      >
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#languages">Languages</a>
      </nav>

      {/* Introduction */}
      <section className="mb-16">
        <h1 className="mb-6 font-serif text-5xl md:text-6xl">
          Rovita Nuur 
          <br /> Ramadhani
        </h1>

        <p className="max-w-2xl leading-relaxed text-[#555555]">
          Aspiring Data Analyst with a background in
          Medical Informatics, healthcare processes,
          and data-driven problem solving.
        </p>
      </section>

      {/* Experience */}
      <section id="experience" className="mb-16 border-t pt-8">
        <h2 className="mb-8 text-2xl font-semibold">
          Experience
        </h2>

        <article className="mb-8">
          <h3 className="text-lg font-medium">
            Healthcare IT &amp; Process Analysis
          </h3>

          <p className="mt-1 text-sm text-[#777777]">
            Practical experience in clinical environments
          </p>

          <p className="mt-4 leading-relaxed">
            Supported administrative workflows,
            clinical documentation, and digital
            process analysis in healthcare settings.
          </p>
        </article>
      </section>

      {/* Education */}
      <section id="education" className="mb-16 border-t pt-8">
        <h2 className="mb-8 text-2xl font-semibold">
          Education
        </h2>

        <h3 className="text-lg font-medium">
          Medical Informatics
        </h3>

        <p className="mt-2 text-[#777777]">
          Technische Hochschule Mittelhessen
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="mb-16 border-t pt-8">
        <h2 className="mb-8 text-2xl font-semibold">
          Projects
        </h2>

        <h3 className="text-lg font-medium">
          Streaming Success Analysis
        </h3>

        <p className="mt-2 text-sm text-[#777777]">
          Python · Tableau · Data Analytics
        </p>

        <p className="mt-4 leading-relaxed">
          Analyzed music streaming data to identify
          relationships between playlist reach and
          streaming performance.
        </p>
      </section>

      {/* Skills */}
      <section 
        id="skills" 
        className="border-t border-[#DDDDDA] py-14"
       >
        <h2 className="mb-12 text-4xl font-bold tracking-tight">
          Skills
          <span className="mt-1 block h-1 w-20 bg-[#B8DCF4]" />
        </h2>
        
        <SkillGroup
          title="Programming Languages"
          skills={[
            "Python", "JavaScript", "Java", "PHP", "SQL", "HTML/CSS", "Swift"
          ]}
        />

        <SkillGroup
          title="Frameworks & Libraries"
          skills={[
            "React", "Vue.js", "Laravel", "Express.js", "JavaFX", "LangChain", "Tailwind CSS", "Bootstrap CSS"
          ]}
        />

        <SkillGroup
          title="Data Analytics & Visualization"
          skills={[
            "Excel","Power BI", "Dashboard Design"
          ]}
        />

        <SkillGroup
          title="Database & Development Tools"
          skills={[
            "PostgreSQL", "Git", "GitHub", "GitLab", "Postman", "Docker", "VS Code", 
          ]}
        />

        <SkillGroup
          title="Project Managment & Collaboration"
          skills={[
            "Jira", "Confluence", "Notion", "Trello", "Slack", "Microsoftt Teams"
          ]}
        />

        <SkillGroup
          title="Design & Creative Tools"
          skills={[
            "Figma", "Adobe Photoshop", "Adobe Lightroom", "Adobe Afteer Effects" ,"Blender", "DaVinci Resolve", "Canva", "Capcut"
          ]}
        />

        
      </section>


    
      {/* Languages */}
      <section id="languages" className="mb-16 border-t pt-8">
        <h2 className="mb-8 text-2xl font-semibold">
          Languages
        </h2>

        <p>Indonesian · English · German</p>
      </section>

      {/* Footer */}
      <footer className="border-t pt-8 text-sm text-[#777777]">
        © 2026 Rovita Nuur Ramadhani
      </footer>

    </main>
  );
}
