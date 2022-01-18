function answer(s, t) {
    let arr = new Array(s.length);
    let index = [];
    s.split("").forEach((e, i) => {
        if (e === t) {
            index.push(i);
        }
    });

    s.split("").forEach((e, i) => {
        let min = 1000;
        index.forEach((e) => {
            if (min > Math.abs(e - i)) {
                min = Math.abs(e - i);
            }
        });
        arr[i] = min;
    });
    return arr;
}

let str = "teachermode";
console.log(answer(str, "e"));
