// 일반적인 파라미터
function sayHello(name) {
  console.log(`안녕하세요 ${name}님!`);
}

sayHello('코드잇');
sayHello('좋아요');
sayHello(); // 함수에 파라미터를 전달해주지 않으면 undefined가 출력됨

let x;
console.log(x);
console.log(sayHello('코드잇최고'));


console.log('');


// 옵셔널 파라미터 : 함수를 호출할 때 파라미터를 전달해도 되고 , 생략해도 되는 파라미터
function introduce(name, age, nationality = '한국'){ // 기본값을 선언해줌
  console.log(`제 이름은 ${name}입니다.`);
  console.log(`나이는 ${age}살 이고,`);
  console.log(`국적은 ${nationality}입니다.`);
}
introduce('코드잇', 4, '미국'); // 값을 모두 전달한 경우, 전달한 값으로 대체
console.log('');
introduce('코드잇', 4); // 값을 생략한 경우, 기본 설정 값으로 출력


console.log('');

// 옵셔널 파라미터가 중간에 있을 경우, 생략을 할 때 순서가 밀려서 원하는대로 안됨
// 따라서 옵셔널 파라미터는 위의 경우와 같이 맨 마지막에 적어야함.
function introduce2(name, nationality = '한국', age){ 
  console.log(`제 이름은 ${name}입니다.`);
  console.log(`나이는 ${age}살 이고,`);
  console.log(`국적은 ${nationality}입니다.`);
}
introduce2('코드잇', '미국', 4); // 값을 모두 전달한 경우
console.log('');
introduce2('코드잇', 4); // 값을 생략한 경우, 순서에 따라 옵셔널 파라미터 자리에 age값이 들어감

