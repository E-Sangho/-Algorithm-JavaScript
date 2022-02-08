function DFS(N, F) {
    let arr = Array.from({ length: N }, (e, i) => i + 1);
    let selection = Array.from({ length: N }, () => 0);
    let marked = Array.from({ length: N }, () => false);
    let flag = false;
    function DFSUtil(depth) {
        if (flag) return;
        if (depth === N) {
            let tempArray = selection.slice();
            while (tempArray.length > 1) {
                let temp = [];
                for (let i = 0; i < tempArray.length - 1; ++i) {
                    temp.push(tempArray[i] + tempArray[i + 1]);
                }
                tempArray = temp.slice();
            }
            if (tempArray[0] === F) {
                flag = true;
            }
            return;
        }
        for (let i = 0; i < N; ++i) {
            if (!marked[i]) {
                if (flag) return;
                marked[i] = true;
                selection[depth] = arr[i];
                DFSUtil(depth + 1);
                marked[i] = false;
            }
        }
    }
    DFSUtil(0);
    console.log(selection);
}

DFS(4, 16);
