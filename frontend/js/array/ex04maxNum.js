let numList = [23, 54, 78, 13, 44];
let m = 0
for (num of numList) {
    if (num > m) {
        m = num;
    }
}
alert(`최댓값 >> ${m}`)