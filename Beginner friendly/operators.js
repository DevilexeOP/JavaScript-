// == is not data type sensitive
// === is data type sensitive
/*
const x = 120; here 120 is int
if(x == 120 ) return true; // this will work
const x = "120";
but if (x === 120 ) return true; // this wont work 
*/

const x = 0;
const color = x > 3 ? "red" : "blue";
console.log(color);

switch (color) {
  case "red":
    console.log("Im red");
    break;
  case "blue":
    console.log("Im blue");
    break;
  default:
    console.log("im black");
    break;
}
