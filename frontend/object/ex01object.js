// 객체 : 여러 데이터를 하나의 변수에 저장할 수 있는 데이터 타입

let person = {
    name : '이호준',
    age : 30,
    wearGlassess : false,
    intro:function() {
        console.log('오늘도')
    },
    favorite : {
        food : 'chicken',
        drink : 'americano'
    },
    smhrd : ['이람다', '최성우', '김윤호']
}
console.log(person)

person.name = '김민지';
console.log(person);
person.class ='B';
console.log(person);
