let myVoca = {
  addVoca: function(name, value){
    myVoca[name] = value; // 파라미터로 다른 변수에 담긴 값을 가져올 때는 대괄호 표기법을 사용
  },                      // 점 표기법으로 name값에 접근을 하게 되면, myVoca에 문자 그대로 name라는 프로퍼티 이름을 가진 프로퍼티 값에 접근하는 것과 같은 의미
  deleteVoca: function(name){
    delete myVoca[name];
  },
  printVoca: function(name){
    console.log(`"${name}"의 뜻은 "${myVoca[name]}"입니다.`)
  }
};

// addVoca메소드 
myVoca.addVoca('parameter', '매개 변수');
myVoca.addVoca('element', '요소');
myVoca.addVoca('property', '속성');
console.log(myVoca);

// deleteVoca메소드 
myVoca.deleteVoca('parameter');
myVoca.deleteVoca('element');
console.log(myVoca);

// printVoca메소드 
myVoca.printVoca('property');