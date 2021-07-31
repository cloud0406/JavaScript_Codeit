let x = 10;
let y = 20;

function myFunction(a, b) {
  return a + b;
}

//변수 x,y가 아닌 문자열 'x','y'이므로 'xy'가 됨
let myAnswer = myFunction('x', 'y');
//변수 x,y를 더함
let myAnswer2 = myFunction(x,y);

console.log(myAnswer);
console.log(myAnswer2);