var ar = Array(4);

ar["name"] = "Azmal";
ar["age"] = 37;
ar["currency"] = 37.5;
ar["married"] = true;

for (key in ar) {
  console.log(key+":"+ar[key]);
};
