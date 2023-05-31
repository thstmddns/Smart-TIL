let cnt = document.getElementById('spanTag');
function increase() {
    let num = Number(cnt.innerText);
    cnt.innerText = num + 1
}
function decrease() {
    let num = Number(cnt.innerText);
    if (num > 0){
        cnt.innerText = num - 1
    }
}
function reset() {
    cnt.innerText = 0
}