// codeit이라는 문자열을 각각 x, y에 할당
let x = 'Codeit';
let y = x;

y = x + '!';
x = y.toLowerCase();

console.log(x);
console.log(y);

console.log('');



// 배열로 가는 길을 각각 x, y에 할당(주소값을 저장)
x = ['Kim', 'Na', 'Park', 'Lee'];
y = x;

y.push('Lim');
x[4] = 'Sung';

console.log(x);
console.log(y);

console.log('');



// 해당하는 값이 기본형인지 , 참조형인지를 파악해야함
x = { // x에는 객체의 주소값을 저장
  numbers: [1, 2, 3, 4],
  title: 'Codeit',
};
y = x.numbers; // numbers가 배열(참조형)이기 때문에 y에는 배열의 주소값 저장
let z = x.title; // title이 문자열(기본형)이기 때문에 z에는 값이 그대로 복사
 
x.numbers.unshift(5); 
x.title = 'Hello';

console.log(y); // y는 주소값이므로 위에서 바뀐 값이 출력됨
console.log(z); // z는 값이 복사된 것이므로 x.title로 바뀐 값이랑은 상관없음