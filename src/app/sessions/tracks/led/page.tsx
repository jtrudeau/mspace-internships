import Link from "next/link";

type Task = {
  label: string;
  url?: string;
};

type TaskSet = {
  date: string;
  tasks: Task[];
};

const trackName = "LED Making";
const trackGoal =
  "Prepare a beginner-friendly LED activity with materials, facilitation steps, and repeatable workshop notes.";

const taskSets: TaskSet[] = [
  {
    date: "March 6, 2026",
    tasks: [
      {
        label:
          "Work through the LED basics workshop — introduction through first exercises.",
        url: "https://hackathon.p4labs.io/workshops/led-basics/1-%20Introduction.html",
      },
    ],
  },
];

export default function LedTrackPage() {
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

      {taskSets.map((set) => (
        <section key={set.date} className="mt-8 panel p-6">
          <h2 className="font-display text-2xl text-[var(--teal-deep)]">
            {set.date}
          </h2>
          <ul className="checklist mt-4 space-y-3 text-base font-semibold">
            {set.tasks.map((task) => (
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
    </main>
  );
}
