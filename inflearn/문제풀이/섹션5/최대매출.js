function answer(arr, M) {
    let len = arr.length;
    let sum = 0,
        cnt = 0,
        lf = 0;
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < len; ++i) {
        sum += arr[i];
        ++cnt;
        if (cnt == 3) {
            max = Math.max(max, sum);
            sum -= arr[lf++];
            --cnt;
        }
    }
    return max;
}
let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(answer(a, 3));
