var calc= function(num1,num2,callback){
  return callback(num1,num2);
}

console.log(calc(2,3,function(a,b){
  return a+b;
}));
