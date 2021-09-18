class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
        this.size++;
    }


    reverse() {
        let prev = null;
        let current = this.head;
        let next = current ? current.next : null

        while (current) {
            this.head = current;
            next = current.next;
            current.next = prev;
            prev = current
            current = next
        }
        return this.head
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next
        }
    }
    //print list data
    // printListData() {
    //     let current = this.head
    //     while (current) {
    //         console.log(current.data);
    //         current = current.next
    //     }
    // }
}


let ll = new LinkedList()


ll.insert(10)
ll.insert(20)
ll.insert(30)

// ll.reverse();
ll.print()