// 자동으로 형 변환 됨
console.log('4' - true);

console.log('');


// 산술 연산(+, -, *, /, %, **) : 연산되어지는 두 값을 '숫자형'으로 변환 후 연산함
// ** '더하기'는 예외로 문자열을 더해 주는 기능이 있음 **

console.log(4 + '2'); // 순서 상관 없이 어느 한쪽이라도 문자열이면 문자열 연결
console.log(4 + 2);
console.log(4 - true);
console.log(4 * false);
console.log(4 / '2');
console.log('4' ** true);
console.log(4 % 'two'); // NaN값은 어떤 연산 기호로 연산해도 NaN 값이 나옴

console.log('');




// 관계 비교 연산(<, <=, >, >=) : 산술 연산과 같이 특별한 경우 제외 숫자형으로 바꾼 후 비교

console.log(2 < '3');
console.log(2 > true); // 2 > 1
console.log('2' <= false); // 2 <= 0
console.log('two' >= 1);  // NaN과 같이 '비교 불가' 상태일때는 false값

console.log('');




// 같음 비교 연산(===, !==, ==, !=)

// 일치 , 불일치 : 형 변환 X
console.log(1 === '1');
console.log(1 === true);
// 동등, 부등 : 숫자 형태로 형 변환됨
console.log(1 == '1');
console.log(1 == true);
