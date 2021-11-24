function solution(input) {
    let answer = "";
    let middle = Math.floor(input.length/2);
    if(input.length % 2 === 0) {
        answer = input.substring(middle-1, middle+1);
    } else {
        answer += input.substring(middle, middle+1);
    }
    return answer;
}
console.log(solution("study"));