// let pi = '3.141592';
// console.log(typeof(pi))

// // 실수 Float, 정수 Int 인식한다.

// // 문자 -> 실수로 변환
// console.log('문자->실수', parseFloat(pi));

// console.log(typeof(parseInt(pi)));

// console.log('문자->정수', parseInt(pi));

// console.log('문자->숫자', Number(pi));

// let str = '11시 44분';
// console.log(parseInt(str));
// console.log(Number(str));

// let num3 = 100;
// console.log('숫자 -> 문자', String(num3))
// console.log('숫자 -> 문자', num3.toString())

// let num1 = '100';
// let num2 = 200;
// const sum = Number(num1) + num2
// console.log(num1, '과 ', String(num2),'의 합 >> ', parseInt(num1) + num2)

// console.log(`${num1}과 ${num2}의 합 >> ${sum}`)


const q1 = Number(prompt('숫자 쓰셈'));
const q2 = Number(prompt('숫자만 쓰라고'));
const tq = q1 + q2
console.log(`${q1}과 ${q2}의 합은 >> ${tq}`)