console.log('10' + '5');
console.log(10 + 5);


//형 변환 (Type Conversion)
console.log(Number('10') + Number('5'));
console.log(String(10) + String(5));


console.log('');


// 문자로 형 변환
let x = 123;
console.log(x);
console.log(String(x));
console.log(typeof(x));
console.log(typeof String(x));

console.log('');

let y = true;
console.log(y);
console.log(String(y));
console.log(typeof(y));
console.log(typeof String(y));

console.log('');



// 숫자로 형 변환
x = '문자';
console.log(x);
console.log(Number(x));
console.log(typeof(x));
console.log(typeof Number(x));

console.log('');

y = true;
console.log(y);
console.log(Number(y));
console.log(typeof(y));
console.log(typeof Number(y));

console.log('');



// 불린으로 형 변환
// 보통 true 값이 나오지만  ''(빈 문자), 0, NaN의 경우 false로 값 나오고, 이러한 값들을 falsy값이라 부름
x = '문자';
console.log(x);
console.log(Boolean(x));
console.log(typeof(x));
console.log(typeof Boolean(x));

console.log('');

y = 123;
console.log(y);
console.log(Boolean(y));
console.log(typeof(y));
console.log(typeof Boolean(y));

console.log('');


