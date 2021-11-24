function solution(letter, target) {
    let answer = 0;
    for(let i = 0; i < letter.length; ++i) {
        if(letter[i] === target) {
            answer += 1;
        }
    }
    return answer;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));