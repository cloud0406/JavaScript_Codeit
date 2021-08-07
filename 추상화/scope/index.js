// Scope : 범위, 영역

let y = 5; // 글로벌 변수, 전역 변수 (Global Variable)

function myFunction(){ // 블록문 (Block Statement)
  let x = 3; // 로컬 변수, 지역 변수 (Local Variable) : 블록 내에서만 유효함
  console.log(x); 
  
  let y = 10;
  console.log(y); // 로컬 변수를 먼저 확인 후, 없으면 글로벌 변수를 확인함.
}

myFunction();
console.log(y);
console.log(x); // x가 유효하지 않은 곳에서 사용했으므로 오류발생