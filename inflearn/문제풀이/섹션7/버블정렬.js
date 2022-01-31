function answer(arr) {
    let len = arr.length;
    for (let i = len; i > 1; --i) {
        for (let j = 0; j < i; ++j) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
let arr = [13, 5, 11, 7, 23, 15];
console.log(answer(arr));
