const output = document.querySelector('.output');
const drink = document.querySelectorAll('.item');
let price = 0;

for (let i=0; i<drink.length;i++){
    drink[i].addEventListener('click', (event) => {
        const text = event.target.innerText;
        switch(text){
            case '솔의눈':
                price = 700;
                break;
            case '커피':
                price = 500;
                break;
            case '파워에이드':
                price = 800;
                break;
            case '오렌지':
                price = 1000;
                break;
            case '보리차':
                price = 600;
                break;
            case '밀키스':
                price = 900;
                break;
        }
        output.innerHTML=`${text}의 가격은 ${price}입니다.`
    })
    let coin = document.querySelector('#coin')
    let coinBtn = document.querySelector('#coinBtn')
    let result = document.querySelector('.result')

    coinBtn.addEventListener('click', () => {
        let value = parseInt(coin.value);

        if(value == undefined || value == NaN) {
            result.innerText='금액을 입력해 주세요.'
            return;
        }
        if(value>10000) {
            result.innerText='금액이 너무 큽니다!'
            return;
        }
        if((value-price)<0) {
            result.innerText='금액이 모자랍니다'
            return;
        }
        if(10000>value>0) {
            result.innerText=`거스름돈 ${value-price}원 입니다`
            return;
        }
    })
}