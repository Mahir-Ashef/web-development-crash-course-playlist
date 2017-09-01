var myVar = "global";

function scopeFunc() {
  var myVar = "local";
  console.log(myVar);
}
scopeFunc();

console.log(myVar);
