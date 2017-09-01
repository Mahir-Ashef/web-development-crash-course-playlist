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
