var depoesit = 400;
// --------------------------------kind of conditiion
// condition for big
if (depoesit > 5000) {
}
// condition for little
if (depoesit < 5000) {
}

if (depoesit == 5000) {
}

// depoesit not equal

if (depoesit != 5000) {
}
//  condition for big  or equal
if (depoesit >= 5000) {
}
// conditon for small for equal
if (depoesit <= 5000) {
}

// ===========================Arrays =========================

const number = [2, 43, 4, 5, 6, 7];

// for add number or element in array
const addNumber = number.push(8);
console.log(addNumber);
// kon kichu array theke ber korar gonno pop() kora hoi
number.pop(6);
console.log(number);
//  array moddhe kono kichu ase kina ta chek korar gonno [-1] use kora latge

if (number.indexOf(43) != -1) {
  console.log("ase");
}

// ----------------function declare=====================

function fullName(first, second) {
  const name = first + " " + second;
  console.log(name);
}
const fullNames = fullName("ali", "hossain");

// ------------------------------object declare================
const bottle = { color: "red", laptop: "hp", mobile: "realme" };

// ---------------------------------declare Array --------------------------------
const name = ["riyad", "ashraful", 1567935234];

//  --------------------------------declare Arrafy Of Object --------------------------------

const person = [
  { name: "riyad", age: 13, mobile: "realme" },
  { name: "ashraful", age: 12, mobile: "realme" },

  ,
];
