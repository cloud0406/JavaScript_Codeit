// TB -> GB
function teraToGiga(TB) {
  console.log(TB + 'TB는')
  console.log(TB * 1024 + 'GB 입니다.')
}

// TB -> MB 
function teraToMega(TB) {
  console.log(TB + 'TB는')
  console.log(TB * 1024 * 1024 + 'MB 입니다.')
}


teraToGiga(2);
teraToMega(2);

teraToGiga(3);
teraToMega(3);