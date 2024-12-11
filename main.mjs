import pkg from './list.js';
const { LinkedList } = pkg;

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.prepend("snake");
list.append("turtle");
list.append("fish");
list.append("bird");
list.append("lion");
list.append("mouse");

console.log(list.toString())
console.log(list.size())
console.log(list.getHead())
console.log(list.getTail())
let value = 8
console.log(`Value at index ${value} -> ${list.at(value)}`)
let name = "elephant"
console.log(`Is ${name} in the list? ${list.contains(name)}`)
console.log(`The index of the element ${name} is: ${list.find(name)}`)
console.log(list.previous())
list.pop()
console.log(list.toString())
list.insertAt('lizard', 0)
list.insertAt('tiger', 10)
console.log(list.toString())
list.insertAt('dolphin', 6)
console.log(list.toString())
list.removeAt(12)
console.log(list.toString())
list.removeAt(6)
console.log(list.toString())
list.removeAt(8)
console.log(list.toString())
list.removeAt(0)
console.log(list.toString())