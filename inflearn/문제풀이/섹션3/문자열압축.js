function answer(str) {
    str = str + " ";
    let char = "";
    let count = 0;
    let ans = "";
    for (let x of str) {
        if (char !== x) {
            if (count !== 0) {
                ans += char;
                if (count !== 1) {
                    ans += count;
                }
            }
            char = x;
            count = 0;
        }
        ++count;
    }
    return ans;
}

let str = "KKHSSSSSSSE";
console.log(answer(str));
