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
