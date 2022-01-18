function answer(str) {
    let reverse = str.split("").reverse().join("");
    if (reverse.toUpperCase() === str.toUpperCase()) {
        return true;
    }
    return false;
}

let str = "gooG";
console.log(answer(str));
