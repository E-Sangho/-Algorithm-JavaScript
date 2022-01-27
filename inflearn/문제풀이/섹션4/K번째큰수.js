function answer(arr) {
    let N = arr.length;
    let K = 3;
    let record = [];
    for (let i = 0; i < N - 2; ++i) {
        for (let j = i + 1; j < N - 1; ++j) {
            for (let k = j + 1; k < N; ++k) {
                let sum = arr[i] + arr[j] + arr[k];
                record.push(sum);
            }
        }
    }
    record.sort(function compare(a, b) {
        return b - a;
    });
    return record[K - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(answer(arr));
