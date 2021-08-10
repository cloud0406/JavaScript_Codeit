let first = 1;
let second = 1;
let tmp = 0;

console.log(first);
console.log(second);

for(let i=2; i<10; i++){
  tmp = second;
  second = first + second;
  first = tmp;
  
  console.log(second);
}

console.log('');




let current = 1;
let previous = 0;

for (let i = 1; i <= 10; i++) {
  console.log(current);
  let temp = previous;  // previous를 임시 보관소 temp에 저장
  previous = current;
  current = current + temp;  // temp에는 기존 previous 값이 저장돼 있음
}

console.log('');



current = 1;
previous = 0;
let i = 1;

while (i <= 10) {
  console.log(current);
  let temp = previous;  // previous를 임시 보관소 temp에 저장
  previous = current;
  current = current + temp;  // temp에는 기존 previous 값이 저장돼 있음
  i++;
}