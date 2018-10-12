// * my first test of the general principles behind the algorithm
const binaryTreeSearch = (input, searchVal) => {
    const searchArea = input;
    let currentIndex = Math.floor(searchArea.length / 2);
    let currentNode = searchArea[currentIndex];
    let spliceNums = 0;

    while (currentNode){
        if (currentNode === searchVal) return true;
        else if (currentNode >= searchVal){
            spliceNums = searchArea.length - currentIndex;
            searchArea.splice(currentIndex, spliceNums);
            currentIndex = Math.floor(searchArea.length / 2);
            currentNode = searchArea[currentIndex];
        } else if (currentNode <= searchVal){
            spliceNums = searchArea.length - currentIndex;
            searchArea.splice(0, spliceNums);
            currentIndex = Math.floor(searchArea.length / 2);
            currentNode = searchArea[currentIndex]
        }
    }

    return false;
}