const N = 180;

let i = 1;
let cnt = 0;

while(i<=N) {
  if(N % i === 0){
    console.log(i);
    cnt++;
  }
  i++;
}

console.log(`180의 약수는 총 ${cnt}개입니다.`);