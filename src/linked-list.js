
const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._tail = null;
        this._head = null;
    }

    append(data) {
        let node = new Node(data);
        if (this.length == 0) {
            this._head = node;
            this._tail = node;
        } else {
            node.prev = this._tail;
            this._tail.next = node;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        if (this._head==null) {
            return null;
        } else {
            return this._head.data;
        }
    }

    tail() {
        if (this._tail==null) {
            return null;
        } else {
            return this._tail.data;
        }
    }

    at(index) {
        let head1 = this._head;
        for (let i =0; i<index; i++) {
            head1=head1.next;
        }
        return head1.data;
    }

    insertAt(index, data) {
        let node = new Node(data);
        let head1 = this._head;
       
        if (this.length === 0) {
            this._head = node;
            this._tail = node;
        } else {
            for (let i = 0; i < index; i++) {
                head1 = head1.next;
            }
            node.prev = head1.prev;
            node.next = head1;
            head1.prev.next = node;
            head1.prev = node;
        }
        this.length++;
        return this;
    }

    isEmpty() {
        if (this.length === 0){
            return true;
        } else {
            return false;
        }
    }

    clear() {
        this.length = 0;
        this._tail = null;
        this._head = null;
        return this; 
    }

    deleteAt(index) {
        let head1 = this._head;
        if (this.length===1){
            this._head= null;
            this._tail= null;
        } else {
            for (let i=0; i<index; i++){
                head1=head1.next;
            }
            let prevhead1 = head1.prev;
            let nexthead1 = head1.next;
            prevhead1.next = nexthead1;
            nexthead1.prev = prevhead1;
        }
        this.lenght--;
        return this;
    }

    reverse() {
        let head1 = this._head;
        this._head = this._tail;
        this._tail = head1;
        for (let i=0; i<this.length; i++){
            let next_elem = head1.next;
            head1.next = head1.prev;
            head1.prev = next_elem;
            head1 = head1.prev;
        }
        return this;
    }

    indexOf(data) {
        let head1 = this._head;
        for (let i=0; i<this.length; i++) {
            if(head1.data===data) {
                return i;
            }
            head1=head1.next;
        }
        return -1
    }
};
module.exports = LinkedList;
