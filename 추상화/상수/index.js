// 상수 (constant) : 변하지 않고 일정한 값
              // 일반 변수와 비교하기 위해 상수는 모든 글자를 대문자,
              // 두 단어가 합쳐질 경우 _로 이어서 사용, ex) MY_NUMBER

const PI = 3.14; // 원주율 : 값이 바뀌지 않고 일정함 -> 상수로 표현

let radius = 0; // 변수의 들어갈 자료형이 정해지지 않았을 경우 null,
                 // 자료형이 정해져있음을 표현할 경우 문자열이면 빈 문자('').
                 // 숫자형일 경우 0을 사용. (보통 이런식으로 사용)

function calculateArea() {
  return PI * radius * radius;
}

function printArea() {
  return `반지름이 ${radius}일 때, 원의 넓이는 ${calculateArea()}`;
}

radius = 4;
console.log(printArea());

radius = 7;
console.log(printArea());

radius = 8;
console.log(printArea());


PI = 4; // 상수는 따로 변경이 불가하며, 변경하려 할 경우 오류 출력
        // 변경이 안되기 때문에 값을 안주고 선언만 할 경우도 오류
        // ex) const PI; -> 오류 출력