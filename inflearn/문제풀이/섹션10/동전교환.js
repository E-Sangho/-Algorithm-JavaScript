function answer(arr, M) {
    let N = arr.length;
    let dp = Array.from({ length: M + 1 }, () => 0);
    for (let i = 1; i < M + 1; ++i) {
        let min = Number.MAX_SAFE_INTEGER;
        for (let x of arr) {
            if (i - x >= 0) {
                min = Math.min(min, dp[i - x] + 1);
            }
        }
        dp[i] = min;
    }
    console.log(dp[M]);
}

let arr = [1, 2, 5];
answer(arr, 15);
