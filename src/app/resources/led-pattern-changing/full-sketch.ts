export const fullSketch = String.raw`const int L1 = 12;
const int L2 = 11;
const int L3 = 10;
const int L4 = 7;
const int L5 = 6;
const int L6 = 5;

const int buttonPin = 3;  // Button input

const int de=50;  // delay time

const int p=0;    // variable for pattern

const int buttonState = 0;   // variable for reading the pushbutton status

void setup() {
  pinMode(L1, OUTPUT);
  pinMode(L2, OUTPUT);
  pinMode(L3, OUTPUT);
  pinMode(L4, OUTPUT);
  pinMode(L5, OUTPUT);
  pinMode(L6, OUTPUT);
  pinMode(buttonPin, INPUT);
}

void loop() 
{
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
}
      void first_sequence(){
 digitalWrite(L1,HIGH); 
 digitalWrite(L2,LOW); 
 digitalWrite(L3,LOW); 
 digitalWrite(L4,LOW); 
 digitalWrite(L5,LOW); 
 digitalWrite(L6,LOW); 
  delay(de);  
  
 digitalWrite(L1,LOW); 
 digitalWrite(L2,HIGH); 
 digitalWrite(L3,LOW); 
 digitalWrite(L4,LOW); 
 digitalWrite(L5,LOW); 
 digitalWrite(L6,LOW); 
  delay(de); 
  
 digitalWrite(L1,LOW); 
 digitalWrite(L2,LOW); 
 digitalWrite(L3,HIGH); 
 digitalWrite(L4,LOW); 
 digitalWrite(L5,LOW); 
 digitalWrite(L6,LOW); 
  delay(de); 
  
 digitalWrite(L1,LOW); 
 digitalWrite(L2,LOW); 
 digitalWrite(L3,LOW); 
 digitalWrite(L4,HIGH); 
 digitalWrite(L5,LOW); 
 digitalWrite(L6,LOW); 
  delay(de); 
  
 digitalWrite(L1,LOW); 
 digitalWrite(L2,LOW); 
 digitalWrite(L3,LOW); 
 digitalWrite(L4,LOW); 
 digitalWrite(L5,HIGH); 
 digitalWrite(L6,LOW); 
  delay(de); 
  
 digitalWrite(L1,LOW); 
 digitalWrite(L2,LOW); 
 digitalWrite(L3,LOW); 
 digitalWrite(L4,LOW); 
 digitalWrite(L5,LOW); 
 digitalWrite(L6,HIGH); 
  delay(de);  
  }
  
  void second_sequence()
  {
 digitalWrite(L1,LOW); 
 digitalWrite(L2,LOW); 
 digitalWrite(L3,LOW); 
 digitalWrite(L4,LOW); 
 digitalWrite(L5,LOW); 
 digitalWrite(L6,HIGH); 
  delay(de); 
  
  digitalWrite(L1,LOW); 
 digitalWrite(L2,LOW); 
 digitalWrite(L3,LOW); 
 digitalWrite(L4,LOW); 
 digitalWrite(L5,HIGH); 
 digitalWrite(L6,LOW); 
  delay(de);
  
  digitalWrite(L1,LOW); 
 digitalWrite(L2,LOW); 
 digitalWrite(L3,LOW); 
 digitalWrite(L4,HIGH); 
 digitalWrite(L5,LOW); 
 digitalWrite(L6,LOW); 
  delay(de); 
  
  digitalWrite(L1,LOW); 
 digitalWrite(L2,LOW); 
 digitalWrite(L3,HIGH); 
 digitalWrite(L4,LOW); 
 digitalWrite(L5,LOW); 
 digitalWrite(L6,LOW); 
  delay(de);  
 
  digitalWrite(L1,LOW); 
 digitalWrite(L2,HIGH); 
 digitalWrite(L3,LOW); 
 digitalWrite(L4,LOW); 
 digitalWrite(L5,LOW); 
 digitalWrite(L6,LOW); 
  delay(de);  
 
  digitalWrite(L1,HIGH); 
 digitalWrite(L2,LOW); 
 digitalWrite(L3,LOW); 
 digitalWrite(L4,LOW); 
 digitalWrite(L5,LOW); 
 digitalWrite(L6,LOW); 
  delay(de); 
  }
  
     void third_sequence()
  {
  digitalWrite(L1,HIGH); 
 delay(de); 
 digitalWrite(L2,LOW); 
 delay(de); 
 digitalWrite(L3,LOW);
 delay(de);  
 digitalWrite(L4,LOW);
 delay(de);  
 digitalWrite(L5,LOW);
 delay(de);  
 digitalWrite(L6,HIGH);
 delay(de);   
 digitalWrite(L6,LOW);
 delay(de); 
 digitalWrite(L5,LOW);
 delay(de); 
 digitalWrite(L4,LOW);
 delay(de); 
 digitalWrite(L3,LOW);
 delay(de); 
 digitalWrite(L2,LOW);
 delay(de); 
 digitalWrite(L1,HIGH);
 delay(de); 
  }
  
      void fourth_sequence()
  {
 digitalWrite(L1,HIGH); 
 delay(de); 
 digitalWrite(L2,LOW); 
 delay(de); 
 digitalWrite(L3,HIGH);
 delay(de);  
 digitalWrite(L4,LOW);
 delay(de);  
 digitalWrite(L5,HIGH);
 delay(de);  
 digitalWrite(L6,LOW);
 delay(de);   
 digitalWrite(L6,LOW);
 delay(de); 
 digitalWrite(L5,HIGH);
 delay(de); 
 digitalWrite(L4,LOW);
 delay(de); 
 digitalWrite(L3,HIGH);
 delay(de); 
 digitalWrite(L2,LOW);
 delay(de); 
 digitalWrite(L1,HIGH);
 delay(de); 
  }
  
  void fifth_sequence()  {
 digitalWrite(L1,HIGH); 
 digitalWrite(L2,LOW); 
 digitalWrite(L3,LOW); 
 digitalWrite(L4,LOW); 
 digitalWrite(L5,LOW); 
 digitalWrite(L6,LOW); 
  delay(de); 
  
 digitalWrite(L1,LOW); 
 digitalWrite(L2,HIGH); 
 digitalWrite(L3,LOW); 
 digitalWrite(L4,LOW); 
 digitalWrite(L5,LOW); 
 digitalWrite(L6,LOW); 
  delay(de); 
  }
 
  void sixth_sequence()
{
 digitalWrite(L1,LOW); 
 delay(de); 
 digitalWrite(L2,LOW); 
 delay(de); 
 digitalWrite(L3,LOW);
 delay(de);  
 digitalWrite(L4,LOW);
 delay(de);  
 digitalWrite(L5,LOW);
 delay(de);  
 digitalWrite(L6,HIGH);
 delay(de);   
 digitalWrite(L6,LOW);
 delay(de); 
 digitalWrite(L5,LOW);
 delay(de); 
 digitalWrite(L4,LOW);
 delay(de); 
 digitalWrite(L3,LOW);
 delay(de); 
 digitalWrite(L2,LOW);
 delay(de); 
 digitalWrite(L1,LOW);
 delay(de); 
}  
  void seventh_sequence(){
 digitalWrite(L1,LOW); 
 digitalWrite(L2,LOW); 
 digitalWrite(L3,LOW); 
 digitalWrite(L4,LOW); 
 digitalWrite(L5,LOW); 
 digitalWrite(L6,LOW); 
  p=0;
}`;
