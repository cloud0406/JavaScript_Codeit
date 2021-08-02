// typeof 값 : 값을 평가하여 '문자열'로 결과 출력해줌

console.log(typeof 101);
console.log(typeof 'Codeit');
console.log(typeof true);


console.log(' ');



console.log(typeof 1);
console.log(typeof 1.0);
console.log(typeof '1');
console.log(typeof "1");
console.log(typeof `1`);


console.log(' ');


let name = 'Codeit';
function sayHello() {
  console.log('Hello');
};
console.log(typeof name);
console.log(typeof sayHello);


console.log(' ');


// ***typeof의 우선순위가 사칙연산보다 우선임***
console.log(typeof 'Hello' + 'Codeit'); // typeof 'Hello' -> string 으로 바뀐 후 '+' 실행되어 'stringCodeit'
console.log(typeof 8 - 3); // 마찬가지로 typeof 8 -> number로 바뀐후 number - 3 실행되어 NaN 결과

// 괄호로 우선순위 변경해줘야함
console.log(typeof ('Hello' + 'Codeit')); 
console.log(typeof (8 - 3)); 


console.log(' ');


console.log(typeof typeof (3 + 5));
// typeof typeof 8 -> typeof 'number' -> 'string'