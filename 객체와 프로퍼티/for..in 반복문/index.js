// for..in : 객체 내부의 모든 프로퍼티 값을 하나씩 다뤄야 할 때 사용
// in 뒤에 오는 해당 객체의 '프로퍼티 수' 만큼 반복함.
// 프로퍼티는 객체에 추가한 순서대로 수행됨.

let codeit = {
  name: '코드잇', 
  bornYear: 2017, 
  isVeryNice: true,
  'worst Course': null,
  bestCouse: {
    'title-name': '자바스크립트 프로그래밍 기초',
    language: 'JavaScript'
  }
};

for (let key in codeit) { // let : 변수 생성, in : 대상 객체 선언
                          // key값은 해당 객체의 모든 프로퍼티네임이 차례대로 전달됨, 변수 이름 임의로 설정가능
  console.log(key);
  console.log(codeit[key]);
}