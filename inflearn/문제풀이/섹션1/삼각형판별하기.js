function solution(A, B, C) {
    if(A - B > C || A + B < C || B - A > C ) {
        return false;
    }
    return true;
}

console.log(solution(13, 33, 17));