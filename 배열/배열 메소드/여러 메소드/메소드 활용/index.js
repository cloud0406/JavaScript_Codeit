let numbers = [1, 3, 5, 6, 8, 10];

numbers.pop();
numbers.unshift(3);
numbers.shift();

console.log(numbers);




function range(start, count, step) {
  let arr = [];

  for (let i = 0; i < count; i++) {
    arr.push(start + i * step)
  }

  return arr;
}

// 테스트 코드
console.log(range(1, 10, 3));