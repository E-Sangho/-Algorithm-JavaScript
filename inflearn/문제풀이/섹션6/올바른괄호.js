function answer(str) {
    let stack = [];
    for (let x of str) {
        if (x === "(") {
            stack.push(1);
        } else {
            if (stack.length !== 0) {
                stack.pop();
            } else {
                return "NO";
            }
        }
    }
    if (stack.length === 0) return "YES";
    return "NO";
}
let a = "(()(()))(()";
console.log(answer(a));
