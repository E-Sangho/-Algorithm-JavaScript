function answer(required, schedule) {
    let checkStr = "";
    let requiredSet = new Set(required);
    for (let s of schedule) {
        if (requiredSet.has(s)) {
            checkStr += s;
        }
    }
    if (checkStr === required) return "YES";
    return "NO";
}

console.log(answer("CBA", "CABDGE"));
