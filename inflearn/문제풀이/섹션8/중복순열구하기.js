function DFS(N, M) {
    let arr = Array.from({ length: N }, (e, i) => i + 1);
    let cnt = 0;
    let set = [];
    let ans = [];
    function DFSUtil(depth) {
        if (depth === M) {
            ++cnt;
            ans.push(set.slice());
            return;
        }
        for (let i = 0; i < N; ++i) {
            set.push(arr[i]);
            DFSUtil(depth + 1);
            set.pop();
        }
    }
    DFSUtil(0);
    ans.push(cnt);
    console.log(ans);
}

DFS(4, 3);
