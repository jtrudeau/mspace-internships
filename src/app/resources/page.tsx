import Link from "next/link";

const resources = [
  {
    name: "Simon Says Game",
    track: "LED Making",
    path: "/resources/simon-says",
    detail:
      "Full wiring instructions, staged coding walkthrough, and complete Arduino code pulled from the current LED curriculum source.",
  },
];

export default function ResourcesPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <section className="panel p-6 sm:p-8">
        <span className="tag">Resources</span>
        <h1 className="mt-4 font-display text-4xl leading-tight text-[var(--teal-deep)] sm:text-5xl">
          Build Resources
        </h1>
        <p className="mt-4 max-w-3xl text-xl font-semibold leading-relaxed">
          These pages hold fuller build notes and reference material than the task changelog. Use them when a track
          needs working instructions, code, or diagrams.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-secondary">
            Back to Student Hub
          </Link>
        </div>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Current Pages</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {resources.map((resource) => (
            <article key={resource.path} className="panel track-card p-4">
              <span className="pill">{resource.track}</span>
              <h3 className="mt-3 text-2xl font-black text-[var(--teal-deep)]">{resource.name}</h3>
              <p className="mt-3 text-base font-semibold leading-relaxed">{resource.detail}</p>
              <Link
                href={resource.path as never}
                className="mt-4 inline-block text-sm font-black uppercase tracking-wide text-[var(--teal-deep)] underline"
              >
                Open Resource
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
