
const b = Number(document.querySelector('.b'));
const btn_f = document.querySelector('.for');
const btn_w = document.querySelector('.while');
const gugudan = document.querySelector('#gugudan');
btn_f.addEventListener('click', () => {
    gugudan.innerText = 'for문을 활용한 구구단'
    let j = 1
    for(j=1;j<=9;j++){
        
        gugudan.innerHTML += `${b} x ${j} = ${b*j}<br>`
    }
    }
)
    
btn_w.addEventListener('click', () => {
    gugudan.innerText = 'while문을 활용한 구구단<br>'
    let j = 1
    while(j<=9){
        gugudan.innerHTML += `<br>${b} x ${j} = ${b*j}`
        j += 1
    }
    }
)
