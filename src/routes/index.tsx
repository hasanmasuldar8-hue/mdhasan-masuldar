import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, MapPin, ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const TITLE = "Md Hasan — Data Analyst & Business Intelligence Specialist";
const DESC =
  "Portfolio of Md Hasan: SQL Server, Python, Power BI dashboards, advanced Excel modeling and executive-ready analytics reporting.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = ["Home", "About", "Services", "Experience", "Projects", "Contact"];

const SERVICES = [
  {
    n: "01",
    title: "Data Processing & Pipelines",
    body: "Extraction and transformation in MS SQL Server, Python wrangling, rigorous cleansing and pragmatic schema design.",
  },
  {
    n: "02",
    title: "BI & Dashboarding",
    body: "Power BI dashboards on star-schema models with tuned DAX, drill-throughs and companion Excel reporting.",
  },
  {
    n: "03",
    title: "Statistical Analysis",
    body: "Probability modeling, hypothesis testing and MoM / YoY frameworks that separate signal from noise.",
  },
  {
    n: "04",
    title: "Strategic Recommendations",
    body: "Executive reporting distilled into the challenge, the insight and the recommended action. No filler.",
  },
  {
    n: "05",
    title: "Rapid Excel Modeling",
    body: "Spreadsheet auditing, formula hardening and quick-turn sales or finance templates for same-day answers.",
  },
];

const SKILLS = [
  {
    years: "Querying",
    title: "SQL & Scripting",
    items: ["MS SQL Server", "CTEs", "Window Functions", "Python", "Pandas", "NumPy"],
  },
  {
    years: "Visualization",
    title: "Business Intelligence",
    items: ["Power BI", "DAX", "Star Schema", "Drill-Throughs", "NovyPro"],
  },
  {
    years: "Reporting",
    title: "Excel & Strategy",
    items: ["Advanced Excel", "XLOOKUP", "Dynamic Pivots", "Executive PPT", "EDA"],
  },
];

const PROJECTS = [
  {
    title: "Retail Sales Performance Suite",
    tags: ["SQL Server", "Power BI", "DAX"],
    challenge: "Fragmented regional sales data with no single source of truth for monthly reviews.",
    insight: "Unified star-schema model surfacing MoM and YoY movement per branch and category.",
    recommendation: "Focus incentive spend on the segments driving repeatable margin, not volume.",
  },
  {
    title: "Customer Churn Signal Analysis",
    tags: ["Python", "Pandas", "Statistics"],
    challenge: "Churn reported as a lagging aggregate with no early-warning indicators.",
    insight: "Hypothesis testing isolates behavioural drops that precede cancellation windows.",
    recommendation: "Trigger retention outreach on the validated leading indicators only.",
  },
  {
    title: "Operations KPI Excel Model",
    tags: ["Excel", "XLOOKUP", "Executive PPT"],
    challenge: "Manual month-end consolidation consuming days of analyst time.",
    insight: "Automated dynamic pivot model reconciling operational and finance inputs.",
    recommendation: "Standardise the template across teams and free the cycle for analysis.",
  },
];

const MARQUEE = [
  "SQL Server",
  "Power BI",
  "Python",
  "DAX",
  "Advanced Excel",
  "Pandas",
  "Statistics",
  "Data Modeling",
  "Executive Reporting",
];

