import Link from "next/link";

import CodeBlock from "../CodeBlock";
import Tip from "../Tip";
import { arduinoRPSChoiceFn } from "./arduino-choice-fn";
import { fullSketch } from "./full-sketch";
import { part1PinsAndSetup, part2ButtonAndLoop, part4Finishing } from "./step-snippets";

const basePath = process.env.BASE_PATH ?? "/mspace-internships";

export default function RpsGameResourcePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <section className="panel p-6 sm:p-8">
        <span className="tag">Resources · LED Making</span>
        <h1 className="mt-4 font-display text-4xl leading-tight text-[var(--teal-deep)] sm:text-5xl">
          Rock Paper Scissors
        </h1>
        <p className="mt-4 max-w-3xl text-xl font-semibold leading-relaxed">
          Wiring and step-by-step code for a one-player vs Arduino Rock Paper Scissors game using three LEDs and three
          buttons.
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
              <li>If Statements / Switch Statements</li>
              <li>Pseudo Random Number Generation</li>
              <li>Programming Basics</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-black text-[var(--teal-deep)]">List of components</h3>
            <ul className="checklist mt-4 space-y-3 text-base font-semibold">
              <li>Arduino Uno Board</li>
              <li>12 M-M wires</li>
              <li>3 Push Buttons</li>
              <li>3 LED lights</li>
              <li>6× 220Ω resistors</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">How does it work?</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          Three buttons choose Rock, Paper, or Scissors (pins 12, 11, 10). After you press, your LED flashes once, then
          the Arduino picks a random move and the win/loss/tie logic runs with LED blinks and messages on the Serial
          Monitor.
        </p>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Set Up</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          LEDs and switches use 220Ω resistors. LED cathodes can tie to the negative rail instead of a separate ground
          jumper.
        </p>
        <div className="mt-6 panel track-card p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}/images/rps-game/circuit.png`}
            alt="Rock Paper Scissors circuit diagram"
            className="h-auto w-full"
          />
        </div>
        <Tip title="Serial Monitor">
          Open the Serial Monitor at <strong>9600 baud</strong> to read &quot;Arduino Wins!&quot;, &quot;You win!&quot;,
          or tie messages.
        </Tip>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Coding</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          <strong>Part 1 —</strong> Pin names for LEDs and buttons, then <code>setup()</code> with <code>Serial.begin</code>
          .
        </p>
        <CodeBlock code={part1PinsAndSetup} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          <strong>Part 2 —</strong> <code>buttonPressed()</code> for edge detection and a first <code>loop()</code> that
          flashes the LED when a button is pressed.
        </p>
        <CodeBlock code={part2ButtonAndLoop} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          <strong>Part 3 —</strong> Complete <code>ArduinoRPSChoice(int playerChoice)</code> from the full sketch (random
          Arduino move, switch on outcomes, tie branch).
        </p>
        <CodeBlock code={arduinoRPSChoiceFn} />
        <Tip title="Bug hunt">
          The published sketch uses <code>case 10:</code> for scissors; it should be <code>case LED_SCISSORS:</code> to
          match the other cases — good catch for interns.
        </Tip>

        <p className="mt-6 text-base font-semibold leading-relaxed">
          <strong>Part 4 —</strong> Call <code>ArduinoRPSChoice</code> with the player&apos;s LED pin after each choice
          flash.
        </p>
        <CodeBlock code={part4Finishing} />
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Full Code</h2>
        <CodeBlock code={fullSketch} />
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Attribution</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          Original Rock, Paper, Scissors project by Justin Matte.
        </p>
      </section>
    </main>
  );
}
