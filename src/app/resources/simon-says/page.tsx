import Link from "next/link";
import type { ReactNode } from "react";

import CodeBlock from "../CodeBlock";

const basePath = process.env.BASE_PATH ?? "/mspace-internships";

const pinDeclarations = String.raw`const int switch1 = A0;
const int switch2 = A1;
const int switch3 = A2;
const int switch4 = A3;

const int start_switch = A4;

const int light1 = 5;
const int light2 = 4;
const int light3 = 3;
const int light4 = 2;`;

const setupPins = String.raw`void setup() {
  pinMode(switch1, INPUT);
  pinMode(switch2, INPUT);
  pinMode(switch3, INPUT);
  pinMode(switch4, INPUT);

  pinMode(light1, OUTPUT);
  pinMode(light2, OUTPUT);
  pinMode(light3, OUTPUT);
  pinMode(light4, OUTPUT);
}`;

const setupLightsLow = String.raw`void setup() {
  pinMode(switch1, INPUT);
  pinMode(switch2, INPUT);
  pinMode(switch3, INPUT);
  pinMode(switch4, INPUT);

  pinMode(light1, OUTPUT);
  pinMode(light2, OUTPUT);
  pinMode(light3, OUTPUT);
  pinMode(light4, OUTPUT);

  digitalWrite(light1, LOW);
  digitalWrite(light2, LOW);
  digitalWrite(light3, LOW);
  digitalWrite(light4, LOW);
}`;

const gameAttributes = String.raw`const int sequence_size = 4;
int sequence[sequence_size];
int input_sequence[sequence_size];

bool started = false;
const int chances = 3;
int errors = 0;`;

const loopSnippet = String.raw`void loop()
{
  if (errors == chances)
  {
     errors = 0;
    error_repetition = 3;
    started = false;
  }
  if (digitalRead(start_switch) == LOW && started == false)
  {
    started = true;    
  }
  if (started == true && errors < chances)
  {
    set_sequence();
    get_sequence();
  }
}`;

const setSequenceShort = String.raw`void set_sequence()
{
  randomSeed(millis());

  for (int i = 0; i < sequence_size; i++)
  {
    sequence[i] = random(2,6);
  }
}`;

const setSequenceDisplay = String.raw`void set_sequence()
{
  randomSeed(millis());

  for (int i = 0; i < sequence_size; i++)
  {
    sequence[i] = random(2,6);
  }

  digitalWrite(light1, LOW);
  digitalWrite(light2, LOW);
  digitalWrite(light3, LOW);
  digitalWrite(light4, LOW);

  for (int i = 0; i < sequence_size; i++)
  {
    digitalWrite(sequence[i], HIGH);
    delay(1000);
    digitalWrite(sequence[i], LOW);
    delay(200);
  }
}`;

const getSequenceSnippet = String.raw`void get_sequence()
{
  int flag = 0;

  for (int i = 0; i < sequence_size; i++)
  {
    flag = 0;
    while(flag == 0)
    {
      if (digitalRead(switch1) == LOW)
      {
        digitalWrite(light1, HIGH);
        input_sequence[i] = 5;
        flag = 1;
        delay(200);
        if (input_sequence[i] != sequence[i])
        {
          wrong_sequence();
          errors++;
          return;
        }
        digitalWrite(light1, LOW);
       }

      if (digitalRead(switch2) == LOW)
      {
        digitalWrite(light2, HIGH);
        input_sequence[i] = 4;
        flag = 1;
        delay(200);
        if (input_sequence[i] != sequence[i])
        {
          wrong_sequence();
          errors++;
          return;
        }
        digitalWrite(light2, LOW);
       }

      if (digitalRead(switch3) == LOW)
      {
        digitalWrite(light3, HIGH);
        input_sequence[i] = 3;
        flag = 1;
        delay(200);
        if (input_sequence[i] != sequence[i])
        {
          wrong_sequence();
          errors++;
          return;
        }
        digitalWrite(light3, LOW);
      }

      if (digitalRead(switch4) == LOW)
      {
        digitalWrite(light4, HIGH);
        input_sequence[i] = 2;
        flag = 1;
        delay(200);
        if (input_sequence[i] != sequence[i])
        {
          wrong_sequence();
          errors++;
          return;
        }
        digitalWrite(light4, LOW);
      }
    }
  }
  right_sequence();
}`;

