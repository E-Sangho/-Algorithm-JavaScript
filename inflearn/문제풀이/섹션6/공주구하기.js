function answer(N, K) {
    let queue = Array.from({ length: N }, (v, i) => i + 1);
    let cnt = 0;
    while (queue.length > 1) {
        ++cnt;
        if (cnt === K) {
            queue.shift();
            cnt = 0;
        } else {
            queue.push(queue[0]);
            queue.shift();
        }
    }
    return queue[0];
}

console.log(answer(8, 3));
