console.log("Program has been started");
var f1 = function() {
  console.log("f1 Executed!");
};

setTimeout(f1,3000);

setTimeout(function() {
  console.log("f2 Executed!");
},2000);
