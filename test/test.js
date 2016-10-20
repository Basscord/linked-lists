import assert from 'assert';
import LinkedList from './../src/LinkedList';

describe('LinkedList', () => {
  describe('empty', () => {
    let list = new LinkedList();
    it('should return true when empty', () => {      
      assert.equal(true, list.empty());
    });
  });
  describe('add', () => {
    let list = new LinkedList();
    it('should add an element', () => {
      list.add('Head', 0);
      assert.equal("Head", list.valueAt(0));
    });
    it('should add a 2nd element at tail', () => {
      list.add('One', 1);
      assert.equal("One", list.valueAt(1));
    });
    it('should add an element at the head', () => {
      list.add('New Head', 0);
      assert.equal("New Head", list.valueAt(0));
    });
    it('should now have original head as 2nd element', () => {
      assert.equal("Head", list.valueAt(1));
    });
  });
  describe('remove', () => {
    let list = new LinkedList();
    list.add('Head', 0);
    list.add('One', 1)
    list.add('New Head', 0);
    list.add('Two', 3);
    it('should remove an element', () => {
      list.remove(1);
      assert.equal("One", list.valueAt(1));
    });
    it('should remove an element at the tail', () => {
      list.remove(2);
      assert.equal("One", list.valueAt(1));
    });
    it('should remove an element at the head', () => {
      list.remove(0);
      assert.equal("One", list.valueAt(0));
    });
  });
  describe('length', () => {
    let list = new LinkedList();
    it('should return 0 when empty', () => {
      assert.equal(0, list.length());
    });
    it('should return 1 when containing 1 element', () => {
      list.add('Element', 0);
      assert.equal(1, list.length());
    });
  });
  describe('reverse', () => {
    let list = new LinkedList();
    list.add(1, list.length());
    list.add(2, list.length())
    list.add(3, list.length());
    list.add(4, list.length());
    list.reverse();
    it('should have 4 as the first element', () => {
      assert.equal(4, list.valueAt(0));
    });
    it('should have 3 as the second element', () => {
      assert.equal(3, list.valueAt(1));
    });
    it('should have 2 as the third element', () => {
      assert.equal(2, list.valueAt(2));
    });
    it('should have 1 as the fourth element', () => {
      assert.equal(1, list.valueAt(3));
    });
  });
});