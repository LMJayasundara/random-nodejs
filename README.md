# Node.js Random Numbers and String #

A simple and flexible npm library that creates various type of Random Numbers and String.<br />
Works in both NodeJS and the browser.
<br />
<br />

## Installation

`npm i random-nodejs --save`
<br />
<br />

## Import
```
var rand = require("random-nodejs");
```
<br />

## Numbers API

<font size="4px">

+ [**random**](#random)
+ [**bool**](#bool)
+ [**intnum**](#intnum)
+ [**floatnum**](#floatnum)
+ [**option**](#option)
+ [**multiples**](#multiples)

</font>
<br />

## String API

<font size="4px">

+ [**capital**](#capital)
+ [**simple**](#simple)
+ [**words**](#words)

</font>

<br />

### **random**
Return, Random float numbers.
```
rand.random(baseNum, fixedNum);
```
**baseNum** represent base of the number system.
<br /> Default is 1<br />
Specified baseNum as 1, 10, 100, 1000 ...<br />
**fixedNum** represent max length of output float number.
<br />


```
rand.random(1, 5)     // Ex. output 0.41008,  0.89666

rand.random(10, 5)    // Ex. output 6.30851,  5.64046

rand.random(100, 5)   // Ex. output 44.75786, 30.95153

rand.random(1000, 3)  // Ex. output 422.649,   437.101
```
<br />
<br />

### **bool**
Return, Random true or false values.
```
rand.bool(thresholdNum);
```
Specified **thresholdNum** between 0 and 1 <br /> 
Default is 0.5<br />
When thresholdNum = 0.5, Get true => 50%, false => 50%<br />
When thresholdNum = 0.3, Get true => 30%, false => 70%
<br />
```
rand.bool(0.8)  // Ex. output true, true, true, false

rand.bool(0.2)  // Ex. output true, false, false, false
```
<br />
<br />

### **intnum**
Return, Random integer numbers between **min** and **max** values.
```
rand.intnum(min, max);
```
Default min = 0<br />
Default max = 1
<br />
```
rand.intnum(-5, 10)    // Ex. output 2 , 0, 3, -5

rand.intnum(-15, -5)   // Ex. output -4 , -10, -8, -5
```
<br />
<br />

### **floatnum**
Return, Random float numbers between **min** and **max** values.
```
rand.floatnum(min, max, fixedNum);
```
Specified **fixedNum** to get max length of output float number. <br />
Default min = 0<br />
Default max = 1
 <br />
```
rand.floatnum(-5, 10, 5)   // Ex. output -4.92252, 9.29047, 9.30004, -2.33519

rand.floatnum(-5, 10, 2)   // Ex. output 1.56, -3.43 7.33
```
<br />
<br />

### **option**
Return, Random numbers inside the user-defined array of numbers.
```
const arr = ([1, 2, 3, 4]);

random.option(arr);           // Ex. output 3, 1, 4, 1, 2
```
<br />
<br />

### **multiples**
Return, Random numbers in multiples of a number(mutiples of mul value) in between min and max values.
```
rand.multiples(min, max, mul);
```
Default mul = 0.1<br />
Default min = 0<br />
Default max = 1
```
rand.multiples(-10, 10, 2)     // Ex. output -4, 6, -8, 10

rand.multiples(-10, 10, 0.2)   // Ex. output  10, -1.4, -2.8, 6.4
```
<br />
<br />

### **capital**
Return, Capital letters.
```
rand.capital();

Ex. Output  A, Z, E, C ...
```

<br />
<br />

### **simple**
Return, Simple letters. 
```
rand.simple();

Ex. Output  g, j, l, o ...
```

<br />
<br />

### **words**
Return, Random Words inside the user-defined array of words.
```
var things = ['Rock', 'Paper', 'Scissor'];
rand.words(things);

Ex. Output  Paper, Scissor, Rock, Rock ...
```
<br />
<br />

## Contributing

You can contribute to this project.<br /> You just need to create a pull request which will be revised, merged to main branch (if the code doesn't break the project) and published as a new release.
<br />