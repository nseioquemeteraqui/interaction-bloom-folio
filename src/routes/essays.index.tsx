import { createFileRoute, Link } from "@tanstack/react-router";
import { essays } from "@/content/portfolio";

export const Route = createFileRoute("/essays/")({
  head: () => ({
    meta: [
      { title: "Essays — Your Name" },
      {
        name: "description",
        content:
          "Writing on interaction design, attention, and the soft edges of interfaces.",
      },
      { property: "og:title", content: "Essays — Your Name" },
      { property: "og:description", content: "Writing on interaction design and attention." },
      { property: "og:url", content: "/essays" },
    ],
    links: [{ rel: "canonical", href: "/essays" }],
  }),
  component: EssaysIndex,
});

function EssaysIndex() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        Essays · {essays.length} pieces
      </div>
      <h1 className="mt-6 font-display text-[clamp(2.5rem,7vw,5rem)] leading-[1] tracking-tight">
        Writing on attention,{" "}
        <span className="italic text-muted-foreground">slowness</span>, and the soft
        edges of interfaces.
      </h1>

      <ul className="mt-20 divide-y divide-border border-y border-border">
        {essays.map((e) => (
          <li key={e.slug}>
            <Link
              to="/essays/$slug"
              params={{ slug: e.slug }}
              className="group flex flex-col gap-3 py-8 md:flex-row md:items-baseline md:justify-between md:gap-10"
            >
              <div className="flex-1">
                <h2 className="font-display text-3xl tracking-tight md:text-4xl">
                  {e.title}
                </h2>
                <p className="mt-2 text-muted-foreground">{e.dek}</p>
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:text-right">
                <div>{e.date}</div>
                <div className="mt-1">{e.readingTime}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}