function DFS(arr, K, M) {
    let cnt = 0;
    let N = arr.length;
    let chosen = Array.from({ length: K }, () => 0);
    function DFSUtil(depth, index) {
        if (depth === K) {
            if (chosen.reduce((a, b) => a + b) % M === 0) {
                ++cnt;
            }
            return;
        }
        for (let i = index; i < N; ++i) {
            chosen[depth] = arr[i];
            DFSUtil(depth + 1, i + 1);
        }
    }
    DFSUtil(0, 0);
    console.log(cnt);
}

let arr = [2, 4, 5, 8, 12];
DFS(arr, 3, 6);
