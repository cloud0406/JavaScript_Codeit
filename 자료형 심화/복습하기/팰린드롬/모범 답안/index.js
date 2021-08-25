// 팰린드롬(palindrome) : '토마토', '기러기' 처럼 거꾸로 읽어도 똑같은 단어

// 팰린드롬 여부 확인
function isPalindrome(word) {
  
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    let left = word[i]; // 맨 처음 단어부터 반복될때마다 다음 단어로 이동
    let right = word[word.length - 1 - i]; // 맨 마지막 단어부터 반복될때마다 이전 단어로 이동
    if (left !== right) { // 왼쪽 단어와 오른쪽 단어 비교하여 틀리면 바로 flase 리턴
      return false;
    }
  }
  return true; // 반복문이 무사히 끝난다면 전부 같은 단어였던 것이므로 '팰린드롬'임
}

// 테스트 코드
console.log(isPalindrome("racecar"));
console.log(isPalindrome("stars"));
console.log(isPalindrome("기러기"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("kayak"));