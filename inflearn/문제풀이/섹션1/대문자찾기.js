function solution(input) {
    let answer = 0;
    for(let x of input) {
        let num = x.charCodeAt();
        if(65 <= num && num <= 90) {
            ++answer;
        }
    }
    return answer;
}
let str="KoreaTimeGood";
console.log(solution(str));