class BinaryTree {
	constructor(value) {
		this.value = value;
		this.left = undefined;
		this.right = undefined;
	}

	insert(value) {
		const newNode = new BinaryTree(value);

		const recurse = node => {
			if(node.value > value && !node.left) {
				node.left = newNode;

			} else if(node.value > value) {
				recurse(node.left);

			} else if(node.value < value && !node.right) {

				node.right = newNode;
			} else if(node.value < value) {

				recurse(node.right);
			}
		};

		recurse(this);
	}

	contains(value) {
		let hasValue = false;

		const recurse = node => {
			if(node.value === value) {
				return true;

			} else if(node.left && node.value > value) {
				hasValue = recurse(node.left);

			} else if(node.right && node.value < value) {
				hasValue = recurse(node.right);
			}

			return hasValue;
		};

		recurse(this);
		return hasValue;
	}

	depthFirstLog(callback) {

		const recurse = node => {
			callback(node);
			if(node.left) {
				recurse(node.left);
			}

			if(node.right) {
				recurse(node.right);
			}
		};

		recurse(this);
	}
}

module.exports = BinaryTree;
