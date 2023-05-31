function 소개(){
    document.write(`SW반에서 요정을 맡은 임용진입니다.`)
}
소개();

//매개변수
function 함수(파라미터) {
    document.write(`sw반에서 비주얼을 담당하고 있는 ${파라미터}입니다.`);
}

함수('장호찬')

function 함수3(파라미터) {
    return `sw반에서 귀여움을 맡은 ${파라미터}입니다.`
}
함수3('박석민');
document.write(함수3('박석민'))

var 소개 = () => {
    document.write(`SW반에서 요정을 맡은 임용진입니다.`)
}