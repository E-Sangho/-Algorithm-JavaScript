function answer(array, M) {
    let N = array.length;
    let cnt = 0;
    let sum = 0;
    let left = 0;
    for (let right = 0; right < N; ++right) {
        sum += array[right];
        if (sum === M) ++cnt;
        while (sum >= M) {
            sum -= array[left++];
            if (sum === M) ++cnt;
        }
    }
    return cnt;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(answer(a, 6));
