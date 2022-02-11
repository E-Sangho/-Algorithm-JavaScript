function answer(arr) {
    let N = arr.length;
    let ans = 0;
    let dp = Array.from({ length: N + 1 }, () => 0);
    for (let i = 0; i < N; ++i) {
        let max = 1;
        for (let j = 0; j < i; ++j) {
            if (arr[i] > arr[j]) max = Math.max(dp[j] + 1, max);
        }
        dp[i] = max;
        ans = Math.max(ans, dp[i]);
    }
    console.log(ans);
}

let arr = [5, 4, 3, 2, 1];
answer(arr);
