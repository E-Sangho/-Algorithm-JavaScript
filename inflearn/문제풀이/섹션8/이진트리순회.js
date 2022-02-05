function DFS(i, ans) {
    if (i > 7) return;
    ans.push(i);
    DFS(2 * i, ans);
    DFS(2 * i + 1, ans);
    return ans;
}

// console.log(DFS(1, []));

function DFS2(i, ans) {
    if (i > 7) return;
    DFS2(2 * i, ans);
    ans.push(i);
    DFS2(2 * i + 1, ans);
    return ans;
}

// console.log(DFS2(1, []));

function DFS3(i, ans) {
    if (i > 7) return;
    DFS3(2 * i, ans);
    DFS3(2 * i + 1, ans);
    ans.push(i);
    return ans;
}

console.log(DFS3(1, []));
