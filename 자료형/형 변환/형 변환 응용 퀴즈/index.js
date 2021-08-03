console.log(typeof('4' + 3)); // string
console.log(typeof(3 - true)); // number
console.log(typeof(Boolean(5) * true)); // number
console.log(typeof(true < false)); // boolean

console.log(0 !== Number(false)); //  0 !== 0 : false
console.log(Number(true) === String(1)); //  1 === '1' : false
console.log(Number(true) == String(1)); //  1 == '1' -> 1 == 1 : true
console.log('5' / true != '5'); // 5 != '5' -> 5 != 5 : false
console.log(5 % 2 === Boolean(2) * true); // 1 === 1 : true
