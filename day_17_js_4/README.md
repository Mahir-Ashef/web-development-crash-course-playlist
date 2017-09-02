# JavaScript -4
## 11. FUNCTIONS IN-DEPTH:
---
### Callback Functions:
In JavaScript functions are actually first-class objects. just like you can pass objects into functions as an argument, you can also pass other functions into functions as arguments and execute at some point.

Now take a look-
`simpCallback.js`
```JS
var x = function() {
  console.log("Callback function");
};

var y = function(callback) {
  console.log("normal function");
  callback();
};

y(x);
```
##### why do we need callback function??
So, take a look at another simple example of doing something without callback function and then improving using call back function. so you can see the real use of callback functions.

`noCallback.js`
```JS
var calc = function(num1,num2,calcType) {
  if (calcType==="add") {
    return num1+num2;
  } else if (calcType==="multiply") {
    return num1*num2;
  }
};

console.log(calc(1,2,"add"));
```

you can rewrite the program with callback function-
`yCallback.js`
```JS
var add =function(a,b) {
  return a+b;
};

var multiply =function(a,b) {
  return a*b;
};

var calc = function(num1,num2,callback) {
  return callback(num1,num2);
};

console.log(calc(2,3,multiply));
```
the another way to write a call back function is shown below. It is very useful when you have to do something only once.
`actuCallback.js`
```JS
var calc= function(num1,num2,callback){
  return callback(num1,num2);
}

console.log(calc(2,3,function(a,b){
  return a+b;
}));
```




---
### Nested Functions:
  * Scope of nested functions are local to their parent.
  * Cannot be executed other than the parent function.
  *

---
