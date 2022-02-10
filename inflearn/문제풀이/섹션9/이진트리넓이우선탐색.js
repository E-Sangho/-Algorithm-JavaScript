function BFS(n) {
    let queue = [];
    queue.push(1);
    while (queue.length) {
        let s = queue.shift();
        console.log(s);
        for (let nv of [2 * s, 2 * s + 1]) {
            if (nv <= 7) queue.push(nv);
        }
    }
}

BFS(7);
