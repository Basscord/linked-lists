import Node from './Node';
export default class LinkedList {
  constructor() {
    this.head = null;
  }
  add(val, n) {
    let node = new Node(val);
    if (n === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let temp = this.head;
      for (let i = 0; i < n; i++) {
        if (temp.next) {
          temp = temp.next;
        }
      }
      node.next = temp.next;
      temp.next = node;
    }
  }
  remove(n) {
    let node = this.head;
    if (n === 0) {
      this.head = this.head.next;
      return;
    }
    for (let i = 1; i < n; i++) {
      node = node.next;
    }
    let removeMe = node.next;
    node.next = removeMe.next;
  }
  top() {
    return this.head;
  }
  length() {
    let i = 0;
    let node = this.head;
    while (node) {
      i++;
      node = node.next;
    }
    return i;
  }
  valueAt(n) {
    let i = 0;
    let node = this.head;
    while (i++ < n) {
      node = node.next;
    }
    return node.data;
  }
  reverse() {
    // Implement me
  }
  empty() {
    if (this.head) {
      return false;
    } else {
      return true;
    }
  }
  print() {
    let node = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}

