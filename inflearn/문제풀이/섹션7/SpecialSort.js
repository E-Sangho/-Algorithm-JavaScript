function answer(arr) {
    let preArr = [];
    let aftArr = [];
    let len = arr.length;
    for (let i = 0; i < len; ++i) {
        if (arr[i] < 0) preArr.push(arr[i]);
        else aftArr.push(arr[i]);
    }
    return preArr.concat(aftArr);
}

let arr = [1, 2, 3, -3, -2, 5, 6, -6];
console.log(answer(arr));
