function answer(S, work) {
    let cacheMemory = [];
    for (let x of work) {
        if (cacheMemory.includes(x)) {
            let index = 0;
            for (let i = 0; i < cacheMemory.length; ++i) {
                if (cacheMemory[i] === x) {
                    index = i;
                    break;
                }
            }
            cacheMemory.splice(index, 1);
        } else if (cacheMemory.length === S) {
            cacheMemory.pop();
        }
        cacheMemory.unshift(x);
    }
    return cacheMemory;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(answer(5, arr));
