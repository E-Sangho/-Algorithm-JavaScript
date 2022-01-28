function answer(a, b) {
    let set1 = new Set(a);
    let set2 = new Set(b);
    let intersection = new Set();
    for (let x of set1) {
        if (set2.has(x)) {
            intersection.add(x);
        }
    }
    return Array.from(intersection).sort();
}
let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(answer(a, b));
