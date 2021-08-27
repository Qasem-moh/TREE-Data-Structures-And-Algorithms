function Node(data) {
    this.data = data;
    this.childern = [];
}

class Tree {
    constructor() {
        this.root = null
    }
    add(data, toNodeData) {
        const node = new Node(data);
        const parent = toNodeData ? this.findBFS(toNodeData) : null
        if (parent)
            parent.childern.push(node)
        else
            if(!this.root)
                this.root=node
            else
                return 'tried'
    }
    findBFS(data) {
        const queue=[this.root]
        let _node=null

        this.traverseBFS((node)=>{
            
        })
    }

}