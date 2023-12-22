class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(name) {
        if (!this.adjacencyList[name]) {
            this.adjacencyList[name] = [];
            return true;
        }
        else return false;
    }
    addEdge(vertexOne, vertexTwo) {
        if (this.adjacencyList[vertexOne] && this.adjacencyList[vertexTwo]) {
            this.adjacencyList[vertexOne].push(vertexTwo);
            this.adjacencyList[vertexTwo].push(vertexOne);
            return true;
        }
        else return false;
    }
    removeVertex(name){
        if(!this.adjacencyList[name]) return false;
        this.adjacencyList[name].forEach(edge=>{
            this.removeEdge(name, edge)
        });
        delete this.adjacencyList[name];
    }
    removeEdge(vertexOne, vertexTwo) {
        if (this.adjacencyList[vertexOne] && this.adjacencyList[vertexTwo]) {
            this.adjacencyList[vertexOne] = removeFromArray(this.adjacencyList[vertexOne], vertexTwo);
            this.adjacencyList[vertexTwo] = removeFromArray(this.adjacencyList[vertexTwo], vertexOne);
            return true;
            function removeFromArray(array, target) {
                return array.filter(vertex => {
                    if (vertex != target) return vertex;
                })
            }
        }
        else return false;
    }
}