import type { Project } from "@/content/portfolio";

/**
 * Typographic cover tile — placeholder for real project imagery.
 * Uses subtle layered paper tones derived from the project's hue,
 * with the project's mark set in Instrument Serif.
 */
export function Cover({ project, className = "" }: { project: Project; className?: string }) {
  const { hue, mark } = project.cover;
  const bg = `oklch(0.94 0.015 ${hue})`;
  const accent = `oklch(0.82 0.04 ${hue})`;
  return (
    <div
      className={`relative w-full overflow-hidden border border-border ${className}`}
      style={{ backgroundColor: bg, aspectRatio: "4 / 3" }}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `radial-gradient(circle at 70% 30%, ${accent} 0%, transparent 55%)`,
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-display text-[clamp(3rem,9vw,7rem)] leading-none text-foreground/85"
          style={{ fontStyle: "italic" }}
        >
          {mark}
        </span>
      </div>
      <div className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/60">
        {project.year}
      </div>
      <div className="absolute bottom-3 right-3 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/60">
        {project.kind}
      </div>
    </div>
  );
}