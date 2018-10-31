// the head and tail of the LL both start off as null by default
function LinkedList() {
    this.head = null;
    this.tail = null;
  }
  
  function Node(value, next, prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
  
  // * adding to the head of the LL
  LinkedList.prototype.addToHead = function(value){
    var newNode = new Node(value, this.head, null);
    // if the head exists, we need to change it's prev property
    if (this.head) this.head.prev = newNode;
    // if there are no values in the LL, the new node becomes the head and tail
    else this.tail = newNode;
    // the new node becomes the head regardless, but will only become the tail if the list is empty
    this.head = newNode;
  }
  
  LinkedList.prototype.addToTail = function(value){
    var newNode = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
  }
  
  LinkedList.prototype.removeHead = function(){
    // * my first solution: involves creating a new Node instance
    // if (!this.head) return null;
    // let newHead = new Node(this.head.next.value, this.head.next.next, null);
    // this.head = newHead;
  
    // * other solution: returns the value of the removed head
    // if (!this.head) return null;
    // var val = this.head.value;
    // this.head = this.head.next;
    // if (this.head) this.head.prev = null;
    // else this.tail = null;
    // return val;
  
    // * my second solution: takes inspiration from both of the previous ones
    if (!this.tail) return null;
    const oldVal = this.tail.value;
    const newTail = this.tail.prev;
    newTail.next = null;
    this.tail = newTail;
    if (!this.tail){
      this.head = null;
      return null;
    }
    return oldVal;
  }

  LinkedList.prototype.removeTail = function(){
    if (!this.tail) return null;
    const oldVal = this.tail.value;
    const newTail = this.tail.prev;
    this.tail = newTail;
    if (!this.tail){
      this.head = null;
      return null
    }
    return oldVal;
  }

  // * search method
  LinkedList.prototype.search = function(searchValue){
    // * my first solution
    // let currentNode = this.head;
    // while (currentNode.next){
    //   if (currentNode.value === searchValue) return true;
    //   else currentNode = currentNode.next;
    // }
    // return false;

    // * second solution
    let currentNode = this.head;
    while (currentNode){
      if (currentNode.value === searchValue) return true;
      else currentNode = currentNode.next;
    }
    return false;
  }

  // array of all the data for easy searching
  const dataArray = [];

  // * method that searches for a value and returns the index of said value
  LinkedList.prototype.findIndexOf = function(searchValue){
    // * first solution: returns the index
    // let currentNode = this.head,
    //     currentIndex = 0;

    // while (currentNode){
    //   if (currentNode.value === searchValue) return currentIndex;
    //   else {
    //     currentNode = currentNode.next;
    //     currentIndex++;
    //   }
    // }

    // return false;

    // * second solution: returns the index AND stores the values in an array for easy access
    let currentIndex = 0,
        currentNode = this.head;

    while (currentNode){
      dataArray.push(currentNode);
      if (currentNode.value === searchValue) {
        console.log(dataArray[currentIndex]);
        return currentIndex;
      }
      else {
        currentIndex++;
        currentNode = currentNode.next;
      }
    }

    return false;
  }
  
  const newList = new LinkedList();
  // newList.addToHead(5);
  // newList.addToTail(20);
  // newList.addToHead(4);
  // newList.addToTail(32);
  // newList.removeHead();
  
  console.log(newList);