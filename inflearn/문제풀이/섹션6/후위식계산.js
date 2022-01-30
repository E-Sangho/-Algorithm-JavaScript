function answer(str) {
    let stack = [];
    for (let x of str) {
        if (0 <= x && x <= 9) {
            stack.push(parseInt(x));
        } else {
            let oper2 = stack.pop();
            let oper1 = stack.pop();
            if (x === "+") {
                stack.push(oper1 + oper2);
            } else if (x === "-") {
                stack.push(oper1 - oper2);
            } else if (x === "*") {
                stack.push(oper1 * oper2);
            } else if (x === "/") {
                stack.push(oper1 / oper2);
            }
        }
    }
    return stack[0];
}
let str = "352+*9-";
console.log(answer(str));
