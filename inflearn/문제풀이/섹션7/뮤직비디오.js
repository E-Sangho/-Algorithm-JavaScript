function answer(arr, M) {
    let total = 0;
    arr.forEach((element) => {
        total += element;
    });
    let avg = Math.floor(total / M);
    let len = avg - 1;
    let cnt = 0;
    do {
        ++len;
        cnt = 1;
        let sum = 0;
        for (let dvd of arr) {
            if (dvd + sum <= len) {
                sum += dvd;
            } else {
                sum = dvd;
                ++cnt;
            }
        }
    } while (cnt > M);
    return len;
}

function count(arr, mid) {
    let sum = 0,
        cnt = 1;
    for (let dvd of arr) {
        if (dvd + sum <= mid) {
            sum += dvd;
        } else {
            sum = dvd;
            ++cnt;
        }
    }
    return cnt;
}

function answer2(arr, M) {
    let lf = Math.max([...arr]);
    let rt = arr.reduce((a, b) => a + b);
    let answer;
    while (lf <= rt) {
        let mid = Math.floor((rt + lf) / 2);
        if (count(arr, mid) <= M) {
            answer = mid;
            rt = mid - 1;
        } else {
            lf = mid + 1;
        }
    }
    return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(answer(arr, 3));
