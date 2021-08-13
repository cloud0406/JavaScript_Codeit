// 객체는 정수형 프로퍼티 네임을 오름차순으로 먼저 정렬하고, 나머지 프로퍼티들은 추가한 순서대로 정렬하는 특징이 있음

// 정수형 프로퍼티들이 오름차순으로 알아서 정렬됨 1->2->3
let myObject1 = { 
  2: '알고리즘의 정석',
  3: '컴퓨터 개론',
  1: '자바스크립트 프로그래밍 기초',
};

for (let key in myObject1) {
  console.log(myObject1[key]);
}
console.log(myObject1);

console.log('');


// 소수는 정수가 아닌 일반 숫자형 이므로 정렬되지 않음
// 정수를 먼저 전부 정렬시킨후, 작성된 순으로 정렬됨.
let myObject2 = {
  300: '정수',
  1.2: '소수',
  3: '정수3',
  name: 'codeit',
  1: '정수1',
  birthDay: '2017.5.17',
  2: '정수2',
};

for (let key in myObject2) {
  console.log(key);
}
console.log(myObject2);

console.log('');



// 정수포함 모든 숫자형 프로퍼티들도 실제 사용될때는 문자열로 형 변환되어 사용됨.
// 따라서 1,2,3 이나 '1','2','3'이나 같음
let myObject3 = {
  '300': '정수',
  '1.2': '소수',
  '3': '정수3',
  name: 'codeit',
  '1': '정수1',
  birthDay: '2017.5.17',
  '2': '정수2',
};

for (let key in myObject3) {
  console.log(key);
}
console.log(myObject3);

console.log(myObject3['300']); // 또한 이런 예외적인 파라미터네임은 대괄호 표기로만 접근가능
// console.log(myObject3.300); // 오류 발생!

// * 의도치 않게 정렬될 수 있기 때문에 일반적으로 정수형 프로퍼티는 잘 사용되지 않음