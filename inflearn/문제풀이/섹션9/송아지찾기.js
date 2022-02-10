function BFS(S, E) {
    let marked = Array.from(10001, () => false);
    let distance = Array.from(10001, () => 0);
    let queue = [S];
    marked[S] = true;
    distance[S] = 0;
    let cnt = 0;
    while (queue.length) {
        S = queue.shift();
        if (S === E) break;
        ++cnt;
        for (let x of [1, -1, 5]) {
            if (!marked[S + x]) {
                marked[S + x] = true;
                distance[S + x] = distance[S] + 1;
                queue.push(S + x);
            }
        }
    }
    console.log(distance[E]);
}

BFS(5, 14);
