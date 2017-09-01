# JavaScript -1

## 1. Datatypes:
One of the most fundamentals characteristics of a programming language is the set of data types it supports.

JavaScript allows three fundamentals data types
* `Numbers`- 123,120.5
* `Strings`- "This is a string"
* `Boolean`- true or false

JavaScript supports a composite data type known as `object`.
***

## 2. Variables:
Variables are containers where you can place your data into it. In JavaScript variables are declared with `var` keywords.

##### Example: `variable.js`
```JS
var name = "Moyeen";
var age = 37;

console.log(name);
console.log(age);

console.log(typeof(name));
console.log(typeof(age));
```
***

## 3. Variable Scope:
Scope of a variable is the region of your program in which it is defined and available. There are two types of variable scope in JavaScript-

* `Global Variables`- A global variable is available anywhere in your JavaScript code.
* `Local Variables`- A local variable can be visible only within the specific function in which it is defined.

##### Example: `varScope.js`
```JS
var myVar = "global";

function scopeFunc() {
  var myVar = "local";
  console.log(myVar);
}
scopeFunc();

console.log(myVar);
```
***

## 4. IF-ELSE:
In program, there may be a situation when we have to choose one among many paths. In such cases we need a conditional statement. if-else is such a statement.

JavaScript supports the following IF-ELSE statements
1. if
2. if....else
3. if....else if

##### Example: `ifCon.js`
```JS
var num = 20;
if(num>18){
  console.log("The given number is more than 18");
}
```

##### Example: `ifelseCon.js`
```JS
var num1=18;
var num2=20;

if (num1>num2) {
  console.log("num1 is greater and its value is: "+num1);
} else {
  console.log("num2 is greater and its value is: "+num2);
}
```

##### Example: `ifelseifCon.js`
```JS
var num = 21;
if (num>0 && num<10) {
  console.log(num+" is between 0-10");
}
else if (num>10 && num<20) {
  console.log(num+" is between 10-20");
}
else if (num>20 && num<30) {
  console.log(num+" is between 20-30");
}
else {
  console.log(num+ "is not found in your catagory");
}
```
***

## 5. SWITCH-CASE:
when we have to use multiple `if... else...if` statement However, this is not always the best solution, especially when all of the branches depend on the value of a single variable. switch statement can handle exactly this situation.

##### Example: `swicaseCon.js`
```JS
var day = 3;
switch (day) {
  case 1: console.log("Satarday");
    break;
  case 2: console.log("Sunday");
    break;
  case 3: console.log("Monday");
    break;
  default: console.log("Not found");
}
```
***

## 6. WHILE LOOP:
While writing a program, you may encounter a situation where you need to perform an action over and over again. In such situations, you would need to write loop statements to reduce the number of lines.

A loop has three important keywords- 1. initialization 2. break condition 3. iteration

##### Example: `whileLoop.js`
```JS
var count = 0;

while (count<10) {
  console.log("Current count"+count);
  count++;
}

console.log("Loop Stopped");
```
***

## 7. FOR LOOP:

while loop and for loop is almost same. Lets compare their structure

##### while loop:
```JS
initialization;

while (break condition) {
  statement1.....;
  iteration;
}
```

##### for loop:
```JS
for (initialization; break condition; iteration) {
  statement1.....;
}
```

Lets rewrite the previous program using for loop, which was  written in while loop.
##### Example: `forLoop.js`
```JS
for (var count = 0; count< 10; count++) {
  console.log("Current count"+count);
}

console.log("Loop Stopped");
```
***

## 8. FOR-IN LOOP:
