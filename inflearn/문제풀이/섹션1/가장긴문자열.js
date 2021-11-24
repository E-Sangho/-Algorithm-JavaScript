function solution(input) {
    let maxLength = Number.MIN_SAFE_INTEGER;
    let answer = "";
    for(let x of input) {
        if(x.length > maxLength) {
            maxLength = x.length;
            answer = x;
        }
    }
    return answer;
}

let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));