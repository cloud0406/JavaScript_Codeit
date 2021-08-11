// 객체 :  key와 value를 콜론(:)으로 구분하는 프로퍼티들의 집합

// property name 주의사항(따옴표로 안감싸 줄때)
// ** 기본적으로 property name은 따옴표로 안감싸줘도 '문자열'로 처리됨 **
// 1. 첫 번째 글자는 반드시 문자, 밑줄(_), 달러기호($)로 시작
// 2. 띄어쓰기 금지
// 3. 하이픈(-) 금지
// 따옴표로 감싸서 사용할 경우 위의 규칙을 무시할 수 있음

// property value는 모든 자료형 사용 가능: 문자열, 숫자형, 불린, 객체등..

let codeit = {
  name: '코드잇', // name: key 혹은 property name, '코드잇': value 혹은 property value , 이 한줄을 property라 함
  bornYear: 2017, // 여러개의 프로퍼티들 쉼표로 구분
  isVeryNice: true,
  'worst Course': null,
  bestCouse: {
    'title-name': '자바스크립트 프로그래밍 기초',
    language: 'JavaScript'
  }
};

console.log(codeit);


// 점 표기법 (objectName.propertyName)
// 보통 많이 사용, 따옴표로 감싸서 사용하는 경우 사용이 불가
// ex) 'born year'일 경우 console.bonr year로 코드해석이 안됨
console.log(codeit.bornYear);

// 대괄호 표기법 (objectName['PropertyName'])
// 표기가 '점 표기법' 보다 불편하지만 사용이 쉬움
console.log(codeit['worst Course']);
console.log(codeit['worst' +  ' Course']);

let propertyName = 'name';
console.log(codeit[propertyName]);
console.log(codeit.propertyName); // 이렇게는 사용 불가

// 객체안의 객체에 접근
console.log(codeit.bestCouse.language);
console.log(codeit.bestCouse['title-name']);

console.log(codeit.bestCouse['teacher']); // 존재하지 않는 프로퍼티에 접근할 경우 undefined