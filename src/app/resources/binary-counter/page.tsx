import Link from "next/link";

import CodeBlock from "../CodeBlock";
import Tip from "../Tip";
import { fullSketch } from "./full-sketch";
import { displayNumber, importsAndVars, loopV1, loopV2, setupFn } from "./step-snippets";

const basePath = process.env.BASE_PATH ?? "/mspace-internships";

export default function BinaryCounterResourcePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <section className="panel p-6 sm:p-8">
        <span className="tag">Resources · LED Making</span>
        <h1 className="mt-4 font-display text-4xl leading-tight text-[var(--teal-deep)] sm:text-5xl">
          Binary Counter
        </h1>
        <p className="mt-4 max-w-3xl text-xl font-semibold leading-relaxed">
          Count from 0 to 256 in binary using a NeoPixel LED stick and two buttons — a visual introduction to binary
          representation and the FastLED library.
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
              <li>Arduino UNO</li>
              <li>Programming Basics</li>
              <li>LEDs / Switches / If Statements</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-black text-[var(--teal-deep)]">List of components</h3>
            <ul className="checklist mt-4 space-y-3 text-base font-semibold">
              <li>P4Uno Board</li>
              <li>8 M-M wires</li>
              <li>1× NeoPixel Stick (8 LEDs)</li>
              <li>2× Push Buttons</li>
              <li>Breadboard</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">How does it work?</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          The + button increments the count and the − button decrements it. After each change, the LED stick shows the
          current value in binary: red for 1, blue for 0, from 0 to 256.
        </p>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Set Up</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          Button + → DI #2, Button − → DI #3, NeoPixel DI → DI #5, NeoPixel 4-7VDC → 5V, NeoPixel GND → GND rail. Check
          pin labels on the back of the stick.
        </p>
        <div className="mt-6 panel track-card p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}/images/binary-counter/binary-counter_bb.png`}
            alt="Binary counter breadboard wiring"
            className="h-auto w-full"
          />
        </div>
        <Tip title="Pull-up buttons">
          With <code>INPUT_PULLUP</code>, a pressed button reads <code>LOW</code> (0) because it connects to ground.
          Unpressed reads <code>HIGH</code>.
        </Tip>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Coding</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          <strong>Step 1 —</strong> Include FastLED, set <code>NUM_LEDS</code>, button pins, <code>DATA_PIN</code>, red /
          blue colors, and the <code>leds</code> array. Initialize <code>count</code> to 0.
        </p>
        <CodeBlock code={importsAndVars} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          <strong>Step 2 —</strong> In <code>setup()</code>, call <code>FastLED.addLeds</code> and set both buttons to{" "}
          <code>INPUT_PULLUP</code>.
        </p>
        <CodeBlock code={setupFn} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          <strong>Step 3 —</strong> First version of <code>loop()</code>: read buttons, update <code>count</code> within
          bounds, with debounce-style delays.
        </p>
        <CodeBlock code={loopV1} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          The curriculum explains the modulo algorithm: each LED is one binary digit. Compare the number&apos;s modulo
          result to know whether that bit should be 1 or 0.
        </p>
        <CodeBlock code={displayNumber} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          <strong>Step 4 —</strong> Final <code>loop()</code>: after handling buttons, call <code>displayNumber(count)</code>{" "}
          and <code>FastLED.show()</code> so the stick updates.
        </p>
        <CodeBlock code={loopV2} />
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Full Code</h2>
        <CodeBlock code={fullSketch} />
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Attribution</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">Original Binary Counter project by Wael Osman.</p>
      </section>
    </main>
  );
}
