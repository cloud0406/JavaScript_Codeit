// 배열도 자바스크립트에서 만들어둔 객체의 한 종류
let dataType = ['number', 'string', 'boolean', 'null', 'undefined', 'object'];

console.log(typeof dataType); // object

console.log('');


// length : 몇개의 데이터 있는지 파악
console.log(dataType.length);
console.log(dataType['length']);
console.log(dataType[dataType.length - 1]); // 배열의 마지막 요소에 접근

console.log('');




// 배열의 요소 추가, 삭제
dataType[6] = 'hello'; // 추가
console.log(dataType[6]);
console.log(dataType.length);

dataType[8] = 'HI'; // 7번 인덱스를 건너뛰고 원소 추가
console.log(dataType[7]); // 7번은 undefined로 생성되어있음
console.log(dataType.length); // 개수는 7번까지 포함된 상태
console.log(dataType);

dataType[8] = '수정'; // 수정
console.log(dataType[8]);
console.log(dataType);

delete dataType[3]; // 값이 비워지지만 공간은 삭제되지 않음
                    // 제대로 삭제하려면 배열의 메소드 활용해야함
console.log(dataType);