function answer(S, T) {
    let ansTable = new Map();
    let cnt = 0;
    for (let x of T) {
        if (ansTable.has(x)) {
            ansTable.set(x, ansTable.get(x) + 1);
        } else {
            ansTable.set(x, 1);
        }
    }
    let sTable = new Map();
    let lf = 0;
    for (let i = 0; i < T.length; ++i) {
        if (sTable.has(S[i])) {
            sTable.set(S[i], sTable.get(S[i]) + 1);
        } else {
            sTable.set(S[i], 1);
        }
    }
    let flag = false;
    for (let [key, value] of ansTable) {
        if (sTable.has(key) && sTable.get(key) === value) {
            flag = true;
        }
    }
    if (flag) ++cnt;
    for (let i = T.length; i < S.length; ++i) {
        sTable.set(S[lf], sTable.get(S[lf]) - 1);
        if (sTable.get(S[lf]) === 0) sTable.delete(S[lf]);
        ++lf;
        if (sTable.has(S[i])) {
            sTable.set(S[i], sTable.get(S[i]) + 1);
        } else {
            sTable.set(S[i], 1);
        }
        flag = true;
        for (let [key, value] of ansTable) {
            if (!sTable.has(key) || sTable.get(key) !== value) {
                flag = false;
                break;
            }
        }
        if (flag) ++cnt;
    }
    return cnt;
}
let a = "bacaAacba";
let b = "abc";
console.log(answer(a, b));
