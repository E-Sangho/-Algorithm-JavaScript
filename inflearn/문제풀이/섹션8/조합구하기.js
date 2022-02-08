function DFS(N, M) {
    let ans = [];
    function DFSUtil(chosenBefore, chosenNumber, set) {
        if (chosenNumber === M) {
            ans.push(set.slice());
            return;
        }
        for (let i = chosenBefore + 1; i <= N; ++i) {
            set.push(i);
            DFSUtil(i, chosenNumber + 1, set);
            set.pop();
        }
    }
    DFSUtil(0, 0, []);
    ans.push(ans.length);
    console.log(ans);
}

DFS(4, 2);
