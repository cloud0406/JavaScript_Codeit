let i = 1;

while (i <= 20) {
  if (i === 5) {
    break;
  }
  console.log(i);
  i++;
}

console.log('');

for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
  i++;
}

