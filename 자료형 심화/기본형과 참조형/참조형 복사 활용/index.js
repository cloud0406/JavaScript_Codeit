let espresso = ['espresso'];

let americano = espresso.slice(); // 아메리카노 : 에스프레소 + 물
americano.push('water');

let caffeLatte = espresso.slice(); // 카페라떼 : 에스프레소 + 우유
caffeLatte.push('milk');

let caffeMocha = caffeLatte.slice(); // 카페모카 : 에스프레소 + 우유 + 초코시럽
caffeMocha.push('chocolateSyrup');


let vanillaLatte = caffeLatte.slice(); // 바닐라라떼 : 에스프레소 + 우유 + 바닐라시럽
vanillaLatte.push('vanillaSyrup');


// 테스트 코드
console.log(espresso);
console.log(americano);
console.log(caffeLatte);
console.log(caffeMocha);
console.log(vanillaLatte);