function answer(str) {
    let p_str = str.toUpperCase().replace(/[^A-Z]/g, "");
    const r_str = p_str.split("").reverse().join("").toUpperCase();
    console.log(r_str);
    console.log(p_str);
    if (p_str === r_str) {
        return true;
    }
    p_str.toLower;
    return false;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(answer(str));
