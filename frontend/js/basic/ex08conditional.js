let cafeMenu = prompt('어떤 메뉴를 선택하시겠습니까?')

// cafeMenu == '아메리카노' 
// ? document.write('주문하신 메뉴 나왔습니다.') 
// : document.write(`${cafeMenu}는 대기시간 5분입니다.`)

// if (cafeMenu == '아메리카노') {
//     document.write('주문하신 메뉴 나왔습니다.') 
// }
// else if (cafeMenu == '딸기라떼') {
//     document.write('딸기라떼는 시즌 아웃입니다.')
// }
// else {
//     document.write(`${cafeMenu}는 대기시간 5분입니다.`)
// }

cafeMenu == '딸기라떼' && document.write('겨울 한정 메뉴입니다.')

switch(cafeMenu) {
    case '아메리카노':
        document.write('주문하신 메뉴 나왔습니다.')
    case '카페라떼':
        document.write('카페라떼는 대기시간 3분입니다.')
    case '카라멜마끼아또':
    document.write('주문하신 메뉴 나왔습니다.')
    break    } 