const wrongSequenceSnippet = String.raw`void wrong_sequence()
{
  for (int i = 0; i < error_repetition; i++)
  {
      digitalWrite(light1, LOW);
      digitalWrite(light2, LOW);
      digitalWrite(light3, LOW);
      digitalWrite(light4, LOW);
      delay(200);
      digitalWrite(light1, HIGH);
      digitalWrite(light2, HIGH);
      digitalWrite(light3, HIGH);
      digitalWrite(light4, HIGH);
      delay(200);
      digitalWrite(light1, LOW);
      digitalWrite(light2, LOW);
      digitalWrite(light3, LOW);
      digitalWrite(light4, LOW);

  }
  error_repetition = error_repetition + 3 ;
  delay(1000);
}`;

const rightSequenceSnippet = String.raw`void right_sequence()
{

    digitalWrite(light1, LOW);
    digitalWrite(light2, LOW);
    digitalWrite(light3, LOW);
    digitalWrite(light4, LOW);
    delay(500);

    digitalWrite(light1, HIGH);
    digitalWrite(light2, HIGH);
    digitalWrite(light3, HIGH);
    digitalWrite(light4, HIGH);
  
  delay(500);
    digitalWrite(light1, LOW);
    digitalWrite(light2, LOW);
    digitalWrite(light3, LOW);
    digitalWrite(light4, LOW);
    delay(1000);
}`;

