const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
   constructor() {
      this.rootNode = null;
   }

   root() {
      return this.rootNode;
   }

   add(data) {
      this.rootNode = addNode(this.rootNode, data);

      function addNode(node, data) {
         if (!node) {
            return new Node(data);
         }
         if (node.data === data) {
            return node;
         }
         if (data > node.data) {
            node.right = addNode(node.right, data);
         } else {
            node.left = addNode(node.left, data);
         }
         return node;
      }
   }

   has(data) {
      return hasNode(this.rootNode, data);

      function hasNode(node, data) {
         if (!node) {
            return false;
         }
         if (node.data === data) {
            return true;
         }
         if (data > node.data) {
            return hasNode(node.right, data) 
         } else if ((data < node.data)) {
            return hasNode(node.left, data) 
         } else {
            return node;
         }
      }
   }

   find(data) {
      return findNode(this.rootNode, data);

      function findNode(node, data) {
         if (node === null) {
           return null;
         }
         if (data < node.data) {
           return findNode(node.left, data);
         } else if (data > node.data) {
           return findNode(node.right, data);
         } else {
           return node;
         }
       }
   }

   remove(data) {
      this.rootNode = removeNode(this.rootNode, data);
      function removeNode(node, data) {
         if (!node) return null;

         if (data < node.data) {
            node.left = removeNode(node.left, data);
            return node;
         } else if (node.data < data) {
            node.right = removeNode(node.right, data);
            return node;
         } else {
            if (!node.left && !node.right) {
               return null;
            }
            if (!node.left) {
               node = node.right;
               return node;
            }
            if (!node.right) {
               node = node.left;
               return node;
            }
            let minRight = node.right;
            while (minRight.left) {
               minRight = minRight.left;
            }
            node.data = minRight.data;
            node.right = removeNode(node.right, minRight.data);
            return node;
         }
      }
   }

   min() {
      if (!this.root) {
         return null;
      }

      let node = this.rootNode;
      while (node.left) {
         node = node.left;
      }
      return node.data;
   }

   max() {
      if (!this.root) {
         return null;
      }

      let node = this.rootNode;
      while (node.right) {
         node = node.right;
      }
      return node.data;
   }
}

module.exports = {
   BinarySearchTree
};