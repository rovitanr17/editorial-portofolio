
import Link from "next/link";
import { notFound } from "next/navigation";
import SkillGroup from "@/components/SkillGroup";
import { cvData, type Language } from "@/data/cv";

export const instant = false;
export function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "de" },
  ];
}


export default async function CVPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (lang !== "en" && lang !== "de") {
    notFound();
  }

  const t = cvData[lang as Language];

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-10 text-[#242424] md:px-12">

      {/* Header */}
      <header className="mb-12 flex items-center justify-between">
        <Link href={`/${lang}`} className="text-sm hover:underline">
          ← {t.navigation.home}
        </Link>

        <div className="flex gap-3 text-sm">
          <Link
            href="/en/cv"
            className={lang === "en" ? "font-bold underline" : "text-gray-400"}
          >
            EN
          </Link>

          <span>/</span>

          <Link
            href="/de/cv"
            className={lang === "de" ? "font-bold underline" : "text-gray-400"}
          >
            DE
          </Link>
        </div>
      </header>

      {/* Navigation */}
      <nav className="mb-12 flex flex-wrap gap-4 text-sm text-[#666666]">
        <a href="#experience">{t.navigation.education}</a>
        <a href="#education">{t.navigation.experience}</a>
        <a href="#projects">{t.navigation.projects}</a>
        <a href="#skills">{t.navigation.skills}</a>
        <a href="#languages">{t.navigation.languages}</a>
      </nav>

      {/* Profile */}
      <section className="mb-16">
        <h1 className="mb-6 font-serif text-5xl md:text-6xl">
          {t.profile.name}
        </h1>

        <p className="max-w-2xl leading-relaxed text-[#555555]">
          {t.profile.description}
        </p>
      </section>

      {/* Education */}
<section id="education" className="mb-16 border-t pt-8">
        <h2 className="mb-8 text-2xl font-semibold">
          {t.navigation.education}
        </h2>

  <div className="space-y-8">
    {t.education.map((entry) => (
       <article key={entry.title}>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-lg font-medium">{entry.title}</h3>

            {entry.period && (
              <p className="text-sm text-[#666666]">{entry.period}</p>
            )}
        </div>

        <p className="mt-2 text-[#666666]">{entry.description}</p>
      </article>
    ))}
  </div>
</section>

      {/* Experience */}
<section id="experience" className="mb-16 border-t pt-8">
  <h2 className="mb-8 text-2xl font-semibold">
    {t.navigation.experience}
  </h2>

  <div className="space-y-8">
    {t.experience.map((entry) => (
      <article key={`${entry.organization}-${entry.title}`}>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-lg font-medium">{entry.title}</h3>

          {entry.period && (
            <p className="text-sm text-[#666666]">{entry.period}</p>
          )}
        </div>

        <p className="mt-1 text-sm text-[#777777]">{entry.organization}</p>

        <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
          {entry.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </article>
    ))}
  </div>
</section>

      

      {/* Projects */}
      <section id="projects" className="mb-16 border-t pt-8">
        <h2 className="mb-8 text-2xl font-semibold">
          {t.navigation.projects}
        </h2>

        <h3 className="text-lg font-medium">
          {t.projects.title}
        </h3>

        <p className="mt-2 text-sm text-[#777777]">
          {t.projects.tools}
        </p>

        <p className="mt-4 leading-relaxed">
          {t.projects.description}
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-[#DDDDDA] py-14">
        <h2 className="mb-12 text-4xl font-bold tracking-tight">
          {t.navigation.skills}
          <span className="mt-1 block h-1 w-20 bg-[#B8DCF4]" />
        </h2>

        {t.skillCategories.map((category) => (
          <SkillGroup
            key={category.title}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </section>

      {/* Languages */}
      <section id="languages" className="mb-16 border-t pt-8">
        <h2 className="mb-8 text-2xl font-semibold">
          {t.navigation.languages}
        </h2>

        <p>{t.spokenLanguages}</p>
      </section>

      {/* Footer */}
      <footer className="border-t pt-8 text-sm text-[#777777]">
        © 2026 {t.profile.name}
      </footer>

    </main>
  );
}
