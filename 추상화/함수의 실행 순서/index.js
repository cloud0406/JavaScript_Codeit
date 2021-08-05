function sayHello() {
  console.log('Hello');
  console.log('Welcome to Codeit!');
}

console.log('함수 호출 전');
sayHello();
console.log('함수 호출 후');

console.log('');



function square(x) {
  return x * x;
}

console.log('함수 호출 전');
console.log(square(5));
console.log('함수 호출 후');

console.log('');




function square(x) {
  return x * x;
}

console.log('함수 호출 전');
console.log(square(3) + square(4));
console.log('함수 호출 후');

console.log('');