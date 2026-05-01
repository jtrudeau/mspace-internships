import Link from "next/link";

const posterSections = [
  {
    title: "Title and authors",
    bullets: [
      "Clear title for your project (what you built or what question you explored).",
      "All contributor names.",
      "Institutional affiliation — Dawson College, makerSPACE / relevant program.",
    ],
  },
  {
    title: "Introduction",
    bullets: [
      "Short overview of the project: what it is and who it is for.",
      "What inspired it and what you set out to achieve (e.g. classroom support, workshop, demo).",
    ],
  },
  {
    title: "Design",
    bullets: [
      "Photos of your build, wiring, mechanical parts, or screen mockups.",
      "Simple diagrams or flowcharts if they help explain the system at a glance.",
    ],
  },
  {
    title: "Code and logic",
    bullets: [
      "One or two short snippets or block diagrams that show the core idea.",
      "Call out the main algorithm, state machine, or control loop — not the whole repo.",
    ],
  },
  {
    title: "Outcomes and evidence",
    bullets: [
      "Graphs, tables, before/after photos, test results, or workshop feedback summaries.",
      "Anything that shows the project worked or improved with iteration.",
    ],
  },
  {
    title: "References",
    bullets: ["Courses, tutorials, datasheets, or repos you relied on — cite generously."],
  },
  {
    title: "Acknowledgements",
    bullets: ["Mentors, teammates, teachers, makerSPACE staff, and funding or kit sources."],
  },
];

const designTips = [
  {
    heading: "Clarity",
    bullets: [
      "Readable fonts and sizes; someone standing two metres away should get the headline.",
      "Logical flow — typically top-to-bottom or left-to-right.",
    ],
  },
  {
    heading: "Content and layout",
    bullets: [
      "Cover intro, objectives, what you built, results, and takeaways without dense paragraphs.",
      "Alternate short text blocks with images, diagrams, or screenshots.",
    ],
  },
  {
    heading: "Readability",
    bullets: [
      "Bullets beat walls of text.",
      "Highlight one or two main findings so a passer-by learns something in under a minute.",
    ],
  },
  {
    heading: "References and affiliations",
    bullets: [
      "Include references for borrowed ideas and builds.",
      "Use approved Dawson / SPACE logos when provided.",
    ],
  },
];

const submissionChecklist = [
  "Proofread names, spelling, and labels.",
  "Check contrast and image resolution at full print size.",
  "Verify references and logo usage.",
  "Export final poster as PDF (or printer-ready file) from the layout template below, unless the print shop specifies otherwise.",
  "Meet the ScienceFest print deadline — see hub timeline (posters finalized for print the first week of May).",
];

const dawsonPosterGuideUrl =
  "https://englab.dawsoncollege.qc.ca/interns/Poster%20Guide.html#poster-content-outline-for-the-arduino-internship";

/** ScienceFest poster print size (portrait): width × height. */
const PRINT_POSTER_INCHES = { w: 18, h: 24 };

