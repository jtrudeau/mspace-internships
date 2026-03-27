// Auto-extracted — Whack-A-Mole

export const step1 = String.raw`// IO Setup
const int btn1 = 3;
const int btn2 = 7;
const int btn3 = 11;
const int led1 = 2;
const int led2 = 6;
const int led3 = 10;

// Score Setup
int highScore = 0;        // Keeps track of the session's highest score.
int score = 0;            // Keeps track of the game's current score.
bool gameActive = false;  // Keeps track of the game status.

// Timer Setup
unsigned long eventInterval;
unsigned long previousTime;
unsigned long currentTime;`;

export const step2 = String.raw`void setup() {
  Serial.begin(9600);
  // Mole 1
  pinMode(led1, OUTPUT);
  pinMode(btn1, INPUT_PULLUP);
  // Mole 2
  pinMode(led2, OUTPUT);
  pinMode(btn2, INPUT_PULLUP);
  // Mole 3
  pinMode(led3, OUTPUT);
  pinMode(btn3, INPUT_PULLUP);
}`;

export const step3 = String.raw`void loop() {
  score = 0;                          // Resets the score every game.

  // Start Game
  if (digitalRead(btn3) == 0) {       // Checks if the "start button" was pushed.
    Serial.println("Game Started!");
    checkSpeed();                     // Uses the potentiometer to set the speed.
    gameActive = true;                // Starts the game.
    delay(500);
  }

  // Main Gameplay
  while (gameActive) {                // Loops as long as the game isn't over.
    int mole = newMole();             // Lights up a random LED.
    int whack = newWhack();           // Registers the player's action.
    checkResult(mole, whack);         // Compares the mole and the whack values.
    lightsOff();                      // Turns all the LEDs off.
  }

  delay(50);
}`;

export const step4 = String.raw`void checkSpeed() {
  int speedValue = analogRead(A0);        // Store the current voltage value.

  // The potentiometer value ranges from 0 to 1023 so we will split it in 3 areas.
  if (speedValue > 682) {
    eventInterval = 500;                  // Sets the time window to 0.5 seconds.
    Serial.println("Difficulty: HARD");
  }
  else if (speedValue > 341) {
    eventInterval = 1000;                 // Sets the time window to 1 second.
    Serial.println("Difficulty: NORMAL");
  }
  else {
    eventInterval = 2000;                 // Sets the time window to 2 seconds.
    Serial.println("Difficulty: EASY");
  }
}`;

export const step5 = String.raw`void lightsOff() {
  digitalWrite(led1, LOW);
  digitalWrite(led2, LOW);
  digitalWrite(led3, LOW);
  delay(500);
}

void lightsOn() {
  digitalWrite(led1, HIGH);
  digitalWrite(led2, HIGH);
  digitalWrite(led3, HIGH);
  delay(500);
}

// Makes the lights blink (blinks) time(s).
void lightsBlink(int blinks) {
  while (blinks > 0) {
    lightsOn();                 // Turns off all the lights.
    lightsOff();                // Turns on all the lights.
    blinks--;                   // Decrements the blinks left by 1.
  }
}`;

export const step6 = String.raw`int newMole() {
  int mole = random(1, 4);  // Picks a random number between 1 and 4 exclusive.

  // Lights up the respective LED using a switch case.
  switch (mole) {
    case 1:
      digitalWrite(led1, HIGH);
      break;
    case 2:
      digitalWrite(led2, HIGH);
      break;
    case 3:
      digitalWrite(led3, HIGH);
      break;
    default:
      Serial.print("Mole not found!");
      break;
  }
  return mole;
}`;

export const step7 = String.raw`int newWhack() {
  previousTime = millis();        // Stores the time the game asks for an input.
  int whack = 0;

  while (whack == 0) {            // If there's no input, it'll keep checking time.
    currentTime = millis();       // Stores the current time.

    // Checks if the difference between the current time and the time the game
    // started asking for the player's input is bigger than the period allocated.
    if (currentTime - previousTime < eventInterval) {
      if (digitalRead(btn1) == 0)
        whack = 1;
      if (digitalRead(btn2) == 0)
        whack = 2;
      if (digitalRead(btn3) == 0)
        whack = 3;
    }
    else {
      // If the time limit is passed, update the previous time and return 0.
      previousTime = currentTime;
      return whack = 0;
    }
  }
  return whack;
}`;

export const step8 = String.raw`void checkResult(int mole, int whack) {
  // Successful match
  if (mole == whack) {        // Compares the lit LED and pushed Button.
    score++;                  // Increments the current score by 1.
    delay(50);
  }
  // Unsuccessful match
  else {
    if (score > highScore)
      highScore = score;      // Sets the new high score if it's better.

    gameActive = false;       // Turns off the game.
    lightsBlink(3);           // Makes the lights blink 3 times to signal "Game Over".

    // Print a nice receipt of the game on the Serial Monitor.
    Serial.println("---------- Game Over ----------");
    Serial.print("Score: ");
    Serial.print(score);
    Serial.print("\tHigh Score: ");
    Serial.print(highScore);
    Serial.println("\n-------------------------------\n");
  }
}`;
