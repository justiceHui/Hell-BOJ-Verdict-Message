let arr = document.getElementsByClassName("result");
const RED = "<span class=\"result-wa \">";
const BLUE = "<span class=\"result-ce \">";
const GREEN = "<span class=\"result-ac \">";
const END = "</span>";
const conv = {
    "맞았습니다!!": "맞았다!!",
    "틀렸습니다": `데이터${END}${BLUE}는 ${END}${GREEN}맞았습니다.${END}${BLUE} 니는 ${END}${RED}틀렸습니다.`,
    "런타임 에러": "사용자 불량",
    "시간 초과": `${END}${RED}시간은 금이다.`,
    "컴파일 에러": `컴파일러${END}${BLUE}는 ${END}${GREEN}맞았습니다.${END}${BLUE} 니는 ${END}${RED}틀렸습니다.`,
    "메모리 초과": `${END}${RED}다다익램`,
    "출력 초과": "꼬리가 길면 잡힌다."
};

for(let i in arr){
    let now = arr[i].innerHTML;
    let str = arr[i].innerText;
    if(conv[str] == undefined) continue;
    now = now.replace(str, conv[str]);
    arr[i].innerHTML = now;
}