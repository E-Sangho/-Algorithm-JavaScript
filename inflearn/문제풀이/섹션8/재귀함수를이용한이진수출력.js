function DFS(n) {
    if (n === 0) return "";
    let str = DFS(Math.floor(n / 2));
    str += n % 2;
    return str;
}
function answer(N) {
    return DFS(N);
}

console.log(answer(11));
