
function solution(input) {
    let result="";
    for(let i = 0; i < input.length; ++i) {
        if (input[i] === "A") {
            result += "#";
        } else {
            result += input[i];
        }
    }
    /*
     * // or we can use replace to change A to #
     * let result = input;
     * result = result.replace(/A/g, '#'); 
     */
    return result;
}


console.log(solution("BANANA"));
