// 이자 계산

function interestCalculator(rate, payment, term){ // 이율, 납부금액, 납부개월
  let interest;
  
  interest = payment * term * ((term + 1) / 2) * (rate / 12)
  console.log(+interest.toFixed()); // toFixed로 소수점 아래의 수를 반올림해주고, +기호로 숫자형으로 변환
}


// 이율이 4.3%일 때 매월 80만원씩 24개월 납입할 경우
interestCalculator(0.043, 800000, 24);

// 이율이 4.3%일 때 매월 60만원씩 24개월 납입할 경우
interestCalculator(0.043, 600000, 24);