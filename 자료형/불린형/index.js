console.log(2>1);
console.log(2<1);
console.log(3 >= 2);
console.log(3 <= 3);
console.log(3 === 3);
console.log(3 !== 3);

console.log(' ');

console.log('Codeit' === 'Codeit');
console.log('Codeit' !== 'Codeeat');

console.log(' ');

// ===와 ==의 차이 : ===는 자료형까지 같은지 비교하지만 ==는 값만 비교.
// 문자 '1'과 숫자 1은 값으로는 같은 값이기 때문에 ==에서는 true가 나오지만, 자료형이 다르기 때문에 ===에서는 false가 나옴
console.log(1 === 1);
console.log(1 == 1);
console.log('1' === 1);
console.log('1' == 1);

console.log(' ');


// and 연산 : 모두 참이여야만 true, 아닐경우 false
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(' ');

// or 연산 : 하나라도 참일 경우 true, 아닐경우 false
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(' ');

// not 연산 : true -> false, false -> true
console.log(!true);
console.log(!false);
// 2번 중첩시 그대로
console.log(!!true);
console.log(!!false);

console.log(' ');

