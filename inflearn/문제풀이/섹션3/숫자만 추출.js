function answer(str) {
    const letters = str.replace(/[^0-9]/g, "");

    return parseInt(letters);
}

let str = "g0en2T0s8eSoft";
console.log(answer(str));
