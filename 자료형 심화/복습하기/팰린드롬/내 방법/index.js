// 팰린드롬(palindrome) : '토마토', '기러기' 처럼 거꾸로 읽어도 똑같은 단어

// 팰린드롬 여부 확인
function isPalindrome(word) {
  let startIndex = 0;
  let endIndex = word.length - 1;
  let cnt = 0;

  for(let i = 0; i < Math.floor(word.length/2); i++){
    if(word[startIndex] === word[endIndex]){
      cnt++;
      startIndex++;
      endIndex--;
    } else {
      break;
    }
  }

  if(cnt === Math.floor(word.length/2)){
    return true;
  } else {
    return false;
  }
}

// 테스트 코드
console.log(isPalindrome("racecar"));
console.log(isPalindrome("stars"));
console.log(isPalindrome("기러기"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("kayak"));
