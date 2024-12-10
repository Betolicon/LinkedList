class Node{
    constructor(value = null){
        this.value = value;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value){
        let newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode
        }
    }

    prepend(value){
        let newNode = new Node(value);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head
            this.head = newNode
        }
    }

    size(){
        let cont = 0
        let current = this.head
        while(current !== null){
            cont += 1
            current = current.next
        }
        return cont
    }

    getHead(){
        return this.head.value
    }

    getTail(){
        return this.tail.value
    }

    at(index){
        let len, cont = 0
        let current = this.head
        len = this.size()
        if(index < 0 || index >= len)
            return 'Invalid index'
        else{
            while(cont<index){
                cont += 1
                current = current.next
            }
            return current.value
        }

    } 

    previous(){
        let cont = 0
        const len = this.size()
        let current = this.head
        while(cont < len-2){
            current = current.next
            cont += 1
        }
        return current
    }

    pop(){
        if(this.head == null)
            return null
        else if(this.head == this.tail){
            this.head = null
            this.tail = null
        }
        else{
            this.tail = this.previous()            
            this.tail.next = null          
        }
        return
    }

    contains(value){
        let len, cont = 0
        let current = this.head
        len = this.size()
        while(cont<len){
            if(current.value === value)
                return true
            cont += 1
            current = current.next
        }
        return false
    }

    find(value){
        let len, cont = 0
        let current = this.head
        len = this.size()
        while(cont<len){
            if(current.value === value)
                return cont
            cont += 1
            current = current.next
        }
        return null
    }

    toString(){
        let result = ''
        let current = this.head
        while(current !== null){
            result += `(${current.value}) -> `
            current = current.next
        }
        result += 'null'
        return result
    }
}

module.exports = { LinkedList };