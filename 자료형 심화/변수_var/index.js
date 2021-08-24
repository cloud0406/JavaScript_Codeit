// var로 변수 선언, 지금은 거의 사용되지 않음
// 여러 문제점들이 있어 이를 해결하기 위해 let, const를 사용

var myVariable;

myVariable = 'codeit';
console.log(myVariable);




// 문제 1 : var은 중복 선언이 가능함(이전에 선언한 변수가 새로 선언한 변수에게 덮어짐)

// 긴 코드를 작성할때 실수할 가능성 있고 오류 발생할 수 있음

var myVariable = 'codeit';
console.log(myVariable);
var myVariable = 'Codeit!';
console.log(myVariable);





// 문제 2 : Scope의 문제 

// let, const로 선언한 변수는 if, for, function 등등 어떤 키워드와 관계없이 코드 블록, 즉 {} 중괄호로 감싸진 부분을 기준으로 scope를 갖게 됨
// 하지만, var로 선언한 변수는 scope가 function에서만 구분됨(즉, 함수 외의 블록에서 선언된 변수가 전역변수로 쓰여질 수가 있음)
// 함수를 기준으로만 적용되는 스코프 : 함수 스코프, 코드 블록을 기준으로 적용되는 스코프 : 블록 스코프
// var 변수는 지역변수의 구분이 오직 함수에만 있음, let, const는 {}블록을 기준으로 지역변수의 구분이 있음

for(var x = 3; x < 5; x++){ // 변수를 let, const로 바꿀 경우 밑의 console에서 오류 발생

}

{
  var y = 4; // 변수를 let, const로 바꿀 경우 밑의 console에서 오류 발생
}

console.log(x);
console.log(y);




// 문제 3 : 끌어올림(Hoisting) 문제 : '호이스팅'이라 부름

// var변수는 함수 스코프를 기준으로 선언되기 때문에 변수 선언 이전에 접근이 가능(변수 선언이 끌려 올려가서 순서가 바뀐것처럼 동작)
// 이러한 '호이스팅'은 선언과 동시에 값을 할당해도 선언문만 올려지기 때문에 값은 그대로 남아있음 
console.log(variable);
var variable = 1;
console.log(variable);

// var 변수가 아닌 함수도 이러한 호이스팅이 적용됨
// 단 이러한 방식은 코드의 흐름에 부정적이기 때문에 되도록 함수를 윗부분에 선언하도록 해야함
sayHi();

function sayHi() {
  console.log('hi');
}