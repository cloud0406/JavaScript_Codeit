let sum = 0.1 + 0.2;
console.log(sum); // 자바스크립트에서 숫자를 처리하는 과정(2진법으로)에서 숫자 변환시 무한소수가 되어
                  // 처리할 수 있는 범위내에서 반올림하여 계산을 실행함

 // 아래와 같은 방법으로 이러한 문제를 해결
console.log(Number(sum.toFixed(1)));
console.log(Math.round(sum * 10) / 10);