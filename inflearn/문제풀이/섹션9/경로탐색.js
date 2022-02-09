function answer(N, arr) {
    let marked = Array.from({ length: N }, () => false);
    let edge = Array.from({ length: N }, () => []);
    for (let i = 0; i < arr.length; ++i) {
        edge[arr[i][0]].push(arr[i][1]);
    }
    function DFS(node, path) {
        marked[node] = true;
        path.push(node);
        if (node === 5) {
            console.log(path);
            return;
        }
        for (let adj of edge[node]) {
            if (!marked[adj]) {
                DFS(adj, path);
                path.pop();
                marked[adj] = false;
            }
        }
    }
    DFS(1, []);
}
let arr = [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
];
answer(5, arr);
