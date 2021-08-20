// 문자열에서 for..of 사용
let myString = 'Codeit';

for(let str of myString) {
  console.log(str);
}

console.log('');


// 비슷하지만 형태는 다름
let myArray = ['C', 'o', 'd', 'e', 'i', 't'];

console.log(typeof myString);
console.log(typeof myArray);

console.log(myString === myArray);
console.log(myString == myArray);

console.log('');




// ** 배열은 바뀔수있는(mutable) 자료형, 문자열은 바뀔 수 없는(immutable) 자료형 **

// 배열은 요소에 접근하여 요소를 수정 가능
myArray[0] = 'B';
console.log(myArray);

// 문자열은 일부를 바꿀 수는 없고, 새로운 문자열을 지정해야만 함
myString[0] = 'B';
console.log(myString);

myString = 'HI'
console.log(myString);