// 배열의 양 끝 값을 처리하는 메소드 : 양 끝 값을 처리하는데 있어서 splice보다 활용성이 좋음
let dataType = ['number', 'string', 'boolean', 'null', 'undefined', 'object'];
console.log(dataType);


// 배열의 첫 요소를 삭제 : shift()
dataType.shift(); 
console.log(dataType);

// 배열의 마지막 요소를 삭제 : pop()
dataType.pop(); 
console.log(dataType);

// 배열의 첫 요소로 값 추가 : unshift(value)
dataType.unshift('NiceCodeit');
console.log(dataType);

// 배열의 마지막 요소로 값 추가 : push(value)
dataType.push('HiCodeit');
console.log(dataType);
