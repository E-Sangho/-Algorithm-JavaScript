function answer(arr) {
    let order = Array.from({ length: 5 }, () => 1);
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j <= arr.length; ++j) {
            if (arr[j] > arr[i]) {
                ++order[i];
            }
        }
    }
    return order;
}

let arr = [87, 89, 92, 100, 76];
console.log(answer(arr));
