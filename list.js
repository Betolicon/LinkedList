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

    previous(len){
        let cont = 0
        let current = this.head
        while(cont < len){
            current = current.next
            cont += 1
        }
        return current
    }

    after(len){
        let current = this.head
        while(len < this.size()){
            current = current.next
            len += 1
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
            const len = this.size()
            this.tail = this.previous(len-2)            
            this.tail.next = null          
        }
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

    insertAt(value, index){
        let len = this.size()
        if(index < 0 || index > len)
            return 'Invalid index'
        else if (index === 0)
            this.prepend(value)
        else if (index === len)
            this.append(value)
        else{
            const result = this.previous(index-1)
            const aux = this.after(len-index)
            let newNode = new Node(value);
            result.next  = newNode
            newNode.next = aux
            return
        }
    }

    removeAt(index){
        let len = this.size()
        if(index < 0 || index > len)
            return 'Invalid index'
        else if (index === 0){
            this.head = this.head.next
            return
        }
        else if (index === len)
            return this.pop()
        else{
            const result = this.previous(index-1)
            const aux = this.after(len-index-1)
            result.next = aux
            return  
        }
    }
}

module.exports = { LinkedList };