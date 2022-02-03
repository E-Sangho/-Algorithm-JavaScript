function binarySearch(arr, start, end, target) {
    let middle = Math.floor((end + start) / 2);
    if (target === arr[middle]) {
        return middle;
    }
    if (target < arr[middle]) {
        return binarySearch(arr, start, middle - 1, target);
    } else if (target > arr[middle]) {
        return binarySearch(arr, middle + 1, end, target);
    }
}

function answer(arr, M) {
    arr.sort();
    return binarySearch(arr, 0, arr.length, M);
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(answer(arr, 32));
