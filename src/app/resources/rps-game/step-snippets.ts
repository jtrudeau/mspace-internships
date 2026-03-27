export const part1PinsAndSetup = String.raw`const int LED_ROCK = 12; // RED LED Pin Number
const int LED_PAPER = 11; // Green LED Pin Number
const int LED_SCISSORS = 10; // Blue LED Pin Number

const int BTN_ROCK = 7; // Button for Red LED Pin Number
const int BTN_PAPER = 6; // Button for Green LED Pin Number
const int BTN_SCISSORS = 5; // Button for Blue LED Pin Number

void setup()
{
  pinMode(LED_ROCK, OUTPUT); pinMode(LED_PAPER, OUTPUT); pinMode(LED_SCISSORS, OUTPUT);
  pinMode(BTN_ROCK, INPUT); pinMode(BTN_PAPER, INPUT); pinMode(BTN_SCISSORS, INPUT);
  Serial.begin(9600);
}`;

export const part2ButtonAndLoop = String.raw`int buttonPressed(uint8_t button) {
  static uint16_t lastStates = 0;
  uint8_t state = digitalRead(button);
  if (state != ((lastStates >> button) & 1)) {
    lastStates ^= 1 << button;
    return state == HIGH;
  }
  return false;
}

void loop()
{
  if(buttonPressed(BTN_ROCK)){ 
    digitalWrite(LED_ROCK, HIGH); 
    delay(500); 
    digitalWrite(LED_ROCK, LOW); 
    delay(500); 
  }
  
  if(buttonPressed(BTN_PAPER)){
    digitalWrite(LED_PAPER, HIGH);
    delay(500);
    digitalWrite(LED_PAPER, LOW);
    delay(500);
  }
  
  if(buttonPressed(BTN_SCISSORS)){
    digitalWrite(LED_SCISSORS, HIGH);
    delay(500);
    digitalWrite(LED_SCISSORS, LOW);
    delay(500);
  }
  
  
}`;

export const part4Finishing = String.raw`  if(buttonPressed(BTN_ROCK)){
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
  }`;
