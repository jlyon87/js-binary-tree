/*
	https://khan4019.github.io/front-end-Interview-Questions/bst.html
	-- JS: Binary Search Tree --
	Every node value in the left is smaller than the value of the node
	and value at the right is higher than the value of the root.
*/

const createNode = value => {
	return {
		value,
		left: undefined,
		right: undefined
	}
};

const insert = (tree, value) => {
	const newNode = createNode(value);

	const recurseTree = tr => {
		if(tr.value > value && !tr.left) {
			tr.left = newNode;

		} else if(tr.value > value) {
			recurseTree(tr.left);

		} else if(tr.value < value && !tr.right) {

			tr.right = newNode;
		} else if(tr.value < value) {

			recurseTree(tr.right);
		}
	};

	recurseTree(tree);
};

const contains = (node, value) => {
	let hasValue = false;
	if(node.value === value) {
		return true;

	} else if(node.left && node.value > value) {
		hasValue = contains(node.left, value);

	} else if(node.right && node.value < value) {

		hasValue = contains(node.right, value);
	}

	return hasValue;
};

const depthFirstLog = (node, callback) => {
	callback(node);

	if(node.left) {
		depthFirstLog(node.left, callback);
	}

	if(node.right) {
		depthFirstLog(node.right, callback);
	}
};

module.exports = {
	createNode,
	insert,
	contains,
	depthFirstLog
};
