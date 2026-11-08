
import Link from "next/link";
import { notFound } from "next/navigation";

// Allow blocking navigation for this route
export const instant = false;
export function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "de" },
  ];
}

// Homepage translations
const translations = {
  en: {
    subtitle: "Data Analytics & Medical Informatics",
    cv: "CV",
    blog: "Blog",
    footer: "Exploring data, technology & healthcare",
  },

  de: {
    subtitle: "Datenanalyse & Medizinische Informatik",
    cv: "Lebenslauf",
    blog: "Blog",
    footer: "Daten, Technologie & Gesundheitswesen",
  },
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  // Read language from URL
  const { lang } = await params;

  // Only allow English and German
  if (lang !== "en" && lang !== "de") {
    notFound();
  }

  // Select translation
  const t = translations[lang];

  return (
    <main className="flex min-h-screen flex-col bg-[#F7F6F2] px-8 py-10 text-[#202020] md:px-20">

      {/* Language Switcher */}
      <header className="flex justify-end">
        <nav
          aria-label="Language selection"
          className="flex gap-3 text-sm"
        >
          <Link
            href="/en"
            lang="en"
            aria-current={lang === "en" ? "page" : undefined}
            className={lang === "en" ? "font-bold" : "text-gray-400"}
          >
            EN
          </Link>

          <span>/</span>

          <Link
            href="/de"
            lang="de"
            aria-current={lang === "de" ? "page" : undefined}
            className={lang === "de" ? "font-bold" : "text-gray-400"}
          >
            DE
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <section className="flex flex-1 flex-col justify-center">

        <h1 className="font-serif text-7xl leading-[0.95] tracking-tight md:text-9xl">
          Rovita Nuur
          <br />
          Ramadhani.
        </h1>

        <p className="mt-8 text-lg text-[#666666]">
          {t.subtitle}
        </p>

        {/* Navigation */}
        <nav
          aria-label="Portfolio navigation"
          className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-base"
        >
          <Link href={`/${lang}/cv`} className="hover:underline">
            {t.cv} ↗
          </Link>

          <a
            href="https://YOURBLOG.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {t.blog} ↗
          </a>

          <a
            href="https://github.com/YOURUSERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub ↗
          </a>

          <a
            href="https://linkedin.com/in/YOURPROFILE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn ↗
          </a>
        </nav>
      </section>

      {/* Footer */}
      <footer className="py-6 text-sm text-[#77736C]">
        {t.footer}
      </footer>

    </main>
  );
}
