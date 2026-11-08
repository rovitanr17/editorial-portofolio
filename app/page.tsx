
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-[#F7F6F2] px-8 py-10 text-[#202020] md:px-20">
      <header className="flex justify-end">
        <nav aria-label="Language selection" className="flex gap-3 text-sm">
           <Link href="/en/cv" lang="en" className="hover:underline">
             EN
           </Link>

          <span>/</span>

          <Link href="/de/cv" lang="de" className="hover:underline">
             DE
         </Link>
       </nav>
     </header>


      {/* Main Content */}
      <section className="flex flex-1 flex-col justify-center">

        {/* Name */}
        <h1 className="font-serif text-7xl leading-[0.95] tracking-tight md:text-9xl">
          Rovita Nuur
          <br />
          Ramadhani.
        </h1>

        {/* Navigation */}
        <nav
          aria-label="Main navigation"
          className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-base"
        >
          <Link href="/cv" className="hover:underline">
            CV 
          </Link>

          <a
            href="https://substack.com/@matchaudoing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Blog 
          </a>

          <a
            href="https://github.com/rovitanr17"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub 
          </a>

          <a
            href="https://www.linkedin.com/in/YOURPROFILE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn 
          </a>
        </nav>

      </section>

      {/* Footer */}
      <footer className="py-6 text-sm text-[#77736C]">
        Data Analytics &amp; Medical Informatics
      </footer>

    </main>
  );
}
