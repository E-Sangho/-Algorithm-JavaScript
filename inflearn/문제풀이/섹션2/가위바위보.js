function answer(a, b) {
    let log = "";
    for (let i = 0; i < a.length; ++i) {
        if (a[i] === b[i]) {
            log += "D ";
            continue;
        }
        if (a[i] === 3) {
            if (b[i] === 1) {
                log += "B ";
            } else {
                log += "A ";
            }
            continue;
        }
        if (a[i] < b[i]) {
            log += "B ";
        } else {
            log += "A ";
        }
    }
    return log;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];

console.log(answer(a, b));
