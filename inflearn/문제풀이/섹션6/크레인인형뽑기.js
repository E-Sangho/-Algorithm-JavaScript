function answer(board, moves) {
    let bascket = [];
    let cnt = 0;
    for (let x of moves) {
        for (let i = board[0].length - 1; i >= 0; --i) {
            let doll = board[x - 1][i];
            if (doll === 0) continue;
            board[x - 1][i] = 0;
            if (bascket.length > 0 && bascket[bascket.length - 1] === doll) {
                bascket.pop();
                cnt += 2;
                break;
            }
            bascket.push(doll);
            break;
        }
    }
    return cnt;
}
let a = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(answer(a, b));
