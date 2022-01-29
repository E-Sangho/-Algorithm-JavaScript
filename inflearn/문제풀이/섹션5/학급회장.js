function answer(str) {
    let hashTable = new Map();
    let select = "",
        maxVal = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < str.length; ++i) {
        if (hashTable.has(str[i])) {
            hashTable.set(str[i], hashTable.get(str[i]) + 1);
        } else {
            hashTable.set(str[i], 1);
        }
    }

    for (let [key, value] of hashTable) {
        if (value > maxVal) {
            select = key;
            maxVal = value;
        }
    }
    return select;
}
let str = "BACBACCACCBDEDE";
console.log(answer(str));
