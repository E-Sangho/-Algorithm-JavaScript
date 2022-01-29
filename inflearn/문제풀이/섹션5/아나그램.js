function answer(str1, str2) {
    let isAnagram = true;
    let ana1 = new Map(),
        ana2 = new Map();
    for (let x of str1) {
        if (ana1.has(x)) {
            ana1.set(x, ana1.get(x) + 1);
        } else {
            ana1.set(x, 1);
        }
    }
    for (let x of str2) {
        if (ana2.has(x)) {
            ana2.set(x, ana2.get(x) + 1);
        } else {
            ana2.set(x, 1);
        }
    }
    if (ana1.size !== ana2.size) return false;
    for (let [key, value] of ana1) {
        if (!ana2.has(key)) return false;
        if (ana2.get(key) !== value) return false;
    }
    return true;
}
let a = "abaCC";
let b = "Caaab";
console.log(answer(a, b));
