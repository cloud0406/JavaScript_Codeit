function printTriangle(height) {
	for(let i = 1; i<=height; i++){
    let star = '';
	  for(let j=1; j<=i; j++){
	    star += '*';
	  }
    console.log(star);
	}
}

console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);




function printTriangle2(height) {
  let message = '';
  for (let i = 0; i < height; i++) {
    message += '*';
    console.log(message);
  }
}

console.log('높이: 2');
printTriangle2(2);

console.log('높이: 4');
printTriangle2(4);

console.log('높이: 6');
printTriangle2(6);