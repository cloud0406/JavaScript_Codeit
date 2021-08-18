let twoDimensional = [[1,2], [3,4]];
console.log(twoDimensional[0][1]); // 0번째 인덱스의 배열에 첫 번째 요소

console.log('');


// 두팀으로 나누기 
// 영준, 태순, 재훈, 윤형, 규식
// 캡틴, 우재, 지웅, 동욱, 소원
let groups = [
  ['영준', '캡틴'], 
  ['태순', '우재'],
  ['재훈', '지웅'],
  ['윤형', '동욱'],
  ['규식', '소원'],
];


// 멤버들이 들어갈 팀(비어있는 상태)
let teams = [
  [],
  [],
];

for(let i = 0; i < groups.length; i++) { // 5번 반복
  for(let j = 0; j < groups[i].length; j++) { // 2번 반복
    teams[j][i] = groups[i][j];
  }
}

console.log(teams[0]);
console.log(teams[1]);

console.log('');




// splice 활용해서 풀기
let teams2 = [
	[],
	[],
];

// 원소가 많을 경우 일일이 타이핑하기 힘들수 있음
teams2[0].splice(0,0,'영준','태순','재훈','윤형','규식'); 
teams2[1].splice(0,0,'캡틴','우재','지웅','동욱','소원');

// 테스트 코드
console.log(teams2[0]);
console.log(teams2[1]);