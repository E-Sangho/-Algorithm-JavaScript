function DFS(N, R) {
    let C = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
    function Combination(n, r) {
        if (C[n][r] > 0) return C[n][r];
        if (r === 0 || n === r) return 1;
        return (C[n][r] = Combination(n - 1, r - 1) + Combination(n - 1, r));
    }
    console.log(Combination(N, R));
}
DFS(33, 19);
