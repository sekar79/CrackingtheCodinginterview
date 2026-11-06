class Node {
  constructor(data) {
    this.val = data;
    this.next = null;
  }
} 

class LinkedList {
  constructor () {
    this.head = null;
  }

  append(data) {
    const node = new Node(data);
      if(this.head == null)
      {
          this.head = node;
          return;
      }

      let current = this.head;
      while(current.next != null){
          current = current.next;
      }
      current.next = node;
  }

  printNodes(){
    let current = this.head;
      while(current != null){
          console.log(current.val);
          current = current.next;
      }
  }

  reverse() {
    let tmp = this.head;
    let current = this.head.next;
    while(current != null) {
      const oldhead = this.head;
      this.head = current;
      tmp.next = this.head.next;
      this.head.next = oldhead;
      current = tmp.next;
    }
  }
}

const linked = new LinkedList();
linked.append(5);
linked.append(6);
linked.append(7);
linked.append(8);
linked.printNodes();
linked.reverse();
linked.printNodes();
