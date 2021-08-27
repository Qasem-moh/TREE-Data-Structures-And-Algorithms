class Stack {
    constructor() {
        this.items = [];
        this.count = 0
    }

    push(element) {
        this.items[this.count] = element
        console.log(`${element} add to ${this.count}`);
        this.count += 1
        return this.count - 1
    }

    pop() {
        if (this.count == 0) return undefined

        let deleteItem = this.items[this.count - 1]

        this.count -= 1
        console.log(`${deleteItem} removed`);
        return deleteItem
    }
    peek() {
        console.log(`top element is ${this.items[this.count - 1]}`);
        return this.items[this.count - 1]
    }

    // check stack is empty

    isEmpty() {
        console.log(this.count == 0 ? 'stack is empty' : 'stack is not empty');
        return this.count == 0
    }
    // checl size
    size() {
        console.log(` size is ${this.count}`);
        this.count
    }

    print(){
        let str='';
        for (let i = 0; i < this.count; i++) {
            str+=this.items[i]+' '
        }
        return str
    }

    clear(){
        this.items=[]
        this.count=0
        console.log('stack clear');
        return this.items
    }

}

const stack = new Stack()

stack.isEmpty()
stack.push(100)
stack.push(200)
stack.push(300)
console.log(stack.print());
stack.size()
stack.peek()
stack.pop()
stack.isEmpty()
stack.size()
console.log(stack.print());

stack.clear()