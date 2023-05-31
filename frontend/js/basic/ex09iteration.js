// let num1 = 0;
// while (num1 < 3) {
//     console.log(num1);
//     ++num1;
// }

// let num2 = 3;
// while (true) {
//     console.log(num2);
//     num2++;
//     if (num2 == 6) {
//         break
//     } 
// }

// function washDish() {
//     document.write('설거지 했습니다.<br>')
// }

// let i = Number(prompt('접시가 몇 장인가요?'))
// while(i>0) {
//     washDish();
//     i--
// }

// do {
//     washDish();
//     i--;
// }while(i>0){

// }

// let num3 = 9;

// while(num3<9){
//     console.log('while문', num3);
// }
// do{
//     console.log('do-while문', num3)
// }while (num3<9)

for (let num4 = 9; num4<12; num4++) {
    console.log(num4)
}
function washDish(dishType) {
    document.write(dishType + '설거지 했습니다.')
}
const dish = ['dish1', 'dish2', 'dish3', 'dish4', 'dish5']
for (let i = 0; i < dish.length; i++) {
    washDish(dish[i])
}

const dishWasher = ['plate', 'bowl', 'cup']
for (let dish of dishWasher) {
    washDish(dish)
}