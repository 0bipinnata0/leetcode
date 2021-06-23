/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.maxsize = k;
  this.size = 0
  this.head = null;
  this.bottom = null;
};

function Node(value) {
  this.value = value
  this.next = null;
  this.prev = null;
}

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  this.size++
  if (this.size > this.maxsize) {
    this.size--
    return false
  }
  const node = new Node(value)
  if (this.size === 1) {
    this.head = this.bottom = node
  } else {
    node.next = this.head;
    this.head = node;
    this.head.next.prev = node;
  }
  return true
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  this.size++
  if (this.size > this.maxsize) {
    this.size--
    return false
  }
  const node = new Node(value)
  if (this.size === 1) {
    this.head = this.bottom = node
  } else {
    node.prev = this.bottom
    this.bottom = node
    this.bottom.prev.next = node
  }
  return true
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  this.size--
  if (this.size < 0) {
    this.size++;
    return false
  }
  if (this.size === 0) {
    this.head = this.bottom = null
  } else {
    this.head = this.head.next
    this.head.prev = null
  }
  return true
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  this.size--
  if (this.size < 0) {
    this.size++;
    return false
  }

  if (this.size === 0) {
    this.head = this.bottom = null
  } else {
    this.bottom = this.bottom.prev
    this.bottom.next = null
  }
  return true
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.size === 0) return -1
  return this.head.value
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.size === 0) return -1
  return this.bottom.value
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.size === 0
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.size === this.maxsize
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */