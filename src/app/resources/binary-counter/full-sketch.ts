export const fullSketch = String.raw`/*
 * Binary Counter
 *
 * Counting in binary using an LED Stick & 2 Buttons
 *
 * The circuit:
 * > NeoPixel LED Stick - DI #5
 * > 2 Switches - DI #2 & #3
 *
 * Created 23/03/2022
 * By Wael Osman
 *
 * Modified 25/03/2022
 * By Wael Osman
*/
// Imports
#include "FastLED.h"

// Stick Size
#define NUM_LEDS 8

// Pin Setup
#define BTN_INC 2
#define BTN_DEC 3
#define DATA_PIN 5

// Define the color and array of leds
CRGB red(20, 0, 0);     // Represents the digit 1
CRGB blue(0, 0, 20);    // Represents the digit 0
CRGB leds[NUM_LEDS];
int count = 0;

void setup() {
  FastLED.addLeds<NEOPIXEL, DATA_PIN>(leds, NUM_LEDS);
  pinMode(BTN_INC, INPUT_PULLUP);
  pinMode(BTN_DEC, INPUT_PULLUP);
}

void loop() {
  // Check Increment
  if(digitalRead(BTN_INC) == 0) {
    if(count <= 256) {
      count++;
      delay(500);
    }
  }

  // Check Decrement
  if(digitalRead(BTN_DEC) == 0) {
    if(count > 0) {
      count--;
      delay(500);
    }
  }

  displayNumber(count);
  FastLED.show();

  delay(100);
}

void displayNumber(int num) {
  if(num % 2 > 0)
    leds[0] = red;
  else
    leds[0] = blue;

  if(num % 4 > 1)
    leds[1] = red;
  else
    leds[1] = blue;

  if(num % 8 > 3)
    leds[2] = red;
  else
    leds[2] = blue;

  if(num % 16 > 7)
    leds[3] = red;
  else
    leds[3] = blue;

  if(num % 32 > 15)
    leds[4] = red;
  else
    leds[4] = blue;

  if(num % 64 > 31)
    leds[5] = red;
  else
    leds[5] = blue;

  if(num % 128 > 63)
    leds[6] = red;
  else
    leds[6] = blue;

  if(num % 256 > 127)
    leds[7] = red;
  else
    leds[7] = blue;
}`;
