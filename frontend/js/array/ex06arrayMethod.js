let nameList = ['이람다', '최성우', '김윤호'];
nameList.push('박병관');
document.write(`마지막 추가 : ${nameList} <br>`);

nameList.pop();
document.write(`마지막 삭제 : ${nameList} <br>`);

nameList.unshift('임용진');
document.write(`첫번째 추가 : ${nameList} <br>`)

nameList.shift();
document.write(`첫번째 삭제 : ${nameList} <br>`)

nameList.splice(1, 0, '박소미');
document.write(`splice추가 : ${nameList} <br>`)

nameList.splice(1, 1);
document.write(`splice삭제 : ${nameList} <br>`)