function Reveal({
  children,
  className,
  delay = 0,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}

function SectionTitle({ eyebrow, children }: { eyebrow?: string; children: React.ReactNode }) {
  return (
    <Reveal className="flex flex-col items-center">
      {eyebrow && (
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground backdrop-blur">
          <Sparkles className="h-3 w-3 text-accent" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance text-center font-display text-3xl uppercase leading-[0.95] md:text-5xl">
        {children}
      </h2>
      <span className="mt-6 h-px w-24 bg-[image:var(--gradient-accent)]" />
    </Reveal>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
      {children}
    </span>
  );
}

function Index() {
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <a href="#home" className="font-serif text-xl italic">
            Md Hasan.
          </a>
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <li key={n}>
                <a
                  href={`#${n.toLowerCase()}`}
                  className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {n}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[image:var(--gradient-accent)] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="rounded-full px-5">
              <a href="#contact">Contact</a>
            </Button>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border lg:hidden"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <ul className="border-t border-border bg-background/95 px-6 py-4 lg:hidden">
            {NAV.map((n) => (
              <li key={n}>
                <a
                  href={`#${n.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {n}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>

      <main>
        <section
          id="home"
          className="relative overflow-hidden pb-16 pt-16 md:pb-24 md:pt-20"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        >
          <div className="pointer-events-none absolute inset-0 grain-grid opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]" />
          <div className="relative mx-auto w-full max-w-6xl px-6">
            <p className="text-gradient text-center font-serif text-6xl italic leading-none md:text-8xl">
              Hey, there
            </p>

            <div className="mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-card/80 px-4 py-2 text-xs font-medium shadow-[var(--shadow-glow)] backdrop-blur">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  Available for new opportunities
                </span>
                <h1 className="mt-8 font-display text-6xl uppercase leading-[0.88] md:text-8xl">
                  I am
                  <br />
                  Md Hasan
                </h1>
              </Reveal>
              <Reveal delay={120} className="md:max-w-xs">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Specialized in SQL Server, Python, Power BI, statistical validation and
                  executive-ready reporting.
                </p>
                <p className="mt-6 font-display text-2xl uppercase leading-[0.95] md:text-4xl">
                  Data
                  <br />
                  Analyst &
                  <br />
                  BI Specialist
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="rounded-full px-6">
                    <a href="#projects">View work</a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full px-6">
                    <a href="#contact">Get in touch</a>
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <div className="overflow-hidden border-y border-border bg-card/40 py-4">
          <div className="marquee-track gap-10 whitespace-nowrap">
            {[...MARQUEE, ...MARQUEE].map((m, i) => (
              <span
                key={`${m}-${i}`}
                className="flex items-center gap-10 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground"
              >
                {m}
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
            ))}
          </div>
        </div>

        <section id="services" className="scroll-mt-20 border-t border-border py-20 md:py-28">
          <div className="mx-auto w-full max-w-6xl px-6">
            <SectionTitle eyebrow="Services">I can help you with</SectionTitle>
            <div className="mt-14 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
              {SERVICES.map((s, i) => (
                <Reveal key={s.n} delay={i * 80}>
                  <div className="group hover-lift h-full rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
                    <p className="font-display text-4xl text-muted-foreground/25 transition-colors group-hover:text-accent/70">
                      {s.n}
                    </p>
                    <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 border-t border-border py-20 md:py-28">
          <div className="mx-auto w-full max-w-6xl px-6">
            <SectionTitle eyebrow="About">Turning data into decisions</SectionTitle>
            <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
              <Reveal>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I’m a Data Analyst who loves solving data puzzles — extracting structured datasets
                  with SQL Server, manipulating raw files with Python, and validating trends with
                  statistical probability. I craft interactive Power BI dashboards, automated Excel
                  models and clean executive decks that bring clarity to complex business
                  challenges.
                </p>
                <div className="mt-10 grid grid-cols-2 gap-8">
                  <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
                    <p className="font-display text-5xl">5+</p>
                    <p className="mt-1 text-sm text-muted-foreground">Core analytics services</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
                    <p className="font-display text-5xl">8.98</p>
                    <p className="mt-1 text-sm text-muted-foreground">CGPA, First Class Distinction</p>
                  </div>
                </div>
              </Reveal>
              <Reveal
                delay={120}
                className="hover-lift rounded-3xl border border-border p-10"
              >
                <div style={{ backgroundImage: "var(--gradient-hero)" }} className="-m-10 rounded-3xl p-10">
                <ul className="space-y-5 text-sm">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                    <span className="text-muted-foreground">
                      Chittapur, Dist: Kalaburagi, 585 211, Karnataka, India
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                    <a
                      href="mailto:hasanmasuldar8@gmail.com"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      hasanmasuldar8@gmail.com
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Linkedin className="mt-0.5 h-4 w-4 shrink-0" />
                    <a
                      href="https://www.linkedin.com/in/md-hasan-masuldar"
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      md-hasan-masuldar
                    </a>
                  </li>
                </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-20 border-t border-border py-20 md:py-28">
          <div className="mx-auto w-full max-w-6xl px-6">
            <SectionTitle eyebrow="Toolkit">Experience & skills</SectionTitle>
            <div className="mt-14 border-t border-border">
              {SKILLS.map((s, i) => (
                <Reveal key={s.title} delay={i * 80}>
                <div className="group grid gap-4 border-b border-border px-2 py-7 transition-colors hover:bg-card/60 md:grid-cols-[160px_1fr_1.2fr] md:items-center">
                  <p className="text-sm text-muted-foreground">{s.years}</p>
                  <p className="text-lg font-semibold transition-transform duration-300 group-hover:translate-x-1">
                    {s.title}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((i) => (
                      <Pill key={i}>{i}</Pill>
                    ))}
                  </div>
                </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              <Reveal className="glass-card rounded-3xl p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Tenure completed
                </p>
                <h3 className="mt-3 text-xl font-semibold">
                  Junior Data Analyst / Sales Operations Specialist
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">Canon Sales & Service Partner</p>
                <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                  {[
                    "Managed CRM pipeline data and lead-stage hygiene across the sales cycle.",
                    "Tracked event and campaign data to measure conversion contribution.",
                    "Cleaned and reconciled raw transaction files ahead of reporting.",
                    "Produced month-end sales KPI reports for leadership review.",
                    "Built dashboards translating operational activity into decisions.",
                  ].map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={120} className="glass-card rounded-3xl p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Education
                </p>
                <h3 className="mt-3 text-xl font-semibold">
                  Diploma in Electronics and Communication Engineering
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  KCT Polytechnic College, Kalaburagi
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Pill>8.98 CGPA</Pill>
                  <Pill>First Class with Distinction</Pill>
                  <Pill>Class Representative</Pill>
                  <Pill>Student Mentor</Pill>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-20 border-t border-border py-20 md:py-28">
          <div className="mx-auto w-full max-w-6xl px-6">
            <SectionTitle eyebrow="Case studies">Recent projects</SectionTitle>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((p, i) => (
                <Reveal key={p.title} delay={i * 100} className="h-full">
                <article
                  className="hover-lift flex h-full flex-col rounded-3xl border border-border p-8"
                  style={{ backgroundImage: "var(--gradient-hero)" }}
                >
                  <span className="w-fit rounded-full bg-card px-3 py-1 text-[11px] font-semibold uppercase tracking-wider">
                    In development
                  </span>
                  <h3 className="mt-5 text-xl font-semibold leading-snug">{p.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Pill key={t}>{t}</Pill>
                    ))}
                  </div>
                  <dl className="mt-6 space-y-4 text-sm">
                    {[
                      ["The Challenge", p.challenge],
                      ["The Insight", p.insight],
                      ["The Recommendation", p.recommendation],
                    ].map(([k, v]) => (
                      <div key={k}>
                        <dt className="text-xs font-semibold uppercase tracking-wider">{k}</dt>
                        <dd className="mt-1 leading-relaxed text-muted-foreground">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 border-t border-border py-20 md:py-28">
          <div className="mx-auto w-full max-w-6xl px-6">
            <SectionTitle eyebrow="Contact">Let’s work together</SectionTitle>
            <div className="mt-14 grid gap-6 lg:grid-cols-5">
              <Reveal className="lg:col-span-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-4 rounded-3xl border border-border bg-card/70 p-8 backdrop-blur"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input required placeholder="Name" aria-label="Name" />
                  <Input required type="email" placeholder="Email" aria-label="Email" />
                </div>
                <Input required placeholder="Subject" aria-label="Subject" />
                <Textarea required rows={5} placeholder="Message" aria-label="Message" />
                <Button type="submit" size="lg" className="w-full rounded-full sm:w-auto">
                  Send Message
                </Button>
                {sent && (
                  <p className="text-sm text-muted-foreground">
                    Thanks — your message is ready to send. I’ll get back to you shortly.
                  </p>
                )}
              </form>
              </Reveal>
              <Reveal
                delay={120}
                className="hover-lift space-y-5 rounded-3xl border border-border p-8 lg:col-span-2"
                style={{ backgroundImage: "var(--gradient-hero)" }}
              >
                <a
                  href="mailto:hasanmasuldar8@gmail.com"
                  className="flex items-start gap-3 text-sm transition-opacity hover:opacity-70"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  hasanmasuldar8@gmail.com
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/md-hasan-masuldar"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 text-sm transition-opacity hover:opacity-70"
                >
                  <Linkedin className="mt-0.5 h-4 w-4 shrink-0" />
                  linkedin.com/in/md-hasan-masuldar
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <p className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  Chittapur, Kalaburagi, Karnataka, India
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Md Hasan. All rights reserved.</p>
          <p>Data Analyst | Business Intelligence & Analytics</p>
        </div>
      </footer>
    </div>
  );
}
