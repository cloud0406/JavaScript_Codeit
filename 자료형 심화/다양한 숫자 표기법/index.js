// 지수 표기법 : e 다음에 오는 숫자만큼 10의 거듭제곱을 곱해줌
let millionaire = 1000000000;
let myNumber = 1e9; 

console.log(millionaire);
console.log(myNumber);
console.log(millionaire === myNumber);

console.log('');

console.log(25e5 === 2500000);
console.log(5.3e3 === 5300);
console.log(-6.1e8 === -610000000);

console.log('');

console.log(16e-5 === 0.00016); // -를 붙이면 10의 거듭제곱만큼 나누기
console.log(3.5e-3 === 0.0035);
console.log(-9.1e-5 === -0.000091);

console.log('');




// 다양한 숫자 표기법들 : 출력할땐 10진수로 나타남

// 16진법 (Hexadecimal)
let hex1 = 0xff;
let hex2 = 0xFF;

console.log(hex1);
console.log(hex2);


// 8진법 (Octal)
let octal = 0o377;

console.log(octal);



// 2진법 (binary numeral system)
let binary = 0b11111111; 

console.log(binary);