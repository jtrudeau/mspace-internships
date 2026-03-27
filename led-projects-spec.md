# LED Projects Spec — mspace-internships Resource Pages

Source curriculum: `/Users/joel/p4labs/VirlabsAI/curriculum/ledkit/src/workshops/`
Existing reference: `src/app/resources/simon-says/page.tsx`
Resources index: `src/app/resources/page.tsx`

---

## Summary of All Workshops Found

The curriculum contains 15 workshops. Simon Says is already implemented. The table below categorizes the rest.

| Workshop | Level | Hardware | Priority |
|---|---|---|---|
| Whack-A-Mole | Intermediate | 3 LEDs, 3 buttons, potentiometer | **High** |
| Rock Paper Scissors | Intermediate | 3 LEDs, 3 buttons | **High** |
| LED Pattern Changing | Beginner | 6 LEDs, 1 button | **High** |
| Binary Counter | Beginner | NeoPixel stick (8 LEDs), 2 buttons, FastLED | **High** |
| LED Dice | Beginner | NeoPixel 8x8 matrix, 1 button, FastLED | **High** |
| Code Break | Intermediate | NeoPixel 8x8 matrix, 4 buttons, FastLED | **High** |
| 8x8 Matrix Light Pattern | Beginner | NeoPixel 8x8, FastLED | Later |
| Pattern Wheel | Beginner | Ring LED, FastLED | Later |
| Connect4 | Advanced | 8x8 matrix, multi-step | Later |
| Snake Game | Advanced | 8x8 matrix | Later |
| Tic Tac Toe | Intermediate | 8x8 matrix | Later |
| Image Converter | Intermediate | 8x8 matrix | Later |
| Piano Tiles | Advanced | switches | Later |
| Components Tutorials | Reference | N/A | Reference only |
| Programming Basics | Reference | N/A | Reference only |

---

## File & Route Conventions

Follow the simon-says pattern exactly:

- Route: `/resources/<slug>/page.tsx`
- Slugs: `whack-a-mole`, `rps-game`, `led-pattern-changing`, `binary-counter`, `led-dice`, `code-break`
- Resource entry added to the `resources` array in `src/app/resources/page.tsx`

---

## Page Structure (from Simon Says template)

Each page should follow this section order:

1. **Header panel** — `<span class="tag">Resources · LED Making</span>`, title, one-paragraph description, back-links (Back to Resources + Back to LED Track)
2. **Overview** — prerequisites checklist + components list in a 2-column grid
3. **How does it work?** — plain language game/project description
4. **Set Up** — wiring instructions + fritzing diagram image (`<img src={basePath + ...}/>`)
5. **Coding** — step-by-step with `<CodeBlock>` for each snippet
6. **Full Code** — single `<CodeBlock>` with complete sketch
7. **Attribution** — original author(s) from source file comment header

Use the existing `Tip` component for important notes. Import `CodeBlock` from `../CodeBlock`.

---

## Project Specs

---

### 1. Whack-A-Mole

**Source:** `src/workshops/whack-a-mole/0-WhackAMole.md`
**Route:** `/resources/whack-a-mole`
**Level:** Intermediate

**Description (for resources index):**
"Full wiring instructions, step-by-step coding walkthrough, and complete Arduino code for a 3-LED reflex game with potentiometer difficulty control."

**Overview section:**

Prerequisites:
- Arduino Uno
- LEDs
- Switches
- Potentiometer
- For Loops / While Loops
- If Statements / Switch Statements

Components:
- Arduino Uno Board
- 17 M-M Wires
- 3 Push Buttons
- 3 LED Lights
- 3 × 220Ω Resistors

**How it works:**
3 LEDs act as moles. A potentiometer controls speed (EASY=2s, NORMAL=1s, HARD=0.5s window). Press the start button to begin. The correct button must be pressed while the corresponding LED is lit. Score tracks consecutive hits; high score tracks session best. Game over on a miss — all LEDs blink 3×.

