// set으로 시작하는 메소드를 활용하면 Date객체의 정보를 수정 가능
let myDate = new Date(2017, 4, 18, 19, 11, 16);

myDate.setFullYear(2002);
myDate.setMonth(7);
myDate.setDate(20);

console.log(myDate);

console.log('');




// 간편하게 시간 정보 나타내기
let myDate2 = new Date();

console.log(myDate2.toLocaleDateString()); // myDate가 가진 날짜에 대한 정보 (년. 월. 일)
console.log(myDate2.toLocaleTimeString()); // myDate가 가진 시간에 대한 정보 (시:분:초)
console.log(myDate2.toLocaleString()); // myDate가 가진 날짜와 시간에 대한 정보 (년. 월. 일 시:분:초)

console.log('');



// Date객체는 범위를 벗어나는 값을 설정하려하면 자동으로 날짜를 수정
let myDate3 = new Date(1988, 0, 33); // 1988년 1월 33일은 없음
console.log(myDate3); // 2월 1일로 자동으로 수정됨

console.log('');



// Date.now() 메소드는 이 메소드가 호출된 시점의 타임스탬프를 반환 
// 새로운 객체를 만들지 않고 바로 현시점의 날짜를 알 수 있음
// 단순히 코드를 한 줄 줄일뿐만 아니라 실행될때 메모리의 부담을 줄여줄 수 있으며 가독성, 성능에도 유리
let myDate4 = new Date();

console.log(Date.now());
console.log(myDate4.getTime());
console.log(Date.now() === myDate4.getTime()); // true

console.log('');



// Date 객체 형변환
let myDate5 = new Date(2017, 4, 18);

console.log(typeof myDate5); // object
console.log(String(myDate5)); // Thu May 18 2017 00:00:00 GMT+0900 (Korean Standard Time)
console.log(Number(myDate5)); // 1495033200000 : getTime() 메소드와 같음
console.log(myDate5.getTime() === Number(myDate5)); // true
console.log(Boolean(myDate5)); // true

console.log('');



// Date객체끼리 사칙연산도 가능
let myDate6 = new Date(2017, 4, 18);
let myDate7 = new Date(2017, 4, 19);

let timeDiff = myDate7 - myDate6;
console.log(timeDiff); // 86400000 (ms)
console.log(timeDiff / 1000); // 86400 (sec)
console.log(timeDiff / 1000 / 60); // 1440 (min)
console.log(timeDiff / 1000 / 60 / 60); // 24 (hour)
console.log(timeDiff / 1000 / 60 / 60 / 24); // 1 (date)

console.log('');



// 다양한 날짜 표현들(잘 사용안되고 위에서 썼던 표현을 권장)
let date1 = new Date('12/15/1999 05:25:30');
let date2 = new Date('December 15, 1999 05:25:30');
let date3 = new Date('Dec 15 1999 05:25:30');