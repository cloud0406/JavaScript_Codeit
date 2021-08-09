let myChoice = 2;

// 특정한 값에 일치하는 조건을 만들 때 switch문 활용
// 스위치문은 값들을 비교할 때 자료형을 엄격히 구분 -> '==='
switch(myChoice) {
  case 1:
    console.log('토끼를 선택한 당신, ...');
    break;
  case 2:
    console.log('고양이를 선택한 당신, ...');
    break;
  case 3:
    console.log('코알라를 선택한 당신, ...');
    break;
  case 4:
    console.log('강아지를 선택한 당신, ...');
    break;
  default:
    console.log('1에서 4사이의 숫자를 선택해 주세요.'); 
}

// 넓은 범위를 만족하는 조건식을 만들때 if문 활용
if (myChoice === 1) {
  console.log('토끼를 선택한 당신, ...');
} else if (myChoice === 2) {
  console.log('고양이를 선택한 당신, ...');
} else if (myChoice === 3) {
  console.log('코알라를 선택한 당신, ...');
} else if (myChoice === 4) {
  console.log('강아지를 선택한 당신, ...');
} else {
  console.log('1에서 4사이의 숫자를 선택해 주세요.');
}