**Set Up:**
Image path: `/images/whack-a-mole/whack-a-mole_bb.png`
Note: LEDs use 220Ω resistors; potentiometer installs directly on the breadboard.

**Coding steps (8 steps, each with a CodeBlock):**

1. Declare IO pins and variables (IO Setup, Score Setup, Timer Setup)
2. `void setup()` — Serial.begin + pinMode for 3 LEDs + 3 buttons
3. `void loop()` — start game on btn3 press, main gameplay while loop calling newMole/newWhack/checkResult/lightsOff
4. `void checkSpeed()` — analogRead(A0), 3 difficulty thresholds
5. `void lightsOff()` / `void lightsOn()` / `void lightsBlink(int blinks)`
6. `int newMole()` — random(1,4), switch case to light LED, return mole
7. `int newWhack()` — millis()-based time window, read 3 buttons, return whack (0 = miss)
8. `void checkResult(int mole, int whack)` — score++, or game over with lightsBlink(3) + Serial print

**Full Code:** present in source
**Attribution:** "Original Whack-A-Mole project by Wael Osman."

**Implementer notes:**
- The potentiometer uses `analogRead(A0)` — no dedicated pin constant declared; add a `Tip` explaining the A0 analog pin.
- `btn3` serves double duty as start button AND as one of the playable mole buttons — worth noting in How it works.

---

### 2. Rock Paper Scissors

**Source:** `src/workshops/rps-game/0-RPSGame.md`
**Route:** `/resources/rps-game`
**Level:** Intermediate

**Description (for resources index):**
"Wiring instructions and step-by-step walkthrough for a 1-player vs Arduino Rock Paper Scissors game using 3 LEDs and 3 buttons."

**Overview section:**

Prerequisites:
- Arduino Uno
- LEDs / Switches / Resistors
- If Statements / Switch Statements
- Pseudo Random Number Generation
- Programming Basics

Components:
- Arduino Uno Board
- 12 M-M Wires
- 3 Push Buttons
- 3 LED Lights
- 6 × 220Ω Resistors

**How it works:**
3 buttons = Rock/Paper/Scissors. Press a button to flash your choice LED. Arduino generates a random number (mapped to LED pins 12, 11, 10) for its choice. Win/Lose/Tie result is shown via LED blinks and Serial Monitor messages.

**Set Up:**
Image path: `/images/rps-game/circuit.png`
Note: Both LEDs and switches use 220Ω resistors. LED cathode can connect to negative rail instead of ground wire.

**Coding steps (4 parts):**

1. **Part 1 — Pin declarations + setup():** `LED_ROCK=12`, `LED_PAPER=11`, `LED_SCISSORS=10`, `BTN_ROCK=7`, `BTN_PAPER=6`, `BTN_SCISSORS=5`; `Serial.begin(9600)`
2. **Part 2 — buttonPressed() function + loop() stubs:** edge-detection function using bitwise lastStates; loop() flashes LED on press
3. **Part 3 — ArduinoRPSChoice(int playerChoice):** `srand(millis())`, `rand() % 3 + 10`, switch on num1 for Rock/Paper/Scissors cases, win condition if-else per case, tie else block
4. **Part 4 — Finishing Touches:** call `ArduinoRPSChoice(LED_ROCK/PAPER/SCISSORS)` inside each button branch in loop()

**Full Code:** present in source
**Attribution:** "Original Rock, Paper, Scissors project by Justin Matte."

**Implementer notes:**
- Source has a known inconsistency: `case 10:` should be `case LED_SCISSORS:` in the switch statement. Worth adding a `Tip` mentioning this as a bug to find/fix.
- Serial Monitor output means this is not a purely visual demo — a `Tip` about opening the Serial Monitor (9600 baud) is useful.

---

### 3. LED Pattern Changing

**Source:** `src/workshops/LedPatternChanging/0-Introduction.md`
**Route:** `/resources/led-pattern-changing`
**Level:** Beginner

**Description (for resources index):**
"A beginner button-and-LED project: press once to start, each press cycles through 7 different light patterns on 6 LEDs."

