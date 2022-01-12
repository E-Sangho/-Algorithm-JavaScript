function solution(arr) {
    let answer = [];
    answer.push(arr[0]);
    for (let x = 1; x < arr.length; ++x) {
        if (arr[x] > arr[x - 1]) {
            answer.push(arr[x]);
        }
    }
    return answer;
}
let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));
