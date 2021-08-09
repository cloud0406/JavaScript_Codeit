console.log('코드잇 최고!');
console.log('코드잇 최고!');
console.log('코드잇 최고!');
console.log('코드잇 최고!');
console.log('코드잇 최고!');
console.log('코드잇 최고!');
console.log('코드잇 최고!');
console.log('코드잇 최고!');
console.log('코드잇 최고!');
console.log('코드잇 최고!');

console.log('');




// 초기화 부분은 처음 한번만 실행됨.
// 이후 동작 순서는 초기화부분 -> (조건 부분 -> 동작 부분 -> 추가 동작부분)
// 동작 부분이 false가 될때까지 괄호 안의 동작을 계속 반복

for (let i = 1; i<=10; i++) { // 순서대로 : 초기화부분, 조건부분, 추가 동작부분
  console.log(`${i} 코드잇 최고!`); // 동작 부분
}

console.log('');





// '추가 동작부분'은 반복문 안에 맨밑에 적어도 상관없음 i++
// '초기화 부분'의 변수는 for문의 지역변수 -> for문 밖에서 사용 불가
// '초기화 부분'도 생략가능 : 이때 세미콜론은 생략이 불가능! -> *for문은 반드시 괄호안에 2개의 세미콜론 필요*

let j = 1;
for (; j <= 10;) {
  console.log(`${j} 코드잇 최고!`);
  j++;
}