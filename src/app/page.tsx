import About from "@/components/About";
import Breadcrumb from "@/components/Breadcrumb";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Sidebar from "@/components/Sidebar";
import TopMenu from "@/components/TopMenu";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 sm:px-10 md:px-14 lg:px-20">
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between bg-background">
        <Breadcrumb />
        <TopMenu />
      </header>

      <div className="lg:grid lg:grid-cols-[minmax(0,_5fr)_minmax(0,_7fr)] lg:gap-14">
        <Sidebar />

        <main id="content" className="pb-16 pt-8 lg:pb-24 lg:pt-8">
          <div className="flex flex-col gap-24">
            <Section id="about" label="01 — About">
              <About />
            </Section>

            <Section id="experience" label="02 — Experience">
              <Experience />
            </Section>

            <Section id="projects" label="03 — Projects">
              <Projects />
            </Section>
          </div>
        </main>
      </div>
    </div>
  );
}

function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="section-label mb-6">{label}</h2>
      {children}
    </section>
  );
}
