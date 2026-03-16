export type Task = {
  label: string;
  url?: string;
};

export type TrackUpdate = {
  date: string;
  title: string;
  summary?: string;
  tasks: Task[];
};

export type TrackContent = {
  name: string;
  goal: string;
  updates: TrackUpdate[];
};

export const trackContent = {
  "astro-pi": {
    name: "Astro Pi Build",
    goal:
      "Build a clear, interactive demo for ScienceFest and Dunrae that explains Mission Zero and inspires Grade 6 students.",
    updates: [
      {
        date: "March 14, 2026",
        title: "Study Break Sprint",
        summary:
          "Build a working Astro Pi Mark II analog using a Raspberry Pi 4 and Sense HAT. The goal for study break is to create a reliable sensor demo, document the system clearly, and begin the 3D-print path for the flight case.",
        tasks: [
          {
            label:
              "Write a short project brief explaining what you are building, who it is for, and what is in scope for this sprint.",
          },
          {
            label:
              "Build a materials inventory for the Astro Pi analog, including the Raspberry Pi 4, Sense HAT, microSD card, power, cables, setup path, and 3D-print materials.",
          },
          {
            label:
              "Set up one Raspberry Pi 4 with the Sense HAT and confirm that the hardware is working.",
            url: "https://projects.raspberrypi.org/en/projects/getting-started-with-the-sense-hat",
          },
          {
            label:
              "Create a component map explaining each major part and what it does.",
            url: "https://astro-pi.org/about/the-computers",
          },
          {
            label:
              "Test the LED matrix, joystick, motion sensing, and environmental sensing, and record what works.",
            url: "https://projects.raspberrypi.org/en/projects/getting-started-with-the-sense-hat",
          },
          {
            label:
              "Choose one reliable sensor demo and prepare a short explanation as if for Grade 6 students and public audiences.",
          },
          {
            label:
              "Review the Astro Pi flight case reference and begin the first step on the 3D-print path.",
            url: "https://projects.raspberrypi.org/en/projects/astro-pi-flight-case-mk2",
          },
          {
            label:
              "Organize your notes so another team could continue the build.",
          },
        ],
      },
      {
        date: "March 6, 2026",
        title: "Initial Task Set",
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
    ],
  },
  pico2: {
    name: "Pico2 Navigation Robots",
    goal:
      "Create a reliable Pico2 robot kit, run a Robotics for All workshop, and prepare a Wild Robot version for Grade 4 showcase.",
    updates: [
      {
        date: "March 14, 2026",
        title: "Study Break Sprint",
        summary:
          "Build a clear baseline for the Yahboom Pico Robot system. The goal for study break is to understand all major components, get a working robot setup running, and prepare for beginner workshop support, ScienceFest minihackathon support, and the Grade 4 robot exposition.",
        tasks: [
          {
            label:
              "Write a short project brief explaining what this track is building and who it supports.",
          },
          {
            label:
              "Build a kit inventory with major parts, quantities, missing items, and anything that could block a workshop or demo.",
          },
          {
            label:
              "Learn the Pico 2 controller: what it is, how code gets onto it, and how it differs from a Raspberry Pi computer.",
            url: "https://www.raspberrypi.com/documentation/microcontrollers/pico-series.html#pico2",
          },
          {
            label:
              "Organize the Yahboom tutorials into a clear beginner sequence.",
            url: "https://www.yahboom.net/study/Pico_Robot",
          },
          {
            label:
              "Create a component map for the robot, including the controller, motors, chassis, power system, and key sensors.",
            url: "https://category.yahboom.net/products/pico-robot",
          },
          {
            label:
              "Set up one working baseline robot and record the bring-up process.",
            url: "https://www.yahboom.net/study/Pico_Robot",
          },
          {
            label:
              "Run and log first tests for movement, turning, and one sensor.",
          },
          {
            label:
              "Choose one reliable baseline demo and explain how it connects to the future Grade 4 robot exposition.",
          },
          {
            label:
              "Draft a first workshop support and logistics note for beginner robotics sessions.",
          },
        ],
      },
      {
        date: "March 6, 2026",
        title: "Initial Task Set",
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
    ],
  },
  led: {
    name: "LED Making",
    goal:
      "Prepare a beginner-friendly LED activity with materials, facilitation steps, and repeatable workshop notes.",
    updates: [
      {
        date: "March 16, 2026",
        title: "Simon Says Instructions",
        summary:
          "Use the Simon Says build from the LED curriculum as the current prototype reference. The source version is intermediate-level, so part of the work is building it, understanding it, and deciding what needs to be simplified for beginners. The full instructions and code now live on a dedicated resource page.",
        tasks: [
          {
            label:
              "Open the Simon Says resource page for the full instructions, wiring diagram, staged code walkthrough, and complete code.",
            url: "/resources/simon-says",
          },
          {
            label:
              "Confirm the Simon Says parts list: Arduino Uno, 16 jumper wires, 5 switches, 4 LEDs, 4 x 220 ohm resistors, and 5 x 10k ohm resistors.",
          },
          {
            label:
              "Set up the breadboard power rails from 5V and GND before wiring the game controls.",
          },
          {
            label:
              "Place 5 push buttons across the breadboard, leaving space between them so the layout stays readable.",
          },
          {
            label:
              "Wire the start button first using pin A4 and a 10k resistor.",
          },
          {
            label:
              "Wire the 4 game buttons and 4 LEDs using analog pins A0 to A3 for the switches and digital pins 5, 4, 3, and 2 for the lights.",
          },
          {
            label:
              "Build the code in stages: pin declarations, setup and light initialization, random sequence generation, player input checking, and right/wrong feedback.",
          },
          {
            label:
              "Test the full play loop: start button, sequence playback, player repeat, wrong answer signal, and 3-life reset.",
          },
          {
            label:
              "Document what is confusing, what works reliably, and what should be simplified for absolute beginners.",
          },
        ],
      },
      {
        date: "March 14, 2026",
        title: "Study Break Sprint",
        summary:
          "Work in pairs to turn the existing LED curriculum into a beginner workshop path. The goal for study break is to understand the kit, extract a clear learning sequence, and build one working Simon Says prototype with documentation.",
        tasks: [
          {
            label:
              "Work in pairs and make sure both people understand the kit, the learning path, and the prototype.",
          },
          {
            label:
              "Review the LED curriculum and identify the beginner path through components, programming basics, FastLED, and Simon Says.",
            url: "https://hackathon.p4labs.io/workshops/led-basics/1-%20Introduction.html",
          },
          {
            label:
              "Build a materials inventory for the LED kit and note anything missing.",
          },
          {
            label:
              "Create a component map for the main parts in the kit.",
          },
          {
            label:
              "Commit to Simon Says as the prototype and explain why it is a good beginner-facing activity.",
          },
          {
            label:
              "Build and test a working Simon Says prototype.",
          },
          {
            label:
              "Write a facilitator guide for running the activity with beginners.",
          },
          {
            label:
              "Write a troubleshooting guide for common setup, wiring, or code issues.",
          },
          {
            label:
              "Save photos, notes, and build results that can help with future workshops and posters.",
          },
        ],
      },
      {
        date: "March 6, 2026",
        title: "Initial Task Set",
        tasks: [
          {
            label:
              "Work through the LED basics workshop — introduction through first exercises.",
            url: "https://hackathon.p4labs.io/workshops/led-basics/1-%20Introduction.html",
          },
        ],
      },
    ],
  },
  scratch: {
    name: "Scratch Helpers",
    goal:
      "Support Grade 6 teams during build sessions by helping them clarify their game idea, resolve one blocker at a time, and move toward one clear next step.",
    updates: [
      {
        date: "March 14, 2026",
        title: "Study Break Sprint",
        summary:
          "Study the Grade 6 Scratch hub, identify where teams are getting stuck, and prepare a simple support routine for class: review a team's page, ask a few useful questions, give one next step or helper resource, and check back on what changed.",
        tasks: [
          {
            label:
              "Create a Scratch account if you do not have one already.",
            url: "https://scratch.mit.edu/",
          },
          {
            label:
              "Explore the DG-STEAM Scratch hub and understand how teams use sessions, resources, worksheets, and team pages.",
            url: "https://jtrudeau.github.io/dg-steam-scratch/",
          },
          {
            label:
              "Build a team support matrix that records each team’s idea, SDG status, Scratch link status, Google Doc status, and current feedback.",
            url: "https://jtrudeau.github.io/dg-steam-scratch/",
          },
          {
            label:
              "Identify the most common blockers across teams.",
          },
          {
            label:
              "Prepare a short set of questions you can ask a team to figure out where they are stuck right now.",
          },
          {
            label:
              "Create the first helper resources, such as a one-page prompt for clarifying what the player does, an SDG connection check, a Google Doc and Scratch link check, or a simple Scratch pattern example.",
          },
          {
            label:
              "Draft an on-site support workflow for reviewing a team page, checking the team's links and notes, identifying one blocker, giving one next step, and checking back after the team has tried it.",
          },
          {
            label:
              "Keep notes on what kind of example Scratch build would be most useful to create later as a model for teams.",
          },
          {
            label:
              "Capture examples and insights that can support future poster work.",
          },
        ],
      },
      {
        date: "March 6, 2026",
        title: "Initial Task Set",
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
    ],
  },
  arcade: {
    name: "RPi Arcade Consoles",
    goal:
      "Build showcase-ready Pi 5 arcade stations and aim for at least one Scratch game playable on the console.",
    updates: [],
  },
} satisfies Record<string, TrackContent>;

export type TrackSlug = keyof typeof trackContent;
