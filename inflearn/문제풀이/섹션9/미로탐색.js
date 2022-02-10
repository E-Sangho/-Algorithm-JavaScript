function DFS(maze) {
    let size = maze.length;
    let marked = Array.from(Array(size), () => Array(size).fill(false));
    let moveOrder = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];
    let cnt = 0;
    function DFSUtil(x, y) {
        if (x === size - 1 && y === size - 1) {
            ++cnt;
            return;
        }
        for (let move of moveOrder) {
            let newX = x + move[0],
                newY = y + move[1];
            if (!(0 <= newX && newX < size && 0 <= newY && newY < size)) {
                continue;
            }
            if (maze[newX][newY] === 0 && marked[newX][newY] === false) {
                marked[newX][newY] = true;
                DFSUtil(newX, newY);
                marked[newX][newY] = false;
            }
        }
    }
    marked[0][0] = true;
    DFSUtil(0, 0);
    console.log(cnt);
}

let arr = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
];

DFS(arr);
