function Factorial(n) {
    let ans = 1;
    function DFSUtil(depth) {
        if (depth === n + 1) {
            return;
        }
        ans *= depth;
        DFSUtil(depth + 1);
    }
    DFSUtil(1);
    return ans;
}

console.log(Factorial(5));
