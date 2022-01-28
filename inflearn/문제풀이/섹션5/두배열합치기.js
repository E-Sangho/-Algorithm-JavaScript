function answer(a, b) {
    let N = a.length;
    let M = b.length;
    let mergedArray = a.concat(b);
    mergedArray.sort();
    return mergedArray;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(answer(a, b));
