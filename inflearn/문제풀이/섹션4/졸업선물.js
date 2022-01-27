function answer(arr) {
    let N = arr.length;
    let M = 28;
    let answer = 0;
    arr.sort(function compare(arr1, arr2) {
        return arr1[0] + arr1[1] - arr2[0] - arr2[1];
    });
    for (let i = 0; i < N; ++i) {
        let money = M - (arr[i][0] / 2 + arr[i][1]);
        let cnt = 1;
        for (let j = 0; j < N; ++j) {
            if (j !== i && money < arr[j][0] + arr[j][1]) break;
            if (j !== i && money >= arr[j][0] + arr[j][1]) {
                money -= arr[j][0] + arr[j][1];
                ++cnt;
            }
        }
        answer = Math.max(answer, cnt);
    }
    return answer;
}

let arr = [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
];
console.log(answer(arr));
