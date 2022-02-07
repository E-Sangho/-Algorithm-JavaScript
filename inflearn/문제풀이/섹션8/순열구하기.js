function DFS(arr, M) {
    let len = arr.length;
    let marked = Array.from({ length: len }, () => false);
    let box = Array.from({ length: M }, () => 0);
    let ans = [];
    function DFSUtil(depth, set) {
        if (depth === M) {
            ans.push(box.slice());
            return;
        }
        for (let i = 0; i < len; ++i) {
            if (!marked[i]) {
                marked[i] = true;
                box[depth] = arr[i];
                DFSUtil(depth + 1);
                marked[i] = false;
            }
        }
    }
    DFSUtil(0, "");
    ans.push(ans.length);
    console.log(ans);
}

let arr = [3, 6, 9, 12];
DFS(arr, 3);
