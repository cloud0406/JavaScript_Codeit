function square(x) {
  return x * x; // 결과값을 반환하는 역할
}

console.log(square(3));




function square(x) {
  console.log('return 전');
  return x * x; // return문을 통해 값을 반환하면 함수는 종료됨.
  console.log('return 후'); // 함수가 종료되었기 때문에 실행되지 않음 : Dead Code라 불리며 작성하지 않는 것이 좋음
}

console.log('함수 호출 전');
console.log(square(3));
console.log('함수 호출 후');
