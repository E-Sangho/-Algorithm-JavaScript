function answer(arr) {
    let max = arr[0];
    let counter = 1;
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
            ++counter;
        }
    }
    return counter;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(answer(arr));
