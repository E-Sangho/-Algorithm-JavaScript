function digitSum(val) {
    let reVal = 0;
    while (val !== 0) {
        reVal += val % 10;
        val = Math.floor(val / 10);
    }
    return reVal;
}

function answer(arr) {
    let len = arr.length;
    let maxVal = Number.MIN_SAFE_INTEGER;
    let returnVal;
    for (let i = 0; i < len; ++i) {
        let sum = digitSum(arr[i]);
        if (maxVal < sum) {
            maxVal = sum;
            returnVal = arr[i];
        }
        if (maxVal === sum && returnVal < arr[i]) {
            returnVal = arr[i];
        }
    }
    return returnVal;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(answer(arr));
