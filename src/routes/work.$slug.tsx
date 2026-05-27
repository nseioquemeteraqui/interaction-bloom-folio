import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projects } from "@/content/portfolio";
import { Cover } from "@/components/portfolio/Cover";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const idx = projects.findIndex((p) => p.slug === params.slug);
    if (idx === -1) throw notFound();
    return {
      project: projects[idx],
      prev: projects[(idx - 1 + projects.length) % projects.length],
      next: projects[(idx + 1) % projects.length],
    };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project not found" }] };
    return {
      meta: [
        { title: `${p.title} — ${p.year} · Your Name` },
        { name: "description", content: p.blurb },
        { property: "og:title", content: `${p.title} — Your Name` },
        { property: "og:description", content: p.blurb },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/work/${p.slug}` },
      ],
      links: [{ rel: "canonical", href: `/work/${p.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-display text-5xl">Project not found</h1>
      <Link to="/" className="hover-underline mt-6 inline-block">
        Back to work
      </Link>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project, prev, next } = Route.useLoaderData();
  return (
    <article className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
      <Link to="/" className="hover-underline font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        ← Index
      </Link>

      <header className="mt-10 grid gap-10 md:grid-cols-[2fr_1fr] md:items-end">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {project.kind} · {project.year}
          </div>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,7vw,5rem)] leading-[1] tracking-tight">
            {project.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {project.blurb}
          </p>
        </div>
        <dl className="space-y-4 text-sm">
          <Meta term="Role" value={project.role} />
          {project.collaborators && <Meta term="With" value={project.collaborators} />}
          {project.tools && <Meta term="Tools" value={project.tools} />}
          <Meta term="Tags" value={project.tags.join(" · ")} />
        </dl>
      </header>

      <div className="mt-16">
        <Cover project={project} className="!aspect-[16/9]" />
      </div>

      <div className="mt-20 grid gap-16 md:grid-cols-[1fr_2fr]">
        {project.sections.map((s) => (
          <section key={s.heading} className="contents">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {s.heading}
            </h2>
            <p className="font-display text-2xl leading-snug md:text-[1.75rem]">
              {s.body}
            </p>
          </section>
        ))}
      </div>

      <nav className="mt-32 grid gap-6 border-t border-border pt-10 md:grid-cols-2">
        <Link to="/work/$slug" params={{ slug: prev.slug }} className="group block">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            ← Previous
          </div>
          <div className="mt-1 font-display text-2xl">{prev.title}</div>
        </Link>
        <Link
          to="/work/$slug"
          params={{ slug: next.slug }}
          className="group block md:text-right"
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Next →
          </div>
          <div className="mt-1 font-display text-2xl">{next.title}</div>
        </Link>
      </nav>
    </article>
  );
}

function Meta({ term, value }: { term: string; value: string }) {
  return (
    <div className="flex gap-4 border-b border-border pb-3">
      <dt className="w-20 shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {term}
      </dt>
      <dd className="flex-1">{value}</dd>
    </div>
  );
}