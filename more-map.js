const friends = ["Katrina kaif", "katrina", "deepika", "salman", "karina"];
const flength = friends.map((friend) => friend.length);
// console.log(flength);

// Array of objects

const products = [
  { name: "water bottle", price: 50, color: "yellow" },
  { name: "mobile", price: "14000", color: "green" },
  { name: "laptop", price: "67000", color: "silver" },
];

const productNames = products.map((product) => product.name);
const productPrice = products.map((product) => product.price);
const productColor = products.map((product) => product.color);

// console.log(productNames);
// console.log(productPrice);
console.log(productColor);
