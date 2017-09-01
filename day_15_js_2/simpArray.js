var ar = Array(4);

ar[0] = "string";
ar[1] = 37;
ar[2] = 37.5;
ar[3] = true;

for (var i = 0; i < ar.length; i++) {
  console.log(ar[i]+","+typeof(ar[i]));
};
