import Link from "next/link";

import CodeBlock from "../CodeBlock";
import Tip from "../Tip";
import { fullSketch } from "./full-sketch";
import { step1, step2, step3, step4, step5, step6, step7 } from "./step-snippets";

const basePath = process.env.BASE_PATH ?? "/mspace-internships";

export default function CodeBreakResourcePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <section className="panel p-6 sm:p-8">
        <span className="tag">Resources · LED Making</span>
        <h1 className="mt-4 font-display text-4xl leading-tight text-[var(--teal-deep)] sm:text-5xl">Code Break</h1>
        <p className="mt-4 max-w-3xl text-xl font-semibold leading-relaxed">
          Mastermind-style guessing on an 8×8 matrix: four color buttons, four attempts, green/red feedback columns, happy
          or sad face at the end.
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
              <li>If-Else / Switch Statements</li>
              <li>Switches</li>
              <li>WS2812 8×8 Matrix Basics</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-black text-[var(--teal-deep)]">List of components</h3>
            <ul className="checklist mt-4 space-y-3 text-base font-semibold">
              <li>P4Uno Board</li>
              <li>12 M-M wires</li>
              <li>4 Switches (colored caps)</li>
              <li>1× WS2812 8×8 Matrix</li>
              <li>Breadboard</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">How does it work?</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          The Arduino picks a secret four-color code. Each guess fills the left columns; feedback uses the right columns
          (green = correct color and position, red = wrong). <code>attempt</code> advances by <strong>2</strong> rows per
          turn so each guess uses two matrix rows (guess row + feedback row). Four attempts; win shows a green smile, loss
          a red frown.
        </p>
        <Tip title="Prerequisites on the hub">
          If this feels dense, work through Binary Counter and LED Dice first — same FastLED + matrix ideas in smaller
          steps.
        </Tip>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Set Up</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          BTN_RED=2, BTN_GREEN=3, BTN_BLUE=4, BTN_WHITE=5. Matrix DIN → DI #7, 5V and GND as labeled on the board.
        </p>
        <div className="mt-6 panel track-card p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}/images/code-break/code-break_bb.png`}
            alt="Code Break breadboard wiring"
            className="h-auto w-full"
          />
        </div>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Coding</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          <strong>Step 1 —</strong> FastLED import, pins, matrix size, colors, game state arrays.
        </p>
        <CodeBlock code={step1} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          <strong>Step 2 —</strong> <code>setup()</code>: init LEDs, <code>INPUT_PULLUP</code> on buttons, default flags.
        </p>
        <CodeBlock code={step2} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          <strong>Step 3 —</strong> <code>loop()</code>: start game, <code>registerGuess</code> loop, <code>solveCode</code>
          , <code>attempt += 2</code>.
        </p>
        <CodeBlock code={step3} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          <strong>Step 4 —</strong> <code>generateCode()</code>.
        </p>
        <CodeBlock code={step4} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          <strong>Step 5 —</strong> <code>registerGuess()</code>.
        </p>
        <CodeBlock code={step5} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          <strong>Step 6 —</strong> <code>solveCode()</code>: compare guess to code, set green/red feedback, win/lose
          routing.
        </p>
        <CodeBlock code={step6} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          <strong>Step 7 —</strong> <code>correctLEDs()</code> and <code>incorrectLEDs()</code> — simple smile / frown pixel
          art on the matrix.
        </p>
        <CodeBlock code={step7} />
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Full Code</h2>
        <CodeBlock code={fullSketch} />
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Attribution</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">Original Code Break Game project by Wael Osman.</p>
      </section>
    </main>
  );
}
