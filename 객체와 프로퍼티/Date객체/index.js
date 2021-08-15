// 내장객체

let myDate = new Date();
console.log(myDate); //현재 시각

let myDate2 = new Date(1000); // 괄호안에 '숫자ms' 만큼 증가한 값 / 1000ms = 1초
console.log(myDate2); // 1970년 1월 1일 00:00:00 UTC 기준 + 1000ms

// new Date('YYYY-MM-DD')
let myDate3 = new Date('2017-05-18');
console.log(myDate3);

// new Date('YYYY-MM-DDTHH:mm:ss')
let myDate4 = new Date('2017-05-18T19:11:16');
console.log(myDate4);

// new Date(YYYY, MM, DD, hh, mm, ss, ms) : 연도와 월(YYYY, MM)까지는 필수, 다음은 필요에 따라
//         (year, month, date, hours, minutes, seconds, ms)
// month는 0부터 시작, 즉 1월은 0으로 표기
let myDate5 = new Date(2017, 4, 18, 19, 11, 16);
console.log(myDate5);




// getTime() 메소드
// 1970년 1월 1일 00:00:00 UTC로부터 몇 ms초 지났는지? : 타임스탬프(time stamp)
let myDate6 = new Date(2017, 4, 18, 19, 11, 16);
console.log(myDate6.getTime());


// getTime()활용
// 해당날짜와 오늘이 얼마나 차이나는지 확인
let myDate7 = new Date(2017, 4, 18, 19, 11, 16);
let today = new Date();

let timeDiff = myDate7.getTime() - today.getTime();
console.log(timeDiff + '밀리초');
console.log(timeDiff / 1000 + '초');
console.log(timeDiff / 1000 / 60 + '분');
console.log(timeDiff / 1000 / 60 / 60 + '시간');

// 이밖에도 다양한 함수들
console.log(myDate7.getFullYear()); //년
console.log(myDate7.getMonth()); //월
console.log(myDate7.getDate()); // 일자(몇일)
console.log(myDate7.getDay()); // 요일 : 일요일부터 0 ~ 6 으로 표현됨
console.log(myDate7.getHours()); // 시간
console.log(myDate7.getMinutes()); // 분
console.log(myDate7.getSeconds()); // 초
console.log(myDate7.getMilliseconds()); // ms