const fullCode = String.raw`const int switch1 = A0;
const int switch2 = A1;
const int switch3 = A2;
const int switch4 = A3;

const int start_switch = A4;

const int light1 = 5;
const int light2 = 4;
const int light3 = 3;
const int light4 = 2;

const int sequence_size = 4;
int sequence[sequence_size];
int input_sequence[sequence_size];

bool started = false;
const int chances = 3;
int errors = 0;

int error_repetition = 3;

void setup() {
  pinMode(switch1, INPUT);
  pinMode(switch2, INPUT);
  pinMode(switch3, INPUT);
  pinMode(switch4, INPUT);

  pinMode(light1, OUTPUT);
  pinMode(light2, OUTPUT);
  pinMode(light3, OUTPUT);
  pinMode(light4, OUTPUT);

  digitalWrite(light1, LOW);
  digitalWrite(light2, LOW);
  digitalWrite(light3, LOW);
  digitalWrite(light4, LOW);
}

void loop()
{
  if (errors == chances)
  {
     errors = 0;
    error_repetition = 3;
    started = false;
  }
  if (digitalRead(start_switch) == LOW && started == false)
  {
    started = true;    
  }
  if (started == true && errors < chances)
  {
    set_sequence();
    get_sequence();
  }
}

void set_sequence()
{
  randomSeed(millis());

  for (int i = 0; i < sequence_size; i++)
  {
    sequence[i] = random(2,6);
  }

  digitalWrite(light1, LOW);
  digitalWrite(light2, LOW);
  digitalWrite(light3, LOW);
  digitalWrite(light4, LOW);

  for (int i = 0; i < sequence_size; i++)
  {
    digitalWrite(sequence[i], HIGH);
    delay(1000);
    digitalWrite(sequence[i], LOW);
    delay(200);
  }
}

void get_sequence()
{
  int flag = 0;

  for (int i = 0; i < sequence_size; i++)
  {
    flag = 0;
    while(flag == 0)
    {
      if (digitalRead(switch1) == LOW)
      {
        digitalWrite(light1, HIGH);
        input_sequence[i] = 5;
        flag = 1;
        delay(200);
        if (input_sequence[i] != sequence[i])
        {
          wrong_sequence();
          errors++;
          return;
        }
        digitalWrite(light1, LOW);
       }

      if (digitalRead(switch2) == LOW)
      {
        digitalWrite(light2, HIGH);
        input_sequence[i] = 4;
        flag = 1;
        delay(200);
        if (input_sequence[i] != sequence[i])
        {
          wrong_sequence();
          errors++;
          return;
        }
        digitalWrite(light2, LOW);
       }

      if (digitalRead(switch3) == LOW)
      {
        digitalWrite(light3, HIGH);
        input_sequence[i] = 3;
        flag = 1;
        delay(200);
        if (input_sequence[i] != sequence[i])
        {
          wrong_sequence();
          errors++;
          return;
        }
        digitalWrite(light3, LOW);
      }

      if (digitalRead(switch4) == LOW)
      {
        digitalWrite(light4, HIGH);
        input_sequence[i] = 2;
        flag = 1;
        delay(200);
        if (input_sequence[i] != sequence[i])
        {
          wrong_sequence();
          errors++;
          return;
        }
        digitalWrite(light4, LOW);
      }
   }
    }
  right_sequence();
}

void right_sequence()
{

    digitalWrite(light1, LOW);
    digitalWrite(light2, LOW);
    digitalWrite(light3, LOW);
    digitalWrite(light4, LOW);
    delay(500);

    digitalWrite(light1, HIGH);
    digitalWrite(light2, HIGH);
    digitalWrite(light3, HIGH);
    digitalWrite(light4, HIGH);
  
  delay(500);
    digitalWrite(light1, LOW);
    digitalWrite(light2, LOW);
    digitalWrite(light3, LOW);
    digitalWrite(light4, LOW);
    delay(1000);
}

void wrong_sequence()
{
  for (int i = 0; i < error_repetition; i++)
  {
      digitalWrite(light1, LOW);
      digitalWrite(light2, LOW);
      digitalWrite(light3, LOW);
      digitalWrite(light4, LOW);
      delay(200);
      digitalWrite(light1, HIGH);
      digitalWrite(light2, HIGH);
      digitalWrite(light3, HIGH);
      digitalWrite(light4, HIGH);
      delay(200);
      digitalWrite(light1, LOW);
      digitalWrite(light2, LOW);
      digitalWrite(light3, LOW);
      digitalWrite(light4, LOW);

  }
  error_repetition = error_repetition + 3 ;
  delay(1000);
}`;

function Tip({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-4 border-2 border-[var(--ink)] bg-[var(--mint)] p-4">
      <p className="text-sm font-black uppercase tracking-[0.08em] text-[var(--teal-deep)]">{title}</p>
      <div className="mt-2 text-base font-semibold leading-relaxed">{children}</div>
    </div>
  );
}

