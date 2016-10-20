export default class Node {
  constructor(data) {
    this._data = data;
    this._next = null;
  }
  get next() {
    return this._next;
  }
  set next(node) {
    this._next = node;
  }
  get data() {
    return this._data;
  }
}

