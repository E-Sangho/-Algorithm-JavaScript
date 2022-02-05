let flag = false;
function DFSUtil(depth, arr, ans) {
    if (depth === arr.length) return;
    ans.push(arr[depth]);
    DFSUtil(depth + 1, arr, ans);
    console.log(ans);
    if (ans.reduce((a, b) => a + b) === arr.reduce((a, b) => a + b) / 2) {
        flag = true;
    }
    ans.pop();
}
function DFS(arr) {
    let bottom = arr.length - 1;
    for (let i = 0; i <= bottom; i++) {
        DFSUtil(i, arr, []);
    }
    if (flag === true) console.log("YES");
    else console.log("NO");
}

let arr = [1, 3, 5, 6, 7, 10];
DFS(arr);
