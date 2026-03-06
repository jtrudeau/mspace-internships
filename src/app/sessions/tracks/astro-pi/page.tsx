import Link from "next/link";

type Task = {
  label: string;
  url?: string;
};

type TaskSet = {
  date: string;
  tasks: Task[];
};

const trackName = "Astro Pi Build";
const trackGoal =
  "Build a clear, interactive demo for ScienceFest and Dunrae that explains Mission Zero and inspires Grade 6 students.";

const taskSets: TaskSet[] = [
  {
    date: "March 6, 2026",
    tasks: [
      {
        label: "Get familiar with the Astro Pi hardware.",
        url: "https://astro-pi.org/about/the-computers",
      },
      {
        label: "Research the Sense HAT — work through the getting started guide.",
        url: "https://projects.raspberrypi.org/en/projects/getting-started-with-the-sense-hat",
      },
      {
        label: "Look into what is needed to 3D print the flight case housing.",
        url: "https://projects.raspberrypi.org/en/projects/astro-pi-flight-case-mk2",
      },
    ],
  },
];

export default function AstroPiTrackPage() {
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
