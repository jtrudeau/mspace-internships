// Auto-extracted from curriculum — LED Pattern Changing

export const part1Setup = String.raw`/*
 * LED Pattern Changing
 * 
 * Fun LED Pattern Changing project on 4 LEDS and 1 button.
 * 
 * The circuit:
 * > LEDS - DI #5, DI #6, DI #7, DI #10, DI #11, DI #12
 * > Switch - DI #3
 * 
 * Created 03/11/2022
 * By Anh Nam
*/

// Led Inputs

const int L1 = 12;
const int L2 = 11;
const int L3 = 10;
const int L4 = 7;
const int L5 = 6;
const int L6 = 5;

const int buttonPin = 3;  // Button input

const int de=50;  // delay time

const int p=0;    // variable for pattern

const int buttonState = 0;    // variable for reading the pushbutton status

void setup() {


    pinMode(L1, OUTPUT);
    pinMode(L2, OUTPUT);
    pinMode(L3, OUTPUT);
    pinMode(L4, OUTPUT);
    pinMode(L5, OUTPUT);
    pinMode(L6, OUTPUT);

    pinMode(buttonPin, INPUT);

}`;

export const part2Loop = String.raw`void loop() {
    buttonState = digitalRead(buttonPin);
    if (buttonState == HIGH)
    {
        p++;
        delay(2000);
    }

    if (p == 1) {
           first_sequence();
    }
    else if  (p == 2) {
          second_sequence();
    }
     else if(p == 3) {
          third_sequence();
    }
     else if(p == 4) {
          fourth_sequence();
    }
     else if(p == 5) {
          fifth_sequence();
    }
     else if(p == 6) {
          sixth_sequence();
    }
     else if(p == 7) {
          seventh_sequence();
     }
}`;

export const part3Sequences = String.raw` void first_sequence() {
        digitalWrite(L1, 1);
        digitalWrite(L2, 0);
        digitalWrite(L3, 0);
        digitalWrite(L4, 0);
        digitalWrite(L5, 0);
        digitalWrite(L6, 0);
        delay(de);

        digitalWrite(L1, 0);
        digitalWrite(L2, 1);
        digitalWrite(L3, 0);
        digitalWrite(L4, 0);
        digitalWrite(L5, 0);
        digitalWrite(L6, 0);
        delay(de);

        digitalWrite(L1, 0);
        digitalWrite(L2, 0);
        digitalWrite(L3, 1);
        digitalWrite(L4, 0);
        digitalWrite(L5, 0);
        digitalWrite(L6, 0);
        delay(de);

        digitalWrite(L1, 0);
        digitalWrite(L2, 0);
        digitalWrite(L3, 0);
        digitalWrite(L4, 1);
        digitalWrite(L5, 0);
        digitalWrite(L6, 0);
        delay(de);

        digitalWrite(L1, 0);
        digitalWrite(L2, 0);
        digitalWrite(L3, 0);
        digitalWrite(L4, 0);
        digitalWrite(L5, 1);
        digitalWrite(L6, 0);
        delay(de);

        digitalWrite(L1, 0);
        digitalWrite(L2, 0);
        digitalWrite(L3, 0);
        digitalWrite(L4, 0);
        digitalWrite(L5, 0);
        digitalWrite(L6, 1);
        delay(de);
    }

    void second_sequence() {
        digitalWrite(L1, 0);
        digitalWrite(L2, 0);
        digitalWrite(L3, 0);
        digitalWrite(L4, 0);
        digitalWrite(L5, 0);
        digitalWrite(L6, 1);
        delay(de);

        digitalWrite(L1, 0);
        digitalWrite(L2, 0);
        digitalWrite(L3, 0);
        digitalWrite(L4, 0);
        digitalWrite(L5, 1);
        digitalWrite(L6, 0);
        delay(de);

        digitalWrite(L1, 0);
        digitalWrite(L2, 0);
        digitalWrite(L3, 0);
        digitalWrite(L4, 1);
        digitalWrite(L5, 0);
        digitalWrite(L6, 0);
        delay(de);

        digitalWrite(L1, 0);
        digitalWrite(L2, 0);
        digitalWrite(L3, 1);
        digitalWrite(L4, 0);
        digitalWrite(L5, 0);
        digitalWrite(L6, 0);
        delay(de);

        digitalWrite(L1, 0);
        digitalWrite(L2, 1);
        digitalWrite(L3, 0);
        digitalWrite(L4, 0);
        digitalWrite(L5, 0);
        digitalWrite(L6, 0);
        delay(de);


        digitalWrite(L1, 1);
        digitalWrite(L2, 0);
        digitalWrite(L3, 0);
        digitalWrite(L4, 0);
        digitalWrite(L5, 0);
        digitalWrite(L6, 0);
        delay(de);
    }
    void third_sequence() {
        digitalWrite(L1, 1);
        delay(de);
        digitalWrite(L2, 0);
        delay(de);
        digitalWrite(L3, 0);
        delay(de);
        digitalWrite(L4, 0);
        delay(de);
        digitalWrite(L5, 0);
        delay(de);
        digitalWrite(L6, 1);
        delay(de);
        digitalWrite(L6, 0);
        delay(de);
        digitalWrite(L5, 0);
        delay(de);
        digitalWrite(L4, 0);
        delay(de);
        digitalWrite(L3, 0);
        delay(de);
        digitalWrite(L2, 0);
        delay(de);
        digitalWrite(L1, 1);
        delay(de);
    }
    void fourth_sequence() {
        digitalWrite(L1, 1);
        delay(de);
        digitalWrite(L2, 0);
        delay(de);
        digitalWrite(L3, 1);
        delay(de);
        digitalWrite(L4, 0);
        delay(de);
        digitalWrite(L5, 1);
        delay(de);
        digitalWrite(L6, 0);
        delay(de);
        digitalWrite(L6, 0);
        delay(de);
        digitalWrite(L5, 1);
        delay(de);
        digitalWrite(L4, 0);
        delay(de);
        digitalWrite(L3, 1);
        delay(de);
        digitalWrite(L2, 0);
        delay(de);
        digitalWrite(L1, 1);
        delay(de);
    }
    void fifth_sequence() {
        digitalWrite(L1, 1);
        digitalWrite(L2, 0);
        digitalWrite(L3, 0);
        digitalWrite(L4, 0);
        digitalWrite(L5, 0);
        digitalWrite(L6, 0);
        delay(de);

        digitalWrite(L1, 0);
        digitalWrite(L2, 1);
        digitalWrite(L3, 0);
        digitalWrite(L4, 0);
        digitalWrite(L5, 0);
        digitalWrite(L6, 0);
        delay(de);
    }
    void sixth_sequence() {
        digitalWrite(L1, 1);
        delay(de);
        digitalWrite(L2, 1);
        delay(de);
        digitalWrite(L3, 1);
        delay(de);
        digitalWrite(L4, 1);
        delay(de);
        digitalWrite(L5, 1);
        delay(de);
        digitalWrite(L6, 1);
        delay(de);
        digitalWrite(L6, 0);
        delay(de);
        digitalWrite(L5, 0);
        delay(de);
        digitalWrite(L4, 0);
        delay(de);
        digitalWrite(L3, 0);
        delay(de);
        digitalWrite(L2, 0);
        delay(de);
        digitalWrite(L1, 0);
        delay(de);
    }

    void seventh_sequence() {
        digitalWrite(L1, 0);
        digitalWrite(L2, 0);
        digitalWrite(L3, 0);
        digitalWrite(L4, 0);
        digitalWrite(L5, 0);
        digitalWrite(L6, 0);
        p = 0;
    }`;
