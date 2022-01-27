function isPrime(p) {
    if (p === 1) return false;
    let sqrt = Math.sqrt(p);
    for (let i = 2; i <= sqrt; ++i) {
        if (p % i === 0) {
            return false;
        }
    }
    return true;
}

function answer(arr) {
    let len = arr.length;
    let ans = [];
    for (let i = 0; i < len; i++) {
        let rev = parseInt(arr[i].toString().split("").reverse().join(""));
        if (isPrime(rev)) {
            ans.push(rev);
        }
    }
    return ans;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(answer(arr));
