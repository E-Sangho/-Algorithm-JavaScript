function answer(arr) {
    let maxValue = 0;
    const n = arr.length;

    for (let i = 0; i < n; ++i) {
        let sum = 0;
        for (let j = 0; j < n; ++j) {
            sum += arr[i][j];
        }
        if (sum > maxValue) {
            maxValue = sum;
        }
    }

    for (let i = 0; i < n; ++i) {
        let sum = 0;
        for (let j = 0; j < n; ++j) {
            sum += arr[j][i];
        }
        if (sum > maxValue) {
            maxValue = sum;
        }
    }

    let leftDiagonal = 0;
    for (let i = 0; i < n; ++i) {
        leftDiagonal += arr[i][i];
    }
    if (leftDiagonal > maxValue) {
        maxValue = leftDiagonal;
    }

    let rightDiagonal = 0;
    for (let i = 0; i < n; ++i) {
        rightDiagonal += arr[n - 1 - i][i];
    }
    if (rightDiagonal > maxValue) {
        maxValue = rightDiagonal;
    }
    return maxValue;
}

let arr = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
];

console.log(answer(arr));
