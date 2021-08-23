// 참조형은 주소값을 저장하므로 배열을 바꾸면 해당 주소의 변수들은 전부 바뀌게됨
let numbers1 = [1,2,3];
let numbers2 = numbers1;

numbers2.push(4);

console.log(numbers1);
console.log(numbers2);



// 참조형 복사하기(일반형처럼 값을 복사하기) 

//배열 : slice 활용
let numbers3 = [1,2,3];
let numbers4 = numbers3.slice(); // slice 파라미터에 아무변수 없으면 해당값 그대로 리턴

numbers4.push(4);
console.log(numbers3);
console.log(numbers4);

//객체 : Object.assign({}, ) 활용
let course1 = {
  title : '파이썬 프로그래밍 기초',
  language : 'Python'
};

let course2 = Object.assign({}, course1);

course2.title = '알고리즘의 정석';

console.log(course1);
console.log(course2);