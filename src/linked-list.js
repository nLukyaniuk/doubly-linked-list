const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        var node = new Node(data);
        if (this.length == 0) {
            this._head = node;
        }
        else {
            this._tail.next = node;
            node.prev = this._tail;
        }
        this._tail = node;
        this.length++;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var i = 0,
            current = this._head;
        while (current != null && i != index) {
            current = current.next;
            i++;
        }
        if (current == null) {
            return;
        }
        return current.data;
    }

    insertAt(index, data) {
        var node = new Node(data),
            current = this._head,
            i = 0;
        while (current != null && i!= index) {
            i++;
            current = current.next;
        }
        if (current == null) {
            return;
        }
        var temp = current.prev;
        current.prev = node;
        temp.next = node;
        node.next = current;
        node.prev = temp;
    }

    isEmpty() {
        if (this.length == 0) 
        return true;
        return false;
    }

    clear() {
        this._head.data = null;
        this._tail.data = null;
        this.length = 0;
    }

    deleteAt(index) {
        var current = this._head,
            previous = null,
            i = 0;
            while (current != null && i != index) {
                i++;
                previous = current;
                current = current.next;
            }
            if (previous != null) {
                if (current.next == null) {
                    this._tail = previous;
                }
                else {
                    current.next.prev = previous;
                    current.prev.next = current.next;
                }
                this.length--;
            }
            else {
                if (this.length != 0) {
                    this._head = this._head.next;
                    this.length--;
                    if (this.length == 0) {
                        this._tail = null;
                    }
                    else {
                        this._head.prev = null;
                    }
                }
            }
    }

    reverse() {
        var current = this._head,
            tmp;
        while(current) {
            if (!current.prev) {
                this._tail = current;
            }
            tmp = current.next;
            current.next = current.prev;
            current.prev = tmp;
            if (!tmp) {
                this._head = current;
            }
            current = tmp;
        }
    }

    indexOf(data) {
        var current = this._head,
            i = 0;
        while (current != null) {
            if (current.data === data) {
                return i;
            }
            i++;
            current = current.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
