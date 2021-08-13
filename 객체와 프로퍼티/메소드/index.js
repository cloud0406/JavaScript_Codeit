// 메소드 (Method) : 객체 안에 프로퍼티로 존재하는 함수들을 객체의 메소드라고 함.
let greetings = {
  sayHello: function(name) { // sayHello가 함수의 이름
    console.log(`Hello ${name}!`);
  },
  sayHi: function() {
    console.log('HI!');
  },
  sayBye: function() {
    console.log('Bye!'); // console이라는 객체에 log라는 메소드
  }
};

greetings.sayHello('Codeit'); // console.log와 모양이 같음, greeting라는 객체에 sayHello라는 메소드
greetings['sayHello']('Codeit'); // 위와 같은 코드 : 대괄호로 프로퍼티에 접근한 후, 소괄호로 메소드 호출


