function DFS(n) {
    if (n === 0) return;
    else {
        DFS(n - 1);
        console.log(n);
    }
}
function answer(N) {
    DFS(N);
}

answer(3);
