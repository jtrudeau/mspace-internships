export const arduinoRPSChoiceFn = String.raw`void ArduinoRPSChoice(int playerChoice){
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
}`;
