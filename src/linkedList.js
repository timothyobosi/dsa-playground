class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    addFirst(data){
        const newNode =  new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    print(){
        let current = this.head;
        let result = [];
        while(current){
            result.push(current.data);
            current = current.next;
        }
        return result.join(' -> ');
    }

}

module.exports = {LinkedList};