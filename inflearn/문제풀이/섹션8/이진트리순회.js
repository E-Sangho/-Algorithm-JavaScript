function DFS(i, ans) {
    if (i > 7) return;
    ans.push(i);
    DFS(2 * i, ans);
    DFS(2 * i + 1, ans);
    return ans;
}

console.log(DFS(1, []));

function DFS3(i, ans) {
    if (i > 3) return;
    DFS(2 * i, ans);
    ans.push(2 * i);
    DFS(2 * i + 1, ans);
    ans.push(2 * i + 1);
    if (i === 1) ans.push(i);
    return ans;
}
