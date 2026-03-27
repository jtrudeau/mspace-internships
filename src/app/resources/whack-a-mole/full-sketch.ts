export const fullSketch = String.raw`/*
 * Whack-A-Mole
 *
 * Whack-A-Mole game using LEDs as moles and Buttons as hitboxes
 *
 * The circuit:
 * > 3 LEDs - DI #2, #6, #10
 * > 3 Switches - DI #3, #7, #11
 *
 * Created 03/03/2022
 * By Wael Osman
 *
 * Modified 11/03/2022
 * By Wael Osman
*/
// IO Setup
const int btn1 = 3;
const int btn2 = 7;
const int btn3 = 11;
const int led1 = 2;
const int led2 = 6;
const int led3 = 10;

// Score Setup
int highScore = 0;
int score = 0;
bool gameActive = false;

// Timer Setup
unsigned long eventInterval;
unsigned long previousTime;
unsigned long currentTime;

void setup()
{
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
  // Extras
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop()
{
  score = 0;

  // Start the game
  if (digitalRead(btn3) == 0) {
    Serial.println("Game Started!");
    checkSpeed();
    gameActive = true;
    delay(500);
  }

  // Main Gameplay
  while (gameActive) {
    int mole = newMole();
    int whack = newWhack();
    checkResult(mole, whack);
    lightsOff();
  }

  delay(50);
}

void checkSpeed() {
  int speedValue = analogRead(A0);
  if (speedValue > 682) {
    eventInterval = 500;
    Serial.println("Difficulty: HARD");
  }
  else if (speedValue > 341) {
    eventInterval = 1000;
    Serial.println("Difficulty: NORMAL");
  }
  else {
    eventInterval = 2000;
    Serial.println("Difficulty: EASY");
  }
}

void lightsOff() {
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

void lightsBlink(int blinks) {
  while (blinks > 0) {
    lightsOn();
    lightsOff();
    blinks--;
  }
}

int newMole() {
  int mole = random(1, 4);

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
}

int newWhack() {
  previousTime = millis();
  int whack = 0;

  while (whack == 0) {
    currentTime = millis();

    if (currentTime - previousTime < eventInterval) {
      if (digitalRead(btn1) == 0)
        whack = 1;
      if (digitalRead(btn2) == 0)
        whack = 2;
      if (digitalRead(btn3) == 0)
        whack = 3;
    }
    else {
      previousTime = currentTime;
      return whack = 0;
    }
  }
  return whack;
}

void checkResult(int mole, int whack) {
  if (mole == whack) {
    score++;
    delay(50);
  }
  else {
    if (score > highScore)
      highScore = score;

    gameActive = false;
    lightsBlink(3);

    Serial.println("---------- Game Over ----------");
    Serial.print("Score: ");
    Serial.print(score);
    Serial.print("\tHigh Score: ");
    Serial.print(highScore);
    Serial.println("\n-------------------------------\n");
  }
}`;
