function solution(input) {
    let answer = "";
    for(let x of input) {
        let ascii = x.charCodeAt();
        if(65 <= ascii && ascii <= 90) {
            answer += x.toLowerCase(); 
        }
        if(97 <= ascii && ascii <= 122) {
            answer += x.toUpperCase();
        }
    }
    return answer;
}

console.log(solution("StuDY"));
