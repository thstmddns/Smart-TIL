let num = Number(prompt('숫자를 입력해주세요'))
let emoji = (prompt('이모티콘을 입력해주세요'))


const star = function(num, emoji) {
    for(let i=1;i<=num;i++){
        for(let j=1;j<=i;j++) {
            document.write(emoji);
        }
        document.write('<br>');
    }
}
star(num, emoji);