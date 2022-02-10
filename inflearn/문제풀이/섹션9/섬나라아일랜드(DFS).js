function DFS(arr) {
    let stack = [];
    let N = arr.length;
    let dx = [1, -1, 0, 0, 1, -1, -1, 1],
        dy = [0, 0, 1, -1, 1, -1, 1, -1];
    let cnt = 0;
    function DFSUtil(x, y) {
        if (arr[x][y] === 0) return;
        stack.push([x, y]);
        arr[x][y] = 0;
        ++cnt;
        while (stack.length) {
            [x, y] = stack.pop();
            for (let i = 0; i < 8; i++) {
                let nx = x + dx[i],
                    ny = y + dy[i];
                if (
                    0 <= nx &&
                    nx < N &&
                    0 <= ny &&
                    ny < N &&
                    arr[nx][ny] !== 0
                ) {
                    arr[nx][ny] = 0;
                    stack.push([nx, ny]);
                }
            }
        }
    }
    for (let i = 0; i < N; ++i) {
        for (let j = 0; j < N; ++j) {
            DFSUtil(i, j);
        }
    }
    console.log(cnt);
}

let arr = [
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
];

DFS(arr);
