function solution(arr) {
    let answer = arr;
    let total = answer.reduce((a, b) => a+b, 0);

    for(let x = 0; x < arr.length - 1; ++x) {
        for(let y = x + 1; y < arr.length; ++y) {
            if(total - arr[x] - arr[y] === 100) {
                answer.splice(y, 1);
                answer.splice(x, 1);
            }
        }
    }
    return answer;
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];

console.log(solution(arr));