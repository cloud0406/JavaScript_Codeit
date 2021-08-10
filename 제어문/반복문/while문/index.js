let i =1;


while(i <= 10){
  console.log(`${i} 코드잇 최고!`);
  i++;
}

for (let i=1; i<=10; i++){
  console.log(`${i} 코드잇 최고!`);
}

// 보통 전역변수를 이용하여 반복문 안에서도 사용하고 밖에서도 값을 사용할때 while문을 사용
let j = 30;

while (j % 7 !== 0) {
  j++;
}

console.log(j);