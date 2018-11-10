var nodes = null;
var edges = null;
var network = null;

var DIR = '/assets/';
var EDGE_LENGTH_MAIN = 150;
var EDGE_LENGTH_SUB = 50;

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

// Called when the Visualization API is loaded.
function draw() {
    // Create a data table with nodes.
    nodes = [];

    // Create a data table with links.
    edges = [];

    nodes.push(newNode(1, 'Main', IMAGES.NETWORK_PIPE, 'image'));

    nodes.push(newNode(2, 'Office', IMAGES.NETWORK_PIPE, 'image'));
    nodes.push(newNode(3, 'Wireless', IMAGES.NETWORK_PIPE, 'image'));
    edges.push(newEdge(1, 2, EDGE_LENGTH_MAIN));
    edges.push(newEdge(1, 3, EDGE_LENGTH_MAIN));

    for (var i = 4; i <= 7; i++) {
        nodes.push(newNode(i, 'Computer', IMAGES.MY_COMPUTER, 'image'));
        edges.push(newEdge(2, i, EDGE_LENGTH_SUB));
    }

    nodes.push(newNode(101, 'Printer', IMAGES.PRINTER, 'image'));
    edges.push(newEdge(2, 101, EDGE_LENGTH_SUB));

    nodes.push(newNode(102, 'Laptop', IMAGES.LAPTOP, 'image'));
    edges.push(newEdge(3, 102, EDGE_LENGTH_SUB));

    nodes.push(newNode(103, 'network drive', IMAGES.DRIVE, 'image'));
    edges.push(newEdge(1, 103, EDGE_LENGTH_SUB));

    nodes.push(newNode(104, 'Internet', IMAGES.FIREWALL, 'image'));
    edges.push(newEdge(1, 104, EDGE_LENGTH_SUB));

    for (var i = 200; i <= 201; i++) {
        nodes.push(newNode(i, 'Smartphone', IMAGES.PDA, 'image'));
        edges.push(newEdge(3, i, EDGE_LENGTH_SUB));
    }

    // create a network
    var container = document.getElementById('mynetwork');
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {};
    network = new vis.Network(container, data, options);

    function newNode(id, label, image, shape) {
        return {
            id: id,
            label: label,
            image: image,
            shape: shape
        };
    }

    function newEdge(from, to, length) {
        return {
            from: from,
            to: to,
            length: length
        }
    }
}