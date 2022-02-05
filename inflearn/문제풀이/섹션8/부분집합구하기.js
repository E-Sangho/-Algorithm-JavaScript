let ans = [];
let N = 3;
function DFSUtil(v) {
    if (v > N) return;
    ans.push(v);
    DFSUtil(++v);
    console.log(ans);
    ans.pop();
}

function DFS() {
    for (let i = 1; i <= N; ++i) {
        DFSUtil(i, N);
    }
}

DFS();
