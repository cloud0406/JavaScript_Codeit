let myNumber = 0.3591;

// toFixed(0 ~ 100) : 소수의 자리수 고정시켜주는 메소드, 범위는 0에서 100까지

console.log(myNumber.toFixed(3)); // 네번째 자리에서 '반올림'
console.log(myNumber.toFixed(7)); // 부족한 자리는 '0'으로 대체
console.log(typeof myNumber.toFixed(3)); // toFixed는 자료형을 'string'으로 나타냄
console.log(typeof Number(myNumber.toFixed(3))); // 숫자와 연산할때는 형변환 해줘야함

console.log('');

// *tip* : 자바스크립트에서는 어떤 값 앞에 '+' 기호를 붙이면 '숫자형'으로 변환 시켜줌
console.log(typeof +myNumber.toFixed(3)); 
console.log(typeof +'hello');

console.log('');




// toString(2 ~ 36) : 괄호안의 숫자의 진법으로 변환해줌, 범위는 2에서 36까지

myNumber = 255;

console.log(myNumber.toString(2)); // 2진법
console.log(myNumber.toString(8)); // 8진법
console.log(myNumber.toString(16)); // 16진법
console.log(typeof myNumber.toString(2)); // toFiexd와 마찬가지로 자료형은 'string'

console.log('');




// ** 숫자형 메소드 사용시 주의할점 **

// 변수가 아닌 숫자뒤에 메소드 사용시 점을 하나만 붙이면 메소드를 위한 점인지 소수점을 위한 점인지 구분이 안됨
// 따라서 이럴 경우엔 점을 2개 붙여 사용하거나, 숫자를 괄호안에 넣어 사용
console.log(255..toString(2)); 
console.log((255).toString(2)); 

console.log('');


// 소수에 사용시에는 점을 하나만 붙여서 사용
console.log(0.3591.toFixed(3)); 
console.log(0.3591.toFixed(7)); 
console.log((0.3591).toFixed(3)); 
console.log((0.3591).toFixed(7));


