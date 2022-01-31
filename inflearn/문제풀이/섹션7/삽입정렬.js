function answer(arr) {
    let ans = [arr[0]];
    let len = arr.length;
    for (let i = 1; i < len; ++i) {
        for (let j = 0; j < i; ++j) {
            if (ans[j] >= arr[i]) {
                ans.splice(j, 0, arr[i]);
                break;
            }
        }
    }
    return ans;
}

let arr = [11, 7, 5, 6, 10, 9, 11];
console.log(answer(arr));
