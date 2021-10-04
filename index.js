/*
// Single Linked List
class Node {
  value
  next
  constructor(value) {
    this.value = value
  }
}

class LinkedList {
  head
  #size = 0
  insert(value) {
    const node = new Node(value)
    this.#size++
    if (!this.head) {
      this.head = node
    } else {
      let head = this.head
      while (head.next) {
        head = head.next
      }
      head.next = node
    }
  }
  getSize() {
    return this.#size
  }
}
const ll = new LinkedList()
ll.insert("A node")
ll.insert("B node")
ll.insert("C node")
ll.insert("D node")
console.log(ll.getSize());
*/

/*
// Double Linked List
class Node {
  value
  next
  prev
  constructor(value) {
    this.value = value
  }
}
class LinkedList {
  head
  #size = 0
  insert(value) {
    const node = new Node(value)
    this.#size++
    if (!this.head) {
      this.head = node
    } else {
      let head = this.head
      while (head.next) {
        head = head.next
      }
      node.prev = head
      head.next = node
    }
  }
  getSize() {
    return this.#size
  }
}
const ll = new LinkedList()
ll.insert("A node")
ll.insert("B node")
ll.insert("D node")
ll.insert("E node")
console.log(ll.getSize());
*/

/*
// Linked List Circle
class Node {
  data
  next
  prev
  constructor(data) {
    this.data = data
  }
}

class LinkedList {
  head
  tail
  #size = 0
  insert(data) {
    const node = new Node(data)
    this.#size++
    if (!this.head) {
      this.head = node
      this.tail = node

      this.tail.prev = this.head
      this.tail.next = this.head

      this.head.next = this.tail
      this.head.prev = this.tail
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
      this.tail.next = this.head
      this.head.prev = this.tail
    }
  }
  getSize() {
    return this.#size
  }
}
const ll = new LinkedList()
ll.insert("A ")
ll.insert("B ")
ll.insert("C ")
ll.insert("D ")
ll.insert("E ")
ll.insert("F ")
ll.insert("G ")
console.log(ll.tail.next.next.next.next.next.next.next.next.next.data);
console.log(ll.getSize());
*/