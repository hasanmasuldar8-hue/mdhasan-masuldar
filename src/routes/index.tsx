import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, MapPin, ArrowRight } from "lucide-react";

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

const METRICS = [
  { n: "01", t: "End-to-End Data Pipelines", s: "SQL & Python" },
  { n: "02", t: "Interactive BI Dashboards", s: "Power BI & DAX" },
  { n: "03", t: "Statistical Validation", s: "Probability & Hypothesis Testing" },
  { n: "04", t: "Executive Decision Support", s: "PPT & Ad-Hoc Excel" },
];

const STACK = [
  {
    title: "Querying & Scripting",
    items: [
      "MS SQL Server",
      "CTEs",
      "Window Functions",
      "Complex Joins",
      "Python",
      "Pandas",
      "NumPy",
    ],
  },
  {
    title: "BI & Visualization",
    items: [
      "Power BI",
      "DAX",
      "Star Schema",
      "Drill-Throughs",
      "NovyPro",
      "Advanced Excel",
      "Dynamic Pivots",
      "XLOOKUP",
      "Nested Formulas",
    ],
  },
  {
    title: "Strategy & Reporting",
    items: [
      "PowerPoint Executive Decks",
      "Statistical Probability",
      "EDA",
      "Data Cleansing",
    ],
  },
];

const SERVICES = [
  {
    icon: "🛠️",
    title: "End-to-End Data Processing & Pipeline Building",
    body: "Extraction and transformation in MS SQL Server, Python-based wrangling, rigorous data cleansing and pragmatic schema design that keeps reporting layers fast and trustworthy.",
  },
  {
    icon: "📊",
    title: "Interactive Business Intelligence & Dashboarding",
    body: "Power BI dashboards built on star schema models with tuned DAX measures, drill-throughs and companion advanced Excel reporting for day-to-day operators.",
  },
  {
    icon: "📈",
    title: "Statistical Analysis & Quantitative Insights",
    body: "Probability modeling, hypothesis testing and MoM / YoY metric frameworks that separate genuine signal from noisy short-term fluctuation.",
  },
  {
    icon: "💡",
    title: "Business Problem Solving & Strategic Recommendations",
    body: "Executive reporting distilled into 3-bullet business case summaries — the challenge, the insight and the recommended action, with no filler.",
  },
  {
    icon: "📋",
    title: "Rapid Excel Modeling & Ad-Hoc Analytics",
    body: "Spreadsheet auditing, formula hardening and quick-turn financial or sales templates for questions that need an answer today, not next sprint.",
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

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">
      {children}
    </span>
  );
}

function Index() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <a href="#home" className="font-display text-lg font-bold tracking-tight">
            <span className="text-gradient">MH</span>
            <span className="ml-2 hidden text-sm font-medium text-muted-foreground sm:inline">
              Md Hasan
            </span>
          </a>
          <ul className="hidden items-center gap-7 lg:flex">
            {NAV.map((n) => (
              <li key={n}>
                <a
                  href={`#${n.toLowerCase()}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {n}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild size="sm" className="shadow-[var(--shadow-glow)]">
            <a href="#contact">Get in Touch</a>
          </Button>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="relative overflow-hidden py-24 md:py-32"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        >
          <div className="mx-auto w-full max-w-6xl px-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Available for data & BI opportunities
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] md:text-7xl">Md Hasan</h1>
            <p className="mt-4 text-lg font-medium md:text-xl">
              <span className="text-gradient">Data Analyst</span>
              <span className="text-muted-foreground"> | Business Intelligence & Analytics</span>
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              From raw SQL & Python wrangling and statistical inference to dynamic Power BI
              dashboards, Advanced Excel modeling, and executive PPTs.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#projects">
                  Explore Projects <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {METRICS.map((m) => (
                <div key={m.n} className="glass-card rounded-2xl p-6">
                  <p className="font-display text-2xl font-bold text-primary">{m.n}</p>
                  <p className="mt-3 font-semibold leading-snug">{m.t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{m.s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Section id="about" eyebrow="About" title="Solving data puzzles, end to end">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="glass-card rounded-2xl p-8 lg:col-span-2">
              <p className="leading-relaxed text-muted-foreground">
                Welcome to my portfolio! I’m a Data Analyst who loves solving data puzzles. Whether
                it’s extracting structured datasets using SQL Server, manipulating raw files with
                Python (Pandas/NumPy), or validating trends using statistical probability, I enjoy
                every step of the analytics journey. I specialize in crafting interactive Power BI
                dashboards, building automated Excel models, and presenting insights through clean
                PowerPoint executive decks that bring clarity to complex business challenges.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-muted-foreground">
                    Chittapur, Dist: Kalaburagi, 585 211
                    <br />
                    Karnataka, India
                  </span>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <a
                    href="mailto:hasanmasuldar8@gmail.com"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    hasanmasuldar8@gmail.com
                  </a>
                </li>
                <li className="flex gap-3">
                  <Linkedin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <a
                    href="https://www.linkedin.com/in/md-hasan-masuldar"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    md-hasan-masuldar
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {STACK.map((s) => (
              <div key={s.title} className="glass-card rounded-2xl p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {s.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <Pill key={i}>{i}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="services" eyebrow="Services" title="Five pillars of delivery">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.title} className="glass-card rounded-2xl p-7">
                <span className="text-2xl">{s.icon}</span>
                <h3 className="mt-4 text-lg font-semibold leading-snug">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="Experience" title="Work & education">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="glass-card rounded-2xl p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Tenure Completed
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
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
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
            </div>
          </div>
        </Section>

        <Section id="projects" eyebrow="Projects" title="Featured case studies">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <article key={p.title} className="glass-card flex flex-col rounded-2xl p-7">
                <span className="w-fit rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                  Coming Soon / In Development
                </span>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
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
                      <dt className="text-xs font-semibold uppercase tracking-wider text-primary/80">
                        {k}
                      </dt>
                      <dd className="mt-1 leading-relaxed text-muted-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let’s turn your data into decisions">
          <div className="grid gap-6 lg:grid-cols-5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="glass-card space-y-4 rounded-2xl p-8 lg:col-span-3"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Input required placeholder="Name" aria-label="Name" />
                <Input required type="email" placeholder="Email" aria-label="Email" />
              </div>
              <Input required placeholder="Subject" aria-label="Subject" />
              <Textarea required rows={5} placeholder="Message" aria-label="Message" />
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Send Message
              </Button>
              {sent && (
                <p className="text-sm text-primary">
                  Thanks — your message is ready to send. I’ll get back to you shortly.
                </p>
              )}
            </form>
            <div className="glass-card space-y-5 rounded-2xl p-8 lg:col-span-2">
              <a
                href="mailto:hasanmasuldar8@gmail.com"
                className="flex items-start gap-3 text-sm transition-colors hover:text-primary"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                hasanmasuldar8@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/md-hasan-masuldar"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-sm transition-colors hover:text-primary"
              >
                <Linkedin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                linkedin.com/in/md-hasan-masuldar
              </a>
              <p className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Chittapur, Kalaburagi, Karnataka, India
              </p>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Md Hasan. All rights reserved.</p>
          <p>Data Analyst | Business Intelligence & Analytics</p>
        </div>
      </footer>
    </div>
  );
}
