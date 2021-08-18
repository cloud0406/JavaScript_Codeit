// for...of : 배열의 길이만큼 반복, 배열의 요소가 할당됨
// for...in(객체)은 '객체의 프로퍼티 네임을 할당' <-> for...of(배열)는 '배열의 요소를 할당' 
// 배열도 객체의 한 종류

let influencer = ['suwonlog', 'small.tiger', 'Minam.ludens', 'cu_convenience24'];

for (let i = 0; i < influencer.length; i++) {
  console.log(influencer[i]);
}

console.log('');

for (let element of influencer) { // 배열의 요소가 선언해준 element에 할당됨
  console.log(element);
}

console.log('');

// for...in은 배열에서 사용할 경우 배열의 메소드나 프로퍼티가 할당될 수 있으므로
// 배열에서는 되도록 for...of 사용함
for (let index in influencer) { // index에는 influencer라는 객체의 프로퍼티 네임을 할당
  console.log(influencer[index]);
}