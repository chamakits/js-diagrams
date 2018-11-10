(function () {

    const DEFAULT_IMAGE_URL = "https://cdn.glitch.com/85fd7302-cb41-40f7-9123-e4f0387a19a6%2Fcircle.svg?1541831910871";
    const EDGE_LENGTH_MAIN = 150;

    class ImageDiagramer {
        constructor() {
            this.idCount = 0;
            this.labelToNode = new Map();
            this.nodes = [];
            this.edges = [];
        }

        addRelationship(node1, node2, length) {
            let toUseNode1 = node1;
            let toUseNode2 = node2;
            if (this.labelToNode.has(toUseNode1.label)) {
                toUseNode1 = this.labelToNode.get(toUseNode1.label);
            } else {
                toUseNode1 = {
                    id: ++this.idCount,
                    label: toUseNode1.label,
                    image: toUseNode1.image || DEFAULT_IMAGE_URL,
                    shape: 'image'
                };
                this.labelToNode.set(toUseNode1.label, toUseNode1);
                this.nodes.push(toUseNode1);
            }
            if (this.labelToNode.has(toUseNode2.label)) {
                toUseNode2 = this.labelToNode.get(toUseNode2.label);
            } else {
                toUseNode2 = {
                    id: ++this.idCount,
                    label: toUseNode2.label,
                    image: toUseNode2.image || DEFAULT_IMAGE_URL,
                    shape: 'image'
                };
                this.labelToNode.set(toUseNode2.label, toUseNode2);
                this.nodes.push(toUseNode2);
            }
            this.edges.push({from: toUseNode1.id, to: toUseNode2.id, length: length})
        }

        renderOn(elementId) {
            var container = document.getElementById(elementId);
            var data = {
                nodes: this.nodes,
                edges: this.edges
            };
            var options = {};
            this.network = new vis.Network(container, data, options);
        }
    }

    window.draw = function () {
        const IMAGES = {
            NETWORK_PIPE: "https://cdn.glitch.com/85fd7302-cb41-40f7-9123-e4f0387a19a6%2FNetwork-Pipe-icon.png?1541818774600",
            MY_COMPUTER: "https://cdn.glitch.com/85fd7302-cb41-40f7-9123-e4f0387a19a6%2FHardware-My-Computer-3-icon.png?1541818774467",
            PRINTER: "https://cdn.glitch.com/85fd7302-cb41-40f7-9123-e4f0387a19a6%2FHardware-Printer-Blue-icon.png?1541818774483",
            LAPTOP: "https://cdn.glitch.com/85fd7302-cb41-40f7-9123-e4f0387a19a6%2FHardware-Laptop-1-icon.png?1541818774495",
            DRIVE: "https://cdn.glitch.com/85fd7302-cb41-40f7-9123-e4f0387a19a6%2FNetwork-Drive-icon.png?1541818774534",
            FIREWALL: "https://cdn.glitch.com/85fd7302-cb41-40f7-9123-e4f0387a19a6%2FSystem-Firewall-2-icon.png?1541818774515",
            PDA: "https://cdn.glitch.com/85fd7302-cb41-40f7-9123-e4f0387a19a6%2FHardware-My-PDA-02-icon.png?1541818774552",
            NODE: "https://cdn.glitch.com/85fd7302-cb41-40f7-9123-e4f0387a19a6%2Fcircle.svg?1541831910871"
        };

        function node(label, image) {
            return {label, image};
        }

        let imageDiagramer = new ImageDiagramer();
        imageDiagramer.addRelationship(node('Main', IMAGES.NETWORK_PIPE), node('Internet', IMAGES.FIREWALL));
        imageDiagramer.renderOn('mynetwork')
    }
}());