# Interaction Design Portfolio

A quiet, editorial portfolio inspired by interaction designers like Linus Lee, Maggie Appleton, Josh Comeau, Rauno Freiberg, and Bureau Cool — sites that mix project work with written thinking, lean on type-driven hierarchy, and feel hand-crafted rather than templated.

## Look & feel

- **Palette**: Paper & Ink — warm off-white (#f5f3ee) background, soft paper tone (#e8e4dd) for surfaces, charcoal (#2d2d2d) body, near-black (#0d0d0d) for emphasis.
- **Type**: Instrument Serif for display/headings (large, italic accents for keywords), Work Sans for body and UI.
- **Tone**: Editorial, generous whitespace, asymmetric where it earns it, subtle hover/scroll motion. No gradients, no glassmorphism, no stock iconography.

## Routes

```
/            Home — hero, selected work grid, essays strip, contact
/work/$slug  Individual project case study
/essays      Essays index (filtered list of writing-type projects)
/essays/$slug Essay reader view
/cv          CV / résumé page
/about       Short about + contact (optional, can fold into home)
```

Separate routes (not hash anchors) so each gets its own metadata and is shareable.

## Home page composition

1. **Top bar** — name wordmark left, nav right (Work, Essays, CV), plus an "Email me" link as the first contact touchpoint.
2. **Hero** — large Instrument Serif statement (e.g. "Interaction design student exploring [your focus]."), short paragraph beneath, and a quiet "Currently: [status]" line.
3. **Selected Work** — Hero + Card Grid: one featured project as a wide tile up top, then a 2-column grid of the rest. Each card: cover image, title, year, one-line role, tags (Visual / Essay / Prototype). Cards distinguish "essay" vs "project" with a small typographic label rather than a different card shape.
4. **Essays strip** — 3 most recent essays as a horizontal type-led list (title + date + reading time), link to /essays.
5. **Footer / contact** — closing hero-sized line ("Let's talk." or similar), email, social links (LinkedIn, Are.na, Read.cv, etc. — you'll provide). This is the second contact touchpoint you asked for.

## Project case study template

- Cover image, title, year, role, collaborators, tools
- Long-form sections: Context → Process → Outcome
- Mixed media: images, embedded video, pull-quotes
- Prev/Next project at the bottom

## Essay template

- Title, dek, date, reading time
- Long-form prose optimized for reading width (~65ch)
- Same prev/next pattern

## CV page

- Education, experience, selected projects, skills, awards, speaking
- "Download PDF" button (you upload the PDF; we link it)

## Content I'll need from you (later, not blocking)

- Name, one-line bio, "currently" status, email
- 5–10 projects: title, year, role, cover image, body content
- Essays: title, date, body
- CV content + PDF
- Social links

For now I'll ship with placeholder copy and tasteful placeholder imagery so the structure is real and you can drop content in.

## Technical notes

- TanStack Start file-based routes under `src/routes/` (`index.tsx`, `work.$slug.tsx`, `essays.index.tsx`, `essays.$slug.tsx`, `cv.tsx`, plus a shared header/footer in `__root.tsx`).
- Projects + essays defined as typed data in `src/content/` (TS modules) so adding new entries is a single file edit. Easy to migrate to MDX or a CMS later.
- Design tokens (Paper & Ink palette, Instrument Serif + Work Sans, radii, spacing rhythm) added to `src/styles.css` as semantic variables. No hard-coded colors in components.
- Fonts loaded from Google Fonts via a `<link>` in `__root.tsx`.
- Each route defines its own `head()` with title, description, og tags. Leaf project/essay routes set `og:image` from the cover.
- Motion: subtle — small fade/translate on scroll into view for grid items, underline-on-hover for links. No heavy animation library needed initially; can add Motion for React later.

## What I'll build in the first pass

Home, Work index integrated into home, one example project case study, Essays index, one example essay, CV page, shared header/footer. Wired routing, real design system, placeholder content you can replace.

Sound good? Hit Implement and I'll build it.
