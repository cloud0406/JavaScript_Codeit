// 투표 결과 리스트
let votes = [
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이재식', '이재식', '이규하', '이규하', '이재식',
  '이규하', '이규하', '이규하', '이규하', '이재식',
  '이재식', '이규하', '이재식', '이재식', '이재식',
  '이재식', '이재식', '이규하', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이규하', '이재식', '이규하', '이규하',
  '이규하', '이재식', '이재식', '이재식', '이규하',
];


// 첫 번째 답

// 후보별 득표수 객체
let voteCounter = {};
let i = 0;
let j = 0;

// votes 배열을 이용해서 voteCounter 객체를 정리하기
for (let name of votes) {
  if (name === '이재식') {
    i++;
  } else if(name === '이규하'){
    j++;
  }
  
  voteCounter.이재식 = i;
  voteCounter.이규하 = j;
}

// 후보별 득표수 출력
console.log(voteCounter);




// 두 번째 답(코드 간결)

// 후보별 득표수 객체
let voteCounter2 = {};

// votes 배열을 이용해서 voteCounter 객체를 정리하기

for (let name of votes) {
  if (name in voteCounter2) { // 객체에 '이재식' 혹은 '이규하'가 있을 경우
    voteCounter2[name] += 1; // 투표수 하나 증가
  } else { // 객체에 없을 경우
    voteCounter2[name] = 1; // 객체에 투표수 1로 프로퍼티 추가
  }
}

// 후보별 득표수 출력
console.log(voteCounter2);