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
