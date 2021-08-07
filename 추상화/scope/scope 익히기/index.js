let y = 120;

function myFunction1() {
  let y = 20;
  console.log(y); // 로컬변수 -> 글로벌 변수 순으로 확인하므로, 20 출력
}

myFunction1();
console.log(y); // 글로별 변수 120 출력

console.log('');




let k = 100;

function myFunction2() {
  let t = 40;
  console.log(k + t);
}
   
myFunction2();
console.log(k);

console.log('');






function myFunction3() {
  let x = '코드잇';
  x = "을지로";
}

myFunction3();
console.log(x); // 로컬 변수 호출 했으므로 오류 발생

console.log('');

