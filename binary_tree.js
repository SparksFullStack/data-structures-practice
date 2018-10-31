// * constructor function
function BST(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

BST.prototype.insert = function(newValue){
    if (newValue <= this.value){
        if (!this.left) this.left = new BST(newValue);
        else this.left.insert(newValue);
    } else {
        if (!this.right) this.right = new BST(newValue);
        else this.right.insert(newValue);
    }
}

const bst = new BST(50);

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