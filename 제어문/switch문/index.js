let myChoice = 2;

switch(myChoice) {
  case 1:
    console.log('토끼를 선택');
    break;
  case 2:
    console.log('고양이를 선택');
    break;
  case 3:
    console.log('코알라를 선택');
    break;
  case 4:
    console.log('강아지를 선택');
    break;
  default:
    console.log('1에서 4사이의 숫자를 선택해주세요.');
}

console.log('');

// 스위치문은 조건값과 일치하는 값을 실행한 후, break를 만날때까지 아래 모든 동작이 실행됨.
switch(myChoice) {
  case 1:
    console.log('토끼를 선택');
    
  case 2:
    console.log('고양이를 선택');
    
  case 3:
    console.log('코알라를 선택');
    
  case 4:
    console.log('강아지를 선택');
    
  default:
    console.log('1에서 4사이의 숫자를 선택해주세요.');
}