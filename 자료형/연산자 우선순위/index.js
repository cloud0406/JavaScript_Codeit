// 연산자 우선순위 (precedence)
// type 도 우선순위 높지만 가장 높은 괄호부터 실행
typeof (6 * 2 === 11 || 13 - 7 < 7 && !true);

// 괄호 안에서 우선순위 가장 높은 not연산자 우선 실행
typeof (6 * 2 === 11 || 13 - 7 < 7 && false);

// 그 다음 사칙연산 실행
typeof (12 === 11 || 6 < 7 && false);

// 비교 연산 실행
typeof (false || true && false);

// 논리연산 실행 : || 와 &&중 , &&연산이 우선순위 높아서 먼저 실행
typeof (false || false);


console.log(typeof false);