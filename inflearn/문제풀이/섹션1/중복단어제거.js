function solution(input) {
    let answer = input.filter((element, index) => {
        return input.indexOf(element) === index;
    })
    return answer;
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));

