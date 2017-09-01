
A function is a group of reusable code which can be called anywhere in your program. This eliminates the need of writing the same code again and again. It helps programmers in writing modular codes. Functions allow a programmer to divide a big program into a number of small and manageable functions.

##### Definition and characteristics of functions:
* the `function` keyword
* a unique function name
* a list of parameters (that might be empty)
* a statement block surrounded by curly braces
* get executed when called
* can return values back
* can be declared as an expression
* functions can be assigned to other variables
* functions can be passed as arguments
  * mainly used for callback
* can invoke itself


---
##### 1. Example(A simple function): `simpFunction.js`
```JS
function sayHello() {
  console.log("Hello");
}
sayHello();
```
---
##### 2. Example(A function with parameters): `paramFunction.js`
```JS
function sayHello(name) {
  console.log("Hello"+name);
}
sayHello("Jonny");

function add(num1,num2) {
  console.log(num1+num2);
}
add(3,2);
```
---
##### 3. Example(A function with return value): `returnFunction.js`
```JS
function add(num1,num2) {
  return num1+num2;
}
var sum =add(3,2);
console.log(sum);
```
---

##### 4. Example(A function with scope): `scopeFunction.js`
```JS
var x = "global"

function f1() {
  var x = "local in f1";
};

f1();
console.log(x);

function f2() {
  x = "local in f2";
};

f2();
console.log(x);
```
---

##### 5. Example(A function with Immediately Invoke): `imminvoFunction.js`

```JS
function f1() {
  console.log("This is f1");
};

(function f2() {
  console.log("This is f2");
})();

f1();
```
---
##### 6. Example(Anonymous function): `anonymFunction.js`

```JS
var f1 = function functionName() {
  console.log("This is f1");
};
f1();

var f2 = function() {        //Anonymous function
  console.log("This is f2");
};
f2();
```

##### 7. Example(function as a parameter):

Since JavaScript allows us to assign functions to variables, we can pass functions to other functions as a parameter.

`fparamFunction.js`
```JS
console.log("Program has been started");
var f1 = function() {
  console.log("f1 Executed!");
};

setTimeout(f1,3000);

setTimeout(function() {
  console.log("f2 Executed!");
},2000);
```
