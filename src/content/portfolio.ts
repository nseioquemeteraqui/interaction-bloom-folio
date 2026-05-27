export type ProjectKind = "project" | "essay";

export interface Project {
  slug: string;
  title: string;
  year: string;
  role: string;
  kind: "Visual" | "Prototype" | "Research";
  tags: string[];
  blurb: string;
  cover: { hue: number; mark: string };
  collaborators?: string;
  tools?: string;
  sections: { heading: string; body: string }[];
}

export interface Essay {
  slug: string;
  title: string;
  dek: string;
  date: string;
  readingTime: string;
  body: string[];
}

export const projects: Project[] = [
  {
    slug: "soft-machines",
    title: "Soft Machines",
    year: "2025",
    role: "Interaction & motion design",
    kind: "Prototype",
    tags: ["Prototype", "Motion", "Speculative"],
    blurb:
      "A series of tactile interface studies exploring how soft, breathing objects could replace flat screens in domestic spaces.",
    cover: { hue: 30, mark: "S—M" },
    collaborators: "Solo project",
    tools: "Figma, Origami Studio, TouchDesigner",
    sections: [
      {
        heading: "Context",
        body: "What if the next interface didn't glow but breathed? Soft Machines is a six-week studio investigation into ambient, gesture-first controllers for the home — objects that respond to attention before action.",
      },
      {
        heading: "Process",
        body: "I started by recording hand gestures my flatmates already made: knocking on a table to silence a kettle, brushing past a lamp. From those grammar fragments I prototyped three controllers — a clay knob, a fabric cushion, a glass tile — each mapping the same gesture vocabulary to different feedback modalities.",
      },
      {
        heading: "Outcome",
        body: "The cushion outperformed the screen-based control on every measured task. The thesis became less about the object and more about the relief of not having to look. The work was shortlisted for the school's interaction prize and is now part of an ongoing material study.",
      },
    ],
  },
  {
    slug: "field-notes",
    title: "Field Notes",
    year: "2024",
    role: "Product & systems design",
    kind: "Visual",
    tags: ["Product", "Systems"],
    blurb:
      "A note-taking tool for ethnographic fieldwork. Captures voice, photo, and location into a single longitudinal stream.",
    cover: { hue: 200, mark: "F.N." },
    collaborators: "With Dr. M. Ito (advisor)",
    tools: "Swift, Figma, FigJam",
    sections: [
      {
        heading: "Context",
        body: "Researchers I interviewed used three apps and a paper notebook in parallel. Field Notes folds them into one timeline you can scrub through, geotag, and export as a structured archive.",
      },
      {
        heading: "Process",
        body: "Two months of contextual inquiry across four field sites, then weekly prototypes tested with the same researchers. The hard problem wasn't capture — it was retrieval six months later.",
      },
      {
        heading: "Outcome",
        body: "A working iOS prototype now used by a small cohort of doctoral students. We're writing up the retrieval-by-context findings for CHI 2026.",
      },
    ],
  },
  {
    slug: "weather-radio",
    title: "Weather Radio",
    year: "2024",
    role: "Concept & interaction",
    kind: "Visual",
    tags: ["Concept", "Sound"],
    blurb:
      "An ambient device that plays the forecast as a generative composition. The worse the weather, the stranger the music.",
    cover: { hue: 220, mark: "W·R" },
    tools: "Max/MSP, Cycling '74, hardware",
    sections: [
      {
        heading: "Context",
        body: "I wanted a forecast I could feel without checking. Weather Radio translates a 24-hour forecast into a fifteen-minute generative loop that plays each morning.",
      },
      {
        heading: "Process",
        body: "Mapped meteorological variables to musical parameters: pressure → tempo, humidity → reverb, wind → detune. Built a tabletop unit with a single brass dial.",
      },
      {
        heading: "Outcome",
        body: "Three units made and given to friends. They report checking the actual forecast less, and noticing the weather more.",
      },
    ],
  },
  {
    slug: "second-hand",
    title: "Second Hand",
    year: "2023",
    role: "Service design",
    kind: "Research",
    tags: ["Service", "Research"],
    blurb:
      "A redesign of the donation drop-off flow for a citywide reuse network. Cut staff time per intake by 40%.",
    cover: { hue: 100, mark: "2nd" },
    collaborators: "With ReUse Berlin",
    tools: "Service blueprints, Figma, on-site testing",
    sections: [
      {
        heading: "Context",
        body: "Volunteers were spending more time sorting than donors were spending donating. We rebuilt the intake from a queue into a guided self-service.",
      },
      {
        heading: "Process",
        body: "Six weeks shadowing intake staff, then four iteration cycles of physical signage, a tablet flow, and a printed receipt.",
      },
      {
        heading: "Outcome",
        body: "Intake time dropped 40%. The blueprint is now used at two other locations.",
      },
    ],
  },
  {
    slug: "atlas-of-small",
    title: "Atlas of Small",
    year: "2023",
    role: "Visual & editorial design",
    kind: "Visual",
    tags: ["Editorial", "Print"],
    blurb:
      "A printed atlas of the smallest measurable things in a one-kilometre radius around my apartment.",
    cover: { hue: 60, mark: "A°" },
    tools: "InDesign, large-format risograph",
    sections: [
      {
        heading: "Context",
        body: "An exercise in attention. I spent thirty days measuring something tiny each day — a hair, a moth, the thickness of a leaf — and bound the results into a 96-page atlas.",
      },
      {
        heading: "Process",
        body: "Daily measurements with a USB microscope and a steel ruler. Each spread is one measurement, one image, one date.",
      },
      {
        heading: "Outcome",
        body: "Edition of 50, sold out. Currently in the school library's special collections.",
      },
    ],
  },
  {
    slug: "queue",
    title: "Queue",
    year: "2022",
    role: "Interaction & sound",
    kind: "Prototype",
    tags: ["Prototype", "Public"],
    blurb:
      "A waiting-room display that turns wait time into a shared, slowly-changing visual composition.",
    cover: { hue: 280, mark: "Q." },
    tools: "TouchDesigner, Raspberry Pi",
    sections: [
      {
        heading: "Context",
        body: "Hospital waiting rooms show TV news at high volume. Queue replaces them with a quiet, slowly-shifting field that encodes the queue position of every waiting patient.",
      },
      {
        heading: "Process",
        body: "Pilot installation in a university clinic. Tested with a small randomized study of perceived wait time.",
      },
      {
        heading: "Outcome",
        body: "Perceived wait time dropped 18% versus the TV control. Working on a longer trial.",
      },
    ],
  },
];

