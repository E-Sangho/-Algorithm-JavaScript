const DFSUtil = (depth, arr) => {
    if (depth >= 3) {
        console.log(arr);
        return;
    }
    arr.push(depth + 1);
    DFSUtil(depth + 1, arr);
    arr.pop(depth + 1);
    DFSUtil(depth + 1, arr);
};

DFSUtil(0, []);
