function answer(str) {
    let len = str.length;
    let stack = [];
    let cnt = 0;
    for (let i = 0; i < len; ++i) {
        if (str[i] === "(") {
            stack.push(i);
        } else if (str[i] === ")") {
            if (str[i - 1] === "(") {
                stack.pop();
                cnt += stack.length;
            } else if (str[i - 1] === ")") {
                stack.pop();
                cnt += 1;
            }
        }
    }
    return cnt;
}
let a = "(((()(()()))(())()))(()())";
console.log(answer(a));
