let nameList = ['손승운', '김다솔', '신예솔', '이명범', '이동민', '김하연', '박진경', '장우영', '박자연', '함희주', '한재혁', '우영택', '이주영']
for (let i=1; nameList.length; i++){
    document.write(nameList[i]);
}

let foodList = ['치킨', '피자', '팬케이크', '아이스크림']
for (let i of foodList) {
    document.write(i);
}

let colorList = new Array('빨강', '초록', '보라', '노랑');
colorList.forEach(element, index => {
    document.write(index, element);
})