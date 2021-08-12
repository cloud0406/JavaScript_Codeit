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

// 프로퍼티 찾기
console.log(codeit.name);
codeit.name = 'codeit';
console.log(codeit.name);

// 프로퍼티 추가
codeit.ceo = '김정호';
console.log(codeit.ceo);
console.log(codeit);

// 프로퍼티 삭제(delete)
console.log(codeit["worst Course"]);
delete codeit["worst Course"];
console.log(codeit["worst Course"]);
console.log(codeit);

// 'propertyName' in object : object(객체) 안에 propertyName(프로퍼티)가 있는지 확인하고 '불린 값'으로 반환
console.log('name' in codeit);
console.log(codeit.name !== undefined); // 위의 코드와 같은의미지만 더 안전하고 보기 쉽게 위의 코드처럼 'in'을 사용함

console.log('worst Course' in codeit); // 위의 코드에서 delete로 삭제되서 false나옴


if ('name' in codeit) {
  console.log(`name 값은 ${codeit.name}입니다.`);
} else {
  console.log('name 프로퍼티는 존재하지 않습니다.');
}