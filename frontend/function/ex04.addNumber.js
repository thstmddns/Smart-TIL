let num1=Number(prompt('첫번째 숫자를 입력해주세요'));
let num2=Number(prompt('두번째 숫자를 입력해주세요'));

// 1. 함수 선언문
// function 함수(파라미터) { 실행문 }
function plus(num1, num2) {
    return num1 + num2
}



// 2. 함수표현식
// const 함수 = function(파라미터) {실행문}
const plus2 = function(num1, num2) {
    return num1 + num2
}



// 3. 화살표 함수
// const 함수 = (파라미터) => {}
const plus3 = (num1, num2) => {
    return num1 + num2
}

document.write('함수 선언문 : ' + plus(num1, num2))
document.write('함수 표현식 : ' + plus2(num1, num2))
document.write('함수 함수 : ' + plus3(num1, num2))