**Overview section:**

Prerequisites:
- Arduino Uno
- LEDs / Switch / Resistors
- If-Else Statements
- Programming Basics

Components:
- 1× Arduino Uno
- 1× USB Cable
- 6× LED (any color)
- 5× 220kΩ Resistor
- 1× 10kΩ Resistor
- 8× Input Wire (M-M, recommended green)
- 2× Red Wire
- 6× Black Wire

**How it works:**
Press the button once to start pattern 1. Each subsequent press advances through 7 patterns. After pattern 7, it resets to pattern 1.

**Set Up:**
Image path: `/images/LedPatternChanging/LedPatternChange.png`
LEDs on pins 12, 11, 10, 7, 6, 5. Button on pin 3.

**Coding steps (3 parts):**

1. **Part 1 — Setup:** pin constants (L1–L6, buttonPin, delay `de=50`, counter `p`, `buttonState`), `void setup()` with all `pinMode` calls
2. **Part 2 — The Loop:** `digitalRead(buttonPin)`, `if HIGH then p++`, if-else if chain calling sequence functions 1–7
3. **Part 3 — The Sequences:** 7 functions (first_sequence through seventh_sequence) using `digitalWrite` patterns; seventh_sequence resets `p=0`

**Full Code:** present in source
**Attribution:** "Original LED Pattern Changing project by Anh Nam."

**Implementer notes:**
- The source has a minor bug: `p` and `buttonState` are declared as `const int` but are reassigned in the loop — they should be plain `int`. Add a `Tip` noting this is a good bug for interns to spot and fix.
- The challenge extension (create 3 unique patterns) from the source is worth including as a callout.

---

### 4. Binary Counter

**Source:** `src/workshops/binary-counter/0-BinaryCounter.md`
**Route:** `/resources/binary-counter`
**Level:** Beginner (but requires FastLED)

**Description (for resources index):**
"Count from 0 to 256 in binary using a NeoPixel LED stick and two buttons — a visual introduction to binary representation and the FastLED library."

**Overview section:**

Prerequisites:
- Arduino UNO
- Programming Basics
- LEDs / Switches / If Statements

Components:
- P4Uno Board
- 8 M-M Wires
- 1× NeoPixel Stick (8 LEDs)
- 2× Push Buttons
- Breadboard

**How it works:**
+ button increments the count, − button decrements. After each change, the LED stick displays the current value in binary (red = 1, blue = 0), from 0 to 256.

**Set Up:**
Image path: `/images/binary-counter/binary-counter_bb.png`
- Button + → DI #2, Button − → DI #3, NeoPixel DI → DI #5, NeoPixel 4-7VDC → 5V, NeoPixel GND → GND rail

**Coding steps (4 steps):**

1. `#include "FastLED.h"`, define `NUM_LEDS=8`, `BTN_INC=2`, `BTN_DEC=3`, `DATA_PIN=5`, `CRGB red(20,0,0)`, `CRGB blue(0,0,20)`, `leds[]`, `count=0`
2. `setup()` — `FastLED.addLeds<NEOPIXEL, DATA_PIN>(leds, NUM_LEDS)`, `INPUT_PULLUP` for both buttons
3. `loop()` — increment/decrement with bounds (0–256), then call `displayNumber(count)` + `FastLED.show()`
4. `displayNumber(int num)` — 8 if/else statements using modulo algorithm to set each LED red or blue

**Full Code:** present in source
**Attribution:** "Original Binary Counter project by Wael Osman."

**Implementer notes:**
- `INPUT_PULLUP` means buttons read `0` when pressed — worth a `Tip` explaining pull-up logic vs INPUT behavior.
- The modulo algorithm is the educational core; the source explanation is good — preserve it as inline prose before the code block.

---

### 5. LED Dice

**Source:** `src/workshops/LEDDiceProject/0-LEDDice.md`
**Route:** `/resources/led-dice`
**Level:** Beginner (good intro to 8x8 matrix)

