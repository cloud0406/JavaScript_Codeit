let temperature = 105;

// 가독성이 별로임
if (temperature <= 0 ){
  console.log('물이 업니다.');
} else {
  if (temperature < 100){
    console.log('물이 얼지도 끓지도 않습니다.');
  } else {
    console.log('물이 끓습니다.');
  }
}


if (temperature <= 0 ){
  console.log('물이 업니다.');
} else if (temperature < 100){
  console.log('물이 얼지도 끓지도 않습니다.');
} else {
  console.log('물이 끓습니다.');
}
