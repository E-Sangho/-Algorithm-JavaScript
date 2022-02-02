function answer(times) {
    times.sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0];
        return a[1] - b[1];
    });
    let endTime = 0,
        ans = 0;
    for (let time of times) {
        if (endTime <= time[0]) {
            endTime = time[1];
            ++ans;
        }
    }
    return ans;
}

let arr = [
    [3, 3],
    [1, 3],
    [2, 3],
];
console.log(answer(arr));
