function printSquare(x) {
  console.log(x * x); // console.log : 콘솔에 값을 출력해주는 것
}

function getSquare(x) {
  return x * x; // return : 함수 실행후 값을 반환해주는 것
}

printSquare(3);
getSquare(3); // 값이 9로 반환되지만 따로 콘솔에 출력되지는 않음.
console.log(getSquare(3)); // 괄호안의 값이 9로 반환된 뒤 출력됨.
console.log(printSquare(3)); // return문이 없는 함수를 실행하면 함수 호출부분은 undefined를 return받게됨
                            // printSqure로 9가 콘솔에 출력된 후, return값이 없으므로 undefined를 반환 후 출력