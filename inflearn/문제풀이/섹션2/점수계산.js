function answer(arr) {
    let score = 0;
    let point = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === 0) {
            point = 0;
        } else {
            ++point;
            score += point;
        }
    }
    return score;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(answer(arr));
