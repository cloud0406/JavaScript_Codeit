let today = new Date(2112, 8, 24);
let jaeSangStart = new Date(2109, 7, 1);

function workDayCalc(startDate) {
	let timeDiff = today - jaeSangStart;
	console.log(`오늘은 입사한 지 ${timeDiff / 1000 / 60 / 60 / 24 + 1}일째 되는 날 입니다.`);
	
}

workDayCalc(jaeSangStart);