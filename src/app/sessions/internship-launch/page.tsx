import Link from "next/link";

const basePath = process.env.BASE_PATH ?? "/mspace-internships";

type LaunchStep = {
  title: string;
  actions: string[];
};

const launchSteps: LaunchStep[] = [
  {
    title: "Step 1 · Join and Set Your Project Channel",
    actions: [
      "Join the makerSPACE Discord and confirm your internship track.",
      "Post one short intro: your background, interests, and what you want to build.",
      "[TBD] Track leads and final channel naming are confirmed at kickoff.",
    ],
  },
  {
    title: "Step 2 · Define Your First Weekly Goal",
    actions: [
      "Pick one small research target to prep for project tasks to come.",
      "List one risk or blocker early so support can happen fast.",
      "Write your first progress log: worked on, ready/blocking, next ask.",
    ],
  },
  {
    title: "Step 3 · Build, Test, and Document",
    actions: [
      "Be ready to demo/explain what you have done at weekly sessions.",
      "Capture what changed after testing, not just what you built.",
      "Log your work with the goal of producing a guide of your project hosted as a repo on GitHub.",
    ],
  },
  {
    title: "Step 4 · Prepare for Classroom and Workshop Use",
    actions: [
      "Confirm your build works for beginners or younger students.",
      "Create a facilitation script for your workshop/demo.",
      "[TBD] Final event flow and station assignments are confirmed in May.",
    ],
  },
  {
    title: "Step 5 · Publish at Events",
    actions: [
      "Present at least one public-facing session (ScienceFest, SALTISE, Robotics for All, or Dunrae Fair).",
      "SALTISE posters: prepare clear project summaries and visuals for invited poster opportunities.",
      "Share your final build notes and handoff docs.",
      "Write one reflection: what students learned, what you learned, and what should improve next cycle.",
    ],
  },
];

const expectations = [
  "Show up weekly, in person or online, and come prepared to work.",
  "Check Discord regularly and reply when teammates are blocked.",
  "Post one weekly progress log in your channel.",
  "Ask for help quickly when stuck.",
  "Own your track and build for real learners and audiences.",
];

const specifications = [
  "Every project needs a working prototype plus a simple setup guide.",
  "Every track produces a workshop/demo plan suitable for beginners.",
  "Every track documents materials and estimated costs by April.",
  "Every intern contributes to at least one event publication moment.",
];

const publicationTargets = [
  "ScienceFest: Astro Pi or robotics demos with clear student-facing explanations.",
  "SALTISE: invite poster contributors and support poster submission readiness.",
  "Robotics for All: intern-supported beginner workshops.",
  "Dunrae Sustainability Fair: convergence of intern stations and Grade 6 project stations.",
  "Stretch target: run a Grade 6 Scratch game on an RPi arcade station.",
];

export default function InternshipLaunchPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <section className="panel p-6 sm:p-8">
        <span className="tag">Student Resources · Internship Launch</span>
        <h1 className="mt-4 font-display text-4xl leading-tight text-[var(--teal-deep)] sm:text-5xl">
          Internship Launch Session Guide
        </h1>
        <p className="mt-4 max-w-3xl text-xl font-semibold leading-relaxed">
          Use this page to launch your track, keep weekly momentum, and prepare your project for real classroom and public
          use.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-secondary">
            Back to Home Hub
          </Link>
        </div>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Step-by-Step Checklist</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          Follow these steps in order. Items marked <strong>[TBD]</strong> are confirmed live at kickoff or during the
          build cycle.
        </p>
        <div className="mt-4 space-y-4">
          {launchSteps.map((step) => (
            <article key={step.title} className="panel track-card p-4">
              <h3 className="text-2xl font-black text-[var(--teal-deep)]">{step.title}</h3>
              <ul className="checklist mt-3 space-y-2 text-base font-semibold">
                {step.actions.map((action) => (
                  <li key={action}>{action}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-5 lg:grid-cols-2">
        <article className="panel p-6">
          <h2 className="font-display text-3xl text-[var(--teal-deep)]">Expectations</h2>
          <ul className="checklist mt-3 space-y-2 text-base font-semibold">
            {expectations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="panel p-6">
          <h2 className="font-display text-3xl text-[var(--teal-deep)]">Specifications</h2>
          <ul className="checklist mt-3 space-y-2 text-base font-semibold">
            {specifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Publication</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          Publication means your work is used and seen. Plan for clear demos, repeatable facilitation, and handoff docs.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {publicationTargets.map((target) => (
            <article key={target} className="panel track-card p-4">
              <p className="text-base font-semibold leading-relaxed">{target}</p>
            </article>
          ))}
        </div>
        <div className="mt-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}/images/learning-network.svg`}
            alt="Internship publication flow from build to events"
            className="h-auto w-full"
          />
        </div>
      </section>
    </main>
  );
}
