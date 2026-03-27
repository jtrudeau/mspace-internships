export const fullSketch = String.raw`/*
 * Code-Break Game
 * 
 * Fun code-break game on an 8x8 LED matrix with 4 button inputs.
 * 
 * The circuit:
 * > Switches - DI #2, #3, #4 & #5
 * > NeoPixel LED Matrix - DI #7
 * 
 * Created 22/04/2022
 * By Wael Osman
*/
// Imports
#include <FastLED.h>

// Pin Setup & Matrix Size
const int DATA_PIN = 7;
const int BTN_RED = 2;
const int BTN_GREEN = 3;
const int BTN_BLUE = 4;
const int BTN_WHITE = 5;

const int NUM_ROWS = 8;
const int NUM_COLS = 8;
const int NUM_LEDS = NUM_ROWS * NUM_COLS;

// Color & Array of LEDs
CRGB red(50, 0, 0);
CRGB green(0, 50, 0);
CRGB blue(0, 0, 50);
CRGB white(50, 50, 50);

CRGB leds[NUM_LEDS];

// Game Setup
bool gameActive;
bool guessLogged;
int code[4];
int guess[4];
int attempt;

void setup() {
  FastLED.addLeds<NEOPIXEL, DATA_PIN>(leds, NUM_LEDS);
  pinMode(BTN_RED, INPUT_PULLUP);
  pinMode(BTN_GREEN, INPUT_PULLUP);
  pinMode(BTN_BLUE, INPUT_PULLUP);
  pinMode(BTN_WHITE, INPUT_PULLUP);
  
  gameActive = false;
  guessLogged = false;
}

void loop() {
  // Start a new game
  if(!gameActive) {
    generateCode();
    gameActive = true;
    attempt = 0;
    FastLED.clear();
  }
  
  // Register a new guess
  while(!guessLogged) {
    registerGuess();
  }
  
  // Compare & Display
  delay(500);
  solveCode();
  attempt += 2;
}

void generateCode() {  
  for(int i = 0; i < 4; i++) {
    code[i] = random(4);
  }
}

void registerGuess() {
  for(int i = 0; i < 4; i++) {
    if(digitalRead(BTN_RED) == 0) {
      guess[i] = 0;
      leds[attempt * NUM_ROWS + i] = red;
    }
    else if(digitalRead(BTN_GREEN) == 0) {
      guess[i] = 1;
      leds[attempt * NUM_ROWS + i] = green;
    }
    else if(digitalRead(BTN_BLUE) == 0) {
      guess[i] = 2;
      leds[attempt * NUM_ROWS + i] = blue;
    }
    else if(digitalRead(BTN_WHITE) == 0) {
      guess[i] = 3;
      leds[attempt * NUM_ROWS + i] = white;
    }
    else
      i--;

    FastLED.show();
    delay(150);
  }
  
  guessLogged = true;
}

void solveCode() {
  for(int i = 0; i < 4; i++) {
    if(guess[i] == code[i])
      leds[attempt * NUM_ROWS + 4 + i] = green;
    else
      leds[attempt * NUM_ROWS + 4 + i] = red;
  }
  FastLED.show();

  bool codeBroken = true;
  for(int i = 0; i < 4; i++) {
    if(guess[i] != code[i]) {
      codeBroken = false;
      break;
    }
  }
  
  if(codeBroken) {
    correctLEDs();
    gameActive = false;
  }
  else if(attempt > 4) {
    incorrectLEDs();
    gameActive = false;
  }

  guessLogged = false;
}

void correctLEDs() {
  delay(2000);
  FastLED.clear();
  leds[18] = green;
  leds[21] = green;
  leds[34] = green;
  leds[37] = green;
  leds[43] = green;
  leds[44] = green;
  FastLED.show();
  delay(2000);
}

void incorrectLEDs() {
  delay(2000);
  FastLED.clear();
  leds[18] = red;
  leds[21] = red;
  leds[35] = red;
  leds[36] = red;
  leds[42] = red;
  leds[45] = red;
  FastLED.show();
  delay(2000);
}`;
