function answer(N) {
    let dp = Array.from({ length: N + 2 }, () => 0);
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= N + 1; ++i) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    console.log(dp[N + 1]);
}

answer(7);
