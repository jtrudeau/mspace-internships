import Link from "next/link";

import CodeBlock from "../CodeBlock";
import Tip from "../Tip";
import { fullSketch } from "./full-sketch";
import { step1, step2, step3, step4, step5, step6, step7, step8 } from "./step-snippets";

const basePath = process.env.BASE_PATH ?? "/mspace-internships";

export default function WhackAMoleResourcePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <section className="panel p-6 sm:p-8">
        <span className="tag">Resources · LED Making</span>
        <h1 className="mt-4 font-display text-4xl leading-tight text-[var(--teal-deep)] sm:text-5xl">Whack-A-Mole</h1>
        <p className="mt-4 max-w-3xl text-xl font-semibold leading-relaxed">
          Full wiring notes and code for a 3-LED reflex game: potentiometer sets difficulty (EASY / NORMAL / HARD time
          windows), score and high score on Serial.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/resources" className="btn btn-secondary">
            Back to Resources
          </Link>
          <Link href="/sessions/tracks/led" className="btn btn-primary">
            Back to LED Track
          </Link>
        </div>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Overview</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-black text-[var(--teal-deep)]">Prerequisites</h3>
            <ul className="checklist mt-4 space-y-3 text-base font-semibold">
              <li>Arduino Uno</li>
              <li>LEDs</li>
              <li>Switches</li>
              <li>Potentiometer</li>
              <li>For Loops / While Loops</li>
              <li>If Statements / Switch Statements</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-black text-[var(--teal-deep)]">List of components</h3>
            <ul className="checklist mt-4 space-y-3 text-base font-semibold">
              <li>Arduino Uno Board</li>
              <li>17 M-M wires</li>
              <li>3 Push Buttons</li>
              <li>3 LED lights</li>
              <li>3× 220Ω resistors</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">How does it work?</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          Three LEDs are the moles; three buttons are the whacks. The potentiometer sets the reaction window (~2s / 1s /
          0.5s). Press the start button to begin. Hit the button that matches the lit LED before time runs out. Score is
          consecutive hits; miss once and the game ends with three blinks. <code>btn3</code> is both the start control and
          mole #3.
        </p>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Set Up</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          LEDs use 220Ω resistors. Install the potentiometer on the breadboard as in the diagram.
        </p>
        <div className="mt-6 panel track-card p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}/images/whack-a-mole/whack-a-mole_bb.png`}
            alt="Whack-A-Mole breadboard wiring"
            className="h-auto w-full"
          />
        </div>
        <Tip title="Analog pin A0">
          Difficulty uses <code>analogRead(A0)</code> — no separate <code>#define</code>; the potentiometer wiper goes to
          A0.
        </Tip>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Coding</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          <strong>Step 1 —</strong> Declare pins, score, timer variables.
        </p>
        <CodeBlock code={step1} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          <strong>Step 2 —</strong> <code>setup()</code>: Serial and pin modes for three LEDs and three buttons.
        </p>
        <CodeBlock code={step2} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          <strong>Step 3 —</strong> <code>loop()</code>: wait for start, run gameplay <code>while</code> loop with{" "}
          <code>newMole</code>, <code>newWhack</code>, <code>checkResult</code>, <code>lightsOff</code>.
        </p>
        <CodeBlock code={step3} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          <strong>Step 4 —</strong> <code>checkSpeed()</code> maps the potentiometer to three difficulty thresholds.
        </p>
        <CodeBlock code={step4} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          <strong>Step 5 —</strong> <code>lightsOff</code>, <code>lightsOn</code>, <code>lightsBlink</code>.
        </p>
        <CodeBlock code={step5} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          <strong>Step 6 —</strong> <code>newMole()</code> picks 1–3 and lights the matching LED.
        </p>
        <CodeBlock code={step6} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          <strong>Step 7 —</strong> <code>newWhack()</code> uses <code>millis()</code> for the reaction window.
        </p>
        <CodeBlock code={step7} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          <strong>Step 8 —</strong> <code>checkResult()</code> updates score or ends the game.
        </p>
        <CodeBlock code={step8} />
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Full Code</h2>
        <CodeBlock code={fullSketch} />
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Attribution</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">Original Whack-A-Mole project by Wael Osman.</p>
      </section>
    </main>
  );
}
