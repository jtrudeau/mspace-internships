import Link from "next/link";

import CodeBlock from "../CodeBlock";
import Tip from "../Tip";
import { fullSketch } from "./full-sketch";
import { part1, part2, part3, part4 } from "./step-snippets";

const basePath = process.env.BASE_PATH ?? "/mspace-internships";

export default function LedDiceResourcePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <section className="panel p-6 sm:p-8">
        <span className="tag">Resources · LED Making</span>
        <h1 className="mt-4 font-display text-4xl leading-tight text-[var(--teal-deep)] sm:text-5xl">LED Dice</h1>
        <p className="mt-4 max-w-3xl text-xl font-semibold leading-relaxed">
          Roll a virtual 6-sided die: press the button, watch the animation, then see the dice face on the 8×8 NeoPixel
          matrix.
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
              <li>LEDs / Switches / Resistors</li>
              <li>Pseudo Random Number Generation</li>
              <li>Programming Basics</li>
              <li>FastLED Library</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-black text-[var(--teal-deep)]">List of components</h3>
            <ul className="checklist mt-4 space-y-3 text-base font-semibold">
              <li>Arduino Uno Board</li>
              <li>5 M-M wires + 3 F-M wires</li>
              <li>1× Push Button</li>
              <li>1× 220Ω Resistor</li>
              <li>1× NeoPixel 8×8 LED Matrix</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">How does it work?</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          On button press, a short rolling animation runs (every 10th LED lights green), then a random value 1–6 selects a
          dice face drawn in green on the matrix. The face clears after a few seconds.
        </p>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Set Up</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          Connect DIN → DI #3, +5V → 5V, GND → GND (labels on the back of the matrix). The Fritzing part may differ from
          the kit matrix — match your hardware.
        </p>
        <div className="mt-6 panel track-card p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}/images/led-dice/LEDDiceDiagram.png`}
            alt="LED Dice wiring diagram"
            className="h-auto w-full"
          />
        </div>
        <Tip title="setColor(x, y) uses 1-based coordinates">
          The helper subtracts 1 when indexing into the LED array, so <code>x</code> and <code>y</code> start at 1 for the
          visible grid, not 0.
        </Tip>
        <Tip title="Animation delay">
          The curriculum comment says &quot;1 ms&quot; delay between animation LEDs; the sketch uses <code>delay(100)</code>{" "}
          so the roll is visible.
        </Tip>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Coding</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          <strong>Part 1 —</strong> FastLED setup: grid size, <code>setColor</code>, <code>setup</code>, and a quick
          diagonal test pattern.
        </p>
        <CodeBlock code={part1} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          <strong>Part 2 —</strong> <code>buttonPressed()</code> edge detection and a <code>loop()</code> that reacts to
          presses.
        </p>
        <CodeBlock code={part2} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          <strong>Part 3 —</strong> <code>rollingDice()</code>: animation, random seed, and the switch that draws each dice
          face.
        </p>
        <CodeBlock code={part3} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          <strong>Part 4 —</strong> <code>resetMatrix()</code>, final <code>loop()</code> timing, and clearing the display.
        </p>
        <CodeBlock code={part4} />
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Full Code</h2>
        <CodeBlock code={fullSketch} />
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Attribution</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">Original LED Dice project by Justin Matte.</p>
      </section>
    </main>
  );
}
