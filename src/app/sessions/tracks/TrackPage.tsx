import Link from "next/link";

import type { TrackContent } from "./track-data";

type TrackPageProps = {
  track: TrackContent;
};

export default function TrackPage({ track }: TrackPageProps) {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <section className="panel p-6 sm:p-8">
        <span className="tag">Task Changelog · {track.name}</span>
        <h1 className="mt-4 font-display text-4xl leading-tight text-[var(--teal-deep)] sm:text-5xl">
          {track.name}
        </h1>
        <p className="mt-4 max-w-3xl text-xl font-semibold leading-relaxed">
          {track.goal}
        </p>
        <p className="mt-4 max-w-3xl text-base font-semibold leading-relaxed">
          This page shares task updates and resource links for this track.
          Coordination, communications, and logging stay in Discord.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/#tracks" className="btn btn-secondary">
            Back to Project Tracks
          </Link>
        </div>
      </section>

      {track.updates.length === 0 ? (
        <section className="mt-8 panel p-6">
          <h2 className="font-display text-2xl text-[var(--teal-deep)]">Updates</h2>
          <p className="mt-4 text-base font-semibold leading-relaxed">
            Public updates for this track are coming soon.
          </p>
        </section>
      ) : (
        <section className="mt-8 panel p-6">
          <h2 className="font-display text-3xl text-[var(--teal-deep)]">Task Changelog</h2>
          <p className="mt-3 text-base font-semibold leading-relaxed">
            New entries appear as the work evolves. Older entries stay visible so interns can see how the task path changes over time.
          </p>
          <div className="mt-6 space-y-6">
            {track.updates.map((update) => (
              <section key={`${update.date}-${update.title}`} className="panel track-card p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="pill">{update.date}</span>
                  <h3 className="text-2xl font-black text-[var(--teal-deep)]">
                    {update.title}
                  </h3>
                </div>
                {update.summary && (
                  <p className="mt-3 text-base font-semibold leading-relaxed">
                    {update.summary}
                  </p>
                )}
                <ul className="checklist mt-4 space-y-3 text-base font-semibold">
                  {update.tasks.map((task) => (
                    <li key={task.label}>
                      {task.label}
                      {task.url && (
                        <>
                          {" "}
                          <a
                            href={task.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-[var(--teal-deep)] underline"
                          >
                            {new URL(task.url).hostname}
                          </a>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