export default function SciencefestPosterPage() {
  const basePath = process.env.BASE_PATH ?? "/mspace-internships";
  const sf = `${basePath}/sciencefest`;

  return (
    <main className="mx-auto w-full max-w-5xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <section className="panel p-6 sm:p-8">
        <span className="tag">Student Resources · ScienceFest</span>
        <h1 className="mt-4 font-display text-4xl leading-tight text-[var(--teal-deep)] sm:text-5xl">
          ScienceFest poster guide
        </h1>
        <p className="mt-4 max-w-3xl text-xl font-semibold leading-relaxed">
          Use this outline to structure your makerSPACE internship poster for{" "}
          <strong>ScienceFest</strong>. The sections match what we expect for a technical showcase: clear story, visuals,
          evidence, and proper credit. Many of the same assets can later support a SALTISE poster if you are invited —
          tighten the narrative and swap the event branding as needed.
        </p>
        <p className="mt-3 max-w-3xl text-base font-semibold leading-relaxed opacity-90">
          Adapted from the Dawson Engineering Lab{" "}
          <a href={dawsonPosterGuideUrl} className="underline text-[var(--teal-deep)]">
            Poster Guide
          </a>{" "}
          (Arduino internship content outline), generalized for all internship tracks.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-secondary">
            Back to Home Hub
          </Link>
        </div>
      </section>

      <section className="mt-8 panel p-6 border-l-4 border-[var(--teal-deep)]">
        <h2 className="font-display text-2xl text-[var(--teal-deep)]">Print size, template, and logos</h2>
        <p className="mt-2 text-base font-semibold leading-relaxed">
          The poster template for ScienceFest is included on this page (downloadable deck and logos below).
        </p>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          The PowerPoint deck is an <strong>example layout</strong> (Light to Sound Converter): use it only as a starting
          point. Replace all content with <strong>your</strong> project, adapt structure and visuals to fit what you need to
          communicate, and use your own judgement — do <strong>not</strong> blindly copy this example. If the slide size does
          not match the print size below, resize the slide to{" "}
          <strong>
            {PRINT_POSTER_INCHES.w}&quot; × {PRINT_POSTER_INCHES.h}&quot;
          </strong>{" "}
          before exporting.
        </p>
        <ul className="checklist mt-3 space-y-2 text-base font-semibold">
          <li>
            <strong>Print size (ScienceFest):</strong>{" "}
            <strong>
              {PRINT_POSTER_INCHES.w}&quot; × {PRINT_POSTER_INCHES.h}&quot;
            </strong>{" "}
            portrait (~457 × 610 mm). Export your final file at this size unless the print vendor specifies bleed or margins.
          </li>
          <li>
            <strong>Example deck (.pptx):</strong>{" "}
            <a href={`${sf}/poster-layout-example.pptx`} className="underline text-[var(--teal-deep)]">
              Download poster-layout-example.pptx
            </a>
          </li>
          <li>
            <strong>Logos (PNG):</strong>{" "}
            <a href={`${sf}/Dawson_En_Logo_Full_Color_RGB.png`} className="underline text-[var(--teal-deep)]">
              Dawson (full colour)
            </a>
            {" · "}
            <a href={`${sf}/SPACE_logo_FINAL.png`} className="underline text-[var(--teal-deep)]">
              SPACE wordmark
            </a>
          </li>
        </ul>
        <div className="mt-5 flex flex-wrap items-end gap-6 border-t-2 border-dashed border-[var(--ink)] pt-5">
          <div className="max-w-[min(100%,280px)]">
            <p className="mb-2 text-xs font-black uppercase tracking-wide text-[var(--teal-deep)]">SPACE</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${sf}/SPACE_logo_FINAL.png`} alt="makerSPACE logo" className="h-auto w-full border-2 border-[var(--ink)] bg-white p-2" />
          </div>
          <div className="max-w-[min(100%,320px)]">
            <p className="mb-2 text-xs font-black uppercase tracking-wide text-[var(--teal-deep)]">Dawson College</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${sf}/Dawson_En_Logo_Full_Color_RGB.png`}
              alt="Dawson College logo"
              className="h-auto w-full border-2 border-[var(--ink)] bg-white p-2"
            />
          </div>
        </div>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Suggested poster sections</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          Order can vary by track (Scratch vs Pico vs LED), but audiences should always see{" "}
          <strong>what you did</strong>, <strong>how it works</strong>, and <strong>what you learned</strong>.
        </p>
        <div className="mt-4 space-y-4">
          {posterSections.map((section, index) => (
            <article key={section.title} className="panel track-card p-4">
              <h3 className="text-xl font-black text-[var(--teal-deep)]">
                {index + 1}. {section.title}
              </h3>
              <ul className="checklist mt-3 space-y-2 text-base font-semibold">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Design tips</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {designTips.map((block) => (
            <article key={block.heading} className="panel track-card p-4">
              <h3 className="text-lg font-black text-[var(--teal-deep)]">{block.heading}</h3>
              <ul className="checklist mt-3 space-y-2 text-base font-semibold">
                {block.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Sample layout reference</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          For a conventional academic poster layout example (sections and balance), see the{" "}
          <strong>Sample Poster Layout</strong> section on the lab Poster Guide — useful while we finalize our branded
          template for <strong>SALTISE</strong>.
        </p>
        <p className="mt-3">
          <a href={dawsonPosterGuideUrl} className="btn btn-secondary inline-block">
            Open Dawson Poster Guide (reference)
          </a>
        </p>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Before you submit</h2>
        <ul className="checklist mt-4 space-y-2 text-base font-semibold">
          {submissionChecklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
