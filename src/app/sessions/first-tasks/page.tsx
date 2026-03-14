import Link from "next/link";

import { trackContent, type TrackSlug } from "../tracks/track-data";

const trackOrder: TrackSlug[] = ["astro-pi", "pico2", "led", "scratch", "arcade"];

export default function FirstTasksPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <section className="panel p-6 sm:p-8">
        <span className="tag">Student Resources · First Tasks</span>
        <h1 className="mt-4 font-display text-4xl leading-tight text-[var(--teal-deep)] sm:text-5xl">
          Track Updates
        </h1>
        <p className="mt-4 max-w-3xl text-xl font-semibold leading-relaxed">
          Track pages are now the source of truth for task updates.
          Use them as a running changelog of what has been posted for each track.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-secondary">
            Back to Home Hub
          </Link>
        </div>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Where to Look</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          Each track page keeps a dated changelog. Coordination, communications, and logging stay in Discord.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {trackOrder.map((slug) => {
            const track = trackContent[slug];
            const latestUpdate = track.updates[0];
            return (
              <article key={slug} className="panel track-card p-4">
                <h3 className="text-2xl font-black text-[var(--teal-deep)]">{track.name}</h3>
                <p className="mt-2 text-base font-semibold leading-relaxed">{track.goal}</p>
                <p className="mt-3 text-sm font-black uppercase tracking-[0.06em] text-[var(--teal-deep)]">
                  {latestUpdate ? `Latest update: ${latestUpdate.date}` : "Updates coming soon"}
                </p>
                <Link
                  href={`/sessions/tracks/${slug}` as never}
                  className="mt-3 inline-block text-sm font-black uppercase tracking-wide text-[var(--teal-deep)] underline"
                >
                  Open Track Changelog
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
