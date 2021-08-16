let courseRanking = [ // 대괄호 사용
  '자바스크립트 프로그래밍 기초', //배열의 요소 : 순서대로 번호(index)가 매겨짐
  'Git으로 배우는 버전 관리',
  '컴퓨터 개론',
  '파이썬 프로그래밍 기초'
];

// indexing : 0부터 시작
console.log(courseRanking[0]);
console.log(courseRanking[2]);
console.log(courseRanking[2+1]);

console.log('');



let dataType = ['number', 'string', 'boolean', 'null', 'undefined', 'object'];

for(let i = 0; i<6; i++){
  console.log(dataType[i]);
}