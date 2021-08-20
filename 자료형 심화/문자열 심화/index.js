let myString = '   Hi Codeit   ';

// 문자열 길이
console.log(myString.length); 

console.log('');



// 요소 접근
console.log(myString[3]); // 대괄호 표기법
console.log(myString.charAt(3)); // charAt 메소드

console.log('');



// 요소 탐색 : 해당 요소가 있는 인덱스 리턴
console.log(myString.indexOf('i')); // 앞에서부터 탐색
console.log(myString.lastIndexOf('i')); // 뒤에서부터 탐색
console.log(myString.indexOf('a')); // 해당 요소가 없을 경우 -1 리턴

console.log('');



// 대소문자 변환
console.log(myString.toUpperCase()); // 모든 문자 대문자로 변경
console.log(myString.toLowerCase()); // 모든 문자 소문자로 변경

console.log('');



// 양 끝 공백 제거
console.log(myString.trim()); // 공백 제거 후 문자열 리턴

console.log('');



// 부분 문자열 접근 : slice(start, end) : start부터 end 바로 전 인덱스까지 문자 리턴 / splice와 다름
console.log(myString.slice(3,5)); // 3 ~ 4 인덱스 리턴
console.log(myString.slice(3)); // end 요소를 적지 않을 경우 start부터 문자열 끝까지 리턴
console.log(myString.slice()); // 아무것도 적지 않을 경우 문자열 전부 리턴