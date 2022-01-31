function answer(arr) {
    let len = arr.length;
    for (let i = 0; i < len; ++i) {
        let index = i;
        let minValue = arr[i];
        for (let j = i + 1; j < len; ++j) {
            if (minValue > arr[j]) {
                index = j;
                minValue = arr[j];
            }
        }
        let temp = arr[i];
        arr[i] = arr[index];
        arr[index] = temp;
    }
    return arr;
}
let arr = [13, 5, 11, 7, 23, 15];
console.log(answer(arr));
