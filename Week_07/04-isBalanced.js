/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    let balanced = true;
    loop(root)
    function loop(root){
        if(!balanced) return false
        if(!root) return 0
        let left = loop(root.left), right = loop(root.right)
        if(Math.abs(left-right)>1) balanced = false;
        return Math.max(left,right)+1
    }
    return balanced
};