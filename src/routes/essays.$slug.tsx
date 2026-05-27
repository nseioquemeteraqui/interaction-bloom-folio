import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { essays } from "@/content/portfolio";

export const Route = createFileRoute("/essays/$slug")({
  loader: ({ params }) => {
    const idx = essays.findIndex((e) => e.slug === params.slug);
    if (idx === -1) throw notFound();
    return {
      essay: essays[idx],
      prev: essays[(idx - 1 + essays.length) % essays.length],
      next: essays[(idx + 1) % essays.length],
    };
  },
  head: ({ loaderData }) => {
    const e = loaderData?.essay;
    if (!e) return { meta: [{ title: "Essay not found" }] };
    return {
      meta: [
        { title: `${e.title} — Essay · Your Name` },
        { name: "description", content: e.dek },
        { property: "og:title", content: e.title },
        { property: "og:description", content: e.dek },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/essays/${e.slug}` },
      ],
      links: [{ rel: "canonical", href: `/essays/${e.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-display text-5xl">Essay not found</h1>
      <Link to="/essays" className="hover-underline mt-6 inline-block">
        Back to essays
      </Link>
    </div>
  ),
  component: EssayPage,
});

function EssayPage() {
  const { essay, prev, next } = Route.useLoaderData();
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Link
        to="/essays"
        className="hover-underline font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
      >
        ← Essays
      </Link>

      <header className="mt-10">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          {essay.date} · {essay.readingTime}
        </div>
        <h1 className="mt-5 font-display text-[clamp(2.25rem,6vw,4.25rem)] leading-[1.02] tracking-tight">
          {essay.title}
        </h1>
        <p className="mt-6 font-display text-2xl italic leading-snug text-muted-foreground">
          {essay.dek}
        </p>
      </header>

      <div className="prose-reader mt-16">
        {essay.body.map((para: string, i: number) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <nav className="mt-24 grid gap-6 border-t border-border pt-10 md:grid-cols-2">
        <Link to="/essays/$slug" params={{ slug: prev.slug }} className="block">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            ← Previous
          </div>
          <div className="mt-1 font-display text-2xl">{prev.title}</div>
        </Link>
        <Link
          to="/essays/$slug"
          params={{ slug: next.slug }}
          className="block md:text-right"
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