**Description (for resources index):**
"Roll a virtual 6-sided die: press the button, watch the animation, see the dice face appear on the 8x8 NeoPixel matrix."

**Overview section:**

Prerequisites:
- Arduino Uno
- LEDs / Switches / Resistors
- Pseudo Random Number Generation
- Programming Basics
- FastLED Library

Components:
- Arduino Uno Board
- 5 M-M Wires + 3 F-M Wires
- 1× Push Button
- 1× 220Ω Resistor
- 1× NeoPixel 8x8 LED Matrix

**How it works:**
Press the button → short rolling animation (every 10th LED lights green briefly) → random number 1–6 → corresponding dice face displayed in green on the matrix. Clears after 3 seconds.

**Set Up:**
Image path: `LEDDiceDiagram.png` (note: relative path in source — confirm actual image location before implementing; likely needs to be `/images/led-dice/LEDDiceDiagram.png`)
Matrix wiring: DIN → DI #3, +5V → 5V, GND → GND (check back of matrix for labels).

**Coding steps (4 parts):**

1. **Part 1 — FastLED + setColor():** `#include <FastLED.h>`, constants (NUM_ROWS=8, NUM_COLS=8, DATA_PIN=3, BTN_PIN=5), `CRGB leds[]`, `setColor(x, y, color)` helper using `(NUM_ROWS * (y-1)) + (x-1)` index calculation
2. **Part 2 — buttonPressed() + loop():** same edge-detection function as RPS; call `rollingDice()` on press
3. **Part 3 — rollingDice() with switch:** `randomSeed(analogRead(0))`, `random(1,7)`, switch cases 1–6 with manually placed 2×2 pixel dots matching real dice faces; `FastLED.show()` per case
4. **Part 4 — resetMatrix() + animation:** for loop clears all LEDs; animation lights every 10th LED before the roll; `resetMatrix()` called in loop after 2s delay

**Full Code:** present in source
**Attribution:** "Original LED Dice project by Justin Matte."

**Implementer notes:**
- The dice face pixel positions use the `setColor()` helper — the `Tip` explaining `x` and `y` start at 1 (not 0) is important for beginners.
- Image path in source is relative (`LEDDiceDiagram.png`) — the actual image may need to be found/added to `public/images/led-dice/`. Flag this for the implementer to verify.
- The rolling animation comment says "Delay of 1 ms" but the actual delay is 100ms — worth correcting in the page prose.

---

### 6. Code Break

**Source:** `src/workshops/code-break/0-CodeBreak.md`
**Route:** `/resources/code-break`
**Level:** Intermediate (uses 8x8 matrix + game state)

**Description (for resources index):**
"A Mastermind-style code-breaking game on the 8x8 LED matrix: guess the 4-color combination in 4 attempts — green for correct position, red for wrong."

**Overview section:**

Prerequisites:
- Arduino UNO
- Programming Basics
- If-Else / Switch Statements
- Switches
- WS2812 8x8 Matrix Basics

Components:
- P4Uno Board
- 12 M-M Wires
- 4 Switches (with colored caps: red, green, blue, white)
- 1× WS2812 8x8 Matrix
- Breadboard

**How it works:**
Arduino generates a random 4-color code. Player inputs 4 button presses (each maps to a color). After each attempt, columns 1–4 show the guess, columns 5–8 show green (correct position) or red (wrong). 4 attempts total. Win = happy face in green; Lose = sad face in red.

**Set Up:**
Image path: `/images/code-break/code-break_bb.png`
Buttons: BTN_RED=2, BTN_GREEN=3, BTN_BLUE=4, BTN_WHITE=5. Matrix DIN → DI #7.

**Coding steps (6 steps):**

