// splice : 배열의 요소를 추가, 삭제, 수정할때 사용
let dataType = ['number', 'string', 'boolean', 'null', 'undefined', 'object'];
console.log(dataType);

// splice : 전달된 인덱스 이후의 모든 요소를 배열에서 삭제
dataType.splice(4); // undefined부터 뒤의 요소 전부 삭제됨
console.log(dataType);


// splice(startIndex, deleteCount) : startIndex부터 deleteCount수만큼 삭제
dataType.splice(1,1); // 1번 인덱스인 string 삭제
console.log(dataType);


// splice(startIndex, deleteCount, item) : 삭제한 부분에 item을 요소로 추가
dataType.splice(1,1,'NiceCodeit', 'HiCodeit'); // 1번 인덱스에서부터 하나 삭제한 후 그 자리에 'NiceCodeit', 'HiCodeit'를 요소로 넣음
console.log(dataType);


// splice로 삭제 없이 추가하기
dataType.splice(1,0,'insert', 'Hello'); // 삭제할 개수를 0으로 설정하면 원하는 위치에 요소 추가 가능
console.log(dataType);

// splice로 원하는 곳 요소 수정도 가능
dataType.splice(1,1,'수정'); // 1번 인덱스 하나만 수정(하나 삭제후 추가)
console.log(dataType);

dataType.splice(1,2,'one', 'two'); // 1번~2번 인덱스 수정
console.log(dataType);