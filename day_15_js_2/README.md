# JavaScript -2
## 9. ARRAYS:

### Simple Introduction:
* Holds multiple values
* Can holds multiple types of values
  * Different from C/C++
* "length": gives no of items in array
* Can access an item in array by using index

###### Example:
* Declare an array
* Initialize with multiple and multiple types of values
* Use "length" property to check the items in array
* Parse an array (Display all values in array)

`simpArray.js`
```JS
var ar = Array(4);

ar[0] = "string";
ar[1] = 37;
ar[2] = 37.5;
ar[3] = true;

for (var i = 0; i < ar.length; i++) {
  console.log(ar[i]+","+typeof(ar[i]));
};
```
---
### Associative Arrays:
* Can have string indexes(keys)
* Parsing using keys

`associArray.js`
```JS
var ar = Array(4);

ar["name"] = "Azmal";
ar["age"] = 37;
ar["currency"] = 37.5;
ar["married"] = true;

for (key in ar) {
  console.log(key+":"+ar[key]);
};
```
---
### Nesting Arrays(Collection):
* Collection: An Array which contains other arrays as items.

`nestingArray.js`
```JS
var ar1 = Array(4);

ar1["name"] = "Azmal";
ar1["age"] = 37;
ar1["married"] = true;
ar1["currency"] = 37.5;

var ar2 = Array(4);

ar2["name"] = "Faruk";
ar2["age"] = 17;
ar2["married"] = false;
ar2["currency"] = 7.5;

var ar3 = Array(4);

ar3["name"] = "Komola";
ar3["age"] = 23;
ar3["married"] = true;
ar3["currency"] = 17.5;

var people = [ar1,ar2,ar3];

for (var i = 0; i < people.length; i++) {
  for (key in people[i]) {
    console.log(key+":"+people[i][key]);
  };
  console.log("\n");
};
```
---
### Danger of Array.length:
* "length": gives the number of items in an array.
* does not work with "Associative Arrays" (arrays with indexes)
* Arrays with numeric indexes have some default characteristics
  > if you add an element using numeric index, arrays allocates for all previous indexes(if not allocated already.)

* Mixing Numeric and Siring indexes in the same array?
  > not a good idea at all

`lenCheck.js`
```JS
console.log("Check - 01");
var ar0 = Array();
ar0[0] = "Azmal";
ar0[1] = 37;
ar0[2] = true;
ar0[3] = 37.5;
console.log(ar0.length);

console.log("\nCheck - 02");
var ar1 = Array(4);
ar1["name"] = "Azmal";
ar1["age"] = 37;
ar1["married"] = true;
ar1["currency"] = 37.5;
console.log(ar1.length);

console.log("\nCheck - 03");
var ar2 = Array(5);
ar2["name"] = "Azmal";
ar2["age"] = 37;
ar2["married"] = true;
ar2["currency"] = 37.5;
console.log(ar2.length);

console.log("\nCheck - 04");
var ar3 = Array();
ar3["name"] = "Azmal";
ar3["age"] = 37;
ar3["married"] = true;
ar3["currency"] = 37.5;
console.log(ar3.length);

console.log("\nCheck - 05");
var ar4 = Array();
ar4[3] = 37.5;
console.log(ar4.length);

console.log("\nCheck - 06");
var ar5 = Array();
ar5[3] = 37.5;
ar5["name"] = "Azmal";
ar5["age"] = 37;
console.log(ar5.length);

console.log("\nCheck - 07");
for (var i = 0; i < ar5.length; i++) {
  console.log(ar5[i]);
};

console.log("\nCheck - 08");
for (var key in ar5) {
  if (ar5.hasOwnProperty(key)) {
    console.log(ar5[key]);
  }
};

console.log("\nCheck - 09");
for (var key in ar5) {
  if (ar5.hasOwnProperty(key)) {
    console.log(key+":"+ar5[key]);
  }
};

console.log("\nCheck - 10");
for (var i = 0; i < (ar5.length+2); i++) {
  console.log(ar5[i]);
};
```


---
### Array Functions:
* Push: Adds an elements at the end
* Pop: Removes an element from the end
* Shift: Removes an element from the top
* Unshift: Adds an element at the top
