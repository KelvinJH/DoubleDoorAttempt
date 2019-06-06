class NodeLinked {
  constructor() {
    this.head = null;
    this.n = 0; // n is the size of the list
  }

  // add function
  add(element) {
    var node = new Node(element);

    var cur;

    if (this.head == null) this.head = node;
    else {
      cur = this.head;
      while (cur.next) cur = cur.next;
      // end while

      cur.next = node;
    }
    this.n++;
  }
  // assuming the edit function is removing an element then replacing
  // that element with the second
  edit(element1,element2){
      var node = this.head;
      var prev = null;
      while(cur != null){
          if(cur.element === element1)
              cur.element = element2;
      }
      return cur.element;
  }           
  remove(element) {
    var cur = this.head;
    var prev = null;

    while (cur != null) {
      if (cur.element === element) {
        if (prev == null) this.head = cur.next;
        else prev.next = cur.next;
        this.n--;
        return cur.element;
      }
      prev = cur;
      cur = cur.next;
    }
    return -1; // returns -1 if element does not exist
  }

  getSize() {
    return this.n;
  }
  isEmpty() {
    return this.n == 0;
  }

  getIndexOf(element) {
    var count = 0;
    var cur = this.head;
    while (cur != null) {
      if (cur.element === element) return count;
      count++;
      cur = cur.next;
    }
    return -1;
  }
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

module.exports = NodeLinked;
