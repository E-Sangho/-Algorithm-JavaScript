function DFS(arr, money) {
    let min = Number.MAX_SAFE_INTEGER;
    let len = arr.length;
    function DFSUtil(depth, sum) {
        if (sum > money || depth >= min) return;
        if (sum === money) {
            min = Math.min(min, depth);
        }
        for (let i = 0; i < len; ++i) {
            DFSUtil(depth + 1, sum + arr[i]);
        }
    }
    DFSUtil(0, 0);
    if (min === Number.MAX_SAFE_INTEGER)
        console.log("There is no way to give change");
    else console.log(min);
}

let arr = [1, 2, 5];
DFS(arr, 15);
