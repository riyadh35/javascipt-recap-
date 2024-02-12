// spread operator????
//=>The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.

//Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element. See rest parameters and rest property.

const numbers = [12, 123, 133, 44, 55];
// console.log(numbers);

// for get element from arrow use Spread Eleement

// console.log(...numbers);

const numebr2 = [...numbers, 55];

numbers.push(65);

console.log(numbers);
console.log(numebr2);
