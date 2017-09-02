var x = function() {
  console.log("Callback function");
};

var y = function(callback) {
  console.log("normal function");
  callback();
};

y(x);
