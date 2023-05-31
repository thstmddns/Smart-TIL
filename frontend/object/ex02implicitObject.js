// 내장객체 : 자바스크립트에서 제공하는 객체
// Math, Date, Array


let today = new Date();
console.log(today);


let yesterday = new Date(2023, 4, 9);
console.log(yesterday);




let tYear = today.getFullYear();
let tMonth = today.getMonth() + 1; // 0~11로 반환
let tDate = today.getDate();
let tDay = today.getDay(); // 0~6로 반환
let tHour = today.getHours();
let tMinute = today.getMinutes();
let tSeconds = today.getSeconds();


switch(tDay) {
    case 0 :tday4='일';break;
    case 1 :tday4='월';break;
    case 2 :tday4='화';break;
    case 3 :tday4='수';break;
    case 4 :tday4='목';break;
    case 5 :tday4='금';break;
    case 6 :tday4='토';break;
}

document.write(`${tYear}년 ${tMonth}월 ${tDate}일 ${tDay} 요일<br>
${tHour}시 ${tMinute}분 ${tSeconds}초`)