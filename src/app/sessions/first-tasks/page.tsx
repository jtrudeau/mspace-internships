import Link from "next/link";

type TrackTasks = {
  id: string;
  name: string;
  intro: string;
  tasks: {
    label: string;
    url?: string;
  }[];
};

const trackTasks: TrackTasks[] = [
  {
    id: "astro-pi",
    name: "Astro Pi Build",
    intro:
      "Start by understanding the hardware you will be working with and what it takes to build a flight case.",
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
  {
    id: "pico2",
    name: "Pico2 Navigation Robots",
    intro:
      "Get to know the robot kit, its components, and the Pico 2 controller that runs it all.",
    tasks: [
      {
        label:
          "Explore all the resources from Yahboom, the company that makes the kit.",
        url: "https://www.yahboom.net/study/Pico_Robot",
      },
      {
        label:
          "Organize the tutorials — figure out what order makes sense and what covers what.",
      },
      {
        label:
          "Start documenting each component of the Pico2 robot. What does each part do?",
        url: "https://category.yahboom.net/products/pico-robot",
      },
      {
        label: "Learn about the Pico 2 controller itself.",
        url: "https://www.raspberrypi.com/documentation/microcontrollers/pico-series.html#pico2",
      },
    ],
  },
  {
    id: "led",
    name: "LED Making",
    intro:
      "Start with the fundamentals of controlling LEDs. This is the foundation for everything you will build.",
    tasks: [
      {
        label:
          "Work through the LED basics workshop — introduction through first exercises.",
        url: "https://hackathon.p4labs.io/workshops/led-basics/1-%20Introduction.html",
      },
    ],
  },
  {
    id: "scratch",
    name: "Scratch Helpers",
    intro:
      "Your job is to support Grade 6 students working on Scratch projects. Start by understanding what they are building.",
    tasks: [
      {
        label:
          "Familiarize yourself with the Grade 6 Scratch projects on the dedicated website. Note that each team has their own hub for collecting information and feedback.",
        url: "https://jtrudeau.github.io/dg-steam-scratch/",
      },
      {
        label:
          "Create a Scratch account if you do not have one already. We will make at least one game, quest, or activity that complements the Grade 6 projects.",
        url: "https://scratch.mit.edu/",
      },
    ],
  },
  {
    id: "arcade",
    name: "RPi Arcade Consoles",
    intro: "Tasks for this track are coming soon.",
    tasks: [],
  },
];

export default function FirstTasksPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <section className="panel p-6 sm:p-8">
        <span className="tag">Student Resources · First Tasks</span>
        <h1 className="mt-4 font-display text-4xl leading-tight text-[var(--teal-deep)] sm:text-5xl">
          First Tasks by Track
        </h1>
        <p className="mt-4 max-w-3xl text-xl font-semibold leading-relaxed">
          Your first set of tasks. Research, explore, and start documenting what
          you learn. Come to the next session ready to share what you found.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-secondary">
            Back to Home Hub
          </Link>
        </div>
      </section>

      {trackTasks.map((track) => (
        <section
          key={track.id}
          id={track.id}
          className="mt-8 panel p-6"
        >
          <h2 className="font-display text-3xl text-[var(--teal-deep)]">
            {track.name}
          </h2>
          <p className="mt-3 text-base font-semibold leading-relaxed">
            {track.intro}
          </p>
          {track.tasks.length > 0 && (
            <ul className="checklist mt-4 space-y-3 text-base font-semibold">
              {track.tasks.map((task) => (
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
          )}
        </section>
      ))}
    </main>
  );
}
