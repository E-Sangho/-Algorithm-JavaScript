function DFSUtil(arr, depth, N, subset) {
    if (depth > N) {
        if (
            subset.reduce((a, b) => a + b, 0) ===
            arr.reduce((a, b) => a + b) / 2
        ) {
            return true;
        }
        return false;
    }
    subset.push(arr[depth]);
    let checkLeft = DFSUtil(arr, depth + 1, N, subset);
    subset.pop();
    let checkRight = DFSUtil(arr, depth + 1, N, subset);
    if (checkLeft || checkRight) return true;
    return false;
}

function DFS(arr) {
    let N = arr.length;
    let result = DFSUtil(arr, 0, N, []);
    if (result) console.log("YES");
    else console.log("NO");
}
let arr = [1, 3, 5, 6, 7, 10];
DFS(arr);
