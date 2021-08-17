// indexOf / lastIndexOf : 배열에서 특정 값 찾는 메소드

// indexOf(item) : item이 배열에 포함되어 있으면 item이 있는 인덱스 리턴
// 포함되어 있지 않으면 -1 리턴, 여러번 포함되어 있으면 처음 발견된 인덱스 리턴
let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
console.log(brands.indexOf('Kakao'));
console.log(brands.indexOf('Daum'));

// lastIndexOf : indexOf와 반대로 맨 뒤 요소부터 탐색
// 나머지는 indexOf와 같음
console.log(brands.lastIndexOf('Kakao')); // 맨 뒤에서부터 탐색하므로 1번 인덱스가 아닌 3번인덱스의 kakao를 찾고 리턴
console.log(brands.lastIndexOf('Daum'));





// includes : 배열에 특정 값이 있는지 확인(위의 indexOf와는 달리 인덱스를 리턴하지 않고 배열에 값이 있는지 여부만 확인)
// '불린 값'으로 리턴, 있을 경우 true, 없을 경우 false
console.log(brands.includes('Kakao'));
console.log(brands.includes('Daum'));




// reverse : 배열의 순서를 뒤집는 메소드
console.log(brands);
brands.reverse();
console.log(brands);