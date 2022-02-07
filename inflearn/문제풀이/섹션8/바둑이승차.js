let arr = [81, 58, 42, 33, 61];
let C = 259;

function DFS(arr, C) {
    let N = arr.length;
    let max = Number.MIN_SAFE_INTEGER;
    function DFSUtil(depth, sum) {
        if (sum > C) {
            return;
        }
        if (depth === N) {
            if (max < sum) max = sum;
            return;
        }
        DFSUtil(depth + 1, sum + arr[depth]);
        DFSUtil(depth + 1, sum);
    }
    DFSUtil(0, 0);
    console.log(max);
}

DFS(arr, C);
