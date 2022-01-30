function answer(str) {
    let stack = [];
    let answer = "";
    for (let x of str) {
        if (x === "(") {
            stack.push(1);
            continue;
        }
        if (x === ")") {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
            continue;
        }
        if (stack.length === 0) {
            answer += x;
        }
    }
    return answer;
}
let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(answer(str));
