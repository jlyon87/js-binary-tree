const BinaryTree = require("./binary-tree");

console.log("Init Tree", JSON.stringify(BinaryTree, null, 2));

const tree = BinaryTree.createNode(1);

BinaryTree.insert(tree, 2);
BinaryTree.insert(tree, 1.4);
BinaryTree.insert(tree, 0.4);

console.log("Log Tree", JSON.stringify(tree, null, 2));

const hasZero = BinaryTree.contains(tree, 0);
const hasTwo = BinaryTree.contains(tree, 2);

console.log("hasZero", hasZero);
console.log("hasTwo", hasTwo);

BinaryTree.depthFirstLog(tree, x => {
	if(x) {
		console.log("node value", x.value);
	}
});

console.log("--- using proto ---");

const btp = require("./binary-tree-proto");
const pTree = new btp(1);

pTree.insert(2);
pTree.insert(1.4);
pTree.insert(0.4);

console.log("btp Tree", JSON.stringify(pTree, null, 2));

const hasZeroP = pTree.contains(0);
const hasTwoP = pTree.contains(2);

console.log("hasZeroP", hasZeroP);
console.log("hasTwoP", hasTwoP);

pTree.depthFirstLog(x => {
	console.log("node value", x.value);
});
