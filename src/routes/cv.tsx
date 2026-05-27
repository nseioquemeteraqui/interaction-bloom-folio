import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/content/portfolio";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Your Name" },
      { name: "description", content: "Curriculum vitae of an interaction design MA candidate." },
      { property: "og:title", content: "CV — Your Name" },
      { property: "og:description", content: "Curriculum vitae." },
      { property: "og:url", content: "/cv" },
    ],
    links: [{ rel: "canonical", href: "/cv" }],
  }),
  component: CVPage,
});

const education = [
  {
    when: "2024 — 2026",
    what: "MA, Interaction Design",
    where: "School of Design, City",
    note: "Thesis-in-progress on ambient interfaces and attention.",
  },
  {
    when: "2020 — 2023",
    what: "BA, Design (Honours)",
    where: "Other University",
    note: "First-class honours. Dean's list 2022, 2023.",
  },
];

const experience = [
  {
    when: "2024 — present",
    what: "Design researcher",
    where: "Studio in residence — school lab",
    note: "Independent studies in soft hardware and ambient sound.",
  },
  {
    when: "Summer 2024",
    what: "Product design intern",
    where: "A small product team",
    note: "Onboarding, settings, and a quiet redesign of the empty state.",
  },
  {
    when: "2022 — 2023",
    what: "Freelance designer",
    where: "Independent",
    note: "Identity, web, and editorial work for cultural clients.",
  },
];

const skills = [
  "Interaction prototyping",
  "Figma, Origami, Framer",
  "Swift / SwiftUI",
  "TouchDesigner, Max/MSP",
  "Physical prototyping",
  "Service blueprints",
  "User research",
  "Editorial design",
];

const awards = [
  { when: "2025", what: "Shortlist — School interaction prize" },
  { when: "2024", what: "TDC student certificate of typographic excellence" },
  { when: "2023", what: "Dean's medal for design" },
];

function CVPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <header className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-8">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Curriculum Vitae
          </div>
          <h1 className="mt-3 font-display text-5xl tracking-tight md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-muted-foreground">
            {profile.role} · {profile.school}
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 md:items-end">
          <a
            href="/cv.pdf"
            className="hover-underline border border-foreground px-4 py-2 text-sm"
          >
            Download PDF ↓
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover-underline text-sm text-muted-foreground"
          >
            {profile.email}
          </a>
        </div>
      </header>

      <CVSection title="Education">
        {education.map((row, i) => (
          <CVRow key={i} {...row} />
        ))}
      </CVSection>

      <CVSection title="Experience">
        {experience.map((row, i) => (
          <CVRow key={i} {...row} />
        ))}
      </CVSection>

      <CVSection title="Skills">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-3">
          {skills.map((s) => (
            <li key={s} className="text-sm">{s}</li>
          ))}
        </ul>
      </CVSection>

      <CVSection title="Awards">
        {awards.map((a, i) => (
          <CVRow key={i} when={a.when} what={a.what} />
        ))}
      </CVSection>
    </div>
  );
}

function CVSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-16 grid gap-6 md:grid-cols-[160px_1fr] md:gap-10">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        {title}
      </h2>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

function CVRow({
  when,
  what,
  where,
  note,
}: {
  when: string;
  what: string;
  where?: string;
  note?: string;
}) {
  return (
    <div className="border-b border-border pb-5 last:border-b-0">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="font-display text-xl tracking-tight md:text-2xl">{what}</h3>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {when}
        </span>
      </div>
      {where && <div className="mt-1 text-sm text-muted-foreground">{where}</div>}
      {note && <p className="mt-2 text-sm leading-relaxed">{note}</p>}
    </div>
  );
}