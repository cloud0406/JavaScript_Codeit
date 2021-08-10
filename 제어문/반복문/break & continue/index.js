// break : 반복문을 빠져나옴
let i = 1;

while(i<= 10) {
  console.log(i);
  i++;
  if(i === 7){
    break; // 반복문을 빠져나감
  }
}
console.log('');
console.log(i);


console.log('');



for (let i = 1; i <= 10; i++) {
  console.log(i);
  if(i === 7){
    break; // 반복문을 빠져나감
  }
}
console.log('');
console.log(i);

console.log('');




// continue : 동작 부분을 건너뜀

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0){
    continue; // continue를 만나면 동작부분을 멈추고 추가동작부분(증감식)으로 넘어감
  }
  console.log(i);
}


console.log('');


i = 1;

while(i <= 10) {
  if (i % 2 !== 0){
    i++; // while문은 증감식을 미리써준후 continue해줘야 무한루프 발생안됨 : 증감식 없을 경우 i === 2에서 무한 반복
    continue; // while문은 추가동작부분이 없으므로 지금 동작 다시 반복
  }
  console.log(i);
  i++;
}