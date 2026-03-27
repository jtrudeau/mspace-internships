export const fullSketch = String.raw`/*
 * Rock, Paper, Scissors Game
 *
 * Rock, Paper, Scissors remade using 3 Push Buttons and 3 RGB LEDs. 
 *
 * The circuit:
 * > Push Button (Rock) - DI #7
 * > Push Button (Paper) - DI #6
 * > Push Button (Scissors) - DI #5
 *
 * > LED (Rock) - #12
 * > LED (Paper) - #11
 * > LED (Scissors) - #10
 * 
 * Created 03/17/2022
 * By Justin Matte
 *
 * Modified 05/11/2022
 * By Justin Matte
*/
const int LED_ROCK = 12;
const int LED_PAPER = 11;
const int LED_SCISSORS = 10;

const int BTN_ROCK = 7;
const int BTN_PAPER = 6;
const int BTN_SCISSORS = 5;

void setup()
{
  pinMode(LED_BUILTIN, OUTPUT);
  pinMode(LED_ROCK, OUTPUT); pinMode(LED_PAPER, OUTPUT); pinMode(LED_SCISSORS, OUTPUT);
  pinMode(BTN_ROCK, INPUT); pinMode(BTN_PAPER, INPUT); pinMode(BTN_SCISSORS, INPUT);
  Serial.begin(9600);
}

void loop()
{
  if(buttonPressed(BTN_ROCK)){
    digitalWrite(LED_ROCK, HIGH);
    delay(500); 
    digitalWrite(LED_ROCK, LOW);
    delay(500);
    ArduinoRPSChoice(LED_ROCK);
  }
  
  if(buttonPressed(BTN_PAPER)){
    digitalWrite(LED_PAPER, HIGH);
    delay(500);
    digitalWrite(LED_PAPER, LOW);
    delay(500);
    ArduinoRPSChoice(LED_PAPER);
  }
  
  if(buttonPressed(BTN_SCISSORS)){
    digitalWrite(LED_SCISSORS, HIGH);
    delay(500);
    digitalWrite(LED_SCISSORS, LOW);
    delay(500);
    ArduinoRPSChoice(LED_SCISSORS);
  }
  
  
}

void ArduinoRPSChoice(int playerChoice){
  srand(millis());
  int num1 = (rand() % 3) + 10;
  
  if(num1 != playerChoice){
    switch(num1){
      case LED_ROCK:
        digitalWrite(LED_ROCK, HIGH);
        delay(500);
        digitalWrite(LED_ROCK, LOW);
        delay(500);
      
        if(playerChoice == LED_SCISSORS){
          Serial.println("Arduino Wins!");
          digitalWrite(LED_ROCK, HIGH);
          delay(500);
          digitalWrite(LED_ROCK, LOW);
          delay(500);
          digitalWrite(LED_ROCK, HIGH);
          delay(500);
          digitalWrite(LED_ROCK, LOW);
          delay(500);
        }
        else{
          Serial.println("You win!");
          digitalWrite(playerChoice, HIGH);
          delay(500);
          digitalWrite(playerChoice, LOW);
          delay(500);
          digitalWrite(playerChoice, HIGH);
          delay(500);
          digitalWrite(playerChoice, LOW);
          delay(500);
        }
      break;
      case LED_PAPER:
        digitalWrite(LED_PAPER, HIGH);
        delay(500);
        digitalWrite(LED_PAPER, LOW);
        delay(500);
      
        if(playerChoice == LED_ROCK){
          Serial.println("Arduino Wins!");
          digitalWrite(LED_PAPER, HIGH);
          delay(500);
          digitalWrite(LED_PAPER, LOW);
          delay(500);
          digitalWrite(LED_PAPER, HIGH);
          delay(500);
          digitalWrite(LED_PAPER, LOW);
          delay(500);
        }
        else{
          Serial.println("You win!");
          digitalWrite(playerChoice, HIGH);
          delay(500);
          digitalWrite(playerChoice, LOW);
          delay(500);
          digitalWrite(playerChoice, HIGH);
          delay(500);
          digitalWrite(playerChoice, LOW);
          delay(500);
        }
      break;
      case 10:
        digitalWrite(LED_SCISSORS, HIGH);
        delay(500);
        digitalWrite(LED_SCISSORS, LOW);
        delay(500);
      
        if(playerChoice == LED_PAPER){
          Serial.println("Arduino Wins!");
          digitalWrite(LED_SCISSORS, HIGH);
          delay(500);
          digitalWrite(LED_SCISSORS, LOW);
          delay(500);
          digitalWrite(LED_SCISSORS, HIGH);
          delay(500);
          digitalWrite(LED_SCISSORS, LOW);
          delay(500);
        }
        else{
          Serial.println("You win!");
          digitalWrite(playerChoice, HIGH);
          delay(500);
          digitalWrite(playerChoice, LOW);
          delay(500);
          digitalWrite(playerChoice, HIGH);
          delay(500);
          digitalWrite(playerChoice, LOW);
          delay(500);
        }
      break;
    }
  }
  else{
    Serial.println("Tie! You both chose the same option!");
    digitalWrite(LED_ROCK, HIGH); digitalWrite(LED_PAPER, HIGH); digitalWrite(LED_SCISSORS, HIGH);
    delay(500);
    digitalWrite(LED_ROCK, LOW); digitalWrite(LED_PAPER, LOW); digitalWrite(LED_SCISSORS, LOW);
    delay(500);
    digitalWrite(LED_ROCK, HIGH); digitalWrite(LED_PAPER, HIGH); digitalWrite(LED_SCISSORS, HIGH);
    delay(500);
    digitalWrite(LED_ROCK, LOW); digitalWrite(LED_PAPER, LOW); digitalWrite(LED_SCISSORS, LOW);
    delay(500);
  }
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
