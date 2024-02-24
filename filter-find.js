// filter number of items

const numbers = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const bigNumbers = numbers.filter((number) => number > 10);
const smallNumbers = numbers.filter((number) => number < 10);
const equalSmallNumbers = numbers.filter((number) => number <= 10);
console.log(bigNumbers);
console.log(smallNumbers);
console.log(equalSmallNumbers);

const products = [
  { name: "water bottle", price: 50, color: "yellow" },
  { name: "mobile", price: "14000", color: "green" },
  { name: "laptop", price: "67000", color: "silver" },
];

const upPrice = products.filter((product) => product.price > 14000);
console.log(upPrice);
// find number of items

const searchColor = products.find((product) => product.color == "green");

console.log(searchColor);

//  defferance between filter and find

// filter give Array but find give only elements
