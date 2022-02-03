function answer(times) {
    let ans = Number.MIN_SAFE_INTEGER;
    let timeLine = [];
    for (let time of times) {
        timeLine.push([time[0], "s"]);
        timeLine.push([time[1], "e"]);
    }
    timeLine.sort((a, b) => {
        if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
        return a[0] - b[0];
    });
    let cnt = 0;
    for (let time of timeLine) {
        if (time[1] === "s") {
            ++cnt;
        } else --cnt;
        ans = Math.max(ans, cnt);
    }
    return ans;
}
let arr = [
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
];
console.log(answer(arr));
