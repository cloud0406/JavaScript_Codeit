//일반 문자열
console.log('코드잇');
console.log("I'm Iron man");

//  '\'사용하면 바로 뒤의 '혹은"를 문자열이 아닌 일반 문자로 읽음
//  대신 가독성이 떨어짐
console.log("He said \"I'm Iron man\"");
console.log('He said "I\'m Iron man"');
console.log("He said \"I\'m Iron man\"");

// 백틱 : '`' 사용 -> 백틱 안의 내용은 모두 문자로 읽음, 가독성이 더 좋음
console.log(`He said "I'm Iron man"`);

// 문자열 덧셈 : 뒤에 이어서 붙임
console.log('Hello' + 'Codeit');
console.log('3' + '5');