// const로 값 변경 : error
let x = 1;

x = 4;

const y = x;

// y = 3;  주석처리 안할경우 에러 발생 : 상수를 변경하려 하기 때문에
x = 2;

console.log(x);
console.log(y);




// 원래 const 키워드로 변수를 선언하면 값을 재할당 할 수 없지만, 
// 할당된 값이 객체, 배열일 경우(참조형) 메소드를 통해 값을 변경할 수 있음(선언된 변수자체는 값이 아닌 주소를 나타내기 때문)
let team1 = ['Drum', 'Bass', 'Saxophone'];
const team2 = team1;  // team 1, 2 둘다 주소값으로 같은 배열을 가리킴

team1.splice(2, 1, 'Trumpet'); // 배열 : ['Drum', 'Bass', 'Trumpet'];
team2.splice(2, 1, 'Piano'); // 배열 : ['Drum', 'Bass', 'Piano']; / const로도 값은 변경 가능(주소를 변경하는게 아님)

console.log(team1); // team 1, 2 둘다 같은 배열 가리킴
console.log(team2);