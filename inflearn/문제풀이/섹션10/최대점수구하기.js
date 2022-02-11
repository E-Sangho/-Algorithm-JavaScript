function answer(arr, M) {
    let N = arr.length;
    let dp = Array.from({ length: M + 1 }, () => 0);

    for (let [score, time] of arr) {
        for (let i = M; i >= time; i--) {
            dp[i] = Math.max(dp[i - time] + score, dp[i]);
        }
        console.log(dp);
    }
    console.log(dp[M]);
}
let arr = [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
];
answer(arr, 20);
