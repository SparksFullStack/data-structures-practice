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
    if (!this.head) return null;
    var oldVal = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null
    else this.head.prev = null;
    return oldVal;
  }
  
  const newList = new LinkedList();
  // newList.addToHead(5);
  // newList.addToTail(20);
  // newList.addToHead(4);
  // newList.addToTail(32);
  // newList.removeHead();
  
  console.log(newList);