// get
const now = new Date();
console.log(now);
console.log(now.getFullYear()); // 년도
console.log(now.getMonth()+1); // 월
console.log(now.getDate()); // 일
console.log(now.getDay()); // 요일
console.log(now.getHours()); // 시
console.log(now.getMinutes()); // 분
console.log(now.getSeconds()); // 초
console.log(now.getMilliseconds()); // 1초 = 1000ms

// set
const date = new Date();
date.setFullYear(2015);
console.log(date.getFullYear()); // 2015