export const essays: Essay[] = [
  {
    slug: "interfaces-that-wait",
    title: "Interfaces that wait",
    dek: "On designing for the long pauses between touches.",
    date: "March 2025",
    readingTime: "8 min read",
    body: [
      "Most interface design assumes the user is present, attentive, and ready to act. The interesting frontier, increasingly, is the opposite: the long stretches when no one is looking. A thermostat at four in the morning. A car key in a pocket. A laptop with the lid closed.",
      "These moments are not absences of interaction — they are interactions of a particular kind, slower and more diffuse. The system is doing something. The user is doing something else. The relationship between them is mediated by inference, by waiting, by the soft accumulation of context.",
      "I have been collecting examples of interfaces that wait well. The best of them share a few qualities. They do not demand attention to earn it. They explain themselves backwards, after the fact, in case anyone wants to know. And they are willing to be wrong, gracefully.",
      "The thermostat is the canonical case. A Nest learns your schedule by waiting and watching. When it gets it wrong, you nudge it. When it gets it right, you do nothing. The interaction surface is almost invisible, but the relationship is intimate and continuous.",
      "I think interaction design has under-explored this register. Most of our craft is still organized around the moment of action — the click, the tap, the swipe. The next decade's work, I suspect, will be about the connective tissue between those moments. The waiting. The drift.",
    ],
  },
  {
    slug: "against-the-dashboard",
    title: "Against the dashboard",
    dek: "Why showing every metric is a failure of design, not a feature.",
    date: "January 2025",
    readingTime: "6 min read",
    body: [
      "A dashboard is what you build when you have not decided what matters. It is the interface equivalent of putting every ingredient on the counter and calling it dinner.",
      "The honest version of most dashboards is a single number and a sentence. \"Things are fine.\" \"Things are not fine, look here.\" The grid of charts exists because the designer was unwilling to take a position.",
      "I am not against data. I am against the abdication of judgment that the dashboard genre encourages. A good interface decides what you should look at, in what order, and tells you when to stop looking.",
      "The best operational interfaces I have studied — air traffic control, anesthesia displays, certain trading terminals — are not dashboards. They are scenes. They have a foreground and a background. They move when something has changed and stay still when nothing has.",
      "Designing a scene is harder than designing a dashboard. You have to know the work. You have to commit. But the result is an interface that does some of the thinking for the person using it, which is, more or less, the whole point.",
    ],
  },
  {
    slug: "the-shape-of-attention",
    title: "The shape of attention",
    dek: "Notes from a semester spent measuring where people look.",
    date: "November 2024",
    readingTime: "11 min read",
    body: [
      "I spent a semester with an eye-tracker borrowed from the perception lab. The premise was simple: record where people actually look while using the interfaces I designed, then compare it to where I expected them to look. The gap was the lesson.",
      "The first thing I learned is that gaze is not a spotlight. It is a flicker, a series of saccades and fixations that the user is mostly not aware of. People look at things they do not remember looking at, and remember looking at things they did not.",
      "The second thing is that designers grossly overestimate the legibility of their own layouts. A hierarchy that is obvious to me, the maker, is often a flat field to the first-time user. The eye finds the contrast, the color, the motion — and almost never the typography.",
      "The third thing, and the one I keep coming back to, is that attention has a shape. Not a single point but a topology, with peaks and valleys and a kind of gravitational pull toward whatever was last in motion. Designing for attention means designing that topology, not the individual elements.",
      "I do not have a tidy conclusion. I have a notebook of recorded gaze paths and a much stronger conviction that interaction design is, fundamentally, a study of attention in time.",
    ],
  },
];

export const profile = {
  name: "Your Name",
  role: "Interaction Design — MA candidate",
  school: "School of Design, City",
  pitch:
    "Interaction design student working on quieter, slower interfaces. Recent work spans soft hardware, fieldwork tools, and ambient sound.",
  status: "Looking for a summer 2026 internship in interaction or product design.",
  email: "hello@example.com",
  socials: [
    { label: "Are.na", href: "https://www.are.na/" },
    { label: "Read.cv", href: "https://read.cv/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ],
};