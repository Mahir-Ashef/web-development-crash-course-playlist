var calc = function(num1,num2,calcType) {
  if (calcType==="add") {
    return num1+num2;
  } else if (calcType==="multiply") {
    return num1*num2;
  }
};

console.log(calc(1,2,"add"));
