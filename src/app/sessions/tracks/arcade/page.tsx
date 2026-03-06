import Link from "next/link";

const trackName = "RPi Arcade Consoles";
const trackGoal =
  "Build showcase-ready Pi 5 arcade stations and aim for at least one Scratch game playable on the console.";

export default function ArcadeTrackPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <section className="panel p-6 sm:p-8">
        <span className="tag">Track Tasks · {trackName}</span>
        <h1 className="mt-4 font-display text-4xl leading-tight text-[var(--teal-deep)] sm:text-5xl">
          {trackName}
        </h1>
        <p className="mt-4 max-w-3xl text-xl font-semibold leading-relaxed">
          {trackGoal}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/#tracks" className="btn btn-secondary">
            Back to Project Tracks
          </Link>
        </div>
      </section>

      <section className="mt-8 panel p-6">
        <p className="text-base font-semibold leading-relaxed">
          Tasks for this track are coming soon.
        </p>
      </section>
    </main>
  );
}
