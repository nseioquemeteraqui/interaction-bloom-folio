import { Link } from "@tanstack/react-router";
import { profile } from "@/content/portfolio";

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-6xl items-baseline justify-between px-6 py-5 md:px-10">
        <Link to="/" className="font-display text-xl italic tracking-tight">
          {profile.name}
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            to="/"
            activeProps={{ className: "text-foreground" }}
            inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
            activeOptions={{ exact: true }}
            className="hover-underline"
          >
            Work
          </Link>
          <Link
            to="/essays"
            activeProps={{ className: "text-foreground" }}
            inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
            className="hover-underline"
          >
            Essays
          </Link>
          <Link
            to="/cv"
            activeProps={{ className: "text-foreground" }}
            inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
            className="hover-underline"
          >
            CV
          </Link>
          <a
            href={`mailto:${profile.email}`}
            className="hover-underline hidden text-foreground sm:inline"
          >
            Email
          </a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <h2 className="font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] tracking-tight">
          Let's talk.
          <span className="italic text-muted-foreground"> Always.</span>
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Email
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="hover-underline mt-2 inline-block text-lg"
            >
              {profile.email}
            </a>
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Elsewhere
            </div>
            <ul className="mt-2 space-y-1">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover-underline text-lg"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Currently
            </div>
            <p className="mt-2 text-lg leading-snug">{profile.status}</p>
          </div>
        </div>
        <div className="mt-20 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built quietly</span>
        </div>
      </div>
    </footer>
  );
}