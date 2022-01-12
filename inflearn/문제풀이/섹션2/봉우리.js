function check(arr, i, j) {
    let ans = false;
    if (
        arr[i][j] > arr[i - 1][j] &&
        arr[i][j] > arr[i + 1][j] &&
        arr[i][j] > arr[i][j - 1] &&
        arr[i][j] > arr[i][j + 1]
    ) {
        ans = true;
    }
    return ans;
}

function answer(arr) {
    const n = arr.length;
    let counter = 0;
    let newArr = Array.from({ length: n + 2 }, () =>
        Array.from({ length: n + 2 }, () => 0)
    );

    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            newArr[i + 1][j + 1] = arr[i][j];
        }
    }

    for (let i = 1; i < n + 1; ++i) {
        for (let j = 1; j < n + 1; ++j) {
            if (check(newArr, i, j)) {
                ++counter;
            }
        }
    }
    return counter;
}

let arr = [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
];

console.log(answer(arr));
