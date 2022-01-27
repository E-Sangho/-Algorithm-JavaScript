function answer(testNum, studentNum, arr) {
    let cnt = 0;
    for (let i = 1; i <= studentNum; ++i) {
        for (let j = 1; j <= studentNum; ++j) {
            if (i !== j) {
                let flag = true;
                for (let k = 0; k < testNum; ++k) {
                    let student1 = 0,
                        student2 = 0;
                    for (let s = 0; s < studentNum; ++s) {
                        if (arr[k][s] === i) student1 = s;
                        if (arr[k][s] === j) student2 = s;
                    }
                    if (student1 < student2) flag = false;
                }
                if (flag) {
                    ++cnt;
                }
            }
        }
    }
    return cnt;
}

let arr = [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
];
console.log(answer(arr.length, arr[0].length, arr));