1. Imports + pin constants + matrix size + color definitions (`CRGB red/green/blue/white`) + game variables (`gameActive`, `guessLogged`, `code[4]`, `guess[4]`, `attempt`)
2. `setup()` — `FastLED.addLeds`, `INPUT_PULLUP` for 4 buttons, initialize `gameActive=false`, `guessLogged=false`
3. `loop()` — start game block (generateCode, gameActive=true, attempt=0, clear), while loop calling registerGuess, then solveCode, `attempt += 2`
4. `generateCode()` — for loop, `random(4)` per digit
5. `registerGuess()` — for loop 0–3, if-else chain reading 4 buttons, store guess[i] + set LED at `attempt * NUM_ROWS + i`, `FastLED.show()`, decrement i if no input, set `guessLogged=true`
6. `solveCode()` — compare guess vs code, set green/red at `attempt * NUM_ROWS + 4 + i`, check `codeBroken`, call `correctLEDs()` or `incorrectLEDs()`, `guessLogged=false`

**Full Code:** present in source
**Attribution:** "Original Code Break Game project by Wael Osman."

**Implementer notes:**
- `attempt += 2` skips every other row on the matrix (each attempt uses 2 rows: guess + result). This is worth explaining in How it works.
- The pixel art for win/lose faces uses hardcoded LED indices — the source is correct as-is.
- This is the most complex project in the priority list. Consider adding a `Tip` recommending interns read the Binary Counter and LED Dice pages first.

---

## Resources Index Update (`src/app/resources/page.tsx`)

Add the following entries to the `resources` array (in order of increasing complexity):

```ts
{
  name: "LED Pattern Changing",
  track: "LED Making",
  path: "/resources/led-pattern-changing",
  detail: "A beginner button-and-LED project: press once to start, each press cycles through 7 different light patterns on 6 LEDs.",
},
{
  name: "Binary Counter",
  track: "LED Making",
  path: "/resources/binary-counter",
  detail: "Count from 0 to 256 in binary using a NeoPixel LED stick and two buttons — a visual introduction to binary and FastLED.",
},
{
  name: "LED Dice",
  track: "LED Making",
  path: "/resources/led-dice",
  detail: "Roll a virtual 6-sided die: press the button, watch the animation, see the dice face on the 8x8 NeoPixel matrix.",
},
{
  name: "Whack-A-Mole",
  track: "LED Making",
  path: "/resources/whack-a-mole",
  detail: "Full wiring instructions and walkthrough for a 3-LED reflex game with potentiometer difficulty control.",
},
{
  name: "Rock Paper Scissors",
  track: "LED Making",
  path: "/resources/rps-game",
  detail: "Wiring and step-by-step walkthrough for a 1-player vs Arduino RPS game using 3 LEDs and 3 buttons.",
},
{
  name: "Code Break",
  track: "LED Making",
  path: "/resources/code-break",
  detail: "A Mastermind-style code-breaking game on the 8x8 LED matrix: guess the 4-color combination in 4 attempts.",
},
```

---

## Implementation Order (suggested)

1. LED Pattern Changing — simplest, no FastLED, confirms the page template works
2. Binary Counter — introduces FastLED + NeoPixel stick
3. LED Dice — introduces 8x8 matrix
4. Whack-A-Mole — most similar to Simon Says in structure
5. Rock Paper Scissors — introduces `buttonPressed()` edge detection
6. Code Break — most complex, depends on matrix familiarity

---

## Images Needed

| Project | Image in source | Status |
|---|---|---|
| Whack-A-Mole | `/images/whack-a-mole/whack-a-mole_bb.png` | Check if in public/ |
| Rock Paper Scissors | `/images/rps-game/circuit.png` | Check if in public/ |
| LED Pattern Changing | `/images/LedPatternChanging/LedPatternChange.png` | Check if in public/ |
| Binary Counter | `/images/binary-counter/binary-counter_bb.png` | Check if in public/ |
| LED Dice | `LEDDiceDiagram.png` (relative, needs path resolution) | Needs locate + copy |
| Code Break | `/images/code-break/code-break_bb.png` | Check if in public/ |

Images likely live in the led-kit repo at `/Users/joel/p4labs/VirlabsAI/curriculum/ledkit/src/public/images/`. They need to be copied to `apps/mspace-internships/public/images/` before the pages can render them.
