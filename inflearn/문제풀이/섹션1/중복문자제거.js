function solution(input) {
    let dp = Array.from({length: 26}, () => false);
    let answer = "";
    for(let x of input) {
        let ascii = x.charCodeAt() - 97;
        if(!dp[ascii]) {
            dp[ascii] = true;
            answer += x;
        }
    }
    return answer;
}
console.log(solution("ksekkset"));