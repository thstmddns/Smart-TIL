let numList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let oddList = []

for(let num of numList) {
    if (num % 2 == 1) {
        oddList.push(num)
    } 
}
alert(`list에 들어있는 홀수는 ${oddList}이며, 총 ${oddList.length}개 입니다.`)