import Link from "next/link";

const basePath = process.env.BASE_PATH ?? "/mspace-internships";

const learningPath = [
  "Kickoff + Team Match",
  "Build and Test",
  "Support Classrooms",
  "Workshop Dry Runs",
  "Public Showcase + SALTISE",
];

const tracks = [
  {
    name: "Astro Pi Build",
    teamSize: "2-3 interns",
    goal:
      "Build a clear, interactive demo for ScienceFest and Dunrae that explains Mission Zero and inspires Grade 6 students.",
    trackPath: "/sessions/tracks/astro-pi",
  },
  {
    name: "Pico2 Navigation Robots",
    teamSize: "2-3 interns",
    goal:
      "Create a reliable Pico2 robot kit, run a Robotics for All workshop, and prepare a Wild Robot version for Grade 4 showcase.",
    trackPath: "/sessions/tracks/pico2",
  },
  {
    name: "Scratch Helpers",
    teamSize: "2-3 interns",
    goal:
      "Design a student-friendly quest from idea to working Scratch project and support Grade 6 teams in project decisions.",
    trackPath: "/sessions/tracks/scratch",
  },
  {
    name: "LED Making",
    teamSize: "1-2 interns",
    goal:
      "Prepare a beginner-friendly LED activity with materials, facilitation steps, and repeatable workshop notes.",
    trackPath: "/sessions/tracks/led",
  },
  {
    name: "RPi Arcade Consoles",
    teamSize: "1-2 interns",
    goal:
      "Build showcase-ready Pi 5 arcade stations and aim for at least one Scratch game playable on the console.",
    trackPath: "/sessions/tracks/arcade",
  },
];

const timeline = [
  {
    when: "Week of Feb 24",
    label: "Kickoff",
    detail: "Assignments, Discord setup, and first scoped tasks.",
  },
  {
    when: "March",
    label: "Build Phase",
    detail: "Weekly sessions, prototypes, and first classroom support.",
  },
  {
    when: "April 6",
    label: "Workshop Drafts Due",
    detail: "Pico + LED: first-draft workshop plans. LED: second project built. Astro Pi: sensor demo working.",
  },
  {
    when: "April 13",
    label: "Dry Runs",
    detail: "Internal dry run of workshops. Revise. Pack materials kits. Poster drafts started.",
  },
  {
    when: "April 24 (Fri)",
    label: "Workshop 1",
    detail: "First public workshop run. Collect feedback and capture poster evidence.",
  },
  {
    when: "May 5 (Tue)",
    label: "ScienceFest Posters to Print",
    detail: "Intern project posters finalized and sent to print.",
  },
  {
    when: "May 6 (Wed)",
    label: "Workshop 2",
    detail: "Second workshop run, refined. Hackathon teaser for participants.",
  },
  {
    when: "May 8 (Fri)",
    label: "Hackathon",
    detail: "Kits distributed. Participants build with what they learned. Interns facilitate and document.",
  },
  {
    when: "End of May",
    label: "SALTISE Posters to Print",
    detail: "Incorporating outcomes from internships, workshops, hackathon, and classroom activities.",
  },
  {
    when: "June 1",
    label: "SALTISE Posters Mounted",
    detail: "Ready for presentation.",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <section className="panel p-6 sm:p-8">
        <span className="tag">Dawson makerSPACE · Internship Hub</span>
        <h1 className="mt-4 font-display text-4xl leading-tight text-[var(--teal-deep)] sm:text-5xl">
          makerSPACE Internships Student Hub
        </h1>
        <p className="mt-4 max-w-3xl text-xl font-semibold leading-relaxed">
          Interns support live Grade 4 and Grade 6 STEAM projects while building their own showcase work.
          This is a real learning pathway from team practice to public contribution.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/sessions/internship-launch" className="btn btn-primary">
            Open Student Launch Guide
          </Link>
          <Link href="/sessions/sciencefest-poster" className="btn btn-secondary">
            ScienceFest poster guide
          </Link>
          <a href="#tracks" className="btn btn-secondary">
            View Project Tracks
          </a>
        </div>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Internship Overview</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          The internship model is simple: interns grow expertise by helping real learners, then publish that work in real
          events. The work connects directly to DG-STEAM classrooms and feeds the broader CoLearn design model.
        </p>
        <div className="mt-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}/images/learning-network.svg`}
            alt="Diagram showing interns supporting classrooms, workshops, and showcase events"
            className="h-auto w-full"
          />
        </div>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Learning Path</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          This path keeps work clear for students and families: start with onboarding, build consistently, then prepare for
          publication.
        </p>
        <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5" aria-label="Internship learning path">
          {learningPath.map((step, index) => (
            <li key={step} className="panel track-card p-3 text-center">
              <span className="step-chip">Step {index + 1}</span>
              <p className="mt-2 text-sm font-black uppercase tracking-[0.06em]">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-8 panel p-6 border-l-4 border-[var(--teal-deep)]">
        <h2 className="font-display text-2xl text-[var(--teal-deep)]">What&apos;s Next</h2>
        <p className="mt-2 text-base font-semibold leading-relaxed">
          <strong>Workshop 1 — April 24.</strong> Workshop drafts due the week of April 6.
          New tasks are posted on every track — check your changelog.
        </p>
      </section>

      <section id="tracks" className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Project Tracks</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          Each track has a different build surface. Open a track page to view its task changelog and current resource links.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {tracks.map((track) => (
            <article key={track.name} className="panel track-card p-4">
              <h3 className="track-title text-2xl font-black">{track.name}</h3>
              <p className="mt-2 text-base font-semibold leading-relaxed">{track.goal}</p>
              <Link
                href={track.trackPath as never}
                className="mt-3 inline-block text-sm font-black uppercase tracking-wide text-[var(--teal-deep)] underline"
              >
                View Changelog
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Dates and Timeline</h2>
        <ol className="timeline-list mt-4">
          {timeline.map((item, index) => (
            <li key={item.when + item.label} className="timeline-item">
              <span className="timeline-marker" aria-hidden="true">
                {index + 1}
              </span>
              <div className="timeline-content">
                <span className="pill">{item.when}</span>
                <h3 className="mt-2 text-xl font-black text-[var(--teal-deep)]">{item.label}</h3>
                <p className="mt-1 text-base font-semibold leading-relaxed">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Next Steps</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          Check your track page for the task changelog, then open the launch guide for the full checklist,
          expectations, and publication targets.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/sessions/internship-launch" className="btn btn-primary">
            Open Launch Guide
          </Link>
          <Link href="/sessions/sciencefest-poster" className="btn btn-secondary">
            ScienceFest poster guide
          </Link>
        </div>
      </section>
    </main>
  );
}
