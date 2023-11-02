
console.log("Map function");
const numbers = [1, 2, 3, 4];
const sqauare = numbers.map(item => item * item);
console.log(sqauare);

console.log("Fliter Function");
const numbers2 = [1, 2, 3, 4, 6, 7];
const evens = numbers2.filter((item ) => item % 2 == 0);
console.log(evens)

console.log("Reduce Function");
const numbers3 = [2, 4, 5, 6];
const sum = numbers3.reduce((res,item) => res +item, 0);
console.log(sum)
