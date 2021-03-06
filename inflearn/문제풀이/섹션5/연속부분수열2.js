function answer(arr, M) {
    let N = arr.length;
    let sum = 0,
        cnt = 0,
        left = 0;
    for (let right = 0; right < N; ++right) {
        sum += arr[right];
        while (sum > M) {
            sum -= arr[left++];
        }
        cnt += right - left + 1;
    }
    return cnt;
}
let a = [1, 3, 1, 2, 3];
console.log(answer(a, 5));