export default function SimonSaysResourcePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <section className="panel p-6 sm:p-8">
        <span className="tag">Resources · LED Making</span>
        <h1 className="mt-4 font-display text-4xl leading-tight text-[var(--teal-deep)] sm:text-5xl">
          Simon Says Game
        </h1>
        <p className="mt-4 max-w-3xl text-xl font-semibold leading-relaxed">
          This page posts the Simon Says instructions and code pulled from the current LED curriculum source so interns
          can work from one stable reference inside the internship hub.
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
        <p className="mt-3 text-base font-semibold leading-relaxed">
          This project is oriented towards intermediate Arduino developers with a basic understanding of Arduino and
          C++. Through this game, we will be going through a mix of multiple components such as LEDs and Switches.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-black text-[var(--teal-deep)]">Prerequisites</h3>
            <ul className="checklist mt-4 space-y-3 text-base font-semibold">
              <li>Arduino Uno</li>
              <li>LED</li>
              <li>Switches</li>
              <li>Resistors</li>
              <li>Programming Basics</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-black text-[var(--teal-deep)]">List Of Components</h3>
            <ul className="checklist mt-4 space-y-3 text-base font-semibold">
              <li>Arduino Uno Board</li>
              <li>16 M - M Wires</li>
              <li>5 Switches</li>
              <li>4 LED Lights</li>
              <li>4 220Ω Resistors</li>
              <li>5 10kΩ Resistors</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">How does it work?</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          Simon Says is a game where the player needs to memorize a sequence of 4 lights and repeat it once it is
          complete. When a user presses the start button, it will generate a sequence of 4 blinking lights that will
          be played. Once the sequence is completed, the user will need to repeat the sequence in order by pressing on
          the switches. When the user has input the wrong sequence, it will blink fast. They will have 3 lives before
          the game is over.
        </p>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Set Up</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          Using a red and black wire, connect it from the 5 volt (5V) pin to the positive row and the ground (GND)
          pin to the negative row of the breadboard.
        </p>
        <p className="mt-4 text-base font-semibold leading-relaxed">
          Afterward, put 5 push buttons along the middle of the breadboard like in the picture with 3 pins separating
          each one of them.
        </p>
        <p className="mt-4 text-base font-semibold leading-relaxed">
          We will now set up the button to start the game, which will be the first button. Connect a wire from the A4
          pin to the right leg of the button. Then, with a 10k ohm resistor, connect it under the right leg to the
          positive row of the breadboard. Finally, connect a wire from the left leg of the button to the negative row
          on the breadboard.
        </p>
        <p className="mt-4 text-base font-semibold leading-relaxed">
          Once that is done, we will be setting up the LEDs and buttons to run the game. Using a wire, connect it from
          the 2nd digital pin to the second socket on a column to the right of the button. Then, using a 220 ohm
          resistor, connect it horizontally from the third socket of the same row. With an LED, connect it from the end
          of the resistor to the right leg of the button. From the right leg of the button, connect a wire to the
          negative row of the breadboard. After, connect a wire from the 1st Analog pin (A1) to the left leg of the
          button, and a 10k ohm resistor from that wire to the positive row of the breadboard.
        </p>
        <Tip title="Tip">
          LED&apos;s current goes from the long leg to the short leg, from the Anode to the Cathode.
        </Tip>
        <p className="mt-4 text-base font-semibold leading-relaxed">Repeat this process with every button left.</p>
        <div className="mt-6 panel track-card p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}/images/resources/simon-says/simon_says_schema_fritzing.png`}
            alt="Simon Says fritzing diagram"
            className="h-auto w-full"
          />
        </div>
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Coding</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          First, you will need to declare your light and switch pins.
        </p>
        <CodeBlock code={pinDeclarations} />
        <Tip title="Tip: Why not hard code the values as we code?">
          This is a safe practice that allows the pins to be set to specific numbers. When you need to change the pins,
          you can refer to these values instead of changing them individually. It can become messy if you have a lot of
          code.
        </Tip>

        <p className="mt-6 text-base font-semibold leading-relaxed">
          Inside the <code>void setup()</code> function, you can set the pin modes for the LEDs and switches as such:
        </p>
        <CodeBlock code={setupPins} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          Once that is done, you can set the <code>pinMode</code> for each light to <code>LOW</code> to have the lights
          off when the project starts.
        </p>
        <CodeBlock code={setupLightsLow} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          Certain attributes are needed for this game to work. For example, we will need the sequence size, an array of
          integers to store a generated sequence, an array of integers to store the sequence input, an integer value for
          the number of lives the player has, an integer value for the number of lives left, and a boolean value to
          indicate if the game is started or not. At the beginning of the code, right after where we defined the lights
          and switches, we will declare the following attributes.
        </p>
        <CodeBlock code={gameAttributes} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          Inside the <code>void loop()</code>, we will be checking if the has pressed the start button to begin the
          game, if the player has exceeded their number of errors to end the game and to generate the sequence and wait
          for the sequence if the game is running.
        </p>
        <CodeBlock code={loopSnippet} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          As you can see inside the loop, we have two undefined functions: <code>get_sequence()</code> and{" "}
          <code>set_sequence()</code>. We will start with the <code>set_sequence()</code> function.
        </p>
        <p className="mt-4 text-base font-semibold leading-relaxed">
          In this function, we will be generating 4 random numbers, that correspond to the 4 lights available using{" "}
          <code>randomSeed()</code> and <code>millis()</code>.
        </p>
        <p className="mt-4 text-base font-semibold leading-relaxed">
          The <code>randomSeed()</code> function comes from the Arduino board that initializes the pseudo-random number
          generator at a random point in time.
        </p>
        <p className="mt-4 text-base font-semibold leading-relaxed">
          The <code>millis()</code> function, also a function from the Arduino board, returns the number of milliseconds
          passed since the board began running the current program.
        </p>
        <p className="mt-4 text-base font-semibold leading-relaxed">
          Afterward, we will use a For Loop to generate 4 numbers with the <code>random()</code> function and store
          them inside the <code>sequence</code> attribute created earlier.
        </p>
        <CodeBlock code={setSequenceShort} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          Once that is done, we will make sure that the lights are all off. Then, we will display the sequence using a
          for loop that runs through the <code>sequence</code> attribute.
        </p>
        <CodeBlock code={setSequenceDisplay} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          The next function that we will need to write is the <code>get_sequence()</code> function that allows the board
          to get the input sequence from a user.
        </p>
        <p className="mt-4 text-base font-semibold leading-relaxed">
          This function will have a <code>flag</code> attribute, that by default will be set to <code>0</code>, meaning
          the board is awaiting input from the player. Once a player has pressed on a switch, the <code>flag</code> will
          be set to <code>1</code> and whatever the user has input wouldn&apos;t be registered until the system has
          processed the verification.
        </p>
        <p className="mt-4 text-base font-semibold leading-relaxed">
          A For Loops is needed to get exactly the number of inputs indicated at the beginning under the{" "}
          <code>sequence_size</code> attribute.
        </p>
        <p className="mt-4 text-base font-semibold leading-relaxed">
          Inside the For Loop, we will put a While Loop. While the <code>Flag</code> is <code>0</code>, it will be
          waiting for input from one of the four switches.
        </p>
        <p className="mt-4 text-base font-semibold leading-relaxed">
          There will be an If statement, that will check if one of the switches is pressed. If so, it will light up the
          corresponding LED, insert into the <code>input_sequence</code> the triggered switch, set the flag to 1, and
          check if the <code>input_sequence[i]</code> is not equal to the <code>sequence[i]</code>.
        </p>
        <p className="mt-4 text-base font-semibold leading-relaxed">
          If the sequence is <strong>wrong</strong>, it will run the <code>wrong_sequence()</code> function which is a
          sequence of lights to indicate that the sequence is wrong. It will also add 1 to the attribute{" "}
          <code>errors</code> and break the For Loop.
        </p>
        <p className="mt-4 text-base font-semibold leading-relaxed">
          If the sequence is <strong>right</strong>, it will continue the loop until it is done. Once all the sequences
          have been checked, it will run the <code>right_sequence()</code> function which is a sequence of lights to
          indicate that the sequence is right.
        </p>
        <CodeBlock code={getSequenceSnippet} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          Here is the <code>wrong_sequence()</code> function. In this function, we will be blinking the lights rapidly
          at 200 milliseconds intervals 3 times. And it adds 3 every time the user makes a mistake. In the end, it will
          blink 9 times, as the user can only have 3 mistakes.
        </p>
        <CodeBlock code={wrongSequenceSnippet} />

        <p className="mt-6 text-base font-semibold leading-relaxed">
          Here is the <code>right_sequence()</code> function. In this function, we will have the lights light up for
          half a second, and then off.
        </p>
        <CodeBlock code={rightSequenceSnippet} />
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Full Code</h2>
        <CodeBlock code={fullCode} />
      </section>

      <section className="mt-8 panel p-6">
        <h2 className="font-display text-3xl text-[var(--teal-deep)]">Attribution</h2>
        <p className="mt-3 text-base font-semibold leading-relaxed">
          Original Simon Says project by Lawrence Liang, with Tawfiq Jawhar as collaborator.
        </p>
      </section>
    </main>
  );
}
