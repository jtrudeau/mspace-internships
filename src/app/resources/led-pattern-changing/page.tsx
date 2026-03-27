import Link from "next/link";

import CodeBlock from "../CodeBlock";
import Tip from "../Tip";
import { fullSketch } from "./full-sketch";
import { part1Setup, part2Loop, part3Sequences } from "./step-snippets";

const basePath = process.env.BASE_PATH ?? "/mspace-internships";

export default function LedPatternChangingResourcePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <section className="panel p-6 sm:p-8">
        <span className="tag">Resources · LED Making</span>
        <h1 className="mt-4 font-display text-4xl leading-tight text-[var(--teal-deep)] sm:text-5xl">
          LED Pattern Changing
        </h1>
        <p className="mt-4 max-w-3xl text-xl font-semibold leading-relaxed">
          A beginner button-and-LED project: press once to start, then each press cycles through seven different light
          patterns on six LEDs — pulled from the LED curriculum for a stable internship reference.
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
              <li>LEDs / Switch / Resistors</li>
              <li>If-Else Statements</li>
              <li>Programming Basics</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-black text-[var(--teal-deep)]">List of components</h3>
            <ul className="checklist mt-4 space-y-3 text-base font-semibold">
              <li>1× Arduino Uno</li>
              <li>1× USB Cable</li>
              <li>6× LED (any color)</li>
              <li>5× 220Ω Resistor</li>
              <li>1× 10kΩ Resistor</li>
              <li>8× Input M-M wires (green recommended)</li>
              <li>2× Red wire</li>
              <li>6× Black wire</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">How does it work?</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          Press the button once to start pattern 1. Each subsequent press advances through seven patterns. After pattern
          7, it resets to pattern 1.
        </p>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Set Up</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          LEDs on pins 12, 11, 10, 7, 6, 5. Button on pin 3. Recreate the breadboard layout from the diagram.
        </p>
        <div className="mt-6 panel track-card p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}/images/LedPatternChanging/LedPatternChange.png`}
            alt="LED Pattern Changing breadboard wiring"
            className="h-auto w-full"
          />
        </div>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Coding</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          <strong>Part 1 — Setup:</strong> pin constants (L1–L6, buttonPin), delay <code>de</code>, counter{" "}
          <code>p</code>, <code>buttonState</code>, and <code>void setup()</code> with all <code>pinMode</code> calls.
        </p>
        <CodeBlock code={part1Setup} />
        <Tip title="Bug hunt for interns">
          The curriculum declares <code>p</code> and <code>buttonState</code> as <code>const int</code> but reassigns
          them in the loop — they should be plain <code>int</code>. Good exercise to spot and fix.
        </Tip>

        <p className="mt-6 text-base font-semibold leading-relaxed">
          <strong>Part 2 — The loop:</strong> read the button, increment <code>p</code> on press, then branch into
          sequence functions 1–7.
        </p>
        <CodeBlock code={part2Loop} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          <strong>Part 3 — The sequences:</strong> seven functions (<code>first_sequence</code> through{" "}
          <code>seventh_sequence</code>) using <code>digitalWrite</code>; <code>seventh_sequence</code> clears LEDs and
          resets <code>p</code> to 0.
        </p>
        <CodeBlock code={part3Sequences} />
        <Tip title="Extension">
          Try creating three new unique patterns of your own once the base project works.
        </Tip>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Full Code</h2>
        <CodeBlock code={fullSketch} />
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Attribution</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          Original LED Pattern Changing project by Anh Nam.
        </p>
      </section>
    </main>
  );
}
