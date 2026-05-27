import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { projects, essays, profile } from "@/content/portfolio";
import { Cover } from "@/components/portfolio/Cover";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Your Name — Interaction Design" },
      {
        name: "description",
        content:
          "Selected interaction design work and essays by an MA candidate. Soft hardware, fieldwork tools, ambient interfaces.",
      },
      { property: "og:title", content: "Your Name — Interaction Design" },
      {
        property: "og:description",
        content:
          "Selected interaction design work and essays by an MA candidate.",
      },
      { property: "og:url", content: "/" },
    ],
  }),
  component: Index,
});

function Index() {
  const [featured, ...rest] = projects;
  const recentEssays = essays.slice(0, 3);
  return (
    <div className="mx-auto max-w-6xl px-6 md:px-10">
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          {profile.role} · {profile.school}
        </div>
        <h1 className="mt-8 font-display text-[clamp(2.75rem,8vw,6.25rem)] leading-[0.98] tracking-tight">
          Designing quieter,{" "}
          <span className="italic text-muted-foreground">slower</span> interfaces —
          objects and tools that wait well.
        </h1>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {profile.pitch}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
          <a href={`mailto:${profile.email}`} className="hover-underline text-foreground">
            {profile.email}
          </a>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {profile.status}
          </span>
        </div>
      </section>

      {/* Section header */}
      <SectionHeader label="01 — Selected work" caption={`${projects.length} projects`} />

      {/* Featured project */}
      <Link
        to="/work/$slug"
        params={{ slug: featured.slug }}
        className="group mt-10 block"
      >
        <Cover project={featured} className="!aspect-[16/9]" />
        <div className="mt-5 flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">
            {featured.title}
            <span className="ml-3 font-sans text-base font-normal text-muted-foreground">
              ↗
            </span>
          </h2>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {featured.year} · {featured.role}
          </div>
        </div>
        <p className="mt-3 max-w-2xl text-muted-foreground">{featured.blurb}</p>
      </Link>

      {/* Grid */}
      <div className="mt-20 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
        {rest.map((p) => (
          <Link
            key={p.slug}
            to="/work/$slug"
            params={{ slug: p.slug }}
            className="group block"
          >
            <Cover project={p} />
            <div className="mt-4 flex items-baseline justify-between gap-3">
              <h3 className="font-display text-2xl tracking-tight">
                {p.title}
              </h3>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {p.year}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {p.blurb}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {/* Essays */}
      <div className="mt-32">
        <SectionHeader label="02 — Recent essays" caption={`${essays.length} pieces`} />
        <ul className="mt-10 divide-y divide-border border-y border-border">
          {recentEssays.map((e) => (
            <li key={e.slug}>
              <Link
                to="/essays/$slug"
                params={{ slug: e.slug }}
                className="group flex flex-col gap-2 py-6 md:flex-row md:items-baseline md:justify-between md:gap-8"
              >
                <div className="flex-1">
                  <h3 className="font-display text-2xl tracking-tight md:text-3xl">
                    {e.title}
                  </h3>
                  <p className="mt-1 text-muted-foreground">{e.dek}</p>
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:text-right">
                  <div>{e.date}</div>
                  <div className="mt-1">{e.readingTime}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link to="/essays" className="hover-underline text-sm text-foreground">
            All essays →
          </Link>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ label, caption }: { label: string; caption: string }) {
  return (
    <div className="flex items-baseline justify-between border-b border-border pb-4">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground">
        {label}
      </h2>
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {caption}
      </span>
    </div>
  );
}
