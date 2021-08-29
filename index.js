const Queue=require('./queue')

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

q.dequeue();
q.dequeue();
q.dequeue();
