export const fullSketch = String.raw`/*
 * Simulated Dice
 *
 * Simulated Dice using 8x8 LED Matrix and Push Button.
 *
 * The circuit:
 * > Push Button - DI #5
 * > NeoPixel LED Matrix - DI #3
 *
 * Created 04/01/2022
 * By Justin Matte
 *
 * Modified 05/11/2022
 * By Justin Matte
*/

#include <FastLED.h>

const int NUM_ROWS = 8;
const int NUM_COLS = 8;

const int NUM_LEDS = NUM_ROWS*NUM_COLS;
CRGB leds[NUM_LEDS];

const int DATA_PIN = 3;

const int BTN_PIN = 5;

void setColor(int x, int y, CRGB color){
  int index = (NUM_ROWS * (y-1)) + (x-1);
  leds[index] = color;
}

void resetMatrix(){
  for(int i=0; i < NUM_LEDS; i++){
    leds[i] = CRGB(0,0,0); // Turns off all LEDs
    FastLED.show();
  }
}

void rollingDice(){
  for(int i = 0; i < NUM_LEDS; i++){
    if(i % 10 == 0){
      leds[i] = CRGB(0,255,0);
      delay(100); // Delay of 1 ms
      FastLED.show();
    }
  }
  resetMatrix();
  
  randomSeed(analogRead(0));
  int diceRoll = random(1,7); // Generating a random number between 1 and 6 // 

  switch(diceRoll){
    case 1:
      setColor(4,4, CRGB(0,255,0)); // Middle
      setColor(4,5, CRGB(0,255,0));
      setColor(5,4, CRGB(0,255,0));
      setColor(5,5, CRGB(0,255,0));
      FastLED.show();
    break;
    case 2:
      setColor(3,5, CRGB(0,255,0)); // Top
      setColor(3,6, CRGB(0,255,0));
      setColor(4,5, CRGB(0,255,0));
      setColor(4,6, CRGB(0,255,0));
    
      setColor(5,3, CRGB(0,255,0)); // Bottom
      setColor(5,4, CRGB(0,255,0));
      setColor(6,3, CRGB(0,255,0));
      setColor(6,4, CRGB(0,255,0));
      FastLED.show();
    break;
    case 3:
      setColor(1,7, CRGB(0,255,0)); // Top Right
      setColor(1,8, CRGB(0,255,0));
      setColor(2,7, CRGB(0,255,0));
      setColor(2,8, CRGB(0,255,0));

      setColor(4,4, CRGB(0,255,0)); // Middle
      setColor(4,5, CRGB(0,255,0));
      setColor(5,4, CRGB(0,255,0));
      setColor(5,5, CRGB(0,255,0));
    
      setColor(7,1, CRGB(0,255,0)); // Bottom Left
      setColor(7,2, CRGB(0,255,0));
      setColor(8,1, CRGB(0,255,0));
      setColor(8,2, CRGB(0,255,0));
      FastLED.show();
    break;
    case 4:
      setColor(7,7, CRGB(0,255,0)); // Top Left
      setColor(7,8, CRGB(0,255,0));
      setColor(8,7, CRGB(0,255,0));
      setColor(8,8, CRGB(0,255,0));
      
      setColor(1,7, CRGB(0,255,0)); // Top Right
      setColor(1,8, CRGB(0,255,0));
      setColor(2,7, CRGB(0,255,0));
      setColor(2,8, CRGB(0,255,0));
      
      setColor(7,1, CRGB(0,255,0)); // Bottom Left
      setColor(7,2, CRGB(0,255,0));
      setColor(8,1, CRGB(0,255,0));
      setColor(8,2, CRGB(0,255,0));
      
      setColor(1,1, CRGB(0,255,0)); // Bottom Right
      setColor(1,2, CRGB(0,255,0));
      setColor(2,1, CRGB(0,255,0));
      setColor(2,2, CRGB(0,255,0));
      FastLED.show();
    break;
    case 5:
      setColor(7,7, CRGB(0,255,0)); // Top Left
      setColor(7,8, CRGB(0,255,0));
      setColor(8,7, CRGB(0,255,0));
      setColor(8,8, CRGB(0,255,0));
      
      setColor(1,7, CRGB(0,255,0)); // Top Right
      setColor(1,8, CRGB(0,255,0));
      setColor(2,7, CRGB(0,255,0));
      setColor(2,8, CRGB(0,255,0));

      setColor(4,4, CRGB(0,255,0)); // Middle
      setColor(4,5, CRGB(0,255,0));
      setColor(5,4, CRGB(0,255,0));
      setColor(5,5, CRGB(0,255,0));

      setColor(7,1, CRGB(0,255,0)); // Bottom Left
      setColor(7,2, CRGB(0,255,0));
      setColor(8,1, CRGB(0,255,0));
      setColor(8,2, CRGB(0,255,0));

      setColor(1,1, CRGB(0,255,0)); // Bottom Right
      setColor(1,2, CRGB(0,255,0));
      setColor(2,1, CRGB(0,255,0));
      setColor(2,2, CRGB(0,255,0));
      FastLED.show();
    break;
    case 6:
      setColor(7,7, CRGB(0,255,0)); // Top Left
      setColor(7,8, CRGB(0,255,0));
      setColor(8,7, CRGB(0,255,0));
      setColor(8,8, CRGB(0,255,0));
     
      setColor(4,7, CRGB(0,255,0)); // Top Middle
      setColor(4,8, CRGB(0,255,0));
      setColor(5,7, CRGB(0,255,0));
      setColor(5,8, CRGB(0,255,0));
      
      setColor(1,7, CRGB(0,255,0)); // Top Right
      setColor(1,8, CRGB(0,255,0));
      setColor(2,7, CRGB(0,255,0));
      setColor(2,8, CRGB(0,255,0));

      setColor(7,1, CRGB(0,255,0)); // Bottom Left
      setColor(7,2, CRGB(0,255,0));
      setColor(8,1, CRGB(0,255,0));
      setColor(8,2, CRGB(0,255,0));

      setColor(4,1, CRGB(0,255,0)); // Bottom Middle
      setColor(4,2, CRGB(0,255,0));
      setColor(5,1, CRGB(0,255,0));
      setColor(5,2, CRGB(0,255,0));

      setColor(1,1, CRGB(0,255,0)); // Bottom Right
      setColor(1,2, CRGB(0,255,0));
      setColor(2,1, CRGB(0,255,0));
      setColor(2,2, CRGB(0,255,0));
      FastLED.show();
    break;
  }
}

void setup() {
  FastLED.addLeds<NEOPIXEL, DATA_PIN>(leds, NUM_LEDS);
}

void loop() {
  if(buttonPressed(BTN_PIN)){
    rollingDice();
  }
  delay(3000);
  resetMatrix();
}

int buttonPressed(uint8_t button) {
  static uint16_t lastStates = 0;
  uint8_t state = digitalRead(button);
  if (state != ((lastStates >> button) & 1)) {
    lastStates ^= 1 << button;
    return state == HIGH;
  }
  return false;
}`;
