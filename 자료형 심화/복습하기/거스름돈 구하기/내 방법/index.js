function calculateChange(payment, cost) {
  let price_50000 = 0;
  let price_10000 = 0;
  let price_5000 = 0;
  let price_1000 = 0;
  
  let charge = payment - cost; //거스름돈 총액
  
  while(charge !== 0){
    if (charge >= 50000){
      charge -= 50000;
      price_50000++;
    } else if(charge >= 10000){
      charge -= 10000;
      price_10000++;
    } else if(charge >= 5000){
      charge -= 5000;
      price_5000++;
    } else{
      charge -= 1000;
      price_1000++;
    }
  }

  console.log(`50000원 지폐: ${price_50000}장`);
  console.log(`10000원 지폐: ${price_10000}장`);
  console.log(`5000원 지폐: ${price_5000}장`);
  console.log(`1000원 지폐: ${price_1000}장`);

}

// 테스트 코드
calculateChange(100000, 33000);
console.log('');
calculateChange(500000, 378000);