function DFS(ps, pt, M) {
    let maxDepth = ps.length;
    let maxScore = Number.MIN_SAFE_INTEGER;
    function DFSUtil(depth, score, time) {
        if (time > M) return;
        if (depth === maxDepth) {
            maxScore = Math.max(maxScore, score);
            return;
        }
        DFSUtil(depth + 1, score + ps[depth], time + pt[depth]);
        DFSUtil(depth + 1, score, time);
    }
    DFSUtil(0, 0, 0);
    console.log(maxScore);
}
let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
DFS(ps, pt, 20);
