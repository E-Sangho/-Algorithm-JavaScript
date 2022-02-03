function check(arr, distance) {
    let cnt = 1,
        lastPoint = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] - lastPoint >= distance) {
            ++cnt;
            lastPoint = arr[i];
        }
    }
    return cnt;
}

function answer(stall, C) {
    stall.sort();
    let lf = 1;
    let rf = stall[stall.length - 1];
    let answer;
    while (lf <= rf) {
        let distance = parseInt((lf + rf) / 2);
        if (check(stall, distance) >= C) {
            answer = distance;
            console.log(lf, rf, distance);
            lf = distance + 1;
        } else {
            rf = distance - 1;
        }
    }
    return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(answer(arr, 3));
