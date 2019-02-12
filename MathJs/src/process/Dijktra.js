class Dijktra {
    constructor(graph) {
        this.graph = graph;
        console.log("Initial graph : ");
        console.log(graph);
        console.log("");
        this.processed = [];
        this.costs = Object.assign({finish: Infinity}, this.graph.start);
        this.parents = {finish: null};
        // Adding children to the start node
        for (let child in this.graph.start) {
            this.parents[child] = 'start';
        }
    }

    exec() {
        this._exploreGraph();
        return this._getOptimalPath();
    }

    _exploreGraph() {
        let node = this._getLowestCostNode(this.costs, this.processed);
        if(node !== null) {
            let cost = this.costs[node];
            let children = this.graph[node];
            for (let n in children) {
                let newCost = cost + children[n];
                if (!this.costs[n]) {
                    this.costs[n] = newCost;
                    this.parents[n] = node;
                }
                if (this.costs[n] > newCost) {
                    this.costs[n] = newCost;
                    this.parents[n] = node;
                }
            }
            this.processed.push(node);
            this._exploreGraph();
        }
    }

    _getOptimalPath() {
        let optimalPath = ['finish'];
        let parent = this.parents.finish;
        while (parent) {
            optimalPath.push(parent);
            parent = this.parents[parent];
        }
        optimalPath.reverse();  // reverse array to get correct order
        return {
            distance: this.costs.finish,
            path: optimalPath
        };
    }

    _getLowestCostNode(costs, processed) {
        return Object.keys(costs).reduce((lowest, node) => {
            if (lowest === null || costs[node] < costs[lowest]) {
                if (!processed.includes(node)) {
                    lowest = node;
                }
            }
            return lowest;
        }, null);
    }
}

module.exports = Dijktra;
