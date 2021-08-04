// 의미는 null, undefined 둘 다 값이 없다는 표현
// null : 의도적으로 값이 없다고 표현할 때 사용 , undefined : 코딩하며 값이 없다는 것을 확인하는 값

// undefined : 값이 주어지지 않은 변수등에서 나타남, 코딩을 통해 확인됨
let codeit;
console.log(codeit);

// null : 사용자가 의도적으로 값을 없음을 표현한 것
codeit = null;
console.log(codeit);

// 동등비교에서는 비슷한 의미이기 때문에 true, 일치비교는 다른 자료형이기 때문에 false
console.log(null == undefined);
console.log(null === undefined);




let cup; // 비어있는 컵
console.log(cup); // undefined
cup = '물'; // 물을 채워 줌
console.log(cup); 
cup = null; // 물을 마심(의도적으로 비움)
console.log(cup); // null