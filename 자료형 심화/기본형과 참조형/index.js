// 기본형(Primitive Type) : number, string, null, boolean, undefined / 변수 = 값
// 참조형(Reference Type) : 객체     / 변수 = 주소값

let x = {name : 'Codeit'}; // 변수 x에는 '객체로 가는 길'이 할당됨
let y = x; // y도 X와 같이 '객체로 가는 길'이 할당

console.log(x);
console.log(y);

y.birth = 2017; // y에 프로퍼티를 추가함 -> 객체에 프로퍼티 추가한것
 
console.log(x); // x는 프로퍼티로 가는 길이므로 x에도 추가한 프로퍼티가 출력됨
console.log(y);



let t = [1, 2, 3];
let k = t;

console.log(t);
console.log(k);

k[2] = 4; // 마찬가지로 객체에 추가한 것이므로 다른 경로로 이동해도 값이 변경되어 나옴

console.log(t);
console.log(k);
