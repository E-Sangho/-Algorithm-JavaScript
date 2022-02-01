function answer(arr) {
    let orgArr = arr.slice();
    arr.sort();
    let ans1 = 0,
        ans2 = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== orgArr[i]) {
            if (ans1 === 0) {
                ans1 = i + 1;
            } else {
                ans2 = i + 1;
            }
        }
    }
    console.log(ans1, ans2);
}
let arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
answer(arr);
