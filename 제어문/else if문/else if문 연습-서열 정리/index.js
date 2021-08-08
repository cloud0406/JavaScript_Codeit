// 나의 나이와, 나의 성별을 저장하는 변수
let myAge = 26;
let myGender = 'male';

// 호칭을 담은 변수
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 
function whatShouldICallYou(yourAge, yourGender) {
  if(yourAge == myAge) {
    return callFriend;
  } else if (yourAge < myAge) {
      if (yourGender == myGender) {
        return callYoungerBrother;
      }
      else {
        return callYoungerSister;
      }
  } else {
      if (yourGender == myGender) {
        return callOlderBrother;
      }
      else {
        return callOlderSister;
      }
    }
}

let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);