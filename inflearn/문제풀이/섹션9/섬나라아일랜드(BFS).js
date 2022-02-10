function BFS(arr) {
    let queue = [];
    let N = arr.length;
    let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
    let dy = [0, 1, 1, 1, 0, -1, -1, -1];
    let cnt = 0;
    function BFSUtil(x, y) {
        if (arr[x][y] === 0) return;
        queue.push([x, y]);
        arr[x][y] = 0;
        ++cnt;
        while (queue.length) {
            [x, y] = queue.shift();
            for (let i = 0; i < 8; ++i) {
                let nx = x + dx[i],
                    ny = y + dy[i];
                if (
                    0 <= nx &&
                    nx < N &&
                    0 <= ny &&
                    ny < N &&
                    arr[nx][ny] === 1
                ) {
                    arr[nx][ny] = 0;
                    queue.push([nx, ny]);
                }
            }
        }
    }
    for (let i = 0; i < N; ++i) {
        for (let j = 0; j < N; ++j) {
            BFSUtil(i, j);
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

BFS(arr);
